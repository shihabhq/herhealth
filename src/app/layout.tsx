import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Lora } from "next/font/google";
import { CartProvider } from "@/context/CartContext";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const _playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const _lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "heRhealth - Menstrual Blood Diagnostics",
  description:
    "Advanced health screening through menstrual blood biomarkers. Empowering women's health with innovative diagnostic technology.",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${_playfairDisplay.variable} ${_lora.variable}`}
    >
      <body className="font-sans antialiased bg-white text-neutral-900">
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
