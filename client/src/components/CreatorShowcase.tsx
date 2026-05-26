/* QuoteHub Showcase — Creator Showcase Section
   Design: Side-by-side live-style previews of two real creator brands,
   demonstrating that each creator gets their own look under the QuoteHub umbrella.

   Creator 1: Justin Nunley — "Listen, Did You Know?"
     Style: Dark navy, amber/gold glow, Inter font, YouTube Shorts energy
   Creator 2: James Dumoulin — "School of Hard Knocks / Words of Wisdom"
     Style: Cream parchment, Playfair Display + Cormorant Garamond serif, editorial newspaper
*/
import { useEffect, useRef, useState } from "react";

/* ── Shared helpers ─────────────────────────────────────────────── */
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

/* ── Justin's "Did You Know?" mini-preview ──────────────────────── */
const JUSTIN_FACTS = [
  { text: "A group of flamingos is called a 'flamboyance' — and they can only eat with their heads upside down.", tag: "Nature" },
  { text: "The human brain generates about 23 watts of power — enough to run a small light bulb.", tag: "Science" },
  { text: "Honey never expires. Archaeologists found 3,000-year-old honey in Egyptian tombs that was still edible.", tag: "History" },
];

function JustinPreview() {
  const [factIdx, setFactIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const cycle = () => {
    setFading(true);
    setTimeout(() => {
      setFactIdx((i) => (i + 1) % JUSTIN_FACTS.length);
      setFading(false);
    }, 250);
  };

  const fact = JUSTIN_FACTS[factIdx];

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "oklch(0.10 0.015 260)",
        border: "1px solid oklch(0.22 0.020 260)",
        boxShadow: "0 0 0 1px oklch(0.22 0.020 260), 0 8px 40px oklch(0.72 0.18 45 / 0.12)",
        fontFamily: "Inter, ui-sans-serif, sans-serif",
        minHeight: "380px",
      }}
    >
      {/* Fake browser bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ background: "oklch(0.12 0.018 260)", borderBottom: "1px solid oklch(0.18 0.020 260)" }}
      >
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#F87171" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FCD34D" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#34D399" }} />
        <div
          className="ml-3 flex-1 text-xs px-3 py-1 rounded"
          style={{ background: "oklch(0.16 0.018 260)", color: "oklch(0.55 0.01 260)" }}
        >
          justin.quotehub.com
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
            style={{ background: "oklch(0.72 0.18 45)", color: "oklch(0.10 0.015 260)" }}
          >
            J
          </div>
          <div>
            <div
              className="text-sm font-bold"
              style={{ color: "oklch(0.96 0.005 260)", fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Listen, Did You Know?
            </div>
            <div className="text-xs" style={{ color: "oklch(0.55 0.01 260)" }}>
              @justin_danger_nunley · YouTube Shorts
            </div>
          </div>
        </div>

        {/* Fact card */}
        <div
          className="flex-1 rounded-xl p-5 mb-4 flex flex-col justify-between"
          style={{
            background: "oklch(0.14 0.018 260)",
            border: "1px solid oklch(0.22 0.020 260)",
            boxShadow: "0 4px 24px oklch(0.72 0.18 45 / 0.06)",
            opacity: fading ? 0 : 1,
            transition: "opacity 0.25s ease",
          }}
        >
          <div>
            <div
              className="text-xs font-semibold px-2 py-0.5 rounded inline-block mb-3"
              style={{
                background: "oklch(0.72 0.18 45 / 0.15)",
                color: "oklch(0.72 0.18 45)",
                border: "1px solid oklch(0.72 0.18 45 / 0.25)",
              }}
            >
              {fact.tag}
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.85 0.01 260)" }}
            >
              "{fact.text}"
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "oklch(0.72 0.18 45)" }}
            />
            <span className="text-xs" style={{ color: "oklch(0.55 0.01 260)" }}>
              From Justin's Shorts
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={cycle}
            className="flex-1 py-2 rounded-lg text-xs font-semibold transition-all"
            style={{
              background: "oklch(0.72 0.18 45)",
              color: "oklch(0.10 0.015 260)",
            }}
          >
            Get Another Fact
          </button>
          <button
            className="px-3 py-2 rounded-lg text-xs transition-all"
            style={{
              background: "oklch(0.18 0.020 260)",
              color: "oklch(0.72 0.18 45)",
              border: "1px solid oklch(0.22 0.020 260)",
            }}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Words of Wisdom / James Dumoulin mini-preview ──────────────── */
const WOW_QUOTES = [
  { text: "The secret of getting ahead is getting started. The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks.", author: "Mark Twain", topic: "Execution" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", topic: "Persistence" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", topic: "Resilience" },
];

function WowPreview() {
  const [qIdx, setQIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const cycle = () => {
    setFading(true);
    setTimeout(() => {
      setQIdx((i) => (i + 1) % WOW_QUOTES.length);
      setFading(false);
    }, 250);
  };

  const q = WOW_QUOTES[qIdx];

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "oklch(0.97 0.008 80)",
        border: "1px solid oklch(0.88 0.012 80)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        minHeight: "380px",
      }}
    >
      {/* Fake browser bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ background: "oklch(0.93 0.010 80)", borderBottom: "1px solid oklch(0.88 0.012 80)" }}
      >
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#F87171" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FCD34D" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#34D399" }} />
        <div
          className="ml-3 flex-1 text-xs px-3 py-1 rounded"
          style={{
            background: "oklch(0.97 0.008 80)",
            color: "oklch(0.55 0.012 80)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          james.quotehub.com
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Date rule */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 border-t" style={{ borderColor: "oklch(0.82 0.012 80)" }} />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "oklch(0.55 0.012 80)", fontFamily: "Inter, sans-serif", fontSize: "0.6rem" }}
          >
            {today}
          </span>
          <div className="flex-1 border-t" style={{ borderColor: "oklch(0.82 0.012 80)" }} />
        </div>

        {/* Masthead */}
        <div className="text-center mb-4">
          <p
            className="uppercase tracking-widest mb-1"
            style={{ color: "oklch(0.55 0.012 80)", fontFamily: "Inter, sans-serif", fontSize: "0.6rem" }}
          >
            The School of Hard Knocks
          </p>
          <h2
            className="font-black leading-none"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "oklch(0.18 0.012 80)", fontSize: "1.5rem" }}
          >
            Today's <span style={{ fontStyle: "italic", fontWeight: 400 }}>Wisdom</span>
          </h2>
        </div>

        {/* Gold rule */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-px w-8" style={{ background: "#d4af37" }} />
          <div className="w-1 h-1 rounded-full" style={{ background: "#d4af37" }} />
          <div className="h-px w-8" style={{ background: "#d4af37" }} />
        </div>

        {/* Quote */}
        <div
          className="flex-1 text-center"
          style={{ opacity: fading ? 0 : 1, transition: "opacity 0.25s ease" }}
        >
          {q.topic && (
            <p
              className="uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.55 0.012 80)", fontFamily: "Inter, sans-serif", fontSize: "0.6rem" }}
            >
              {q.topic}
            </p>
          )}
          <blockquote
            className="italic leading-relaxed mb-3 text-sm"
            style={{ color: "oklch(0.22 0.012 80)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1rem" }}
          >
            "{q.text.length > 100 ? q.text.slice(0, 100) + "…" : q.text}"
          </blockquote>
          <p
            className="font-bold text-xs"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "oklch(0.35 0.012 80)" }}
          >
            — {q.author}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={cycle}
            className="flex-1 py-2 rounded text-xs font-semibold transition-all"
            style={{
              background: "#d4af37",
              color: "oklch(0.18 0.012 80)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Next Quote
          </button>
          <button
            className="px-3 py-2 rounded text-xs transition-all"
            style={{
              background: "transparent",
              color: "#d4af37",
              border: "1px solid #d4af37",
              fontFamily: "Inter, sans-serif",
            }}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Third creator teaser ───────────────────────────────────────── */
function YourBrandPreview() {
  return (
    <div
      className="rounded-2xl flex flex-col items-center justify-center text-center p-8"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "2px dashed rgba(255,255,255,0.1)",
        minHeight: "380px",
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
        style={{ background: "rgba(99,102,241,0.1)", border: "1px dashed rgba(99,102,241,0.3)" }}
      >
        ✦
      </div>
      <div
        className="text-lg font-bold mb-2"
        style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
      >
        Your Brand Here
      </div>
      <p
        className="text-sm leading-relaxed mb-6 max-w-xs"
        style={{ color: "#475569", fontFamily: "Inter, sans-serif" }}
      >
        Your own colors, fonts, domain, and personality — fully branded, fully yours. Connected to the QuoteHub marketplace.
      </p>
      <div className="space-y-2 w-full max-w-xs">
        {["Custom domain", "Your color palette", "Your typography", "Your quote library"].map((f) => (
          <div
            key={f}
            className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg"
            style={{ background: "rgba(99,102,241,0.06)", color: "#64748B", fontFamily: "Inter, sans-serif" }}
          >
            <span style={{ color: "#6366F1" }}>+</span>
            {f}
          </div>
        ))}
      </div>
      <button
        className="mt-6 px-5 py-2 rounded-lg text-sm font-bold"
        style={{
          background: "rgba(99,102,241,0.15)",
          color: "#818CF8",
          border: "1px solid rgba(99,102,241,0.3)",
          fontFamily: "Syne, sans-serif",
        }}
      >
        Apply as Creator →
      </button>
    </div>
  );
}

/* ── Main section ───────────────────────────────────────────────── */
export default function CreatorShowcase() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="creator-brands" className="py-24" style={{ background: "#080C14" }}>
      <div className="container">
        <div className="section-divider mb-16" />

        {/* Header */}
        <div className="text-center mb-6">
          <div className="badge-amber inline-block mb-4">Creator Brands</div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
          >
            One Platform.{" "}
            <span className="gradient-text-amber">Every Brand.</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
            Every creator on QuoteHub gets their own fully branded experience — their own domain, their own design, their own audience. The platform connects them all. Below are two real examples already built on the QuoteHub stack.
          </p>
        </div>

        {/* Connection diagram */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {[
            { label: "justin.quotehub.com", color: "oklch(0.72 0.18 45)", bg: "rgba(245,158,11,0.1)" },
            { label: "james.quotehub.com", color: "#d4af37", bg: "rgba(212,175,55,0.1)" },
            { label: "your.quotehub.com", color: "#818CF8", bg: "rgba(99,102,241,0.1)" },
          ].map((d, i) => (
            <div key={d.label} className="flex items-center gap-3">
              <div
                className="px-3 py-1.5 rounded-full text-xs font-mono"
                style={{ background: d.bg, color: d.color, border: `1px solid ${d.color}30`, fontFamily: "JetBrains Mono, monospace" }}
              >
                {d.label}
              </div>
              {i < 2 && (
                <div className="text-xs" style={{ color: "#374151" }}>→</div>
              )}
            </div>
          ))}
          <div className="flex items-center gap-2 ml-2">
            <div className="text-xs" style={{ color: "#374151" }}>→</div>
            <div
              className="px-3 py-1.5 rounded-full text-xs font-mono font-bold"
              style={{
                background: "rgba(99,102,241,0.15)",
                color: "#818CF8",
                border: "1px solid rgba(99,102,241,0.3)",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              quotehub.com/marketplace
            </div>
          </div>
        </div>

        {/* Three creator previews */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {/* Justin */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(28px)",
              transition: "all 0.6s cubic-bezier(0.16,1,0.3,1) 0s",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "oklch(0.72 0.18 45)" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "oklch(0.72 0.18 45)", fontFamily: "Syne, sans-serif" }}
              >
                Justin Nunley
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{ background: "rgba(245,158,11,0.1)", color: "#94A3B8", fontFamily: "JetBrains Mono, monospace" }}
              >
                Dark · Tech
              </span>
            </div>
            <JustinPreview />
            <p
              className="text-xs mt-3 leading-relaxed"
              style={{ color: "#475569", fontFamily: "Inter, sans-serif" }}
            >
              Dark navy background, amber glow accents, Inter font — matching his YouTube Shorts brand identity.
            </p>
          </div>

          {/* James / Words of Wisdom */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(28px)",
              transition: "all 0.6s cubic-bezier(0.16,1,0.3,1) 0.12s",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: "#d4af37" }} />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#d4af37", fontFamily: "Syne, sans-serif" }}
              >
                James Dumoulin
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{ background: "rgba(212,175,55,0.1)", color: "#94A3B8", fontFamily: "JetBrains Mono, monospace" }}
              >
                Editorial · Serif
              </span>
            </div>
            <WowPreview />
            <p
              className="text-xs mt-3 leading-relaxed"
              style={{ color: "#475569", fontFamily: "Inter, sans-serif" }}
            >
              Cream parchment, Playfair Display + Cormorant Garamond, gold rule lines — a premium editorial newspaper feel.
            </p>
          </div>

          {/* Your brand */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(28px)",
              transition: "all 0.6s cubic-bezier(0.16,1,0.3,1) 0.24s",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: "#818CF8" }} />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#818CF8", fontFamily: "Syne, sans-serif" }}
              >
                Your Brand
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{ background: "rgba(99,102,241,0.1)", color: "#94A3B8", fontFamily: "JetBrains Mono, monospace" }}
              >
                Any Style
              </span>
            </div>
            <YourBrandPreview />
            <p
              className="text-xs mt-3 leading-relaxed"
              style={{ color: "#475569", fontFamily: "Inter, sans-serif" }}
            >
              Minimalist, bold, playful, luxury — any aesthetic. The QuoteHub platform adapts to your brand, not the other way around.
            </p>
          </div>
        </div>

        {/* How it works explainer */}
        <div
          className="glow-card p-8"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(245,158,11,0.04))",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease 0.4s",
          }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div
                className="text-2xl font-extrabold mb-2"
                style={{ fontFamily: "Syne, sans-serif", color: "#818CF8" }}
              >
                Your Domain
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
                Each creator gets a subdomain like <span style={{ color: "#818CF8", fontFamily: "JetBrains Mono, monospace", fontSize: "0.8rem" }}>yourname.quotehub.com</span> or can bring their own custom domain. Fully SSL-secured, zero setup required.
              </p>
            </div>
            <div>
              <div
                className="text-2xl font-extrabold mb-2"
                style={{ fontFamily: "Syne, sans-serif", color: "#FCD34D" }}
              >
                Your Design
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
                Choose from curated theme templates or work with our design team to build a fully custom brand. Colors, fonts, layout, and tone — all yours. No two creators look the same.
              </p>
            </div>
            <div>
              <div
                className="text-2xl font-extrabold mb-2"
                style={{ fontFamily: "Syne, sans-serif", color: "#34D399" }}
              >
                Connected Marketplace
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
                Your audience discovers you through the QuoteHub marketplace. New subscribers find you via mood-matched recommendations, not just direct search. Network effects work for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
