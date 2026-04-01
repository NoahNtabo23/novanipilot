import { lazy, Suspense, useEffect } from "react";
import { SEO } from "@/components/Seo";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HamburgerMenu from "@/components/HamburgerMenu";
import Logo from "@/components/Logo";
import WhatsAppButton from "@/components/WhatsAppButton"; // Keep this as normal import

// Lazy load components that are below the fold
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-10 h-10 border-2 border-[hsl(var(--gold))] border-t-transparent rounded-full animate-spin" />
  </div>
);

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
    <>
      <SEO />
      <main
        className="min-h-screen"
        style={{ backgroundColor: "hsl(var(--background))" }}
      >
        <Logo />
        <HamburgerMenu onNavigate={scrollToSection} /> 
        <Hero onExploreClick={() => scrollToSection("projects")} />
        <About />
        
        {/* Lazy loaded sections with Suspense */}
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Footer onNavigate={scrollToSection} />
        </Suspense>

        {/* WhatsApp button loads immediately - it's a fixed element needed on all views */}
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;