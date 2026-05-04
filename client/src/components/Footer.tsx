/* QuoteHub Showcase — Footer */
export default function Footer() {
  return (
    <footer
      className="py-12 border-t"
      style={{ background: "#080C14", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{
                  background: "linear-gradient(135deg, #6366F1, #4F46E5)",
                  boxShadow: "0 0 12px rgba(99,102,241,0.3)",
                }}
              >
                Q
              </div>
              <span
                className="font-bold text-lg"
                style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
              >
                QuoteHub
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#475569", fontFamily: "Inter, sans-serif", maxWidth: "200px" }}
            >
              The two-sided creator marketplace for daily inspiration. Mood-aware. Audio-first. AI-powered.
            </p>
          </div>

          {/* Product */}
          <div>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#818CF8", fontFamily: "Syne, sans-serif" }}
            >
              Product
            </div>
            {["Features", "Pricing", "For Creators", "For Families", "Roadmap"].map((item) => (
              <div key={item} className="mb-2">
                <a
                  href="#"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#475569", fontFamily: "Inter, sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#94A3B8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                >
                  {item}
                </a>
              </div>
            ))}
          </div>

          {/* Company */}
          <div>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#FCD34D", fontFamily: "Syne, sans-serif" }}
            >
              Company
            </div>
            {["About", "Blog", "Careers", "Press Kit", "Contact"].map((item) => (
              <div key={item} className="mb-2">
                <a
                  href="#"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#475569", fontFamily: "Inter, sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#94A3B8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                >
                  {item}
                </a>
              </div>
            ))}
          </div>

          {/* Legal */}
          <div>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#34D399", fontFamily: "Syne, sans-serif" }}
            >
              Legal
            </div>
            {["Privacy Policy", "Terms of Service", "COPPA Notice", "Cookie Policy"].map((item) => (
              <div key={item} className="mb-2">
                <a
                  href="#"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#475569", fontFamily: "Inter, sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#94A3B8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                >
                  {item}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "#374151", fontFamily: "Inter, sans-serif" }}>
            © 2026 QuoteHub, Inc. All rights reserved. Platform showcase document.
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: "Flutter", color: "#818CF8" },
              { label: "Next.js 15", color: "#FCD34D" },
              { label: "AWS ECS", color: "#34D399" },
              { label: "GPT-4.1", color: "#F87171" },
            ].map((t) => (
              <span
                key={t.label}
                className="text-xs font-mono"
                style={{ color: t.color, fontFamily: "JetBrains Mono, monospace" }}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
