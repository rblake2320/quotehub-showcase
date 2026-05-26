# QuoteHub Security Architecture

## Overview

QuoteHub is the only quote platform with built-in cryptographic content provenance. This document describes the three-layer security infrastructure that protects creator identity and intellectual property across the platform.

---

## Layer 1: Creator Identity — BPC Protocol

Every creator receives a **BPC (Blind Pair Cryptography)** pair at registration. This is a scoped, quota-enforced cryptographic binding between the creator's `userId` and the platform. Raw secrets are never transmitted — only derived proofs. The `pairId` is stored on the creator's record and serves as their permanent platform identity.

The BPC pair is issued via the **Ultra Server** (`POST /provision-bpc`) and cannot be duplicated, transferred, or spoofed. If a creator's account is suspended, the pair can be revoked, invalidating all downstream proofs.

In addition to the BPC pair, each creator is assigned a **W3C Decentralized Identifier (DID)** derived from the `pairId`. This DID is publicly resolvable, meaning any third party — another platform, a legal team, a journalist — can verify a creator's identity without trusting QuoteHub's internal database.

---

## Layer 2: Content Fingerprinting — TSK Protocol

Every quote, audio clip, and image asset receives a **TSK (Time-Segmented Key)** fingerprint at the exact moment of creation. The TSK key has the following anatomy:

```
tsk_c5e3936a9ce872e4.482901.00002f.a3f9
│                   │       │       └─ 4-char checksum (O(1) rejection of invalid keys)
│                   │       └───────── HOTP counter (globally unique per key)
│                   └───────────────── TOTP segment (30-second window, proves creation time)
└───────────────────────────────────── Static client ID (links to creator's BPC pair)
```

The `clientId` (static part) is stored in the `quotes` table as `content_fingerprint`. The full key is used once for the initial hash and never stored. A SHA-256 hash of the quote text is stored alongside as `content_hash`.

This dual-layer fingerprint means:

- The **content hash** proves the quote text has not been altered since creation.
- The **content fingerprint** proves it was created by a specific verified creator at a specific point in time.

The fingerprint is invisible to end users but travels with the content through screenshots, re-uploads, and redistributions. Audio clips receive an additional inaudible AudioMark watermark. Exported quote card images receive a steganographic pixel-level watermark.

Any third party can verify a quote's origin by calling the public `quotes.verifyOwnership` API endpoint, which returns a structured proof object including the creator's DID, display name, submission timestamp, and content hash.

---

## Layer 3: Tamper-Evident Audit Ledger — SelfConnect Enterprise

Every platform action — creator registration, quote submission, edit, deletion, dispute, and verification — is recorded in the **SelfConnect Enterprise `ThreadSafeAgentLedger`**. Each entry is:

- **Ed25519-signed** by the server's private key
- **Cryptographically chained** via `prev_hash → hash` links
- **Append-only** — there is no delete operation

If anyone deletes or modifies even a single entry, every subsequent hash in the chain becomes invalid. This is the same principle used by blockchains, but implemented as a local, fast, single-server ledger that requires no distributed consensus.

The audit ledger is the basis for DMCA dispute resolution. When a creator files a dispute, the platform generates an ownership proof document combining the ledger entry, content hash, TSK fingerprint, and creator DID. This document is independently verifiable by any court or arbitration body without requiring access to QuoteHub's internal systems.

---

## KYC & Identity Verification

Creator identity verification is handled by **Stripe Identity** (standard tier) or **Persona.com** (enterprise tier). Both provide government ID verification with liveness checks. Upon passing, the creator's record is marked `verified = true` and the KYC provider's receipt ID is stored as `kyc_provider_ref`.

---

## Compliance

| Standard | Status |
|---|---|
| GDPR | Compliant — data portability, right to deletion, consent management |
| CCPA | Compliant — California consumer privacy rights |
| COPPA 2026 | Compliant — age-gating, parental consent, biometric data (voice) separate consent |
| SOC 2 Type II | Target — annual third-party audit planned before Series A |
| OWASP Top 10 | Addressed — rate limiting, input validation, JWT rotation, WAF |

---

## Reporting a Security Vulnerability

If you discover a security vulnerability in this repository or the broader QuoteHub platform, please **do not** open a public GitHub issue. Instead, email the security team directly. We will acknowledge receipt within 48 hours and provide a remediation timeline within 7 days.

All security researchers who responsibly disclose vulnerabilities will be credited in the platform's security acknowledgments.

---

## Ultra Server API Reference

The Ultra Server is the Node.js microservice that exposes the BPC/TSK infrastructure as a REST API. It runs as an independent service within the platform's ECS cluster.

| Endpoint | Method | Purpose |
|---|---|---|
| `/provision-tsk` | POST | Issue a new TSK fingerprint for a content item |
| `/provision-bpc` | POST | Issue a new BPC pair for a creator |
| `/verify` | POST | Verify a TSK `clientId` and return proof |
| `/tsk/keys` | GET | List all provisioned keys (no secrets exposed) |
| `/tsk/keys/:id` | PATCH | Revoke, expire, or update a key |
| `/bpc/pairs` | GET | List all BPC pairs |
| `/bpc/pairs/:id` | PATCH | Revoke or update a pair |
| `/health` | GET | Service health check |
