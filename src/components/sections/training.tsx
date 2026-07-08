"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { categories } from "@/lib/data";
import { Clock, MapPin, Users, ChevronRight } from "lucide-react";

export default function Training() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="disciplinas" className="relative">
      <div className="bg-secondary py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
          badge="Disciplinas"
          title="Nuestros"
          titleHighlight="Programas"
          description="Encuentra la disciplina perfecta para tu nivel y objetivos."
            light
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(i)}
                role="tab"
                aria-selected={activeCategory === i}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === i
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Category */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge variant="primary" className="mb-2">
                  {categories[activeCategory].ages}
                </Badge>
                <h3 className="text-2xl font-bold text-white">
                  {categories[activeCategory].name}
                </h3>
              </div>
            </div>

            <div>
              <p className="text-white/85 text-lg mb-8">
                {categories[activeCategory].description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white/80">
                  <Clock size={20} className="text-primary" />
                  <span>{categories[activeCategory].schedule}</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin size={20} className="text-primary" />
                  <span>Instalaciones Team Castores, El Retiro, Antioquia</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Users size={20} className="text-primary" />
                  <span>Grupos reducidos (máx. 8 nadadores)</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-primary">
                  {categories[activeCategory].price}
                </div>
                <Button size="lg" className="group">
                  Inscribirse Ahora
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
