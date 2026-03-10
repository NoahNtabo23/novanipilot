import { useEffect, useRef, useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { id: 1, title: "Modern Living Space", image: project1 },
  { id: 2, title: "Premium Wardrobe", image: project2 },
  { id: 3, title: "Elegant Dining Area", image: project3 },
  { id: 4, title: "Luxury Kitchen", image: project4 },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTap = (id: number) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: "hsl(var(--cream))" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`font-serif text-4xl md:text-6xl mb-16 text-center ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
          style={{ color: "hsl(var(--charcoal))" }}
        >
          Our Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isActive = activeProject === project.id;

            return (
              <div
                key={project.id}
                onClick={() => handleTap(project.id)}
                className={`group relative overflow-hidden rounded-sm shadow-lg cursor-pointer ${
                  isVisible ? "fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-500px object-cover transition-transform duration-700 
                    ${isActive ? "scale-110" : "group-hover:scale-110"}
                  `}
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-500">
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive
                        ? "opacity-100 bg-[hsla(var(--charcoal),0.6)]"
                        : "opacity-0 group-hover:opacity-100 bg-[hsla(var(--charcoal),0.6)]"
                    }`}
                  />

                  <h3
                    className={`relative font-serif text-3xl transition-all duration-500 transform ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                    }`}
                    style={{ color: "hsl(var(--warm-white))" }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
