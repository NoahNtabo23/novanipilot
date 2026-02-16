import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";// for displaying alerts
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      contactSchema.parse(formData);
      toast.success("Thank you! We'll be in touch soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.issues[0].message);
      }
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: "hsl(var(--warm-white))" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`font-serif text-4xl md:text-6xl mb-6 text-center uppercase tracking-wider ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
          style={{ color: "hsl(var(--charcoal))" }}
        >
          Get In Touch
        </h2>

        <p
          className={`font-sans text-xl md:text-2xl mb-6 text-center ${
            isVisible ? "fade-in-up delay-200" : "opacity-0"
          }`}
          style={{ color: "hsl(var(--charcoal))" }}
        >
          Elevate your space with refined, timeless design.
        </p>

        <div
          className={`font-sans text-base mb-4 text-center max-w-2xl mx-auto ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
          style={{ color: "hsla(var(--foreground), 0.7)" }}
        >
          <p className="mb-2">
            At NOVANI Studio, every project begins with a conversation.
          </p>
          <p className="mb-2">
            Share a few details below, and a member of our team will reach out
            within 24 hours.
          </p>
          <p className="italic">
            Your journey to an elevated, bespoke interior starts here.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-6 mb-12 ${
            isVisible ? "fade-in-up delay-400" : "opacity-0"
          }`}
        >
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            className="w-full px-4 py-4 border rounded-sm font-sans transition-luxury focus:outline-none"
            style={{
              backgroundColor: "hsl(var(--cream))",
              borderColor: "hsl(var(--border))",
            }}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full px-4 py-4 border rounded-sm font-sans transition-luxury focus:outline-none"
            style={{
              backgroundColor: "hsl(var(--cream))",
              borderColor: "hsl(var(--border))",
            }}
          />

          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-4 border rounded-sm font-sans transition-luxury focus:outline-none"
            style={{
              backgroundColor: "hsl(var(--cream))",
              borderColor: "hsl(var(--border))",
            }}
          />

          <div>
            <textarea
              rows={6}
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="w-full px-4 py-4 border rounded-sm font-sans transition-luxury resize-none focus:outline-none"
              style={{
                backgroundColor: "hsl(var(--cream))",
                borderColor: "hsl(var(--border))",
              }}
            />
            <p
              className="text-sm mt-2 font-sans"
              style={{ color: "hsla(var(--foreground), 0.6)" }}
            >
              Tell us a little about your project or the space you'd like
              transformed.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-6 text-base font-medium transition-luxury"
            style={{
              backgroundColor: "hsl(var(--gold))",
              color: "hsl(var(--charcoal))",
            }}
          >
            Request a Consultation
          </button>
        </form>

        {/* Direct contact */}
        <div
          className={`pt-12 ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
          style={{ borderTop: "1px solid hsl(var(--border))" }}
        >
          <p
            className="font-sans text-lg mb-6 text-center"
            style={{ color: "hsl(var(--charcoal))" }}
          >
            Prefer a direct chat?
          </p>

          <div
            className="space-y-4 text-center font-sans"
            style={{ color: "hsla(var(--foreground), 0.7)" }}
          >
            <p>
              <a
                href="https://wa.me/254797376009"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-opacity hover:opacity-80"
                style={{ color: "hsl(var(--gold))" }}
              >
                Chat with us on WhatsApp
              </a>
            </p>

            <p>
              Email us at{" "}
              <a
                href="mailto:hello@novanistudio.com"
                style={{ color: "hsl(var(--gold))" }}
              >
                hello@novanistudio.com
              </a>
            </p>

            <p>
              Call us at{" "}
              <a
                href="tel:+254750850551"
                style={{ color: "hsl(var(--gold))" }}
              >
                +254 750 850 551
              </a>
            </p>
          </div>

          <p
            className="text-sm text-center mt-8 italic"
            style={{ color: "hsla(var(--foreground), 0.6)" }}
          >
            Your information is kept strictly confidential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
