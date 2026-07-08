"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { values, timeline, stats } from "@/lib/data";
import SectionHeader from "@/components/ui/section-header";
import Card from "@/components/ui/card";
import { Target, Users, TrendingUp, Heart } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Target,
  Users,
  TrendingUp,
  Heart,
};

function StatCounter({ label, value }: { label: string; value: number }) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary">{count}+</div>
      <div className="mt-2 text-sm text-white/70 font-medium">{label}</div>
    </div>
  );
}

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="nosotros" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Sobre Nosotros"
          title="Conoce Nuestra"
          titleHighlight="Historia"
          description="Desde 2017, Team Castores ha sido el hogar de nadadores que buscan la excelencia en El Retiro, Antioquia."
          light
        />

        {/* Story */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20"
        >
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80')",
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-white rounded-2xl p-4 sm:p-6 shadow-xl">
              <div className="text-2xl sm:text-3xl font-bold">8+</div>
              <div className="text-xs sm:text-sm text-white/80">Años de excelencia</div>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Nuestra Historia
            </h3>
            <p className="text-white/80 leading-relaxed mb-4 text-sm sm:text-base">
              Team Castores nació de la pasión de un grupo de entrenadores y nadadores
              que creían que la natación, las carreras, la natación subacuática y el triatlón
              podían transformar vidas. Lo que comenzó como un pequeño grupo de entrenamiento
              en El Retiro, se ha convertido en uno de los clubes de natación más respetados
              de Antioquia.
            </p>
            <p className="text-white/80 leading-relaxed mb-6 text-sm sm:text-base">
              Nuestra misión es formar nadadores completos: atletas de alto rendimiento,
              personas disciplinadas y ciudadanos ejemplares. Creemos que los valores que
              se aprenden en la piscina se llevan para toda la vida.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.06] border border-white/10">
                <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Misión</h4>
                <p className="text-xs sm:text-sm text-white/70">
                  Formar campeones con valores, disciplina y excelencia deportiva.
                </p>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.06] border border-white/10">
                <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Visión</h4>
                <p className="text-xs sm:text-sm text-white/70">
                  Ser el club de natación y deportes acuáticos de referencia en Antioquia y Colombia.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-16 lg:mb-20 py-8 sm:py-12 border-y border-white/10">
          {stats.map((stat) => (
            <StatCounter key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, i) => {
            const Icon = iconMap[value.icon];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="text-center h-full bg-white/[0.06] border-white/10">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-white/70">{value.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-white mb-8 sm:mb-12">
            Nuestra Trayectoria
          </h3>
          <div className="relative">
            {/* Vertical line - visible on mobile, centered on desktop */}
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-white/15" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center mb-6 sm:mb-8 pl-10 sm:pl-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className={`w-full sm:w-1/2 ${i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"} text-left`}>
                  <div className="bg-white/[0.06] rounded-xl p-3 sm:p-4 border border-white/10">
                    <span className="text-primary font-bold text-sm sm:text-base">{item.year}</span>
                    <h4 className="font-semibold text-white text-sm sm:text-base">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-white/70">{item.description}</p>
                  </div>
                </div>
                {/* Dot - left on mobile, centered on desktop */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-2 sm:border-4 border-secondary" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
