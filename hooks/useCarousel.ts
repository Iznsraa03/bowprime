"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * useCarousel — manages auto-advancing carousel state.
 * @param totalSlides Number of slides
 * @param interval   Auto-advance interval in ms (default 3000)
 */
export function useCarousel(totalSlides: number, interval = 3000) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, interval);
    return () => clearInterval(timer);
  }, [totalSlides, interval]);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % totalSlides) + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  return { activeIndex, goTo, next, prev };
}
