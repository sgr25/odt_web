import Hero from "@/components/sections/Hero";
import PainAmplification from "@/components/sections/PainAmplification";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Solution from "@/components/sections/Solution";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import StickyHeader from "@/components/cro/StickyHeader";
import MobileContactBar from "@/components/cro/MobileContactBar";

export default function Home() {
  return (
    <main>
      {/* CRO overlays */}
      <StickyHeader />
      <MobileContactBar />

      {/* Page sections — StoryBrand funnel */}
      <Hero />
      <PainAmplification />
      <BeforeAfter />
      <Solution />
      <Services />
      <HowItWorks />
      <Results />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
