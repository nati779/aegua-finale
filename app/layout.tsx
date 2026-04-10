import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AEGUA NEW CLUB — Emozioni che non dimentichi",
  description:
    "Il club più esclusivo della città. Serate indimenticabili, artisti internazionali, un'esperienza sensoriale unica.",
  keywords: ["nightclub", "club", "serate", "musica", "eventi", "aegua"],
  openGraph: {
    title: "AEGUA NEW CLUB",
    description: "Emozioni che non dimentichi",
    type: "website",
  },
};

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="grain-overlay bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
