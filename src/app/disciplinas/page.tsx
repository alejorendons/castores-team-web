"use client";

import dynamic from "next/dynamic";

const Training = dynamic(() => import("@/components/sections/training"));

export default function DisciplinasPage() {
  return <Training />;
}
