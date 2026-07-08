"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import { faqs } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Preguntas"
          titleHighlight="Frecuentes"
          description="Resolvemos las dudas más comunes sobre nuestros programas."
          light
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div
                className={`rounded-2xl border transition-all ${
                  openIndex === i
                    ? "bg-white/[0.08] border-primary/30 shadow-lg"
                    : "bg-white/[0.04] border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      const next = document.querySelector(`[data-faq-index="${i + 1}"]`);
                      if (next) (next as HTMLElement).focus();
                    }
                    if (e.key === "ArrowUp") {
                      e.preventDefault();
                      const prev = document.querySelector(`[data-faq-index="${i - 1}"]`);
                      if (prev) (prev as HTMLElement).focus();
                    }
                  }}
                  data-faq-index={i}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-2xl"
                >
                  <span className="font-semibold text-white text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-colors ${
                        openIndex === i ? "text-primary" : "text-white/40"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3 sm:pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
