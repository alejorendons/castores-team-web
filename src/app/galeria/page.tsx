"use client";

import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("@/components/sections/gallery"));

export default function GaleriaPage() {
  return <Gallery />;
}
