import Heading from "@/components/atoms/Heading";
import FadeIn from "@/components/atoms/FadeIn";
import Icon from "@/components/atoms/Icon";

export default function AboutSection() {
  const features = [
    {
      id: "feature-speed",
      icon: "Zap",
      title: "Pengalihan Instan",
      description:
        "Tanpa antre. Rute tautan otomatis berkinerja tinggi kami mengarahkan Anda langsung ke pembayaran khusus dalam waktu kurang dari 2 detik.",
      accent: "cyan",
    },
    {
      id: "feature-security",
      icon: "ShieldCheck",
      title: "100% Aman & Legal",
      description:
        "Tenang saja. Semua voucher digital, kredit game, dan top-up bersumber dari jalur resmi, menjamin keamanan penuh untuk akun Anda.",
      accent: "electric",
    },
    {
      id: "feature-support",
      icon: "Headphones",
      title: "Dukungan Prioritas 24/7",
      description:
        "Butuh bantuan memvalidasi transaksi? Dukungan pelanggan kami beroperasi sepanjang waktu untuk memandu Anda menyelesaikan masalah apa pun.",
      accent: "sky",
    },
    {
      id: "feature-payment",
      icon: "Wallet",
      title: "Pembayaran Lokal",
      description:
        "Bayar dengan mudah menggunakan QRIS, e-wallet lokal Indonesia (Dana, GoPay, OVO), atau Virtual Account (VA) tanpa ribet.",
      accent: "cyan",
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden scroll-mt-20">
      {/* Background Neon Glow Orbs (Consistent Black & Blue) */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[#0066ff]/[0.04] blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-[300px] w-[300px] rounded-full bg-[#00d4ff]/[0.04] blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <FadeIn>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest neon-text-blue">
              Keunggulan BowPrime
            </p>
            <Heading level={2} className="mb-4">
              Tempat Teraman Terbaik untuk{" "}
              <span className="neon-text-gradient">Top-Up Game Anda</span>
            </Heading>
            <p className="text-base leading-relaxed text-white/55">
              BowPrime berfungsi sebagai portal aman dan mulus yang menjembatani Anda ke tiga platform spesialis. Kami mengoptimalkan keamanan, kenyamanan, dan kecepatan transaksi di bawah antarmuka cyberpunk yang canggih.
            </p>
          </FadeIn>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const isElectric = feature.accent === "electric";
            const isSky = feature.accent === "sky";
            
            // Choose border & hover animation styles dynamically (All blues)
            const cardBorderClass = isElectric 
              ? "neon-border-purple hover:animate-neon-pulse-purple hover:neon-border-blue" 
              : isSky
              ? "border-[#39b5ff]/25 hover:animate-neon-pulse-blue hover:neon-border-purple"
              : "neon-border-blue hover:animate-neon-pulse-blue hover:neon-border-purple";

            const iconTextClass = isElectric 
              ? "text-[#0066ff] group-hover:text-[#00d4ff] group-hover:[filter:drop-shadow(0_0_8px_rgba(0,212,255,0.6))]" 
              : isSky
              ? "text-[#39b5ff] group-hover:text-[#0066ff] group-hover:[filter:drop-shadow(0_0_8px_rgba(0,102,255,0.6))]"
              : "text-[#00d4ff] group-hover:text-[#0066ff] group-hover:[filter:drop-shadow(0_0_8px_rgba(0,102,255,0.6))]";

            const iconContainerBorder = isElectric
              ? "neon-border-purple group-hover:neon-border-blue"
              : isSky
              ? "border-[#39b5ff]/30 group-hover:neon-border-purple"
              : "neon-border-blue group-hover:neon-border-purple";

            return (
              <FadeIn key={feature.id} delay={index * 100}>
                <div
                  className={`group relative flex flex-col items-start rounded-2xl p-6 glass transition-all duration-300 hover:scale-[1.02] ${cardBorderClass}`}
                >
                  {/* Neon Top Highlight */}
                  <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />

                  {/* Icon Wrapper */}
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl glass transition-all duration-300 ${iconContainerBorder}`}
                  >
                    <Icon
                      name={feature.icon}
                      size={20}
                      className={`transition-all duration-300 ${iconTextClass}`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-bold text-white tracking-wide">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/50">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
