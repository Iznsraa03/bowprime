import LandingLayout from "@/components/templates/LandingLayout";
import StoresSection from "@/components/organisms/StoresSection";
import Heading from "@/components/atoms/Heading";
import FadeIn from "@/components/atoms/FadeIn";

export const metadata = {
  title: "Toko Spesialis — BowPrime",
  description:
    "Pilih toko khusus Anda untuk top-up game mobile, beli voucher PC/konsol, atau dapatkan kartu hadiah hiburan.",
};

export default function StoresPage() {
  return (
    <LandingLayout>
      <div className="relative min-h-[70vh] flex flex-col justify-center py-20 lg:py-28 overflow-hidden">
        {/* Large neon mesh orbs */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[450px] w-[450px] rounded-full bg-[#00d4ff]/[0.05] blur-[110px]" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-[300px] w-[300px] rounded-full bg-[#0066ff]/[0.04] blur-[90px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8 text-center mb-10">
          <FadeIn className="mx-auto max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest neon-text-blue">
              Portal Kami
            </p>
            <Heading level={1} className="mb-4">
              Pilih Toko{" "}
              <span className="neon-text-gradient">Spesialis Anda</span>
            </Heading>
            <p className="text-base leading-relaxed text-white/55">
              Pilih salah satu toko khusus top-up digital kami di bawah ini. Anda akan diarahkan secara instan dan aman untuk menyelesaikan transaksi game atau streaming Anda.
            </p>
          </FadeIn>
        </div>

        {/* Store Grid Component */}
        <StoresSection />
      </div>
    </LandingLayout>
  );
}
