import Heading from "@/components/atoms/Heading";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import FadeIn from "@/components/atoms/FadeIn";
import testimonials from "@/src/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden scroll-mt-14">
      {/* Section neon orb — left electric blue (Black & Blue Theme) */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#0066ff]/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header — fade in from below */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest neon-text-blue">
            Testimonials
          </p>
          <Heading level={2} className="mb-4">
            Loved by{" "}
            <span className="neon-text-gradient">Customers</span>
          </Heading>
          <p className="text-base leading-relaxed text-white/50">
            See what our customers have to say about their shopping experience
            across our three stores.
          </p>
        </FadeIn>

        {/* Testimonial grid — staggered fade in */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 100}>
              <TestimonialCard testimonial={testimonial} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
