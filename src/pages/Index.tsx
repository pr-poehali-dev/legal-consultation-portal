
import Navbar from "@/components/legal/Navbar";
import Hero from "@/components/legal/Hero";
import Services from "@/components/legal/Services";
import ForWhom from "@/components/legal/ForWhom";
import HowItWorks from "@/components/legal/HowItWorks";
import Lawyers from "@/components/legal/Lawyers";
import Reviews from "@/components/legal/Reviews";
import FAQ from "@/components/legal/FAQ";
import CTA from "@/components/legal/CTA";
import Footer from "@/components/legal/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <ForWhom />
      <HowItWorks />
      <Lawyers />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
