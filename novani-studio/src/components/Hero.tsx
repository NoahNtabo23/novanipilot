import heroImage from "@/assets/hero-kitchen.jpg";

interface HeroProps {
  onExploreClick: () => void;
}

const Hero = ({ onExploreClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Luxury Kitchen Interior by NOVANI Studio"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-24 pb-32 md:pt-32 md:pb-40 max-w-5xl mx-auto">

        {/* Headline */}
        <h1
          className="font-serif text-white leading-[1.18] tracking-[0.06em] mb-10"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
          }}
        >
          <span className="block fade-in-up">
            Refined Spaces.
          </span>

          <span className="block fade-in-up delay-200">
            Elevated Living.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-white/85 text-base md:text-lg tracking-wide mb-14 fade-in-up delay-400"
        >
          NOVANI Studio — Luxury Kitchen & Interior Design in Nairobi.
        </p>

        {/* Responsive CTA Button */}
                      <button
                onClick={onExploreClick}
                className="
                  relative overflow-hidden
                  px-12 py-5
                  text-sm md:text-base
                  font-semibold
                  tracking-widest
                  rounded-md
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                  active:translate-y-0
                  active:shadow-md
                  group
                "
                style={{
                  backgroundColor: "hsl(var(--gold))",
                  color: "hsl(var(--charcoal))",
                }}
              >
                <span className="relative z-10">
                  Explore Our Work
                </span>

                {/* Subtle sheen effect */}
                <span
                  className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-700
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                    translate-x-[-120%]
                    group-hover:translate-x-[120%]
                    transition-transform duration-1000
                  "
                />
              </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 fade-in-up delay-800">
        <div className="w-px h-16 bg-white/40 animate-pulse" />
      </div>
      
    </section>
  );
};

export default Hero;