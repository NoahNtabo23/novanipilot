import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HamburgerMenuProps {
  onNavigate: (section: string) => void;
}

const HamburgerMenu = ({ onNavigate }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Projects", section: "projects" },
    { label: "Contact", section: "contact" },
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
        className="
          fixed top-6 right-6 z-50 p-3 rounded-md
          bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))]
          transition-all duration-500
          hover:scale-105 hover:shadow-xl
          active:scale-95
        "
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-40
          backdrop-blur-md
          transition-all duration-700
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        style={{
          backgroundColor: "rgba(15,15,15,0.92)", // darker for white sections
        }}
        onClick={() => setIsOpen(false)}
      >
        <nav
          className="flex flex-col items-center justify-center h-full"
          onClick={(e) => e.stopPropagation()}
        >
          {menuItems.map((item, index) => (
            <button
              key={item.section}
              onClick={() => handleNavigate(item.section)}
              className="
                relative font-serif
                text-5xl md:text-7xl mb-10
                text-[hsl(var(--warm-white))]
                transition-all duration-500
                hover:text-[hsl(var(--gold))]
                active:text-[hsl(var(--gold))]
                active:scale-95
                group
              "
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {item.label}

              {/* Gold Underline */}
              <span
                className="
                  absolute left-1/2 -bottom-3
                  h-[1px] w-0
                  bg-[hsl(var(--gold))]
                  transition-all duration-500
                  group-hover:w-20 group-hover:-translate-x-1/2
                  group-active:w-20 group-active:-translate-x-1/2
                "
              />
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
