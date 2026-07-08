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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
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
            <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold">8+</div>
              <div className="text-sm text-white/80">Años de excelencia</div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Nuestra Historia
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Team Castores nació de la pasión de un grupo de entrenadores y nadadores
              que creían que la natación, las carreras, la natación subacuática y el triatlón
              podían transformar vidas. Lo que comenzó como un pequeño grupo de entrenamiento
              en El Retiro, se ha convertido en uno de los clubes de natación más respetados
              de Antioquia.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Nuestra misión es formar nadadores completos: atletas de alto rendimiento,
              personas disciplinadas y ciudadanos ejemplares. Creemos que los valores que
              se aprenden en la piscina se llevan para toda la vida.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-white/[0.06] border border-white/10">
                <h4 className="font-semibold text-white mb-1">Misión</h4>
                <p className="text-sm text-white/70">
                  Formar campeones con valores, disciplina y excelencia deportiva.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.06] border border-white/10">
                <h4 className="font-semibold text-white mb-1">Visión</h4>
                <p className="text-sm text-white/70">
                  Ser el club de natación y deportes acuáticos de referencia en Antioquia y Colombia.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 py-12 border-y border-white/10">
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
          <h3 className="text-2xl font-bold text-center text-white mb-12">
            Nuestra Trayectoria
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-white/15" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-1/2 ${i % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <div className="bg-white/[0.06] rounded-xl p-4 border border-white/10">
                    <span className="text-primary font-bold">{item.year}</span>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-white/70">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-secondary" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
