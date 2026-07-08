"use client";

import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/components/sections/contact"));

export default function ContactoPage() {
  return <Contact />;
}
