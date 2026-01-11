import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AINK Tech | Natasha AI - Medical Analysis Platform",
  description:
    "Advanced AI-powered medical analysis platform. Get comprehensive insights on allopathy medications, prescriptions, genetic analysis, and health analytics with Natasha, our intelligent AI assistant.",
  keywords: [
    "medical AI",
    "allopathy",
    "prescription analysis",
    "genetic analysis",
    "blood analysis",
    "neuroscience",
    "health analytics",
    "AINK Tech",
    "Natasha AI",
  ],
  authors: [{ name: "AINK Tech" }],
  openGraph: {
    title: "AINK Tech | Natasha AI - Medical Analysis Platform",
    description:
      "Advanced AI-powered medical analysis platform powered by Natasha AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased crt-flash`}
      >
        {/* Scanline Effect */}
        <div className="scanline" />

        {/* Noise Overlay */}
        <div className="noise-overlay fixed inset-0 pointer-events-none z-[60]" />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen pt-16 grid-pattern">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
