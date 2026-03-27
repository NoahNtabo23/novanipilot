import { useEffect, useRef, useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project1_Two from "@/assets/project-1.2.jpg";
import project1_Three from "@/assets/project-1.3.jpg";
import project1_Four from "@/assets/project-1.4.jpg";
import project1_Five from "@/assets/project-1.5.jpg";
import project1_Six from "@/assets/project-1.6.jpg";
import project2 from "@/assets/project-2.jpg";
import project2_Two from "@/assets/project-2.2.jpg";
import project2_Three from "@/assets/project-2.3.jpg";
import project2_Four from "@/assets/project-2.4.jpg";
import project2_Five from "@/assets/project-2.5.jpg";
import project2_Six from "@/assets/project-2.6.jpg";
import project3 from "@/assets/project-3.jpg";
import project3_Two from "@/assets/project-3.2.jpg";
import project3_Three from "@/assets/project-3.3.jpg";
import project3_Four from "@/assets/project-3.4.jpg";
import project3_Five from "@/assets/project-3.5.jpg";
import project3_Six from "@/assets/project-3.6.jpg";
import project4 from "@/assets/projects-4.2.jpg";
import project4_Two from "@/assets/projects-4.1.jpg";
import project4_Three from "@/assets/projects-4.3.jpg";
import project4_Four from "@/assets/projects-4.4.jpg";
import project4_Five from "@/assets/projects-4.5.jpg";
import project4_Six from "@/assets/projects-4.6.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Living Spaces",
    cover: project1,
    gallery: [project1, project1_Two, project1_Three, project1_Four, project1_Five, project1_Six],
  },
  {
    id: 2,
    title: "Luxury Wardrobes",
    cover: project2,
    gallery: [project2, project2_Two, project2_Three, project2_Four, project2_Five, project2_Six],
  },
  {
    id: 3,
    title: "Elegant Dining",
    cover: project3,
    gallery: [project3, project3_Two, project3_Three, project3_Four, project3_Five, project3_Six],
  },
  {
    id: 4,
    title: "Premium Kitchens",
    cover: project4,
    gallery: [project4, project4_Two, project4_Three, project4_Four, project4_Five, project4_Six],
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const galleryScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (id: number) => {
    const newProject = activeProject === id ? null : id;
    setActiveProject(newProject);

    if (newProject !== null) {
      setTimeout(() => {

        // reset gallery scroll to first image
        galleryScrollRef.current?.scrollTo({
          left: 0,
          behavior: "instant",
        });

        galleryRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

      }, 200);
    }
  };

  const activeGallery = projects.find((p) => p.id === activeProject);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: "hsl(var(--cream))" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2
          className={`font-serif text-4xl md:text-6xl mb-16 text-center ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
          style={{ color: "hsl(var(--charcoal))" }}
        >
          Our Projects
        </h2>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className={`group relative overflow-hidden rounded-sm shadow-lg cursor-pointer ${
                isVisible ? "fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 120}ms` }}
            >

              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-end md:items-center justify-center">

                <div className="absolute inset-0 bg-[hsla(var(--charcoal),0.55)] opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500" />

                <h3
                  className="relative font-serif text-2xl md:text-3xl tracking-wide px-6 py-6 text-center transform transition-all duration-500
                  translate-y-0 md:translate-y-6 md:group-hover:translate-y-0
                  opacity-100 md:opacity-0 md:group-hover:opacity-100"
                  style={{ color: "hsl(var(--warm-white))" }}
                >
                  {project.title.toUpperCase()}
                </h3>

              </div>

            </div>

          ))}

        </div>

        {/* Gallery Section */}
        {activeGallery && (

          <div ref={galleryRef} className="mt-20 fade-in-up">

            <div className="w-24 h-px bg-[hsl(var(--gold))] opacity-60 mb-10 mx-auto"></div>

            <h3
              className="font-serif text-3xl text-center mb-12"
              style={{ color: "hsl(var(--charcoal))" }}
            >
              {activeGallery.title}
            </h3>

            <div className="relative">

              {/* subtle fade hints */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-8 md:w-12 bg-gradient-to-r from-[hsl(var(--cream))] to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-8 md:w-12 bg-gradient-to-l from-[hsl(var(--cream))] to-transparent z-10" />

              <div
                ref={galleryScrollRef}
                className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
              >

                {activeGallery.gallery.map((img, index) => (

                  <div
                    key={index}
                    className="snap-start min-w-[360px] md:min-w-[420px] h-[320px] md:h-[420px] overflow-hidden rounded-sm shadow-lg flex-shrink-0"
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                ))}

              </div>

            </div>

          </div>

        )}

      </div>
    </section>
  );
};

export default Projects;