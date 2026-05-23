"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Store } from "@/src/types";

interface StoreCardProps {
  store: Store;
  className?: string;
  /** Dipanggil saat CTA diklik untuk toko dengan modal top-up */
  onOpenModal?: (store: Store) => void;
}

export default function StoreCard({ store, className, onOpenModal }: StoreCardProps) {
  const handleCta = () => {
    if (store.hasTopUpModal && onOpenModal) {
      onOpenModal(store);
    }
  };

  return (
    <div
      className={cn(
        // Glass base dengan border neon biru — idle state
        "group relative flex flex-col items-center rounded-2xl p-px",
        "glass neon-border-blue",
        // skill: tailwindcss-animations — hover card lift + transition-all
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        // Saat hover: beralih ke pendaran ungu + animasi pulse
        "hover:neon-border-purple hover:animate-neon-pulse-purple",
        className
      )}
    >
      {/* Garis highlight tipis di bagian atas */}
      <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#00d4ff]/50 to-transparent" />

      <div className="flex flex-col items-center w-full rounded-2xl px-6 py-8 gap-5">
        {/* Logo Toko Bulat */}
        {/* skill: tailwindcss-animations — scale + neon glow on hover */}
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-[#00d4ff]/40 transition-all duration-300 group-hover:border-[#0066ff]/70 group-hover:[box-shadow:0_0_20px_rgba(0,102,255,0.5)] group-hover:scale-105">
          <Image
            src={store.imageUrl}
            alt={`${store.name} logo`}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>

        {/* Nama Toko */}
        <h3 className="text-base font-semibold text-white text-center">
          {store.name}
        </h3>

        {/* CTA — kondisional: pemicu modal vs link langsung */}
        <div className="flex flex-col items-center gap-2 w-full">
          {store.hasTopUpModal ? (
            <button
              onClick={handleCta}
              className={cn(
                "inline-flex w-full items-center justify-center gap-2 font-medium",
                "transition-all duration-300 ease-out cursor-pointer",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50",
                "glass neon-border-blue text-[#00d4ff]",
                "hover:neon-glow-blue hover:text-white hover:bg-[rgba(0,212,255,0.08)]",
                // skill: tailwindcss-animations — active press effect
                "active:scale-[0.98]",
                "px-4 py-2 text-sm rounded-xl"
              )}
            >
              Topup Sekarang
            </button>
          ) : (
            <a
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex w-full items-center justify-center gap-2 font-medium",
                "transition-all duration-300 ease-out cursor-pointer",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50",
                "glass neon-border-blue text-[#00d4ff]",
                "hover:neon-glow-blue hover:text-white hover:bg-[rgba(0,212,255,0.08)]",
                "active:scale-[0.98]",
                "px-4 py-2 text-sm rounded-xl"
              )}
            >
              Kunjungi
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
