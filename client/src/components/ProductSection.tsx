/* QuoteHub Showcase — Product Section
   Design: Bento grid layout showing 5 platform surfaces */
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "🧠",
    title: "Mood-Aware AI Engine",
    desc: "GPT-4o Mini classifies your mood from a 3-word input and delivers semantically matched quotes via pgvector similarity search. No generic content — every quote is contextually relevant.",
    color: "#818CF8",
    span: "lg:col-span-2",
    tag: "Core Intelligence",
  },
  {
    icon: "🎙️",
    title: "Audio-First Delivery",
    desc: "ElevenLabs TTS converts every quote into high-quality audio. Creators can upload their own voice for a personal touch.",
    color: "#FCD34D",
    span: "lg:col-span-1",
    tag: "ElevenLabs",
  },
  {
    icon: "📱",
    title: "5 Platform Surfaces",
    desc: "Consumer mobile app, creator web dashboard, admin panel, PWA, and home screen widgets — all from a single Flutter codebase.",
    color: "#34D399",
    span: "lg:col-span-1",
    tag: "Flutter",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Safety & COPPA",
    desc: "Full COPPA 2026 compliance with parental controls, biometric consent, distress detection, and family plan billing.",
    color: "#F87171",
    span: "lg:col-span-1",
    tag: "Compliance",
  },
  {
    icon: "🔔",
    title: "Smart Notification Engine",
    desc: "BullMQ + Redis schedules personalized push, audio, widget, and email deliveries at the exact moment users need motivation. Supports DND bypass and WearOS.",
    color: "#818CF8",
    span: "lg:col-span-2",
    tag: "OneSignal + AWS SES",
  },
  {
    icon: "📈",
    title: "Creator Analytics Dashboard",
    desc: "Real-time play counts, retention rates, earnings, and subscriber growth. Built on Next.js 15 with Recharts.",
    color: "#FCD34D",
    span: "lg:col-span-1",
    tag: "Next.js 15",
  },
  {
    icon: "🔗",
    title: "Viral Growth Engine",
    desc: "Branded quote cards with deep links (Branch.io). Every share drives new installs. A/B tested onboarding via feature flags.",
    color: "#34D399",
    span: "lg:col-span-1",
    tag: "Growth",
  },
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

export default function ProductSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="product" className="py-24" style={{ background: "#080C14" }}>
      <div className="container">
        <div className="section-divider mb-16" />

        <div className="text-center mb-14">
          <div className="badge-indigo inline-block mb-4">Platform Features</div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
          >
            Built for the <span className="gradient-text-indigo">Micro-Moment</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
            QuoteHub targets the 3–10 second daily interaction window — the morning alarm dismiss, the lunch break scroll, the pre-sleep wind-down. Every feature is engineered for that moment.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`glow-card p-6 ${f.span}`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}
                >
                  {f.icon}
                </div>
                <span
                  className="text-xs font-mono px-2 py-1 rounded"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    color: f.color,
                    border: "1px solid rgba(255,255,255,0.06)",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  {f.tag}
                </span>
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
              >
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
