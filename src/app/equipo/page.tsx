"use client";

import dynamic from "next/dynamic";

const Team = dynamic(() => import("@/components/sections/team"));

export default function EquipoPage() {
  return <Team />;
}
