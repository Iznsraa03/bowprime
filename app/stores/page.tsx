import LandingLayout from "@/components/templates/LandingLayout";
import StoresSection from "@/components/organisms/StoresSection";
import Heading from "@/components/atoms/Heading";
import FadeIn from "@/components/atoms/FadeIn";

export const metadata = {
  title: "Specialized Stores — BowPrime",
  description:
    "Choose your specialized store to top-up mobile games, buy PC/console vouchers, or grab entertainment gift cards.",
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
              Our Portals
            </p>
            <Heading level={1} className="mb-4">
              Choose Your{" "}
              <span className="neon-text-gradient">Specialized Store</span>
            </Heading>
            <p className="text-base leading-relaxed text-white/55">
              Select one of our specialized digital top-up stores below. You will be redirected instantly and securely to complete your gaming or streaming transactions.
            </p>
          </FadeIn>
        </div>

        {/* Store Grid Component */}
        <StoresSection />
      </div>
    </LandingLayout>
  );
}
