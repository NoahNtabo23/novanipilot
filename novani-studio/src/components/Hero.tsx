import heroImage from "@/assets/hero-kitchen.jpg";

interface HeroProps {
  onExploreClick: () => void;
}

const Hero = ({ onExploreClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Kitchen Interior by NOVANI Studio"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "hsla(var(--charcoal), 0.62)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center pt-16">
        <h1
          className="font-serif leading-tight mb-8 fade-in-up"
          style={{
            color: "hsl(var(--warm-white))",
            fontSize: "clamp(3.2rem, 6vw, 6.6rem)",
            letterSpacing: "0.02em",
          }}
        >
          Elevated Living. Refined<br />Interiors.
        </h1>

        <p
          className="font-sans text-base md:text-lg max-w-2xl mb-12 fade-in-up delay-200"
          style={{ color: "hsla(var(--warm-white), 0.85)" }}
        >
          NOVANI Studio — Luxury Kitchen & Interior Design in Nairobi.
        </p>

        {/* CTA Button */}
        <button
          onClick={onExploreClick}
          className="px-10 py-4 text-sm md:text-base font-medium transition-luxury fade-in-up delay-400 rounded-md"
          style={{
            backgroundColor: "hsl(var(--gold))",
            color: "hsl(var(--charcoal))",
          }}
        >
          Explore Our Work
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in delay-800">
        <div
          className="w-1px h-16 animate-pulse"
          style={{ backgroundColor: "hsla(var(--warm-white), 0.3)" }}
        />
      </div>
    </section>
  );
};

export default Hero;
