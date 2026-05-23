import Heading from "@/components/atoms/Heading";
import Button from "@/components/atoms/Button";
import ImageCarousel from "@/components/organisms/ImageCarousel";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden scroll-mt-20"
    >
      {/* Large neon orbs — decorative, behind content (Consistent Black & Blue theme) */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#00d4ff]/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-[#0066ff]/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-[#39b5ff]/[0.04] blur-[100px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Left — Copy */}
          <div className="flex flex-col items-start lg:col-span-5">
            {/* Pill badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full glass neon-border-blue px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00d4ff] animate-pulse [box-shadow:0_0_6px_rgba(0,212,255,0.9)]" />
              <span className="text-xs font-medium text-[#00d4ff] [text-shadow:0_0_8px_rgba(0,212,255,0.5)]">
                3 Toko Spesialis, Satu Pusat
              </span>
            </div>

            {/* Headline — neon tri-color gradient */}
            <Heading level={1} className="mb-6 leading-tight">
              Top-Up Game{" "}
              <span className="neon-text-gradient">
                Instan & Aman
              </span>
            </Heading>

            <p className="mb-10 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">
              Selamat datang di BowPrime, portal premium Anda untuk top-up digital instan. Akses tiga toko khusus kami untuk game mobile, voucher PC/konsol, dan kartu hadiah hiburan.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/stores" size="lg">
                Jelajahi Toko
              </Button>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex gap-8">
              {[
                { label: "Toko Spesialis", value: "3" },
                { label: "Game Didukung", value: "100+" },
                { label: "Tingkat Keberhasilan", value: "99.9%" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold neon-text-gradient">{stat.value}</p>
                  <p className="text-xs text-white/40 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Carousel with glass frame */}
          <div className="relative w-full lg:col-span-7">
            {/* Outer neon glow ring (Black & Blue Theme) */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#00d4ff]/20 via-[#0066ff]/10 to-[#39b5ff]/15 blur-xl" />
            <div className="relative rounded-2xl glass neon-border-blue overflow-hidden">
              <ImageCarousel />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
