import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Features from "../components/layout/Features";
import CTA from "../components/layout/CTA";
import Footer from "../components/layout/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default LandingPage;