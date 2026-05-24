"use client";

import { useState, useEffect, useCallback } from "react";
import toastMessages from "@/src/data/toasts";

/**
 * useToast — manages toast notification visibility and message rotation.
 * Shows a random toast on mount, auto-dismisses after `duration` ms,
 * then cycles to a new toast after `cooldown` ms.
 */
export function useToast(duration = 3000, cooldown = 2000) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0); // Deterministic initial state for SSR

  const dismiss = useCallback(() => setVisible(false), []);

  useEffect(() => {
    setMounted(true);
    // Set random initial message on client
    setMessageIndex(Math.floor(Math.random() * toastMessages.length));

    // Initial delay before first toast appears
    const mountDelay = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(mountDelay);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (!visible) {
      // After dismissal, show next toast after cooldown
      const nextTimer = setTimeout(() => {
        setMessageIndex(
          (prev) => (prev + 1) % toastMessages.length
        );
        setVisible(true);
      }, cooldown);
      return () => clearTimeout(nextTimer);
    }

    // Auto-dismiss after duration
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(hideTimer);
  }, [visible, duration, cooldown, mounted]);

  return {
    mounted,
    visible,
    message: toastMessages[messageIndex],
    duration,
    dismiss,
  };
}
