import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ToastNotification from "@/components/molecules/ToastNotification";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BowPrime Coin - Top Up Royal Dream Murah & Terpercaya",
  description:
    "Platform terpadu untuk top up koin emas Royal Dream murah, aman, dan instan. Bandingkan dan beli langsung dari tiga toko terpercaya — Daboy Store, Aloy Store, dan Walid Store.",
  keywords: [
    "BowPrime",
    "Top Up Royal Dream",
    "Royal Dream Coin",
    "Beli Koin Royal Dream",
    "Chip Royal Dream Murah",
    "Daboy Store",
    "Aloy Store",
    "Walid Store",
    "Royal Dream Top Up Instan",
  ],
  openGraph: {
    title: "BowPrime Coin - Top Up Royal Dream Murah & Terpercaya",
    description:
      "Platform terpadu untuk top up koin emas Royal Dream murah, aman, dan instan. Bandingkan dan beli langsung dari tiga toko terpercaya — Daboy Store, Aloy Store, dan Walid Store.",
    url: "https://bowprime.id",
    siteName: "BowPrime",
    images: [
      {
        url: "/logo/logo.jpeg",
        width: 800,
        height: 600,
        alt: "BowPrime Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BowPrime Coin - Top Up Royal Dream Murah & Terpercaya",
    description:
      "Platform terpadu untuk top up koin emas Royal Dream murah, aman, dan instan. Bandingkan dan beli langsung dari tiga toko terpercaya — Daboy Store, Aloy Store, dan Walid Store.",
    images: ["/logo/logo.jpeg"],
  },
};

import Aurora from "@/components/atoms/Aurora";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white relative">
        {/* Fixed background component */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <Aurora
            colorStops={["#00d4ff", "#0066ff", "#39b5ff"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        <div className="screen-edge-glow" aria-hidden="true" />
        {children}
        {/* Global toast — mounted outside page content, persists across routes */}
        <ToastNotification />
      </body>
    </html>
  );
}
