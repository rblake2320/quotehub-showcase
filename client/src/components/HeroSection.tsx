/* QuoteHub Showcase — Hero Section
   Design: Dark Tech Brutalism | Full-bleed hero with animated quote cards + stats */
import { useEffect, useRef, useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/87034816/5tNRZdU66mMdMdXohEzk5j/quotehub-hero-bg-EQhbMsZMffapCrgYAyxJmr.webp";
const PHONE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/87034816/5tNRZdU66mMdMdXohEzk5j/quotehub-creator-card-md6dgSxpwM5D4LaESgK473.webp";

const ROTATING_QUOTES = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt", creator: "Michael Stansbury" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", creator: "Sarah Chen" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain", creator: "David Okafor" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function HeroSection() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const creators = useCountUp(20000, 2200, statsVisible);
  const quotes = useCountUp(5000000, 2500, statsVisible);
  const revenue = useCountUp(600, 2000, statsVisible);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setStatsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIdx((i) => (i + 1) % ROTATING_QUOTES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const q = ROTATING_QUOTES[quoteIdx];

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#080C14" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          opacity: 0.3,
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(8,12,20,0.3) 0%, rgba(8,12,20,0.55) 55%, rgba(8,12,20,0.98) 90%, #080C14 100%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 flex-1 flex flex-col justify-center pt-24 pb-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="badge-indigo inline-block mb-5">
              Platform Showcase · Seed Round 2026
            </div>
            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-5"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              The Creator{" "}
              <span className="gradient-text-indigo">Quote</span>{" "}
              <span className="gradient-text-amber">Marketplace</span>
            </h1>
            <p
              className="text-base lg:text-lg leading-relaxed mb-7 max-w-xl"
              style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif" }}
            >
              QuoteHub is the two-sided marketplace where creators monetize their wisdom and consumers receive mood-aware, AI-powered, audio-first daily inspiration. Think{" "}
              <span style={{ color: "#818CF8" }}>Insight Timer</span> meets{" "}
              <span style={{ color: "#FCD34D" }}>Patreon</span> — for quotes.
            </p>
            <div className="flex flex-wrap gap-3 mb-7">
              <a href="#investors" className="btn-indigo">View Investor Deck</a>
              <a href="#creators" className="btn-amber">Join as Creator</a>
              <a href="#product" className="btn-ghost">See the Product</a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {[
                { icon: "🔒", text: "COPPA Compliant" },
                { icon: "🤖", text: "GPT-4.1 Powered" },
                { icon: "🎙️", text: "ElevenLabs Audio" },
                { icon: "📱", text: "Flutter Cross-Platform" },
              ].map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-1.5 text-xs"
                  style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}
                >
                  <span>{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup + rotating quote */}
          <div
            className="relative flex justify-center lg:justify-end"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
            }}
          >
            <div className="relative">
              <img
                src={PHONE_IMG}
                alt="QuoteHub App"
                className="animate-float"
                style={{
                  width: "260px",
                  borderRadius: "2rem",
                  filter: "drop-shadow(0 0 40px rgba(99,102,241,0.35))",
                }}
              />
              {/* Floating quote card */}
              <div
                className="absolute -left-8 lg:-left-16 bottom-12 glow-card p-4"
                style={{
                  background: "rgba(13,18,32,0.95)",
                  backdropFilter: "blur(20px)",
                  width: "200px",
                }}
              >
                <div className="text-xl mb-1.5" style={{ color: "#6366F1", fontFamily: "Syne, sans-serif" }}>"</div>
                <p
                  className="text-xs leading-relaxed mb-2"
                  style={{ color: "#E2E8F0", fontFamily: "Inter, sans-serif" }}
                >
                  {q.text.length > 80 ? q.text.slice(0, 80) + "…" : q.text}
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: "#6366F1", color: "white" }}
                  >
                    {q.creator[0]}
                  </div>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: "#94A3B8" }}>{q.creator}</div>
                    <div className="text-xs" style={{ color: "#475569" }}>— {q.author}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="mt-12 grid grid-cols-3 gap-3 lg:gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
        >
          {[
            { value: creators.toLocaleString() + "+", label: "Active Creators", color: "#818CF8" },
            { value: (quotes / 1000000).toFixed(1) + "M+", label: "Quotes Delivered", color: "#FCD34D" },
            { value: "$" + revenue + "K/mo", label: "Top Creator Revenue", color: "#34D399" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="text-2xl lg:text-3xl font-extrabold mb-1"
                style={{ color: stat.color, fontFamily: "Syne, sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
