"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import { equipment } from "@/lib/data";
import { ShoppingBag, Waves, Eye, Footprints, Circle, Square, Hand } from "lucide-react";

const equipmentIcons: Record<string, React.ElementType> = {
  "Gorro de Natación": Waves,
  "Gafas de Natación": Eye,
  "Aletas de Entrenamiento": Footprints,
  "Pull Buoy": Circle,
  "Tabla de Natación": Square,
  "Paletas": Hand,
};

export default function Equipment() {
  return (
    <section id="tienda" className="py-16 sm:py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Equipamiento"
          title="Equipo"
          titleHighlight="Profesional"
          description="Utilizamos y recomendamos el mejor equipamiento para tu entrenamiento."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {equipment.map((item, i) => {
            const Icon = equipmentIcons[item.name] || Waves;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="h-full p-4 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.10] hover:border-white/20 transition-all duration-300 group">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-water/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={20} className="text-water" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-white text-sm sm:text-base">{item.name}</h3>
                        <span className="text-xs text-water bg-water/10 px-2 py-1 rounded-md shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/70 mb-3 sm:mb-4">
                        {item.description}
                      </p>
                      <button className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary font-medium hover:text-primary-dark transition-colors">
                        <ShoppingBag size={14} />
                        Ver productos
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
