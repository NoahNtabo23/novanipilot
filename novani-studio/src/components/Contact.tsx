import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import emailjs from "@emailjs/browser";

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
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
     //Handle form submission with email.js and validation using Zod
            const handleSubmit = async (e: React.FormEvent) => {
              e.preventDefault();

              try {
                contactSchema.parse(formData);

                await emailjs.send(
                  import.meta.env.VITE_EMAIL_SERVICE,
                  import.meta.env.VITE_EMAIL_TEMPLATE,
                  {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone || "Not provided",
                    message: formData.message,
                  },
                  import.meta.env.VITE_EMAIL_PUBLIC
                );

                toast.success("Thank you. Our studio will be in touch shortly.");
                setFormData({ name: "", email: "", phone: "", message: "" });

              } catch (error) {
                if (error instanceof z.ZodError) {
                  toast.error(error.issues[0].message);
                } else {
                  console.error(error);
                  toast.error("Something went wrong. Please try again.");
                }
              }
            };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: "hsl(var(--warm-white))" }}
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h2
          className={`font-serif text-5xl md:text-6xl tracking-wide mb-6 ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
          style={{ color: "hsl(var(--charcoal))" }}
        >
          Get In Touch
        </h2>

        {/* Subheading */}
        <p
          className={`text-xl md:text-2xl mb-8 ${
            isVisible ? "fade-in-up delay-200" : "opacity-0"
          }`}
          style={{ color: "hsl(var(--charcoal))" }}
        >
          Elevate your space with refined, timeless design.
        </p>

        {/* Description */}
        <div
          className={`space-y-3 mb-16 ${
            isVisible ? "fade-in-up delay-300" : "opacity-0"
          }`}
          style={{ color: "hsla(var(--foreground), 0.65)" }}
        >
          <p>Every project begins with a conversation.</p>
          <p>
            Share a few details below and our team will respond within 24 hours.
          </p>
          <p className="italic">
            Your journey to an elevated, bespoke interior starts here.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-8 ${
            isVisible ? "fade-in-up delay-400" : "opacity-0"
          }`}
        >
          {/* Inputs */}
          {["name", "email", "phone"].map((field, index) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              placeholder={
                field === "name"
                  ? "Full Name"
                  : field === "email"
                  ? "Email Address"
                  : "Phone Number (Optional)"
              }
              value={(formData as any)[field]}
              onChange={(e) =>
                setFormData({ ...formData, [field]: e.target.value })
              }
              className="w-full px-6 py-5 rounded-md border bg-[hsl(var(--cream))] border-[hsl(var(--border))] text-sm transition-all duration-500 focus:outline-none focus:border-[hsl(var(--gold))] focus:bg-white"
            />
          ))}

          {/* Message */}
          <div>
            <textarea
              rows={6}
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-6 py-5 rounded-md border bg-[hsl(var(--cream))] border-[hsl(var(--border))] text-sm resize-none transition-all duration-500 focus:outline-none focus:border-[hsl(var(--gold))] focus:bg-white"
            />

            <p
              className="text-sm mt-3"
              style={{ color: "hsla(var(--foreground), 0.55)" }}
            >
              Tell us about your space and design goals.
            </p>
          </div>

          {/* Button */}
          <button
              type="submit"
              className="
                w-full py-6 rounded-md text-sm tracking-widest font-semibold
                transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                hover:-translate-y-1 hover:shadow-xl
                active:-translate-y-1 active:shadow-xl
              "
              style={{
                backgroundColor: "hsl(var(--gold))",
                color: "hsl(var(--charcoal))",
              }}
            >
            Request a Consultation
          </button>

        </form>

        {/* Direct contact */}
        <div className="mt-20 pt-12 border-t border-[hsl(var(--border))]">
          <p
            className="text-lg mb-6"
            style={{ color: "hsl(var(--charcoal))" }}
          >
            Prefer a direct conversation?
          </p>

          <div
            className="space-y-3"
            style={{ color: "hsla(var(--foreground), 0.65)" }}
          >
            <p>
              <a
                href="https://wa.me/254742981681"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(var(--gold))] transition-colors duration-500"
              >
                WhatsApp: +254 742 981 681
              </a>
            </p>

            <p>
              <a
                href="mailto:novanistudio.ke@gmail.com"
                className="hover:text-[hsl(var(--gold))] transition-colors duration-500"
              >
                novanistudio.ke@gmail.com
              </a>
            </p>
          </div>

          <p
            className="text-sm mt-8 italic"
            style={{ color: "hsla(var(--foreground), 0.5)" }}
          >
            Your information is kept strictly confidential.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
