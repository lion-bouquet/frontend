"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MainLayoutWrapper({ children }) {
  const router = useRouter();

  return (
    <>
      <ArrowLeft
        className="w-10 h-10 text-black mx-20 cursor-pointer"
        onClick={() => router.back()}
      />

      <div className="relative w-[375px] h-[812px] border-[12px] border-black rounded-[60px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-30" />
        <div className="absolute inset-0 z-0" />
        <div className="relative z-20 w-full h-full">{children}</div>
      </div>

      <ArrowRight
        className="w-10 h-10 text-black mx-20 cursor-pointer"
        onClick={() => window.history.forward()}
      />
    </>
  );
}
