"use client";

import { cn } from "@/lib/utils";
import { useCarousel } from "@/hooks/useCarousel";
import stores from "@/src/data/stores";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ImageCarousel() {
  const { activeIndex, next, prev, goTo } = useCarousel(stores.length, 3500);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slide container */}
      <div className="relative aspect-[2/1] w-full">
        {stores.map((store, i) => (
          <div
            key={store.id}
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-out",
              i === activeIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            )}
          >
            <Image
              src={store.carouselUrl || store.imageUrl}
              alt={store.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={i === 0}
            />
            {/* Dark gradient overlay from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020409]/90 via-[#020409]/20 to-transparent" />

            {/* Slide label with neon text */}
            <div className="absolute bottom-6 left-6">
              <p
                className="text-xs font-medium uppercase tracking-widest text-[#00d4ff]"
                style={{ textShadow: "0 0 10px rgba(0,212,255,0.7)" }}
              >
                {store.tagline}
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {store.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows — glass style */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full glass neon-border-blue text-[#00d4ff]/80 transition-all duration-200 hover:text-[#00d4ff] hover:neon-glow-blue cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full glass neon-border-blue text-[#00d4ff]/80 transition-all duration-200 hover:text-[#00d4ff] hover:neon-glow-blue cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dot indicators — neon active dot */}
      <div className="absolute bottom-3 right-6 flex gap-1.5">
        {stores.map((store, i) => (
          <button
            key={store.id}
            onClick={() => goTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
              i === activeIndex
                ? "w-6 bg-[#00d4ff] [box-shadow:0_0_8px_rgba(0,212,255,0.9)]"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
