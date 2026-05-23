"use client";

// skill: nextjs-shadcn — "use client" only when CountUp needs browser IntersectionObserver
import Heading from "@/components/atoms/Heading";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import FadeIn from "@/components/atoms/FadeIn";
import CountUp from "@/components/atoms/CountUp";
import testimonials from "@/src/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden scroll-mt-14">
      {/* Section neon orb — kiri electric blue (Tema Hitam & Biru) */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#0066ff]/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header section — fade in dari bawah */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest neon-text-blue">
            Testimoni
          </p>
          <Heading level={2} className="mb-4">
            Dicintai oleh{" "}
            <span className="neon-text-gradient">Pelanggan</span>
          </Heading>

          {/* ─── Blok Statistik CountUp ─── */}
          {/* skill: tailwindcss-animations — CountUp menggunakan spring animation dari motion/react */}
          <div className="mx-auto max-w-xs mb-8 mt-6">
            <div className="relative glass neon-border-blue rounded-2xl px-6 py-4 text-center transition-all duration-300 hover:neon-border-purple hover:-translate-y-0.5">
              {/* Garis highlight atas */}
              <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#00d4ff]/50 to-transparent" />
              <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-white/40">
                Total Transaksi Sukses
              </p>
              <div className="flex items-end justify-center gap-1">
                <span className="text-3xl font-bold neon-text-gradient tabular-nums">
                  <CountUp
                    from={0}
                    to={14250}
                    separator=","
                    direction="up"
                    duration={2.5}
                  />
                </span>
                <span className="mb-0.5 text-lg font-semibold text-[#00d4ff]">+</span>
              </div>
              <p className="mt-1 text-[10px] text-white/35">
                & terus bertambah setiap harinya
              </p>
            </div>
          </div>

          <p className="text-base leading-relaxed text-white/50">
            Lihat apa yang pelanggan kami katakan tentang pengalaman belanja mereka di ketiga toko kami.
          </p>
        </FadeIn>

        {/* ─── Baris Testimoni — Scroll Horizontal ─── */}
        {/*
          CSS Scroll Snap: snap-x snap-mandatory memastikan setiap kartu
          "mengunci" posisi di tengah saat pengguna selesai menggeser.
          Setiap kartu anak diberi snap-center.
          overflow-x-auto memungkinkan scroll ke kanan/kiri.
          scrollbar-thin/hide tersembunyi agar tampilan bersih.
        */}
        <div
          className="
            mt-6
            flex flex-row gap-5
            overflow-x-auto
            overflow-y-hidden
            touch-pan-x
            snap-x snap-mandatory
            pb-4
            /* Sembunyikan scrollbar di semua browser */
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {testimonials.map((testimonial, index) => (
            // snap-center: setiap kartu terkunci di tengah saat scroll
            <div key={testimonial.id} className="snap-center shrink-0 w-[300px] sm:w-[340px]">
              <FadeIn delay={index * 80}>
                <TestimonialCard testimonial={testimonial} />
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Hint scroll mobile */}
        <p className="mt-3 text-center text-xs text-white/25 md:hidden">
          Geser ke samping untuk melihat lebih banyak →
        </p>
      </div>
    </section>
  );
}
