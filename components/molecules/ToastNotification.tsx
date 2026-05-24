"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/useToast";
import { ShoppingBag, X } from "lucide-react";

export default function ToastNotification() {
  const { visible, message, duration, dismiss, mounted } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if there is already a dialog open in the DOM
    const hasModal = !!document.querySelector('[role="dialog"]');
    setIsModalOpen(hasModal);

    const handleModalToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ open: boolean }>;
      setIsModalOpen(customEvent.detail?.open ?? false);
    };

    window.addEventListener("modal-toggle", handleModalToggle);
    return () => {
      window.removeEventListener("modal-toggle", handleModalToggle);
    };
  }, []);

  if (!mounted || !message || isModalOpen) return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 w-full max-w-sm px-4 md:px-0",
        visible ? "animate-toast-in" : "animate-toast-out pointer-events-none"
      )}
      role="status"
      aria-live="polite"
    >
      {/* Glass card + neon blue border + glow */}
      <div className="relative flex items-start gap-4 overflow-hidden rounded-2xl glass-strong neon-border-blue neon-glow-blue px-4 py-4">
        {/* Decorative top highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/60 to-transparent" />

        {/* Icon */}
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl glass neon-border-blue bg-[#00d4ff]/10">
          <ShoppingBag
            size={20}
            className="text-[#00d4ff] [filter:drop-shadow(0_0_4px_rgba(0,212,255,0.8))]"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold tracking-wider text-white/50">
              ID: {message.userId}
            </span>
            <span className="rounded-full bg-green-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-green-400 border border-green-500/20">
              Sukses
            </span>
          </div>
          <p className="mt-1 text-sm font-bold text-white tracking-wide">
            {message.product}
          </p>
          <div className="mt-1.5 inline-block rounded-full bg-[#00d4ff]/10 px-2 py-0.5 border border-[#00d4ff]/20">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#00d4ff]">
              {message.storeName}
            </p>
          </div>
        </div>

        {/* Dismiss */}
        <button
          onClick={dismiss}
          className="shrink-0 rounded-lg p-1.5 text-white/30 transition-colors hover:bg-white/[0.06] hover:text-[#00d4ff] cursor-pointer"
          aria-label="Dismiss notification"
        >
          <X size={16} />
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden bg-white/[0.03]">
          <div
            key={`${message.id}-${visible ? 'visible' : 'hidden'}`}
            className={cn(
              "h-full bg-gradient-to-r from-[#00d4ff] to-[#0066ff]",
              visible ? "w-full animate-toast-progress" : "w-0"
            )}
            style={{
              animationDuration: `${duration}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
