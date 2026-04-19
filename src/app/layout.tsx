import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SacredGeometryBackground from "@/components/SacredGeometryBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aetheris Hub | Sovereign Intelligence",
  description: "High-resonance AI orchestration and quantum auditing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scanline-wisdom`}>
        <SacredGeometryBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
