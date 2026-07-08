"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { competitions } from "@/lib/data";
import { MapPin, Calendar, Trophy, ChevronRight } from "lucide-react";

export default function Competitions() {
  return (
    <section id="competencias" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Competencias"
          title="Próximos"
          titleHighlight="Eventos"
          description="Participa en las competencias más importantes del calendario nacional."
          light
        />

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Trophy, label: "Medallas", value: "120+" },
            { icon: Calendar, label: "Competencias", value: "35+" },
            { icon: MapPin, label: "Ciudades", value: "8" },
            { icon: Trophy, label: "Podios", value: "70+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/[0.06] border border-white/10"
            >
              <stat.icon size={24} className="mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {competitions.map((comp, i) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center gap-4 p-6 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.10] hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-4 md:w-48 shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <Calendar size={20} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">{comp.date}</p>
                  <Badge variant="primary">{comp.status}</Badge>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {comp.name}
                </h3>
                <div className="flex items-center gap-2 text-white/60 text-sm mt-1">
                  <MapPin size={14} />
                  <span>{comp.location}</span>
                </div>
              </div>

              <Button variant="ghost" size="sm" className="group/btn text-white/70 hover:text-white hover:bg-white/10">
                Detalles
                <ChevronRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
