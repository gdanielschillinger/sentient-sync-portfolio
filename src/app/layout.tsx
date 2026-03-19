import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentient Sync Engine — Daniel Schillinger",
  description: "AGI Cybersecurity Architecture & Security Automation. Built by G. Daniel Schillinger — Lead Systems Architect.",
  openGraph: {
    title: "Sentient Sync Engine",
    description: "Bridging autonomous AGI architecture with zero-trust cryptographic protocols.",
    url: "https://gdanielschillinger.com",
    siteName: "Sentient Sync Engine",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505]`}
      >
        {children}
      </body>
    </html>
  );
}
