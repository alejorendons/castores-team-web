"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import { testimonials } from "@/lib/data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-16 sm:py-20 md:py-32 bg-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 lane-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-60 h-60 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-96 sm:h-96 bg-water/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimonios"
          title="Lo Que Dicen"
          titleHighlight="Nuestros Nadadores"
          description="Historias reales de personas que transformaron su vida con Team Castores."
          light
        />

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Quote size={36} className="mx-auto mb-4 sm:mb-6 text-primary/30" />

              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-6 sm:mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-gold fill-gold" />
                ))}
              </div>

              <div>
                <p className="font-semibold text-white text-lg">{testimonials[current].name}</p>
                <p className="text-white/60 text-sm">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-10">
            <button
              onClick={prev}
              aria-label="Testimonio anterior"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.12] transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-6 sm:w-8" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Siguiente testimonio"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.12] transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
