"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=600&q=80",
    alt: "Entrenamiento en piscina",
    span: "col-span-1 row-span-1 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80",
    alt: "Nadador en competencia",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    alt: "Equipo celebrando",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    alt: "Clase de natación Team Castores",
    span: "col-span-1 row-span-1 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80",
    alt: "Competencia",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600965962102-9d260a71890d?w=600&q=80",
    alt: "Piscina olímpica",
    span: "col-span-2 row-span-1",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number>(0);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Focus trap
  useEffect(() => {
    if (lightboxIndex !== null) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextImage();
      else prevImage();
    }
  };

  return (
    <section id="galeria" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Galería"
          title="Momentos"
          titleHighlight="Castores"
          description="Revive los mejores momentos de entrenamientos y competencias."
          light
        />

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${img.span}`}
              onClick={() => openLightbox(i)}
              onKeyDown={(e) => { if (e.key === "Enter") openLightbox(i); }}
              tabIndex={0}
              role="button"
              aria-label={`Ver imagen: ${img.alt}`}
            >
              <div
                className="w-full h-full min-h-[150px] sm:min-h-[200px] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${img.src})` }}
              />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={32}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              ref={lightboxRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
              onClick={closeLightbox}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              role="dialog"
              aria-modal="true"
              aria-label="Galería de imágenes"
            >
              <button
                ref={closeButtonRef}
                onClick={closeLightbox}
                aria-label="Cerrar galería"
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              >
                <X size={32} />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                aria-label="Imagen anterior"
                className="absolute left-4 text-white/70 hover:text-white p-2"
              >
                <ChevronLeft size={40} />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={galleryImages[lightboxIndex].src.replace("w=600", "w=1200")}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                aria-label="Siguiente imagen"
                className="absolute right-4 text-white/70 hover:text-white p-2"
              >
                <ChevronRight size={40} />
              </button>

              <div className="absolute bottom-6 text-white/50 text-sm">
                {lightboxIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
