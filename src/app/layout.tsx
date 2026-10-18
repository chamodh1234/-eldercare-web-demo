import type { Metadata, Viewport } from "next";
import { Figtree, Noto_Sans_Sinhala, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sinhala = Noto_Sans_Sinhala({
  variable: "--font-sinhala",
  subsets: ["sinhala"],
  weight: ["400", "700"],
  preload: false,
});

const tamil = Noto_Sans_Tamil({
  variable: "--font-tamil",
  subsets: ["tamil"],
  weight: ["400", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: { default: "Gloocan", template: "%s · Gloocan" },
  description: "Book trusted, verified caregivers for your parents at home.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${figtree.variable} ${sinhala.variable} ${tamil.variable}`}>
      <body>{children}</body>
    </html>
  );
}
