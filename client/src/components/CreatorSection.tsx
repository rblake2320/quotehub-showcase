/* QuoteHub Showcase — Creator Monetization Section
   Design: Amber-accented cards with earnings calculator */
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Upload Your Content",
    desc: "Paste a YouTube URL or upload a transcript. The AI pipeline extracts quotes, generates embeddings, and synthesizes audio automatically.",
    icon: "📤",
  },
  {
    num: "02",
    title: "Review & Approve",
    desc: "Your creator dashboard shows every extracted quote. Edit, approve, or reject. Set categories, intensity levels, and target audiences.",
    icon: "✅",
  },
  {
    num: "03",
    title: "Set Your Package",
    desc: "Choose a hosting tier. Subscribers pay $4.99–$14.99/month to access your quote library. You earn 70% of subscription revenue.",
    icon: "💰",
  },
  {
    num: "04",
    title: "Earn & Grow",
    desc: "Real-time analytics show plays, retention rates, subscriber growth, and monthly earnings. Payouts via Stripe Connect on the 1st of each month.",
    icon: "📈",
  },
];

const packages = [
  {
    name: "Starter",
    price: "$49/mo",
    quota: "500 quotes",
    features: ["AI ingestion", "TTS audio", "Basic analytics", "Stripe payouts"],
    color: "#818CF8",
  },
  {
    name: "Pro",
    price: "$149/mo",
    quota: "2,000 quotes",
    features: ["Everything in Starter", "Creator voice upload", "Advanced analytics", "Priority support", "Custom categories"],
    color: "#FCD34D",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$499/mo",
    quota: "Unlimited",
    features: ["Everything in Pro", "White-label option", "Dedicated CSM", "API access", "Custom integrations"],
    color: "#34D399",
  },
];

function EarningsCalculator() {
  const [subscribers, setSubscribers] = useState(500);
  const monthlyRevenue = Math.round(subscribers * 4.99 * 0.7);
  const annualRevenue = monthlyRevenue * 12;

  return (
    <div
      className="glow-card glow-card-amber p-8"
      style={{ background: "rgba(13,18,32,0.9)" }}
    >
      <div className="badge-amber inline-block mb-4">Earnings Calculator</div>
      <h3
        className="text-2xl font-bold mb-2"
        style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
      >
        How Much Can You Earn?
      </h3>
      <p className="text-sm mb-6" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
        Based on 70% revenue share at $4.99/subscriber/month
      </p>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <label
            className="text-sm font-semibold"
            style={{ color: "#94A3B8", fontFamily: "Syne, sans-serif" }}
          >
            Monthly Subscribers
          </label>
          <span
            className="text-lg font-bold"
            style={{ color: "#FCD34D", fontFamily: "Syne, sans-serif" }}
          >
            {subscribers.toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min={100}
          max={10000}
          step={100}
          value={subscribers}
          onChange={(e) => setSubscribers(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(90deg, #F59E0B ${(subscribers / 10000) * 100}%, rgba(255,255,255,0.1) ${(subscribers / 10000) * 100}%)`,
            outline: "none",
          }}
        />
        <div className="flex justify-between text-xs mt-1" style={{ color: "#475569" }}>
          <span>100</span>
          <span>10,000</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div
          className="p-4 rounded-xl text-center"
          style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)" }}
        >
          <div
            className="text-2xl font-extrabold"
            style={{ color: "#FCD34D", fontFamily: "Syne, sans-serif" }}
          >
            ${monthlyRevenue.toLocaleString()}
          </div>
          <div className="text-xs mt-1" style={{ color: "#64748B" }}>Monthly</div>
        </div>
        <div
          className="p-4 rounded-xl text-center"
          style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)" }}
        >
          <div
            className="text-2xl font-extrabold"
            style={{ color: "#34D399", fontFamily: "Syne, sans-serif" }}
          >
            ${annualRevenue.toLocaleString()}
          </div>
          <div className="text-xs mt-1" style={{ color: "#64748B" }}>Annual</div>
        </div>
      </div>

      <p className="text-xs mt-4" style={{ color: "#374151", fontFamily: "Inter, sans-serif" }}>
        * Based on Insight Timer's proven creator model. Top creators on similar platforms earn $200K+/year.
      </p>
    </div>
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

export default function CreatorSection() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="creators" className="py-24" style={{ background: "#0A0E1A" }}>
      <div className="container">
        <div className="section-divider mb-16" />

        <div className="text-center mb-14">
          <div className="badge-amber inline-block mb-4">For Creators</div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
          >
            Turn Your Wisdom into{" "}
            <span className="gradient-text-amber">Recurring Revenue</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
            Podcasters, YouTubers, coaches, and authors — your existing content library is worth more than you think. QuoteHub extracts, packages, and monetizes it automatically.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Steps */}
          <div ref={ref}>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="flex gap-5"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(-24px)",
                    transition: `all 0.5s ease ${i * 0.12}s`,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{
                        background: "rgba(245,158,11,0.12)",
                        border: "1px solid rgba(245,158,11,0.25)",
                      }}
                    >
                      {step.icon}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="w-px flex-1 mt-2"
                        style={{ background: "rgba(245,158,11,0.15)", minHeight: "24px" }}
                      />
                    )}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-bold"
                        style={{ color: "#F59E0B", fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {step.num}
                      </span>
                      <h3
                        className="font-bold"
                        style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Earnings calculator */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.6s ease 0.3s",
            }}
          >
            <EarningsCalculator />
          </div>
        </div>

        {/* Creator packages */}
        <div>
          <h3
            className="text-2xl font-bold text-center mb-8"
            style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
          >
            Creator Hosting Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className="glow-card p-6 relative"
                style={{
                  border: pkg.popular ? `1px solid ${pkg.color}40` : undefined,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease ${0.5 + i * 0.1}s`,
                }}
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: pkg.color, color: "#0D1220", fontFamily: "Syne, sans-serif" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <div
                    className="text-sm font-bold uppercase tracking-widest mb-1"
                    style={{ color: pkg.color, fontFamily: "Syne, sans-serif" }}
                  >
                    {pkg.name}
                  </div>
                  <div
                    className="text-3xl font-extrabold"
                    style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
                  >
                    {pkg.price}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "#475569" }}>
                    Up to {pkg.quota}
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif" }}
                    >
                      <span style={{ color: pkg.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-2.5 rounded-lg text-sm font-bold transition-all duration-200"
                  style={{
                    background: pkg.popular ? pkg.color : "transparent",
                    color: pkg.popular ? "#0D1220" : pkg.color,
                    border: `1px solid ${pkg.color}50`,
                    fontFamily: "Syne, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    if (!pkg.popular) {
                      e.currentTarget.style.background = `${pkg.color}15`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!pkg.popular) {
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
