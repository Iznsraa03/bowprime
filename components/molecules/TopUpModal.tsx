"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, MessageCircle, AlertTriangle, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Store } from "@/src/types";

// ─────────────────────────────────────────────────────────────────
// Price data — Royal Dream
// ─────────────────────────────────────────────────────────────────
const REGULAR_PACKAGES = [
  { label: "🪙 100M", price: "8K" },
  { label: "🪙 200M", price: "15K" },
  { label: "🪙 300M", price: "21K" },
  { label: "🪙 400M", price: "28K" },
  { label: "🪙 500M", price: "33K" },
  { label: "🪙 600M", price: "39K" },
  { label: "🪙 700M", price: "46K" },
  { label: "🪙 800M", price: "55K" },
  { label: "🪙 900M", price: "60K" },
  { label: "🪙 1B", price: "65K" },
];

const SPECIAL_PACKAGES = [
  { label: "⭐ 10B+", price: "64K/B" },
  { label: "⭐ 30B+", price: "63K/B" },
  { label: "⭐ 500B+", price: "62K/B" },
];

// ─────────────────────────────────────────────────────────────────
// Props
// ─────────────────────────────────────────────────────────────────
interface TopUpModalProps {
  store: Store;
  onClose: () => void;
}

// ─────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────
export default function TopUpModal({ store, onClose }: TopUpModalProps) {
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);
  const [gameId, setGameId] = useState("");
  const [userWhatsapp, setUserWhatsapp] = useState("");

  // Close on Escape key — skill: nextjs-shadcn leaf client boundary
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent background scroll while modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const canProceed = selectedPkg && gameId.trim().length > 0 && userWhatsapp.trim().length > 0;

  const handleWhatsApp = () => {
    if (!canProceed || !store.whatsappNumber) return;

    // Clean up emojis from the selected package to prevent encoding corruption in WhatsApp
    const cleanPkg = selectedPkg ? selectedPkg.replace(/[🪙⭐]/g, "").trim() : "";

    const msg = [
      `Halo ${store.name}! Saya ingin melakukan top-up Royal Dream:`,
      `- Paket: ${cleanPkg}`,
      `- Game ID: ${gameId.trim()}`,
      `- No WhatsApp: ${userWhatsapp.trim()}`,
      ``,
      `Saya menyetujui syarat & ketentuan yang berlaku:`,
      `- Wajib mengirim bukti transfer yang jelas (DETAIL)!!`,
      `- Kesalahan penulisan ID bukan tanggung jawab kami.`,
      `- Bukti tf lewat 30 menit tidak dikirim dianggap hangus!!`,
    ].join("\n");

    window.open(
      `https://wa.me/${store.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    /* ── Backdrop ─────────────────────────────────────────────── */
    <div
      className={cn(
        // Backdrop: full-screen dark overlay with motion-safe fade-in
        // skill: tailwindcss-animations — fade-in keyframe
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        "bg-black/80 backdrop-blur-sm",
        "motion-safe:animate-fade-in"
      )}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Top-up ${store.name}`}
    >
      {/* ── Modal Panel ──────────────────────────────────────── */}
      <div
        className={cn(
          // Panel: glassmorphic, neon-bordered, slide-up entrance
          // skill: tailwindcss-animations — slide-up keyframe
          "relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl p-px",
          "glass-strong neon-border-blue",
          "motion-safe:animate-slide-up"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle top highlight */}
        <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#00d4ff]/60 to-transparent" />

        <div className="rounded-2xl p-6 space-y-5">

          {/* ── Header ─────────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* Store logo */}
            <div className="relative h-12 w-12 shrink-0 rounded-xl overflow-hidden border border-[#00d4ff]/30">
              <Image
                src={store.imageUrl}
                alt={store.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-widest text-[#00d4ff]">
                Top-Up Royal Dream
              </p>
              <h2 className="text-lg font-bold text-white">{store.name}</h2>
            </div>
            {/* Close — hover:rotate-90 transition per skill */}
            <button
              onClick={onClose}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-lg",
                "glass neon-border-blue text-white/50",
                "hover:text-white hover:neon-glow-blue",
                // skill: tailwindcss-animations — rotate transform on hover
                "transition-all duration-200 hover:rotate-90",
                "cursor-pointer"
              )}
              aria-label="Tutup modal"
            >
              <X size={16} />
            </button>
          </div>

          {/* ── Regular Packages ──────────────────────────────── */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#00d4ff]/70">
              📌 List Royal Dream
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {REGULAR_PACKAGES.map((pkg) => {
                const key = `${pkg.label} = ${pkg.price}`;
                const isSelected = selectedPkg === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedPkg(isSelected ? null : key)}
                    className={cn(
                      "flex flex-col items-center rounded-xl p-3 text-center",
                      "transition-all duration-200 cursor-pointer",
                      // skill: tailwindcss-animations — scale + active:scale-95
                      "hover:scale-105 active:scale-95",
                      isSelected
                        ? "glass neon-border-blue neon-glow-blue text-white"
                        : "glass neon-border-blue text-white/60 hover:text-white"
                    )}
                  >
                    <span className="text-sm font-semibold">{pkg.label}</span>
                    <span
                      className={cn(
                        "text-xs font-bold",
                        isSelected ? "text-[#00d4ff]" : "text-[#00d4ff]/60"
                      )}
                    >
                      {pkg.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Special Packages ─────────────────────────────── */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#0066ff]/80">
              🎊 Special Price
            </p>
            <div className="grid grid-cols-3 gap-2">
              {SPECIAL_PACKAGES.map((pkg) => {
                const key = `${pkg.label} = ${pkg.price}`;
                const isSelected = selectedPkg === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedPkg(isSelected ? null : key)}
                    className={cn(
                      "flex flex-col items-center rounded-xl p-3 text-center",
                      "transition-all duration-200 cursor-pointer",
                      // skill: tailwindcss-animations — hover scale
                      "hover:scale-105 active:scale-95",
                      isSelected
                        ? "glass neon-border-purple neon-glow-purple text-white"
                        : "glass neon-border-purple text-white/60 hover:text-white"
                    )}
                  >
                    <span className="text-sm font-semibold">{pkg.label}</span>
                    <span
                      className={cn(
                        "text-xs font-bold",
                        isSelected ? "text-[#0066ff]" : "text-[#0066ff]/60"
                      )}
                    >
                      {pkg.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Game ID Input ─────────────────────────────────── */}
          <div>
            <label
              htmlFor="game-id"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/60"
            >
              🎮 Game ID
            </label>
            <input
              id="game-id"
              type="text"
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
              placeholder="Masukkan Game ID kamu..."
              className={cn(
                "w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25",
                "glass neon-border-blue",
                "focus:outline-none focus:ring-2 focus:ring-[#00d4ff]/50",
                // skill: tailwindcss-animations — transition on focus
                "transition-all duration-200"
              )}
            />
          </div>

          {/* ── User WhatsApp Input ───────────────────────────── */}
          <div>
            <label
              htmlFor="user-wa"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/60"
            >
              📱 No WhatsApp Kamu
            </label>
            <input
              id="user-wa"
              type="tel"
              value={userWhatsapp}
              onChange={(e) => setUserWhatsapp(e.target.value)}
              placeholder="Contoh: 08123456789"
              className={cn(
                "w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25",
                "glass neon-border-blue",
                "focus:outline-none focus:ring-2 focus:ring-[#00d4ff]/50",
                // skill: tailwindcss-animations — transition on focus
                "transition-all duration-200"
              )}
            />
          </div>

          {/* ── Terms & Conditions ────────────────────────────── */}
          <div className="rounded-xl border border-[#0066ff]/20 bg-[#0066ff]/[0.04] p-4 space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={14} className="text-[#00d4ff] shrink-0" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#00d4ff]">
                Syarat &amp; Ketentuan
              </p>
            </div>
            {[
              "Wajib mengirim bukti transfer yang jelas (DETAIL)!!",
              "Kesalahan penulisan ID bukan tanggung jawab kami.",
              "Bukti tf lewat 30 menit tidak dikirim dianggap hangus!!",
            ].map((tnc, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check size={14} className="mt-1 text-[#00d4ff] shrink-0" />
                <p className="text-xs leading-relaxed text-white/55">
                  {tnc.includes("DETAIL") ? (
                    <>
                      Wajib mengirim bukti transfer yang jelas (<strong className="text-white font-bold">DETAIL</strong>)!!
                    </>
                  ) : tnc.includes("ID") ? (
                    <>
                      Kesalahan penulisan <strong className="text-white font-bold">ID</strong> bukan tanggung jawab kami.
                    </>
                  ) : (
                    tnc
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* ── WhatsApp CTA ──────────────────────────────────── */}
          <button
            onClick={handleWhatsApp}
            disabled={!canProceed}
            className={cn(
              "w-full flex items-center justify-center gap-2.5 rounded-xl py-3.5 text-sm font-bold",
              "transition-all duration-300",
              // skill: tailwindcss-animations — scale on hover + active:scale-95
              "hover:scale-[1.02] active:scale-[0.98]",
              canProceed
                ? [
                    "bg-[#25D366] text-white",
                    "hover:[box-shadow:0_0_25px_rgba(37,211,102,0.4)]",
                    "cursor-pointer",
                  ].join(" ")
                : "glass neon-border-blue text-white/25 cursor-not-allowed"
            )}
          >
            <MessageCircle size={18} />
            {canProceed
              ? `Chat via WhatsApp — ${store.name}`
              : "Pilih paket & masukkan Game ID"}
          </button>
        </div>
      </div>
    </div>
  );
}
