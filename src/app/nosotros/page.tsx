"use client";

import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/sections/about"));

export default function NosotrosPage() {
  return <About />;
}
