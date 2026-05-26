/* QuoteHub Showcase — Creator IP Protection & Trust Section
   Design: Dark Tech Brutalism
   Purpose: Show investors and creators how BPC/TSK/Ledger protects creator IP.
   Sections:
     1. Hero headline + 3-pillar overview
     2. Animated registration flow (4 steps)
     3. Live-style fingerprint demo (TSK key anatomy)
     4. Audit ledger chain visualization
     5. Sponsor & ad infrastructure callout
*/
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── TSK Key anatomy display ──────────────────────────────────────── */
function TskKeyDisplay() {
  const [active, setActive] = useState<number | null>(null);
  const parts = [
    { label: "tsk_c5e3936a9ce872e4", color: "#818CF8", desc: "Static Client ID — permanently links this fingerprint to the creator's verified identity" },
    { label: ".", color: "#475569", desc: "" },
    { label: "482901", color: "#34D399", desc: "TOTP Segment — 6-digit time-based code, valid for 30 seconds. Proves the exact moment of creation." },
    { label: ".", color: "#475569", desc: "" },
    { label: "00002f", color: "#FCD34D", desc: "HOTP Counter — increments with every key issued. Makes each fingerprint globally unique." },
    { label: ".", color: "#475569", desc: "" },
    { label: "a3f9", color: "#F472B6", desc: "4-char Checksum — validated in under 1ms. Rejects brute-force and DoS attacks before any crypto work." },
  ];

  return (
    <div>
      <div
        className="rounded-xl p-5 mb-4 font-mono text-sm flex flex-wrap gap-0 items-center"
        style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        {parts.map((p, i) => (
          <span
            key={i}
            className="cursor-pointer transition-all"
            style={{
              color: p.color,
              opacity: active === null || active === i ? 1 : 0.3,
              textShadow: active === i ? `0 0 12px ${p.color}` : "none",
              fontSize: "0.8rem",
            }}
            onMouseEnter={() => p.desc ? setActive(i) : null}
            onMouseLeave={() => setActive(null)}
          >
            {p.label}
          </span>
        ))}
      </div>
      <div
        className="rounded-lg px-4 py-3 text-xs min-h-[3rem] flex items-center transition-all"
        style={{
          background: "rgba(99,102,241,0.08)",
          border: "1px solid rgba(99,102,241,0.15)",
          color: "#94A3B8",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {active !== null && parts[active].desc
          ? <><span style={{ color: parts[active].color, marginRight: "0.5rem" }}>→</span>{parts[active].desc}</>
          : <span style={{ color: "#374151" }}>Hover over any segment to learn what it does</span>
        }
      </div>
    </div>
  );
}

/* ── Audit ledger chain ───────────────────────────────────────────── */
const LEDGER_ENTRIES = [
  { seq: 1, action: "creator.register", actor: "user:james_d", resource: "creator:james_d", decision: "allow", hash: "a3b4c5d6e7f8..." },
  { seq: 2, action: "quote.add", actor: "user:james_d", resource: "quote:q_001", decision: "allow", hash: "d6e7f8a1b2c3..." },
  { seq: 3, action: "quote.add", actor: "user:james_d", resource: "quote:q_002", decision: "allow", hash: "f8a1b2c3d4e5..." },
  { seq: 4, action: "quote.verify", actor: "public", resource: "quote:q_001", decision: "allow", hash: "b2c3d4e5f6a7..." },
];

function LedgerChain() {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref} className="space-y-2">
      {LEDGER_ENTRIES.map((entry, i) => (
        <div
          key={entry.seq}
          className="rounded-lg p-3 flex items-start gap-3"
          style={{
            background: "rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.05)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-16px)",
            transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
          }}
        >
          {/* Seq badge */}
          <div
            className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
            style={{ background: "rgba(99,102,241,0.2)", color: "#818CF8", fontFamily: "JetBrains Mono, monospace" }}
          >
            {entry.seq}
          </div>
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span
                className="text-xs font-bold"
                style={{ color: "#34D399", fontFamily: "JetBrains Mono, monospace" }}
              >
                {entry.action}
              </span>
              <span
                className="text-xs px-1.5 py-0.5 rounded"
                style={{
                  background: entry.decision === "allow" ? "rgba(52,211,153,0.1)" : "rgba(248,113,113,0.1)",
                  color: entry.decision === "allow" ? "#34D399" : "#F87171",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {entry.decision}
              </span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs" style={{ color: "#475569", fontFamily: "JetBrains Mono, monospace" }}>
                actor: <span style={{ color: "#94A3B8" }}>{entry.actor}</span>
              </span>
              <span className="text-xs" style={{ color: "#475569", fontFamily: "JetBrains Mono, monospace" }}>
                hash: <span style={{ color: "#6366F1" }}>{entry.hash}</span>
              </span>
            </div>
          </div>
          {/* Chain link indicator */}
          {i < LEDGER_ENTRIES.length - 1 && (
            <div className="absolute left-[1.35rem] mt-8" style={{ color: "#374151", fontSize: "0.6rem" }}>│</div>
          )}
        </div>
      ))}
      <div
        className="text-xs text-center py-2"
        style={{ color: "#374151", fontFamily: "Inter, sans-serif" }}
      >
        Every entry is Ed25519-signed. Altering any record breaks the entire chain. Append-only. Forever.
      </div>
    </div>
  );
}

/* ── Registration flow steps ─────────────────────────────────────── */
const REG_STEPS = [
  {
    num: "01",
    title: "KYC Verification",
    color: "#818CF8",
    desc: "Creator submits government-issued ID via Stripe Identity. A liveness check confirms the real human. No fake accounts, no impersonation.",
    icon: "🪪",
  },
  {
    num: "02",
    title: "BPC Pair Issued",
    color: "#34D399",
    desc: "A cryptographic binding is created between the creator's userId and the platform. This is their permanent, unforgeable Person ID. Cannot be duplicated or transferred.",
    icon: "🔗",
  },
  {
    num: "03",
    title: "DID Assigned",
    color: "#FCD34D",
    desc: "A W3C Decentralized Identifier is derived from the BPC pair. Publicly resolvable — any third party can verify the creator's identity without trusting QuoteHub's database.",
    icon: "🌐",
  },
  {
    num: "04",
    title: "Ledger Entry Sealed",
    color: "#F472B6",
    desc: "The registration event is permanently recorded in the tamper-evident audit ledger with an Ed25519 signature. This is the creator's genesis record — it cannot be erased.",
    icon: "🔒",
  },
];

/* ── Main section ─────────────────────────────────────────────────── */
export default function TrustSection() {
  const { ref: headerRef, inView: headerInView } = useInView(0.05);
  const { ref: pillarsRef, inView: pillarsInView } = useInView(0.05);
  const { ref: stepsRef, inView: stepsInView } = useInView(0.05);
  const { ref: sponsorRef, inView: sponsorInView } = useInView(0.05);

  return (
    <section id="trust" className="py-24" style={{ background: "#060A12" }}>
      <div className="container">
        <div className="section-divider mb-16" />

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div className="badge-indigo inline-block mb-4">Creator IP Protection</div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
          >
            Your Work.{" "}
            <span style={{ color: "#34D399" }}>Cryptographically Yours.</span>
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}
          >
            QuoteHub is the only quote platform with built-in cryptographic content provenance. Every creator gets an unforgeable identity. Every quote gets an invisible fingerprint. Every action is permanently recorded in a tamper-evident audit ledger.
          </p>
        </div>

        {/* ── Three pillars ── */}
        <div
          ref={pillarsRef}
          className="grid md:grid-cols-3 gap-4 mb-16"
        >
          {[
            {
              icon: "🪪",
              title: "Verified Person ID",
              color: "#818CF8",
              bg: "rgba(99,102,241,0.08)",
              border: "rgba(99,102,241,0.2)",
              body: "Every creator is KYC-verified at signup. A BPC cryptographic pair and W3C DID are issued — a globally unique, unforgeable identity that cannot be spoofed, duplicated, or transferred.",
              tag: "BPC Protocol",
            },
            {
              icon: "🔏",
              title: "Content Fingerprinting",
              color: "#34D399",
              bg: "rgba(52,211,153,0.08)",
              border: "rgba(52,211,153,0.2)",
              body: "Every quote, audio clip, and image gets a TSK fingerprint and SHA-256 hash at the moment of creation. The fingerprint is invisible to users but travels with the content everywhere — through screenshots, re-uploads, and re-posts.",
              tag: "TSK Protocol",
            },
            {
              icon: "📜",
              title: "Tamper-Evident Audit Chain",
              color: "#FCD34D",
              bg: "rgba(252,211,77,0.08)",
              border: "rgba(252,211,77,0.2)",
              body: "Every platform action is recorded in an Ed25519-signed, cryptographically chained ledger. Entries cannot be deleted or altered without breaking every subsequent record. This is admissible evidence in any legal dispute.",
              tag: "SelfConnect Ledger",
            },
          ].map((p, i) => (
            <div
              key={p.title}
              className="rounded-2xl p-6"
              style={{
                background: p.bg,
                border: `1px solid ${p.border}`,
                opacity: pillarsInView ? 1 : 0,
                transform: pillarsInView ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
              }}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <div
                className="text-xs font-bold uppercase tracking-widest mb-1 px-2 py-0.5 rounded inline-block"
                style={{
                  background: `${p.color}18`,
                  color: p.color,
                  fontFamily: "JetBrains Mono, monospace",
                  border: `1px solid ${p.color}30`,
                }}
              >
                {p.tag}
              </div>
              <h3
                className="text-lg font-bold mt-3 mb-2"
                style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── Two-column: Registration flow + TSK key demo ── */}
        <div
          ref={stepsRef}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Registration steps */}
          <div
            style={{
              opacity: stepsInView ? 1 : 0,
              transform: stepsInView ? "translateX(0)" : "translateX(-24px)",
              transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <h3
              className="text-xl font-bold mb-6"
              style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
            >
              Creator Registration Flow
            </h3>
            <div className="space-y-4">
              {REG_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className="flex gap-4 items-start"
                  style={{
                    opacity: stepsInView ? 1 : 0,
                    transform: stepsInView ? "translateX(0)" : "translateX(-16px)",
                    transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.1}s`,
                  }}
                >
                  {/* Step number + connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                      style={{
                        background: `${step.color}18`,
                        color: step.color,
                        border: `1px solid ${step.color}30`,
                        fontFamily: "Syne, sans-serif",
                      }}
                    >
                      {step.num}
                    </div>
                    {i < REG_STEPS.length - 1 && (
                      <div className="w-px flex-1 mt-2" style={{ background: "rgba(255,255,255,0.06)", minHeight: "1.5rem" }} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{step.icon}</span>
                      <h4
                        className="text-sm font-bold"
                        style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
                      >
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TSK key demo + ledger */}
          <div
            style={{
              opacity: stepsInView ? 1 : 0,
              transform: stepsInView ? "translateX(0)" : "translateX(24px)",
              transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s",
            }}
          >
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
            >
              Content Fingerprint Anatomy
            </h3>
            <p className="text-sm mb-4" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
              Every quote gets a TSK key stamped at creation. The key is invisible to users but encodes the creator, the timestamp, and a unique counter. Hover over each segment below:
            </p>
            <TskKeyDisplay />

            <h3
              className="text-xl font-bold mt-8 mb-4"
              style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
            >
              Live Audit Ledger
            </h3>
            <p className="text-sm mb-4" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
              A sample of what the tamper-evident chain looks like for James Dumoulin's account:
            </p>
            <LedgerChain />
          </div>
        </div>

        {/* ── Sponsor & Ad Infrastructure ── */}
        <div
          ref={sponsorRef}
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, rgba(52,211,153,0.05), rgba(99,102,241,0.05))",
            border: "1px solid rgba(255,255,255,0.06)",
            opacity: sponsorInView ? 1 : 0,
            transform: sponsorInView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="badge-green inline-block mb-4">Sponsor Infrastructure</div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
              >
                Built for Brand Money
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
                QuoteHub's verified audience metrics, brand safety controls, and self-serve sponsor marketplace make it ready for programmatic ad revenue and direct brand partnerships from day one.
              </p>
              <div className="flex flex-wrap gap-2">
                {["SOC 2 Type II Ready", "GDPR + CCPA Compliant", "COPPA 2026 Compliant", "Bot-Filtered Metrics"].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(52,211,153,0.1)",
                      color: "#34D399",
                      border: "1px solid rgba(52,211,153,0.2)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {[
                { type: "Programmatic Display", desc: "Banner ads for non-subscribers via Google Ad Manager", model: "CPM", color: "#818CF8" },
                { type: "Creator Host-Read", desc: "5–10 second audio ad at the start of a creator's daily quote", model: "Fixed Monthly", color: "#FCD34D" },
                { type: "Branded Quote Series", desc: "Sponsor funds a themed quote series (e.g., Nike's Athlete Mindset Week)", model: "Custom Campaign", color: "#34D399" },
              ].map((tier) => (
                <div
                  key={tier.type}
                  className="rounded-xl p-4 flex items-start gap-3"
                  style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: tier.color }}
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="text-sm font-bold"
                        style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
                      >
                        {tier.type}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          background: `${tier.color}15`,
                          color: tier.color,
                          fontFamily: "JetBrains Mono, monospace",
                        }}
                      >
                        {tier.model}
                      </span>
                    </div>
                    <p className="text-xs" style={{ color: "#475569", fontFamily: "Inter, sans-serif" }}>
                      {tier.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
