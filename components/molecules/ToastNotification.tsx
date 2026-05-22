"use client";

import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/useToast";
import { ShoppingBag, X } from "lucide-react";

export default function ToastNotification() {
  const { visible, message, dismiss, mounted } = useToast();

  if (!mounted || !message) return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 max-w-sm",
        visible ? "animate-toast-in" : "animate-toast-out pointer-events-none"
      )}
      role="status"
      aria-live="polite"
    >
      {/* Glass card + neon blue border + glow */}
      <div className="relative flex items-start gap-3 rounded-2xl glass-strong neon-border-blue neon-glow-blue px-4 py-3">
        {/* Decorative top highlight */}
        <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#00d4ff]/60 to-transparent" />

        {/* Icon */}
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl glass neon-border-blue">
          <ShoppingBag
            size={16}
            className="text-[#00d4ff] [filter:drop-shadow(0_0_4px_rgba(0,212,255,0.8))]"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white">{message.message}</p>
          <p className="mt-0.5 text-xs text-[#00d4ff]/60">
            from {message.storeName}
          </p>
        </div>

        {/* Dismiss */}
        <button
          onClick={dismiss}
          className="mt-0.5 shrink-0 rounded-lg p-1 text-white/30 transition-colors hover:bg-white/[0.06] hover:text-[#00d4ff] cursor-pointer"
          aria-label="Dismiss notification"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
