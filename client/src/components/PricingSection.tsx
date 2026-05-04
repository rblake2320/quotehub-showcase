/* QuoteHub Showcase — Consumer Pricing + Investor CTA
   Design: Dark cards with glow accents + investor metrics */
import { useEffect, useRef, useState } from "react";

const consumerTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Get started with daily inspiration",
    features: [
      "3 quotes per day",
      "Text delivery only",
      "1 creator subscription",
      "Basic categories",
    ],
    color: "#64748B",
    cta: "Start Free",
  },
  {
    name: "Starter",
    price: "$4.99",
    period: "/month",
    desc: "For daily inspiration seekers",
    features: [
      "Unlimited quotes",
      "Audio delivery (TTS)",
      "3 creator subscriptions",
      "Home screen widget",
      "Mood-aware delivery",
    ],
    color: "#818CF8",
    cta: "Start Free Trial",
  },
  {
    name: "Plus",
    price: "$9.99",
    period: "/month",
    desc: "For power users and collectors",
    features: [
      "Everything in Starter",
      "Creator voice audio",
      "Unlimited subscriptions",
      "Quote journaling",
      "Advanced scheduling",
      "WearOS support",
    ],
    color: "#FCD34D",
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Family",
    price: "$14.99",
    period: "/month",
    desc: "For families — COPPA compliant",
    features: [
      "Everything in Plus",
      "Up to 6 family members",
      "Child safety controls",
      "Parental dashboard",
      "Age-appropriate content",
      "Distress monitoring",
    ],
    color: "#34D399",
    cta: "Start Free Trial",
  },
];

const investorMetrics = [
  { label: "Total Addressable Market", value: "$4.2B", sub: "Daily wellness & inspiration apps", color: "#818CF8" },
  { label: "Serviceable Market", value: "$840M", sub: "Creator-driven content platforms", color: "#FCD34D" },
  { label: "Year 1 Revenue Target", value: "$2.4M", sub: "Based on 40K paid subscribers", color: "#34D399" },
  { label: "LTV / CAC Ratio", value: "4.8x", sub: "Projected at scale", color: "#F87171" },
  { label: "Creator Revenue Share", value: "70%", sub: "Competitive with Insight Timer", color: "#818CF8" },
  { label: "Platform Fee", value: "30%", sub: "After app store cut", color: "#FCD34D" },
];

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

export default function PricingSection() {
  const { ref: pricingRef, inView: pricingInView } = useInView(0.05);
  const { ref: investorRef, inView: investorInView } = useInView(0.05);

  return (
    <>
      {/* Consumer Pricing */}
      <section id="pricing" className="py-24" style={{ background: "#080C14" }}>
        <div className="container">
          <div className="section-divider mb-16" />

          <div className="text-center mb-14">
            <div className="badge-indigo inline-block mb-4">Consumer Plans</div>
            <h2
              className="text-4xl lg:text-5xl font-extrabold mb-4"
              style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
            >
              Simple, <span className="gradient-text-indigo">Transparent</span> Pricing
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
              Start free. Upgrade when you're ready. Cancel anytime. Available on iOS, Android, and web.
            </p>
          </div>

          <div ref={pricingRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {consumerTiers.map((tier, i) => (
              <div
                key={tier.name}
                className="glow-card p-6 flex flex-col relative"
                style={{
                  border: tier.popular ? `1px solid ${tier.color}40` : undefined,
                  opacity: pricingInView ? 1 : 0,
                  transform: pricingInView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.5s ease ${i * 0.1}s`,
                }}
              >
                {tier.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
                    style={{ background: tier.color, color: "#0D1220", fontFamily: "Syne, sans-serif" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="mb-5">
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: tier.color, fontFamily: "Syne, sans-serif" }}
                  >
                    {tier.name}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-3xl font-extrabold"
                      style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
                    >
                      {tier.price}
                    </span>
                    <span className="text-sm" style={{ color: "#475569" }}>{tier.period}</span>
                  </div>
                  <p className="text-xs mt-1.5" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
                    {tier.desc}
                  </p>
                </div>

                <ul className="space-y-2 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-xs"
                      style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif" }}
                    >
                      <span style={{ color: tier.color, marginTop: "1px" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-2.5 rounded-lg text-sm font-bold transition-all duration-200"
                  style={{
                    background: tier.popular ? tier.color : "transparent",
                    color: tier.popular ? "#0D1220" : tier.color,
                    border: `1px solid ${tier.color}50`,
                    fontFamily: "Syne, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    if (!tier.popular) e.currentTarget.style.background = `${tier.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    if (!tier.popular) e.currentTarget.style.background = "transparent";
                  }}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section id="investors" className="py-24" style={{ background: "#0A0E1A" }}>
        <div className="container">
          <div className="section-divider mb-16" />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="badge-amber inline-block mb-4">For Investors</div>
              <h2
                className="text-4xl lg:text-5xl font-extrabold mb-6"
                style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
              >
                A{" "}
                <span className="gradient-text-amber">$4.2B Market</span>{" "}
                With No Clear Winner
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
                The daily inspiration market is fragmented across passive apps (Motivation), wellness giants (Calm), and creator platforms (Insight Timer). No single player combines creator monetization, mood-aware AI, audio delivery, and family safety compliance.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
                QuoteHub's technical moat — pgvector semantic search, GPT-4.1 mood classification, ElevenLabs audio synthesis, and COPPA 2026 compliance — creates compounding advantages that are difficult to replicate quickly.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:invest@quotehub.com" className="btn-amber">Request Investor Deck</a>
                <a href="mailto:hello@quotehub.com" className="btn-ghost">Schedule a Call</a>
              </div>
            </div>

            <div ref={investorRef} className="grid grid-cols-2 gap-4">
              {investorMetrics.map((m, i) => (
                <div
                  key={m.label}
                  className="glow-card p-5"
                  style={{
                    opacity: investorInView ? 1 : 0,
                    transform: investorInView ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.5s ease ${i * 0.1}s`,
                  }}
                >
                  <div
                    className="text-2xl font-extrabold mb-1"
                    style={{ color: m.color, fontFamily: "Syne, sans-serif" }}
                  >
                    {m.value}
                  </div>
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: "#94A3B8", fontFamily: "Syne, sans-serif" }}
                  >
                    {m.label}
                  </div>
                  <div className="text-xs" style={{ color: "#475569", fontFamily: "Inter, sans-serif" }}>
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
