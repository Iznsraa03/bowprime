"use client";

import Heading from "@/components/atoms/Heading";
import FaqItem from "@/components/molecules/FaqItem";
import FadeIn from "@/components/atoms/FadeIn";
import { useFaq } from "@/hooks/useFaq";
import faqs from "@/src/data/faqs";

export default function FaqSection() {
  const { openIndex, toggle } = useFaq();

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden scroll-mt-14">
      {/* Neon orb — bottom sky blue (Black & Blue Theme) */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[500px] rounded-full bg-[#39b5ff]/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section header — fade in from below */}
        <FadeIn className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest neon-text-blue">
            FAQ
          </p>
          <Heading level={2} className="mb-4">
            Frequently Asked{" "}
            <span className="neon-text-gradient">Questions</span>
          </Heading>
          <p className="text-base leading-relaxed text-white/50">
            Everything you need to know about BowPrime and our stores.
          </p>
        </FadeIn>

        {/* Accordion container — fade in slightly after header */}
        <FadeIn delay={150}>
          <div className="relative rounded-2xl glass neon-border-blue overflow-hidden">
            {/* Top highlight line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/50 to-transparent" />

            <div className="relative px-6">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openIndex === index}
                  onToggle={() => toggle(index)}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
