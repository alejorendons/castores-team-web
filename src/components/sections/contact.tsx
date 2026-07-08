"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import Button from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.message.trim()) newErrors.message = "El mensaje es requerido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <section id="contacto" className="py-16 sm:py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contacto"
          title="Hablemos"
          titleHighlight="Juntos"
          description="¿Tienes preguntas? Estamos aquí para ayudarte."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-5 sm:p-8 rounded-2xl bg-white/[0.06] border border-white/10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-white/70">Nos pondremos en contacto contigo pronto.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border bg-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                          errors.name ? "border-red-500" : "border-white/15"
                        }`}
                        placeholder="Tu nombre"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border bg-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                            errors.email ? "border-red-500" : "border-white/15"
                          }`}
                          placeholder="tu@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="+57 300 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Mensaje
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border bg-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${
                          errors.message ? "border-red-500" : "border-white/15"
                        }`}
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full group"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={18} className="mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                          Enviar Mensaje
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/10">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.06] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Teléfono</p>
                    <p className="font-medium text-white">{siteConfig.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.06] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-water/15 flex items-center justify-center">
                    <Mail size={18} className="text-water" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Email</p>
                    <p className="font-medium text-white">{siteConfig.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Ubicación</p>
                    <p className="font-medium text-white">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <div className="aspect-video bg-white/[0.04] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1234567890!2d-75.4747!3d6.5869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4a123456789abc%3A0x1234567890abcdef!2sEl%20Retiro%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Ubicación Team Castores"
                />
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola! Me gustaría información sobre Team Castores`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <p className="text-sm text-white/50">Respuesta inmediata</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
