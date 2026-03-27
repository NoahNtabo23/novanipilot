import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HamburgerMenu from "@/components/HamburgerMenu";
import WhatsAppButton from "@/components/WhatsAppButton";
import Logo from "@/components/Logo";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.title = "NOVANI Studio | Luxury Interior Design in Nairobi";
  }, []);

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "hsl(var(--background))" }}
    >
      <Logo />
      <HamburgerMenu onNavigate={scrollToSection} /> 
      <Hero onExploreClick={() => scrollToSection("projects")} />
      <About />
      <Projects />
      <Contact />
      <Footer onNavigate={scrollToSection} />

      <WhatsAppButton /> 
    </main>
  );
};

export default Index;
