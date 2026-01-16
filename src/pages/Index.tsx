import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import ProgramsSection from "@/components/ProgramsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TransformationsSection from "@/components/TransformationsSection";
import PricingSection from "@/components/PricingSection";
import FacilitySection from "@/components/FacilitySection";
import ContactSection from "@/components/ContactSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MetricsSection />
        <section id="programs">
          <ProgramsSection />
        </section>
        <BenefitsSection />
        <TransformationsSection />
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="facility">
          <FacilitySection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;