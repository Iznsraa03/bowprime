import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        // Glass base + neon blue border
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        "glass neon-border-blue",
        // Neon blue text with subtle glow
        "text-[#00d4ff]",
        "[text-shadow:0_0_8px_rgba(0,212,255,0.5)]",
        className
      )}
      style={{
        letterSpacing: "0.03em",
      }}
    >
      {label}
    </span>
  );
}
