"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-60 h-60 sm:w-96 sm:h-96 bg-water/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Lane Lines Decoration */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-white"
            style={{ top: `${10 + i * 10}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-white/90 text-xs sm:text-sm font-medium">Club de Natación - El Retiro, Antioquia</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
          >
            Formando Campeones
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold">
              Dentro y Fuera del Agua
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
          >
            Más de 8 años formando nadadores de élite en natación, carreras, natación
            subacuática y triatlón con los más altos estándares de excelencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a href="#contacto">
              <Button size="lg" className="group w-full sm:w-auto">
                Únete al Equipo
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </a>
            <a href="#nosotros">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-secondary w-full sm:w-auto"
              >
                Conoce Más
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
