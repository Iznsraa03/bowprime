import Image from "next/image";
import Button from "@/components/atoms/Button";
import Link from "next/link";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      {/* ==============================
          Navbar — strong glass + neon scan line
          ============================== */}
      <header className="fixed top-0 z-40 w-full bg-transparent">
        {/* Animated scan line at bottom of navbar */}
        <div className="neon-scan-line" />

        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* skill: nextjs-shadcn — use Next.js <Image /> for optimised local assets */}
            <div className="relative h-8 w-8 overflow-hidden rounded-lg [box-shadow:0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 group-hover:[box-shadow:0_0_25px_rgba(0,102,255,0.6)]">
              <Image
                src="/logo/logo.jpeg"
                alt="BowPrime Logo"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <span className="text-base font-semibold text-white tracking-tight">
              Bow<span className="neon-text-gradient">Prime</span>
            </span>
          </Link>

          {/* Nav links */}
          <div className="hidden items-center gap-8 md:flex">
            {[
              { label: "Keunggulan", href: "/#about" },
              { label: "Testimoni", href: "/#testimonials" },
              { label: "FAQ", href: "/#faq" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 transition-all duration-200 hover:text-[#00d4ff] hover:[text-shadow:0_0_10px_rgba(0,212,255,0.5)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Button href="/stores" size="sm">
            Mulai Sekarang
          </Button>
        </nav>
      </header>

      {/* ==============================
          Main Content
          ============================== */}
      <main className="pt-14">{children}</main>

      {/* ==============================
          Footer
          ============================== */}
      <footer className="relative border-t border-white/[0.06] py-12 overflow-hidden">
        {/* Footer top glow accent (Black & Blue Theme) */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-64 bg-gradient-to-r from-transparent via-[#0066ff]/60 to-transparent" />
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-20 w-64 bg-[#0066ff]/[0.06] blur-2xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="relative h-7 w-7 overflow-hidden rounded-lg">
                <Image
                  src="/logo/logo.jpeg"
                  alt="BowPrime Logo"
                  fill
                  className="object-cover"
                  sizes="28px"
                />
              </div>
              <span className="text-sm font-semibold text-white">
                Bow<span className="neon-text-gradient">Prime</span>
              </span>
            </div>

            {/* Footer links */}
            <div className="flex gap-6">
              {["Privasi", "Ketentuan", "Kontak"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs text-white/30 transition-colors hover:text-[#00d4ff]"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/20">
              &copy; {new Date().getFullYear()} BowPrime. Hak cipta dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
