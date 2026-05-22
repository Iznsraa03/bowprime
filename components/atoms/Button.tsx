import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  // Glass panel + neon blue border + glow on hover
  primary: [
    "glass neon-border-blue text-[#00d4ff] font-semibold",
    "hover:neon-glow-blue hover:text-white hover:bg-[rgba(0,212,255,0.12)]",
    "active:scale-[0.98]",
  ].join(" "),

  // Subtle ghost — text only, neon blue on hover
  ghost: [
    "bg-transparent text-white/60",
    "hover:text-[#00d4ff] hover:[text-shadow:0_0_10px_rgba(0,212,255,0.6)]",
    "hover:bg-white/[0.04]",
  ].join(" "),

  // Glass with neon electric blue accent
  outline: [
    "glass neon-border-purple text-[#0066ff]",
    "hover:neon-glow-purple hover:text-white hover:bg-[rgba(0,102,255,0.12)]",
    "active:scale-[0.98]",
  ].join(" "),
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium",
    "transition-all duration-300 ease-out cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    const isInternal = href.startsWith("#") || href.startsWith("/");
    if (isInternal && !href.startsWith("#")) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
