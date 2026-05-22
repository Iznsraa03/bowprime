import { cn } from "@/lib/utils";
import { Testimonial } from "@/src/types";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl p-6",
        "glass neon-border-blue",
        "transition-all duration-500 hover:neon-border-purple",
        className
      )}
    >
      {/* Subtle top glow line */}
      <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent" />

      {/* Stars — neon blue/cyan */}
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={cn(
              i < testimonial.rating
                ? "fill-[#00d4ff] text-[#00d4ff] [filter:drop-shadow(0_0_4px_rgba(0,212,255,0.7))]"
                : "fill-white/10 text-white/10"
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="mb-6 flex-1 text-sm leading-relaxed text-white/65">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar — glass + blue border */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full glass neon-border-purple text-xs font-semibold text-[#0066ff] [text-shadow:0_0_8px_rgba(0,102,255,0.5)]">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{testimonial.author}</p>
          <p className="text-xs text-[#00d4ff]/70">{testimonial.storeName}</p>
        </div>
      </div>
    </div>
  );
}
