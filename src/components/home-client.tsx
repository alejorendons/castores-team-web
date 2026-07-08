"use client";

import dynamic from "next/dynamic";

const PageLoader = dynamic(() => import("@/components/layout/page-loader"), { ssr: false });
const Navbar = dynamic(() => import("@/components/layout/navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/sections/hero"));
const About = dynamic(() => import("@/components/sections/about"));
const WhyChooseUs = dynamic(() => import("@/components/sections/why-choose-us"));
const Training = dynamic(() => import("@/components/sections/training"));
const Team = dynamic(() => import("@/components/sections/team"));
const Competitions = dynamic(() => import("@/components/sections/competitions"));
const Gallery = dynamic(() => import("@/components/sections/gallery"));
const Equipment = dynamic(() => import("@/components/sections/equipment"));
const Testimonials = dynamic(() => import("@/components/sections/testimonials"));
const FAQ = dynamic(() => import("@/components/sections/faq"));
const Contact = dynamic(() => import("@/components/sections/contact"));
const Footer = dynamic(() => import("@/components/layout/footer"));
const WhatsAppButton = dynamic(() => import("@/components/layout/whatsapp-button"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/layout/back-to-top"), { ssr: false });

export default function HomeClient() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Training />
        <Team />
        <Competitions />
        <Gallery />
        <Equipment />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
