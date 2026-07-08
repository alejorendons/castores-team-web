"use client";

import dynamic from "next/dynamic";

const PageLoader = dynamic(() => import("@/components/layout/page-loader"), { ssr: false });
const Navbar = dynamic(() => import("@/components/layout/navbar"), { ssr: false });
const Footer = dynamic(() => import("@/components/layout/footer"));
const WhatsAppButton = dynamic(() => import("@/components/layout/whatsapp-button"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/layout/back-to-top"), { ssr: false });

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
