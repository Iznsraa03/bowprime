import { cn } from "@/lib/utils";
import { icons, type LucideIcon as LucideIconType } from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 24, className }: IconProps) {
  const LucideIcon: LucideIconType | undefined =
    icons[name as keyof typeof icons];

  if (!LucideIcon) {
    return null;
  }

  return (
    <LucideIcon
      size={size}
      // Default to neon blue — overridable via className
      className={cn("text-[#00d4ff]", className)}
    />
  );
}
