"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import Badge from "@/components/ui/badge";
import { teamMembers } from "@/lib/data";
import { Award } from "lucide-react";

export default function Team() {
  return (
    <section id="equipo" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Equipo Técnico"
          title="Nuestros"
          titleHighlight="Entrenadores"
          description="Un equipo de profesionales dedicados a sacar lo mejor de cada nadador."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="h-full rounded-2xl overflow-hidden bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all duration-300 group">
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center bg-gray-800 group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge variant="primary" className="mb-2">{member.role}</Badge>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="text-sm text-white/70 mb-4">
                    {member.bio}
                  </p>

                  <div className="mb-3">
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">
                      Especialidad
                    </p>
                    <p className="text-sm text-primary">{member.specialty}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      Certificaciones
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {member.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="inline-flex items-center gap-1 text-xs bg-gold/10 text-gold px-2 py-1 rounded-md"
                        >
                          <Award size={10} />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
