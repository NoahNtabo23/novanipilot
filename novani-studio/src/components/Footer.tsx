import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/novanistudio",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/novanistudio",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/novanistudio",
      label: "LinkedIn",
    },
  ];

  return (
    <footer
      className="py-16 px-6"
      style={{
        backgroundColor: "hsl(var(--charcoal))",
        color: "hsl(var(--warm-white))",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl mb-4">NOVANI Studio</h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "hsla(var(--warm-white), 0.8)" }}
            >
              Luxury interior design studio specializing in premium kitchens,
              wardrobes, and residential interiors in Nairobi.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-sm text-left transition-opacity hover:opacity-100"
                  style={{ color: "hsla(var(--warm-white), 0.8)" }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span
                  className="text-sm"
                  style={{ color: "hsla(var(--warm-white), 0.8)" }}
                >
                  Nairobi, Kenya
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 shrink-0" />
                <span
                  className="text-sm"
                  style={{ color: "hsla(var(--warm-white), 0.8)" }}
                >
                  +254 700 000 000
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 shrink-0" />
                <span
                  className="text-sm"
                  style={{ color: "hsla(var(--warm-white), 0.8)" }}
                >
                  info@novanistudio.com
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg mb-4">Business Hours</h4>
            <div
              className="space-y-3 text-sm"
              style={{ color: "hsla(var(--warm-white), 0.8)" }}
            >
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1 shrink-0" />
                <div>
                  <p>Monday – Friday</p>
                  <p>9:00 AM – 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1 shrink-0" />
                <div>
                  <p>Saturday</p>
                  <p>10:00 AM – 4:00 PM</p>
                </div>
              </div>

              <p className="ml-7">Sunday – Closed</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mb-8"
          style={{ borderTop: "1px solid hsla(var(--warm-white), 0.2)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p
            className="text-sm"
            style={{ color: "hsla(var(--warm-white), 0.6)" }}
          >
            © {currentYear} NOVANI Studio. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="transition-opacity hover:opacity-100"
                style={{ color: "hsla(var(--warm-white), 0.6)" }}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
