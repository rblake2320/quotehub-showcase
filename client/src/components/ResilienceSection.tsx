/* QuoteHub Showcase — Disaster Recovery & Resilience Section
   Design: Dark bento cards with metric highlights */
import { useEffect, useRef, useState } from "react";

const drMetrics = [
  {
    label: "RPO",
    value: "5 min",
    desc: "Recovery Point Objective via continuous WAL archiving to S3",
    color: "#818CF8",
    icon: "⏱️",
  },
  {
    label: "RTO",
    value: "1 hr",
    desc: "Recovery Time Objective via Terraform IaC redeployment to secondary region",
    color: "#34D399",
    icon: "🔄",
  },
  {
    label: "Uptime SLA",
    value: "99.9%",
    desc: "Multi-AZ RDS with automatic failover and Redis ElastiCache redundancy",
    color: "#FCD34D",
    icon: "🟢",
  },
  {
    label: "Regions",
    value: "2",
    desc: "Active-passive: us-east-1 primary, us-west-2 standby with cross-region read replicas",
    color: "#F87171",
    icon: "🌐",
  },
];

const resilienceFeatures = [
  {
    title: "Circuit Breakers",
    desc: "API Gateway and inter-service HTTP calls use circuit breakers to prevent cascading failures when OpenAI or ElevenLabs experience downtime. Graceful degradation serves cached content.",
    icon: "⚡",
    color: "#818CF8",
  },
  {
    title: "Multi-AZ Database",
    desc: "PostgreSQL 17 on RDS runs in Multi-AZ configuration with synchronous replication. Automatic failover completes in under 60 seconds with zero data loss.",
    icon: "🗄️",
    color: "#FCD34D",
  },
  {
    title: "Redis Failover",
    desc: "ElastiCache Redis 7 runs in cluster mode with automatic failover. If Redis fails completely, BullMQ falls back to database-backed queuing without service interruption.",
    icon: "🔴",
    color: "#34D399",
  },
  {
    title: "Infrastructure as Code",
    desc: "All AWS resources are defined in Terraform. A complete environment can be reproduced in a new region in under 30 minutes from a single terraform apply command.",
    icon: "📋",
    color: "#F87171",
  },
  {
    title: "WAL Archiving",
    desc: "Continuous Write-Ahead Log archiving to S3 enables point-in-time recovery to any 5-minute window in the past 35 days. Zero data loss in any failure scenario.",
    icon: "💾",
    color: "#818CF8",
  },
  {
    title: "Feature Flags",
    desc: "A/B testing and gradual rollouts via the feature_flags table. New features can be enabled for 1% of users and rolled back instantly without a deployment.",
    icon: "🚩",
    color: "#FCD34D",
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

export default function ResilienceSection() {
  const { ref, inView } = useInView(0.05);

  return (
    <section className="py-24" style={{ background: "#0A0E1A" }}>
      <div className="container">
        <div className="section-divider mb-16" />

        <div className="text-center mb-14">
          <div className="badge-indigo inline-block mb-4">Infrastructure</div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
          >
            Enterprise-Grade{" "}
            <span className="gradient-text-indigo">Resilience</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
            QuoteHub is designed to survive any failure — from a single service crash to a full AWS region outage. Our disaster recovery strategy is defined, tested, and automated.
          </p>
        </div>

        {/* DR Metrics */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {drMetrics.map((m, i) => (
            <div
              key={m.label}
              className="glow-card p-6 text-center"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${i * 0.1}s`,
              }}
            >
              <div className="text-3xl mb-2">{m.icon}</div>
              <div
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: "#475569", fontFamily: "Syne, sans-serif" }}
              >
                {m.label}
              </div>
              <div
                className="text-3xl font-extrabold mb-2"
                style={{ color: m.color, fontFamily: "Syne, sans-serif" }}
              >
                {m.value}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "#475569", fontFamily: "Inter, sans-serif" }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Resilience features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resilienceFeatures.map((f, i) => (
            <div
              key={f.title}
              className="glow-card p-6"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.4s ease ${0.4 + i * 0.08}s`,
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${f.color}15`, border: `1px solid ${f.color}25` }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3
                    className="font-bold mb-1.5 text-sm"
                    style={{ fontFamily: "Syne, sans-serif", color: f.color }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}>
                    {f.desc}
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
