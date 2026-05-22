"use client";

// skill: nextjs-shadcn — "use client" only at the smallest boundary that needs state
import { useState } from "react";
import StoreCard from "@/components/molecules/StoreCard";
import TopUpModal from "@/components/molecules/TopUpModal";
import FadeIn from "@/components/atoms/FadeIn";
import stores from "@/src/data/stores";
import { Store } from "@/src/types";

export default function StoresSection() {
  // State untuk mengontrol modal — null = tidak ada modal yang terbuka
  const [activeStore, setActiveStore] = useState<Store | null>(null);

  return (
    <section id="stores-grid" className="relative py-12 md:py-16 overflow-hidden">
      {/* Section neon orb accent */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#00d4ff]/[0.05] blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Store cards — staggered fade in (FadeIn uses IntersectionObserver) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((store, index) => (
            <FadeIn key={store.id} delay={index * 120}>
              <StoreCard
                store={store}
                onOpenModal={setActiveStore}
              />
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Top-up Modal — rendered saat activeStore tidak null */}
      {activeStore && (
        <TopUpModal
          store={activeStore}
          onClose={() => setActiveStore(null)}
        />
      )}
    </section>
  );
}
