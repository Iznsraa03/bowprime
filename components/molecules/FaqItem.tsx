import { cn } from "@/lib/utils";
import { FAQ } from "@/src/types";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqItem({ faq, isOpen, onToggle }: FaqItemProps) {
  return (
    <div
      className={cn(
        "border-b border-white/[0.06] last:border-b-0 transition-colors duration-300",
        // Left neon indicator when open
        isOpen && "border-b-[#00d4ff]/20"
      )}
    >
      {/* Left neon accent bar — visible when open */}
      <div
        className={cn(
          "absolute left-0 top-0 w-0.5 h-full rounded-full transition-all duration-300 pointer-events-none",
          isOpen
            ? "bg-[#00d4ff] [box-shadow:0_0_8px_rgba(0,212,255,0.8)]"
            : "bg-transparent"
        )}
        style={{ position: "absolute" }}
      />

      {/* Question row */}
      <button
        onClick={onToggle}
        className="relative flex w-full cursor-pointer items-center justify-between py-5 text-left transition-all duration-200"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "pr-4 text-sm font-medium sm:text-base transition-colors duration-200",
            isOpen
              ? "text-[#00d4ff] [text-shadow:0_0_10px_rgba(0,212,255,0.4)]"
              : "text-white/80 hover:text-white"
          )}
        >
          {faq.question}
        </span>

        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 transition-all duration-300",
            isOpen
              ? "rotate-180 text-[#00d4ff] [filter:drop-shadow(0_0_4px_rgba(0,212,255,0.8))]"
              : "text-white/30"
          )}
        />
      </button>

      {/* Answer */}
      <div
        className={cn(
          isOpen ? "animate-accordion-open" : "animate-accordion-close",
          !isOpen && "pointer-events-none"
        )}
        style={!isOpen ? { maxHeight: 0, opacity: 0 } : undefined}
      >
        <p className="pb-5 text-sm leading-relaxed text-white/50">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}
