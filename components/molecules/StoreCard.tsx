"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Store } from "@/src/types";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";

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
        // Glass base with neon blue border — idle state
        "group relative flex flex-col rounded-2xl p-px",
        "glass neon-border-blue",
        // skill: tailwindcss-animations — hover card lift + transition-all
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        // On hover: switch to purple glow + pulse animation
        "hover:neon-border-purple hover:animate-neon-pulse-purple",
        className
      )}
    >
      {/* Subtle top highlight line */}
      <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#00d4ff]/50 to-transparent" />

      <div className="flex flex-col flex-1 rounded-2xl p-6">
        {/* Store Logo + Badge */}
        <div className="mb-5 flex items-center gap-3">
          {/* Logo image — replaces Lucide icon per plan */}
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-[#00d4ff]/30 transition-all duration-300 group-hover:border-[#0066ff]/50 group-hover:[box-shadow:0_0_15px_rgba(0,102,255,0.4)]">
            <Image
              src={store.imageUrl}
              alt={`${store.name} logo`}
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
          <Badge label={store.tagline} />
        </div>

        {/* Name */}
        <h3 className="mb-2 text-lg font-semibold text-white">
          {store.name}
        </h3>

        {/* Description */}
        <p className="mb-6 flex-1 text-sm leading-relaxed text-white/50">
          {store.description}
        </p>

        {/* CTA — conditional: modal trigger vs direct link */}
        {store.hasTopUpModal ? (
          <button
            onClick={handleCta}
            className={cn(
              "inline-flex items-center justify-center gap-2 font-medium",
              "transition-all duration-300 ease-out cursor-pointer",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50",
              "glass neon-border-purple text-[#0066ff]",
              "hover:neon-glow-purple hover:text-white hover:bg-[rgba(0,102,255,0.12)]",
              // skill: tailwindcss-animations — active press effect
              "active:scale-[0.98]",
              "px-4 py-2 text-sm rounded-lg"
            )}
          >
            Top Up Sekarang
            <Icon
              name="MessageCircle"
              size={14}
              className="text-[#0066ff] transition-transform group-hover:translate-x-0.5"
            />
          </button>
        ) : (
          <Button href={store.url} variant="outline" size="sm">
            Visit Store
            <Icon
              name="ArrowUpRight"
              size={14}
              className="text-[#0066ff] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Button>
        )}
      </div>
    </div>
  );
}
