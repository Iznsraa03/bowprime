"use client";

import { useState, useCallback } from "react";

/**
 * useFaq — manages single-open accordion state.
 * Only one item can be open at a time; clicking the same item closes it.
 */
export function useFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return { openIndex, toggle };
}
