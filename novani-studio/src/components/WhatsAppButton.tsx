import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "254742981681"; // replace with real number
  const message =
    "Hello NOVANI Studio, I'm interested in your interior design services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-8 right-8 z-40 flex items-center gap-3 px-4 py-3 rounded-full shadow-lg transition-luxury group"
      style={{
        backgroundColor: "hsl(var(--gold))",
        color: "hsl(var(--charcoal))",
      }}
    >
      <MessageCircle size={24} />

      <span
        className={`font-sans text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-500 ${
          isHovered ? "max-w-[150px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
