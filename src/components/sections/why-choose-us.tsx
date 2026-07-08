"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import {
  Award,
  Users,
  TrendingUp,
  Heart,
  Medal,
  Target,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Entrenadores Certificados",
    description: "Equipo con certificaciones internacionales FINA y amplia experiencia competitiva.",
    color: "bg-primary/15 text-primary",
  },
  {
    icon: Medal,
    title: "Formación Competitiva",
    description: "Programas diseñados para desarrollar el máximo potencial de cada nadador.",
    color: "bg-gold/15 text-gold",
  },
  {
    icon: Users,
    title: "Ambiente Familiar",
    description: "Un equipo que se apoya mutuamente y celebra cada logro juntos.",
    color: "bg-water/15 text-water",
  },
  {
    icon: TrendingUp,
    title: "Seguimiento Personalizado",
    description: "Planes de entrenamiento adaptados a las necesidades individuales.",
    color: "bg-beaver/15 text-beaver",
  },
  {
    icon: Heart,
    title: "Desarrollo Integral",
    description: "No solo formamos nadadores, formamos personas con valores sólidos.",
    color: "bg-primary/15 text-primary",
  },
  {
    icon: Target,
    title: "Alto Rendimiento",
    description: "Instalaciones de primer nivel y metodología de entrenamiento probada.",
    color: "bg-water/15 text-water",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="por-que-elegirnos" className="py-16 sm:py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="¿Por Qué Elegirnos?"
          title="La Diferencia"
          titleHighlight="Team Castores"
          description="Más que un club de natación, somos una familia comprometida con la excelencia en El Retiro, Antioquia."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="h-full p-4 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.10] hover:border-white/20 transition-all duration-300 group">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${reason.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
                >
                  <reason.icon size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
