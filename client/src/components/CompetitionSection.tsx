/* QuoteHub Showcase — Competitive Analysis Section
   Design: Dark table with glowing rows + differentiator cards */
import { useEffect, useRef, useState } from "react";

const competitors = [
  {
    name: "Motivation (Monkey Taps)",
    type: "Direct",
    revenue: "$600K/mo",
    creators: "None",
    audio: false,
    mood: false,
    marketplace: false,
    family: false,
    color: "#F87171",
  },
  {
    name: "Insight Timer",
    type: "Indirect",
    revenue: "$25M/yr",
    creators: "20,000+",
    audio: true,
    mood: false,
    marketplace: true,
    family: false,
    color: "#FCD34D",
  },
  {
    name: "Calm",
    type: "Indirect",
    revenue: "$596M/yr",
    creators: "None",
    audio: true,
    mood: false,
    marketplace: false,
    family: false,
    color: "#60A5FA",
  },
  {
    name: "ThinkUp",
    type: "Direct",
    revenue: "~$5M/yr",
    creators: "None",
    audio: true,
    mood: false,
    marketplace: false,
    family: false,
    color: "#A78BFA",
  },
  {
    name: "Daily Stoic",
    type: "Direct",
    revenue: "~$2M/yr",
    creators: "1 (Ryan Holiday)",
    audio: true,
    mood: false,
    marketplace: false,
    family: false,
    color: "#94A3B8",
  },
  {
    name: "QuoteHub",
    type: "Platform",
    revenue: "TAM: $4.2B",
    creators: "Open Marketplace",
    audio: true,
    mood: true,
    marketplace: true,
    family: true,
    color: "#818CF8",
    isUs: true,
  },
];

const differentiators = [
  {
    title: "Micro-Moment Focus",
    desc: "While Calm requires 10–20 minute sessions, QuoteHub targets the 3–10 second daily interaction — the alarm dismiss, the coffee scroll, the pre-sleep wind-down.",
    icon: "⚡",
    color: "#818CF8",
  },
  {
    title: "Open Creator Marketplace",
    desc: "Unlike Motivation (no creators) or Daily Stoic (1 creator), QuoteHub is a two-sided marketplace. Any creator can monetize their wisdom library.",
    icon: "🏪",
    color: "#FCD34D",
  },
  {
    title: "Mood-Aware Personalization",
    desc: "No competitor uses real-time mood classification for content delivery. QuoteHub's pgvector + GPT-4o Mini engine is a genuine technical moat.",
    icon: "🧠",
    color: "#34D399",
  },
  {
    title: "COPPA-First Family Plans",
    desc: "Zero competitors offer family plans with COPPA 2026 compliance and child safety monitoring. This unlocks the $1.2B family wellness market segment.",
    icon: "👨‍👩‍👧",
    color: "#F87171",
  },
];

function Check({ ok, color }: { ok: boolean; color: string }) {
  return ok ? (
    <span style={{ color: "#34D399" }} className="text-lg">✓</span>
  ) : (
    <span style={{ color: "#374151" }} className="text-lg">—</span>
  );
}

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

export default function CompetitionSection() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="competition" className="py-24" style={{ background: "#0A0E1A" }}>
      <div className="container">
        <div className="section-divider mb-16" />

        <div className="text-center mb-14">
          <div className="badge-amber inline-block mb-4">Competitive Landscape</div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
          >
            Where <span className="gradient-text-amber">QuoteHub</span> Wins
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
            The $4.2B daily inspiration market is fragmented. No single player combines creator monetization, mood-aware AI, audio delivery, and family safety. QuoteHub does.
          </p>
        </div>

        {/* Comparison table */}
        <div ref={ref} className="overflow-x-auto mb-16">
          <table
            className="w-full text-sm"
            style={{
              borderCollapse: "separate",
              borderSpacing: 0,
              opacity: inView ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <th className="text-left py-3 pr-6 font-semibold" style={{ color: "#94A3B8", fontFamily: "Syne, sans-serif", minWidth: "180px" }}>Platform</th>
                <th className="text-center py-3 px-4 font-semibold" style={{ color: "#94A3B8", fontFamily: "Syne, sans-serif" }}>Revenue</th>
                <th className="text-center py-3 px-4 font-semibold" style={{ color: "#94A3B8", fontFamily: "Syne, sans-serif" }}>Creators</th>
                <th className="text-center py-3 px-4 font-semibold" style={{ color: "#94A3B8", fontFamily: "Syne, sans-serif" }}>Audio</th>
                <th className="text-center py-3 px-4 font-semibold" style={{ color: "#94A3B8", fontFamily: "Syne, sans-serif" }}>Mood AI</th>
                <th className="text-center py-3 px-4 font-semibold" style={{ color: "#94A3B8", fontFamily: "Syne, sans-serif" }}>Marketplace</th>
                <th className="text-center py-3 px-4 font-semibold" style={{ color: "#94A3B8", fontFamily: "Syne, sans-serif" }}>Family</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, i) => (
                <tr
                  key={c.name}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    background: c.isUs
                      ? "linear-gradient(90deg, rgba(99,102,241,0.08), rgba(245,158,11,0.04))"
                      : i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                    opacity: inView ? 1 : 0,
                    transition: `opacity 0.4s ease ${i * 0.08}s`,
                  }}
                >
                  <td className="py-4 pr-6">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: c.color, flexShrink: 0 }}
                      />
                      <span
                        className="font-semibold"
                        style={{
                          color: c.isUs ? "#F1F5F9" : "#94A3B8",
                          fontFamily: "Syne, sans-serif",
                        }}
                      >
                        {c.name}
                        {c.isUs && (
                          <span
                            className="ml-2 text-xs px-1.5 py-0.5 rounded"
                            style={{ background: "rgba(99,102,241,0.2)", color: "#818CF8" }}
                          >
                            US
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="text-xs mt-0.5 ml-4" style={{ color: "#475569" }}>{c.type}</div>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span style={{ color: c.isUs ? "#FCD34D" : "#64748B", fontFamily: "JetBrains Mono, monospace", fontSize: "0.8rem" }}>
                      {c.revenue}
                    </span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span style={{ color: c.isUs ? "#34D399" : "#64748B", fontSize: "0.8rem", fontFamily: "Inter, sans-serif" }}>
                      {c.creators}
                    </span>
                  </td>
                  <td className="text-center py-4 px-4"><Check ok={c.audio} color={c.color} /></td>
                  <td className="text-center py-4 px-4"><Check ok={c.mood} color={c.color} /></td>
                  <td className="text-center py-4 px-4"><Check ok={c.marketplace} color={c.color} /></td>
                  <td className="text-center py-4 px-4"><Check ok={c.family} color={c.color} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Differentiator cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {differentiators.map((d, i) => (
            <div
              key={d.title}
              className="glow-card p-6"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${0.4 + i * 0.1}s`,
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${d.color}15`, border: `1px solid ${d.color}25` }}
                >
                  {d.icon}
                </div>
                <div>
                  <h3
                    className="font-bold mb-1.5"
                    style={{ fontFamily: "Syne, sans-serif", color: d.color }}
                  >
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
                    {d.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
