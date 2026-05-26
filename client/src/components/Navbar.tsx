/* QuoteHub Showcase — Navbar
   Design: Dark Tech Brutalism | Sticky top nav with blur backdrop */
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Creator Brands", href: "#creator-brands" },
  { label: "Competition", href: "#competition" },
  { label: "Tech Stack", href: "#tech" },
  { label: "For Creators", href: "#creators" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(8, 12, 20, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{
                background: "linear-gradient(135deg, #6366F1, #4F46E5)",
                boxShadow: "0 0 16px rgba(99,102,241,0.4)",
              }}
            >
              Q
            </div>
            <span
              className="font-bold text-lg tracking-tight"
              style={{ fontFamily: "Syne, sans-serif", color: "#F1F5F9" }}
            >
              QuoteHub
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: "#94A3B8",
                  fontFamily: "Inter, sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F1F5F9")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#creators"
              className="btn-ghost text-sm px-4 py-2"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              For Creators
            </a>
            <a
              href="#investors"
              className="btn-indigo text-sm px-4 py-2"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Investor Deck
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#94A3B8" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden pb-4 pt-2 border-t"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-sm font-medium"
                style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <a href="#creators" className="btn-ghost text-sm text-center">For Creators</a>
              <a href="#investors" className="btn-indigo text-sm text-center">Investor Deck</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
