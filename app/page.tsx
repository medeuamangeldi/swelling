import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { MetalsSection } from "@/components/MetalsSection";
import { VideoSection } from "@/components/VideoSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-steel-950">
      <Header />
      <Hero />
      <PortfolioSection />
      <VideoSection />
      <ServicesSection />
      <WhyChooseUs />
      <MetalsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
