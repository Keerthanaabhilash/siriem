import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import TechnologyIntegration from "@/components/sections/TechnologyIntegration";
import Differentiators from "@/components/sections/Differentiators";
import OurApproach from "@/components/sections/OurApproach";
import Offerings from "@/components/sections/Offerings";
import Verticals from "@/components/sections/Verticals";
import CTA from "@/components/sections/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TechnologyIntegration />
        <Differentiators />
        <OurApproach />
        <Offerings />
        <Verticals />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
