import { useEffect, useState } from "react";
import { Phone, ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {show && (
        <button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="grid h-11 w-11 place-items-center rounded-full bg-card text-foreground shadow-card transition-transform hover:scale-110"
          style={{ animation: "scale-in 0.3s ease-out both" }}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href="tel:+919558902799"
        aria-label="Call now"
        className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-card transition-transform hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href="https://wa.me/919558902799?text=Hi%20Aaradhya%20Classes%2C%20I%27d%20like%20to%20know%20more%20about%20your%20courses."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full text-white shadow-card transition-transform hover:scale-110"
        style={{ background: "#25D366", animation: "pulse-glow 2.4s ease-in-out infinite" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
