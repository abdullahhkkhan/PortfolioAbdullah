import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import PortfolioSection from "../components/PortfolioSection";
import SkillsSection from "../components/SkillsSection";
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#030d10] text-slate-100">

      <NavBar />

      <HeroSection />
      
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <Footer />
    </main>
  );
}
