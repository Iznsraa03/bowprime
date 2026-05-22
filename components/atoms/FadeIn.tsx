"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Transition delay in milliseconds — use for staggered animations.
   * Example: delay={100}, delay={200}, delay={300}
   */
  delay?: number;
  /**
   * Direction from which the element slides in.
   * - "up" (default): slides from below (translate-y-8 → 0)
   * - "left": slides from the right
   * - "none": only fades, no translate
   */
  direction?: "up" | "left" | "none";
  /** Intersection Observer threshold (0–1). Default 0.1 */
  threshold?: number;
}

const directionStyles: Record<string, string> = {
  up: "translate-y-8",
  left: "translate-x-8",
  none: "",
};

/**
 * FadeIn — wraps any content and animates it into view
 * when it enters the viewport, using IntersectionObserver.
 * Uses Tailwind transition utilities (transition-all, duration-700, ease-out).
 */
export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.1,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // Animate once only
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      className={cn(
        // Base: hidden state (opacity + translate)
        "opacity-0 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out",
        !isVisible && directionStyles[direction],
        // Visible state: fully opaque, no translate
        isVisible && "opacity-100 translate-y-0 translate-x-0",
        className
      )}
    >
      {children}
    </div>
  );
}
