import { useEffect } from "react";
import { X } from "lucide-react";

export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string | null;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = src ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  if (!src) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] grid place-items-center bg-foreground/85 p-4 backdrop-blur-md"
      style={{ animation: "fade-in 0.2s ease-out both" }}
    >
      <button
        aria-label="Close"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-card text-foreground shadow-card"
      >
        <X className="h-5 w-5" />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-glow"
        style={{ animation: "scale-in 0.3s cubic-bezier(0.16,1,0.3,1) both" }}
      />
    </div>
  );
}
