/* QuoteHub Showcase — Tech Stack Section
   Design: Animated terminal + microservices bento grid */
import { useEffect, useRef, useState } from "react";

const ARCH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/87034816/5tNRZdU66mMdMdXohEzk5j/quotehub-arch-visual-hnbsTVEoUtbXVtDH5rmqgS.webp";

const TERMINAL_LINES = [
  { text: "$ quotehub ingestion-service --source youtube", color: "#94A3B8", delay: 0 },
  { text: "→ Fetching transcript from YouTube API...", color: "#818CF8", delay: 400 },
  { text: "→ Running GPT-4.1 Nano extraction pipeline...", color: "#818CF8", delay: 900 },
  { text: "✓ Extracted 47 quotes from 'The Power of Now'", color: "#34D399", delay: 1500 },
  { text: "→ Generating pgvector embeddings (text-embedding-3-small)...", color: "#818CF8", delay: 2100 },
  { text: "→ ElevenLabs TTS synthesis: 47 audio clips...", color: "#FCD34D", delay: 2700 },
  { text: "✓ Pipeline complete. 47 quotes queued for creator review.", color: "#34D399", delay: 3400 },
  { text: "$ _", color: "#6366F1", delay: 3800 },
];

const services = [
  { name: "auth-service", desc: "JWT, OAuth, COPPA age-gating", color: "#818CF8" },
  { name: "quote-service", desc: "CRUD, pgvector semantic search", color: "#FCD34D" },
  { name: "ingestion-service", desc: "YouTube → LLM → quote pipeline", color: "#34D399" },
  { name: "notification-service", desc: "BullMQ scheduled delivery engine", color: "#F87171" },
  { name: "audio-service", desc: "ElevenLabs TTS + creator voice", color: "#818CF8" },
  { name: "recommendation-service", desc: "Mood classification + ranking", color: "#FCD34D" },
  { name: "subscription-service", desc: "Stripe + RevenueCat entitlements", color: "#34D399" },
  { name: "royalty-service", desc: "Revenue pool + creator payouts", color: "#F87171" },
  { name: "family-service", desc: "Parental controls + safety alerts", color: "#A78BFA" },
  { name: "analytics-service", desc: "Behavioral events + signals", color: "#60A5FA" },
  { name: "growth-service", desc: "Deep links + A/B testing flags", color: "#34D399" },
  { name: "creator-service", desc: "Profiles, packages, approvals", color: "#FCD34D" },
];

const stackLayers = [
  {
    label: "Mobile",
    items: ["Flutter (Dart)", "just_audio", "home_widget", "RevenueCat", "Branch.io"],
    color: "#818CF8",
  },
  {
    label: "Web",
    items: ["Next.js 15", "TypeScript", "Tailwind CSS", "tRPC", "Prisma ORM"],
    color: "#FCD34D",
  },
  {
    label: "Backend",
    items: ["Node.js 22", "ECS Fargate", "BullMQ + Redis", "API Gateway", "AWS EventBridge"],
    color: "#34D399",
  },
  {
    label: "AI / Data",
    items: ["GPT-4.1 Nano", "text-embedding-3-small", "pgvector", "ElevenLabs TTS", "PostgreSQL 17"],
    color: "#F87171",
  },
  {
    label: "Infra",
    items: ["AWS (us-east-1)", "CloudFront CDN", "RDS Multi-AZ", "Terraform IaC", "GitHub Actions CI/CD"],
    color: "#60A5FA",
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

function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const { ref, inView } = useInView(0.3);

  useEffect(() => {
    if (!inView) return;
    TERMINAL_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay);
    });
  }, [inView]);

  return (
    <div ref={ref} className="terminal-block">
      <div className="terminal-header">
        <div className="terminal-dot" style={{ background: "#F87171" }} />
        <div className="terminal-dot" style={{ background: "#FCD34D" }} />
        <div className="terminal-dot" style={{ background: "#34D399" }} />
        <span
          className="ml-3 text-xs"
          style={{ color: "#475569", fontFamily: "JetBrains Mono, monospace" }}
        >
          quotehub-ingestion-pipeline
        </span>
      </div>
      <div className="p-5 space-y-1.5 min-h-[220px]">
        {TERMINAL_LINES.map((line, i) => (
          <div
            key={i}
            className="text-xs leading-relaxed"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: line.color,
              opacity: visibleLines.includes(i) ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            {line.text}
            {i === TERMINAL_LINES.length - 1 && visibleLines.includes(i) && (
              <span className="animate-blink">▊</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechSection() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="tech" className="py-24" style={{ background: "#080C14" }}>
      <div className="container">
        <div className="section-divider mb-16" />

        <div className="text-center mb-14">
          <div className="badge-indigo inline-block mb-4">Architecture</div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
          >
            Production-Grade <span className="gradient-text-indigo">Tech Stack</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
            13 microservices on AWS ECS Fargate, PostgreSQL 17 with pgvector, Redis BullMQ scheduling, and a Flutter cross-platform app. Built to scale to 10M users from day one.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Terminal */}
          <div>
            <div className="badge-indigo inline-block mb-4">AI Ingestion Pipeline</div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
            >
              YouTube → Quotes in 60 Seconds
            </h3>
            <p className="text-sm mb-6" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
              Creators paste a YouTube URL. The ingestion pipeline fetches the transcript, runs GPT-4.1 Nano extraction, generates pgvector embeddings, and synthesizes audio via ElevenLabs — all automatically.
            </p>
            <Terminal />
          </div>

          {/* Architecture visual */}
          <div className="flex flex-col">
            <div className="badge-amber inline-block mb-4">Microservices Network</div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
            >
              13 Independent Services
            </h3>
            <p className="text-sm mb-6" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
              Each service is independently deployable, horizontally scalable, and communicates via REST (sync) or AWS EventBridge (async). Circuit breakers protect against third-party API failures.
            </p>
            <div className="rounded-xl overflow-hidden flex-1" style={{ minHeight: "220px" }}>
              <img
                src={ARCH_IMG}
                alt="QuoteHub Microservices Architecture"
                className="w-full h-full object-cover"
                style={{ borderRadius: "0.75rem" }}
              />
            </div>
          </div>
        </div>

        {/* Microservices grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="glow-card p-4"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.4s ease ${i * 0.05}s`,
              }}
            >
              <div
                className="text-xs font-bold mb-1"
                style={{ color: s.color, fontFamily: "JetBrains Mono, monospace" }}
              >
                {s.name}
              </div>
              <div className="text-xs" style={{ color: "#475569", fontFamily: "Inter, sans-serif" }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Stack layers */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stackLayers.map((layer, i) => (
            <div
              key={layer.label}
              className="glow-card p-5"
              style={{
                opacity: inView ? 1 : 0,
                transition: `opacity 0.5s ease ${0.5 + i * 0.1}s`,
              }}
            >
              <div
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: layer.color, fontFamily: "Syne, sans-serif" }}
              >
                {layer.label}
              </div>
              <ul className="space-y-1.5">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs flex items-center gap-1.5"
                    style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}
                  >
                    <span style={{ color: layer.color, fontSize: "0.5rem" }}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
