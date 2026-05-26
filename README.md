# QuoteHub — The Creator Quote Marketplace

> **The platform where creators monetize their wisdom and consumers receive mood-aware, AI-powered, audio-first daily inspiration.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-quotehub--showcase.manus.space-6366F1?style=flat-square&logo=vercel)](https://quotehub-showcase.manus.space)
[![License](https://img.shields.io/badge/License-MIT-34D399?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

## What Is QuoteHub?

QuoteHub is a **two-sided creator-consumer marketplace** — think Insight Timer meets Patreon, built specifically for short-form wisdom, quotes, and affirmations. Every creator on the platform gets their own fully branded experience: their own domain, their own design, their own audience. The platform handles the infrastructure — AI ingestion, TTS audio, push notifications, billing, and discovery — so creators focus entirely on their content.

This repository contains the **platform showcase website** — an investor- and creator-facing site that communicates the product vision, competitive positioning, technical architecture, creator monetization model, and the platform's cryptographic IP protection layer.

---

## Live Creator Examples

Two real creator sites already running on the QuoteHub stack:

| Creator | Site | Style |
|---|---|---|
| **Justin Nunley** — "Listen, Did You Know?" | `justin.quotehub.com` | Dark navy · Amber glow · YouTube Shorts energy |
| **James Dumoulin** — "School of Hard Knocks / Words of Wisdom" | `james.quotehub.com` | Cream parchment · Playfair Display serif · Editorial newspaper |

Each creator gets their own colors, fonts, domain, and tone — fully branded, fully theirs — while being discoverable through the QuoteHub marketplace.

---

## Showcase Website Sections

| Section | What It Covers |
|---|---|
| **Hero** | Animated stats (20K+ creators, 5M+ quotes, $600K/mo top creator), phone mockup with rotating quote cards |
| **Creator Brands** | Live-style interactive previews of Justin's and James's branded experiences |
| **Product Features** | Mood-Aware AI, Audio Delivery, 5 Platform Surfaces, Family Safety, Notification Engine |
| **Competitive Analysis** | Full comparison table vs. Motivation, Insight Timer, Calm, ThinkUp, Daily Stoic |
| **Tech Stack** | Animated AI ingestion pipeline terminal, 12-service microservices grid, 5-layer stack |
| **Resilience** | RPO/RTO metrics, circuit breakers, multi-AZ DR, WAL archiving |
| **Creator IP Protection** | BPC/TSK cryptographic identity, content fingerprinting, tamper-evident audit ledger, sponsor infrastructure |
| **Creator Monetization** | 4-step onboarding flow, interactive earnings calculator, 3 hosting packages |
| **Pricing** | 4 consumer tiers (Free → Family), investor metrics grid with TAM/SAM/LTV |

---

## Tech Stack

```
Frontend:   React 19 + TypeScript + Vite 7
Styling:    Tailwind CSS v4 + shadcn/ui + Framer Motion
Fonts:      Syne (display) · Inter (body) · JetBrains Mono (code)
Icons:      Lucide React
Routing:    Wouter
Charts:     Recharts
Hosting:    Manus Platform (static deployment)
```

---

## Platform Architecture (Full Stack)

The full QuoteHub platform — beyond this showcase site — is documented in [`QuoteHub_Enhanced_Architecture.md`](docs/QuoteHub_Enhanced_Architecture.md). Key components include:

- **Consumer Mobile App** — Flutter (iOS + Android + PWA)
- **Creator Dashboard** — Next.js 15 + tRPC + Prisma
- **Backend Microservices** — 14 Node.js services on AWS ECS Fargate
- **AI Pipeline** — GPT-4.1 Nano (extraction) + text-embedding-3-small (vectors) + ElevenLabs (TTS)
- **Database** — PostgreSQL 17 with pgvector, pg_trgm
- **Identity & IP Protection** — BPC Protocol + TSK Protocol + SelfConnect Enterprise Audit Ledger
- **Billing** — RevenueCat (mobile) + Stripe Connect (web + creator payouts)

---

## Creator IP Protection

QuoteHub is the **only quote platform with built-in cryptographic content provenance**. Every creator gets:

1. **Verified Person ID** — KYC verification (Stripe Identity) + BPC cryptographic pair + W3C DID. Unforgeable, non-transferable.
2. **Content Fingerprinting** — Every quote gets a TSK fingerprint (static client ID + TOTP time segment + HOTP counter + checksum) and SHA-256 hash at creation. The fingerprint travels with the content through screenshots, re-uploads, and re-posts.
3. **Tamper-Evident Audit Chain** — Ed25519-signed, cryptographically chained ledger. Entries cannot be deleted or altered without breaking every subsequent record. Admissible evidence in legal disputes.

See [`docs/SECURITY.md`](docs/SECURITY.md) for the full security architecture.

---

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm 10+

### Installation

```bash
git clone https://github.com/rblake2320/quotehub-showcase.git
cd quotehub-showcase
pnpm install
```

### Development

```bash
pnpm dev
```

The dev server starts at `http://localhost:3000`.

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

---

## Project Structure

```
quotehub-showcase/
├── client/
│   ├── public/              # Static config files only (favicon, robots.txt)
│   └── src/
│       ├── components/      # All section and UI components
│       │   ├── Navbar.tsx
│       │   ├── HeroSection.tsx
│       │   ├── CreatorShowcase.tsx   # Live creator brand previews
│       │   ├── ProductSection.tsx
│       │   ├── CompetitionSection.tsx
│       │   ├── TechSection.tsx
│       │   ├── ResilienceSection.tsx
│       │   ├── TrustSection.tsx      # Creator IP Protection
│       │   ├── CreatorSection.tsx
│       │   ├── PricingSection.tsx
│       │   └── Footer.tsx
│       ├── pages/
│       │   └── Home.tsx
│       ├── contexts/
│       │   └── ThemeContext.tsx
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css        # Design tokens (Dark Tech Brutalism)
├── docs/
│   ├── QuoteHub_Enhanced_Architecture.md
│   └── SECURITY.md
├── server/                  # Placeholder (static-only project)
├── shared/                  # Shared constants
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── PULL_REQUEST_TEMPLATE.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
└── LICENSE
```

---

## Design System

The showcase uses a **Dark Tech Brutalism** design language:

| Token | Value | Usage |
|---|---|---|
| Background | `#080C14` | Page background |
| Indigo | `#6366F1` | Primary CTA, tech elements |
| Amber | `#F59E0B` | Creator/energy accents |
| Green | `#34D399` | Success, verified states |
| Pink | `#F472B6` | Security/crypto accents |
| Display Font | Syne | Headlines, badges |
| Body Font | Inter | Paragraphs, labels |
| Code Font | JetBrains Mono | Terminal, keys, hashes |

---

## Related Repositories

| Repository | Description |
|---|---|
| [`tsk-protocol`](https://github.com/rblake2320/tsk-protocol) | Time-Segmented Key issuance and validation |
| [`bpc-protocol`](https://github.com/rblake2320/bpc-protocol) | Blind Pair Cryptography for creator identity |
| [`selfconnect-enterprise`](https://github.com/rblake2320/selfconnect-enterprise) | Tamper-evident Ed25519 audit ledger |
| [`words-of-wisdom`](https://github.com/rblake2320/words-of-wisdom) | James Dumoulin's creator site (live example) |

---

## Contributing

Contributions are welcome. Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) before opening a pull request.

---

## License

This project is licensed under the MIT License — see [`LICENSE`](LICENSE) for details.

---

## Contact

**QuoteHub Platform** · Built by the QuoteHub team  
For investor inquiries or creator partnerships, visit the [live showcase](https://quotehub-showcase.manus.space) and use the contact form.
