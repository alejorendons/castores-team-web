"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories, disciplines, stats, testimonials } from "@/lib/data";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import { ChevronRight, Users, Award, Calendar, MapPin, Star, Quote } from "lucide-react";

const Hero = dynamic(() => import("@/components/sections/hero"));

const overviewCards = [
  {
    title: "Nuestra Historia",
    description: "Conoce al Team Castores, nuestros valores, misión y trayectoria desde 2017.",
    href: "/nosotros",
    icon: Users,
    color: "bg-primary/15 text-primary",
  },
  {
    title: "Disciplinas",
    description: "Natación, natación de carreras, natación subacuática y triatlón para todos los niveles.",
    href: "/disciplinas",
    icon: Award,
    color: "bg-water/15 text-water",
  },
  {
    title: "Equipo Técnico",
    description: "Entrenadores certificados internacionalmente con pasión por la enseñanza.",
    href: "/equipo",
    icon: Users,
    color: "bg-gold/15 text-gold",
  },
  {
    title: "Competencias",
    description: "Próximos eventos y calendario competitivo del club.",
    href: "/competencias",
    icon: Calendar,
    color: "bg-beaver/15 text-beaver",
  },
  {
    title: "Galería",
    description: "Los mejores momentos de entrenamientos y competencias.",
    href: "/galeria",
    icon: MapPin,
    color: "bg-water/15 text-water",
  },
  {
    title: "Contacto",
    description: "¿Tienes preguntas? Estamos aquí para ayudarte.",
    href: "/contacto",
    icon: MapPin,
    color: "bg-primary/15 text-primary",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">{stat.value}+</div>
                <div className="mt-2 text-xs sm:text-sm text-white/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <Badge variant="primary" className="mb-3 sm:mb-4">Navegación</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Explora <span className="text-primary">Team Castores</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
              Descubre todo lo que nuestro club tiene para ofrecerte.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {overviewCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={card.href}>
                  <div className="h-full p-5 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.10] hover:border-white/20 transition-all duration-300 group cursor-pointer">
                    <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <card.icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {card.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      Ver más
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines Preview */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <Badge variant="water" className="mb-3 sm:mb-4">Disciplinas</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Nuestros <span className="text-primary">Programas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href="/disciplinas">
                  <div className="h-full p-5 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.10] hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                    <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                    <Badge variant="primary" className="mb-3">{cat.ages}</Badge>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">{cat.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold">{cat.price}</span>
                      <ChevronRight size={16} className="text-white/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-16 sm:py-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 lane-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-60 h-60 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-96 sm:h-96 bg-water/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="gold" className="mb-6">Testimonio</Badge>
          <Quote size={36} className="mx-auto mb-4 text-primary/30" />
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed italic mb-6 sm:mb-8">
            &ldquo;{testimonials[0].text}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(testimonials[0].rating)].map((_, i) => (
              <Star key={i} size={18} className="text-gold fill-gold" />
            ))}
          </div>
          <p className="font-semibold text-white text-lg">{testimonials[0].name}</p>
          <p className="text-white/60 text-sm">{testimonials[0].role}</p>

          <div className="mt-8">
            <Link href="/contacto">
              <Button size="lg" className="group">
                Únete al Equipo
                <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
