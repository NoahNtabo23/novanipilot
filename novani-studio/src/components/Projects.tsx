import { useEffect, useRef, useState } from "react";
import project1 from "@/assets/project-1.webp";
import project1_Two from "@/assets/project-1.2.webp";
import project1_Three from "@/assets/project-1.3.webp";
import project1_Four from "@/assets/project-1.4.webp";
import project1_Five from "@/assets/project-1.5.webp";
import project1_Six from "@/assets/project-1.6.webp";
import project2 from "@/assets/project-2.webp";
import project2_Two from "@/assets/project-2.2.webp";
import project2_Three from "@/assets/project-2.3.webp";
import project2_Four from "@/assets/project-2.4.webp";
import project2_Five from "@/assets/project-2.5.webp";
import project2_Six from "@/assets/project-2.6.webp";
import project3 from "@/assets/project-3.webp";
import project3_Two from "@/assets/project-3.2.webp";
import project3_Three from "@/assets/project-3.3.webp";
import project3_Four from "@/assets/project-3.4.webp";
import project3_Five from "@/assets/project-3.5.webp";
import project3_Six from "@/assets/project-3.6.webp";
import project4 from "@/assets/projects-4.2.webp";
import project4_Two from "@/assets/projects-4.1.webp";
import project4_Three from "@/assets/projects-4.3.webp";
import project4_Four from "@/assets/projects-4.4.webp";
import project4_Five from "@/assets/projects-4.5.webp";
import project4_Six from "@/assets/projects-4.6.webp";

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
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    const container = galleryScrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = galleryScrollRef.current;
    if (container && activeProject !== null) {
      container.addEventListener('scroll', checkScrollPosition);
      // Initial check after gallery renders
      setTimeout(checkScrollPosition, 100);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, [activeProject]);

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
        // Reset arrow visibility after scroll reset
        setTimeout(() => {
          setShowLeftArrow(false);
          setShowRightArrow(true);
        }, 50);

        galleryRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 200);
    }
  };

  const scrollGallery = (direction: 'left' | 'right') => {
    const container = galleryScrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
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
                  alt={`${project.title} interior design project by NOVANI Studio, Nairobi - click to view gallery`}
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

            <div className="relative group/gallery">

              {/* Left Navigation Arrow */}
              <button
                onClick={() => scrollGallery('left')}
                className={`
                  absolute left-2 top-1/2 -translate-y-1/2 z-20
                  w-10 h-10 md:w-12 md:h-12 rounded-full
                  flex items-center justify-center
                  bg-[hsl(var(--charcoal))]/70 backdrop-blur-sm
                  text-[hsl(var(--gold))]
                  transition-all duration-300
                  hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--charcoal))]
                  hover:scale-110
                  focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]
                  ${showLeftArrow 
                    ? 'opacity-100 pointer-events-auto' 
                    : 'opacity-0 pointer-events-none'
                  }
                `}
                aria-label="Previous images"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Right Navigation Arrow */}
              <button
                onClick={() => scrollGallery('right')}
                className={`
                  absolute right-2 top-1/2 -translate-y-1/2 z-20
                  w-10 h-10 md:w-12 md:h-12 rounded-full
                  flex items-center justify-center
                  bg-[hsl(var(--charcoal))]/70 backdrop-blur-sm
                  text-[hsl(var(--gold))]
                  transition-all duration-300
                  hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--charcoal))]
                  hover:scale-110
                  focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]
                  ${showRightArrow 
                    ? 'opacity-100 pointer-events-auto' 
                    : 'opacity-0 pointer-events-none'
                  }
                `}
                aria-label="Next images"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* subtle fade hints - enhanced to indicate scrollable content */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-20 bg-gradient-to-r from-[hsl(var(--cream))] via-[hsl(var(--cream))/80] to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-20 bg-gradient-to-l from-[hsl(var(--cream))] via-[hsl(var(--cream))/80] to-transparent z-10" />

              {/* Scroll Indicator (shows when there are more images) */}
              {showRightArrow && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1 md:hidden">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))] animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))] animate-pulse delay-150" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))] animate-pulse delay-300" />
                </div>
              )}

              <div
                ref={galleryScrollRef}
                className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {activeGallery.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="snap-start min-w-[360px] md:min-w-[420px] h-[320px] md:h-[420px] overflow-hidden rounded-sm shadow-lg flex-shrink-0 group/img"
                  >
                    <img
                      src={img}
                      alt={`${activeGallery.title} by NOVANI Studio, Nairobi luxury interior design - view ${index + 1} of ${activeGallery.gallery.length}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    {/* Optional: subtle image counter on hover */}
                    <div className="absolute bottom-3 right-3 bg-[hsl(var(--charcoal))/60] backdrop-blur-sm px-2 py-1 rounded text-xs text-[hsl(var(--gold))] opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                      {index + 1} / {activeGallery.gallery.length}
                    </div>
                  </div>
                ))}
              </div>

              {/* Gallery hint text */}
              <p className="text-center text-sm mt-4 opacity-60" style={{ color: "hsla(var(--foreground), 0.5)" }}>
                ←  Scroll or use arrows to explore  →
              </p>

            </div>

          </div>

        )}

      </div>
    </section>
  );
};

export default Projects;