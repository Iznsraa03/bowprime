// ===========================
// BowPrime — Type Definitions
// ===========================

export interface Store {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  imageUrl: string;
  carouselUrl?: string;
  icon: string; // lucide icon name
  /** Nomor WhatsApp tanpa spasi/tanda baca, cth: "+6285750028791" */
  whatsappNumber?: string;
  /** Jika true, klik CTA akan membuka modal top-up alih-alih redirect langsung */
  hasTopUpModal?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  avatar: string;
  rating: number; // 1–5
  quote: string;
  storeName: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ToastMessage {
  id: string;
  message: string;
  storeName: string;
}
