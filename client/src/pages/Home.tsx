/* QuoteHub Showcase — Home Page
   Design: Dark Tech Brutalism | All sections assembled */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import CompetitionSection from "@/components/CompetitionSection";
import TechSection from "@/components/TechSection";
import CreatorSection from "@/components/CreatorSection";
import ResilienceSection from "@/components/ResilienceSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <CompetitionSection />
      <TechSection />
      <ResilienceSection />
      <CreatorSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
