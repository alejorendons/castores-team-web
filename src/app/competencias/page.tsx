"use client";

import dynamic from "next/dynamic";

const Competitions = dynamic(() => import("@/components/sections/competitions"));

export default function CompetenciasPage() {
  return <Competitions />;
}
