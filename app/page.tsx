import LandingLayout from "@/components/templates/LandingLayout";
import HeroSection from "@/components/organisms/HeroSection";
import AboutSection from "@/components/organisms/AboutSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import FaqSection from "@/components/organisms/FaqSection";

export default function Home() {
  return (
    <LandingLayout>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
    </LandingLayout>
  );
}
