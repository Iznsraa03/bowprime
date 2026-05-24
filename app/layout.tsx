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
  title: "BowPrime — Your One-Stop Shopping Hub",
  description:
    "Discover premium sports gear, curated streetwear, and the latest tech accessories from three distinct stores — all from one place.",
  keywords: [
    "BowPrime",
    "sports gear",
    "streetwear",
    "tech accessories",
    "online shopping",
  ],
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
