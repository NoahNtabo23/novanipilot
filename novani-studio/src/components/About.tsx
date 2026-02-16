import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-studio.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[hsl(var(--warm-white))] px-6 md:px-12 lg:px-24 py-32"
    >
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row gap-16 ">

             

          {/* IMAGE CONTAINER */}
          <div className={`w-full lg:w-[45%] ${isVisible ? "fade-in-up" : "opacity-0"}`}>
            <img
              src={aboutImage}
              alt="NOVANI Studio Workspace"
              className="w-full h-120 object-cover rounded-sm shadow-lg"
            />
          </div>

          {/* TEXT CONTAINER */}
          <div className={`w-full lg:w-[55%] ${isVisible ? "fade-in-up delay-200" : "opacity-0"}`}>
            <h2
              className="font-serif mb-8"
              style={{
                fontSize: "clamp(2.8rem, 4vw, 4.5rem)",
                color: "hsl(var(--charcoal))",
                lineHeight: 1.1,
              }}
            >
              About NOVANI Studio
            </h2>

            <div
              className="space-y-6 font-sans"
              style={{
                color: "hsla(var(--foreground), 0.85)",
                fontSize: "1.05rem",
                lineHeight: "1.8",
              }}
            >
              <p>
                NOVANI Studio is a luxury-focused interior design studio based in
                Nairobi, specializing in creating refined, elevated spaces that
                blend sophistication with functionality.
              </p>

              <p>
                Our expertise lies in high-end residential interiors, with a
                particular focus on premium kitchen design, custom wardrobes, and
                complete home transformations.
              </p>

              <p>
                With meticulous attention to detail and a commitment to
                excellence, we craft interiors that reflect the unique
                personalities and lifestyles of our discerning clients.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
