import { Store } from "@/src/types";

const stores: Store[] = [
  {
    id: "store-alpha",
    name: "Daboy Store",
    tagline: "Royal Dream Top-Up",
    description:
      "Top-up Royal Dream terpercaya. Proses cepat, harga terjangkau, dan langsung dikirim ke akun Anda.",
    url: "https://royaldaboy.net/",
    imageUrl: "/stores/daboy.jpeg",
    carouselUrl: "/carousel/1.jpeg",
    icon: "Store",
    hasTopUpModal: false,
  },
  {
    id: "store-beta",
    name: "Aloy Store",
    tagline: "Royal Dream Top-Up",
    description:
      "Jasa top-up Royal Dream by Aloy. Fast response, harga bersaing, dan transaksi aman via WhatsApp.",
    url: "#",
    imageUrl: "/stores/aloy.jpeg",
    carouselUrl: "/carousel/2.jpeg",
    icon: "Store",
    whatsappNumber: "+6285750028791",
    hasTopUpModal: true,
  },
  {
    id: "store-gamma",
    name: "Walid Store",
    tagline: "Royal Dream Top-Up",
    description:
      "Top-up Royal Dream via Walid Store. Terpercaya, proses instan, dan siap melayani 24 jam via WhatsApp.",
    url: "#",
    imageUrl: "/stores/walid.jpeg",
    carouselUrl: "/carousel/3.jpeg",
    icon: "Store",
    whatsappNumber: "+6288246609200",
    hasTopUpModal: true,
  },
];

export default stores;
