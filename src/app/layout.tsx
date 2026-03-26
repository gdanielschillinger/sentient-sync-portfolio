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
  title: "G. Daniel Schillinger — AGI Cybersecurity Architect",
  description:
    "I built Visa's first in-house LLM from scratch. 37%→90% accuracy in 30 days. Now architecting the Sentient Sync Engine — AGI collusion detection aligned to OWASP LLM Top 10, NIST CSF, and IEEE. Featured at eMerge Americas, April 23, 2026.",
  keywords: [
    "AGI Security",
    "AI Security Engineer",
    "Cybersecurity Architect",
    "LLM Security",
    "OWASP LLM Top 10",
    "NIST CSF",
    "Agent Collusion Detection",
    "LangGraph",
    "Zero Trust",
    "GenAI Ambassador",
    "Sentient Sync Engine",
    "G. Daniel Schillinger",
  ],
  authors: [{ name: "G. Daniel Schillinger", url: "https://gdanielschillinger.com" }],
  creator: "G. Daniel Schillinger",
  metadataBase: new URL("https://gdanielschillinger.com"),
  openGraph: {
    type: "website",
    url: "https://gdanielschillinger.com",
    siteName: "G. Daniel Schillinger — AGI Cybersecurity Architect",
    title: "G. Daniel Schillinger — AGI Cybersecurity Architect",
    description:
      "Built Visa's first in-house LLM. 37%→90% accuracy in 30 days. Now building the Sentient Sync Engine — real-time AGI collusion detection. BS Cybersecurity (4.0 GPA). Featured at eMerge Americas, April 23, 2026.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "G. Daniel Schillinger — AGI Cybersecurity Architect",
    description:
      "Built Visa's first in-house LLM. 37%→90% accuracy in 30 days. Now building the Sentient Sync Engine — real-time AGI collusion detection. Featured at eMerge Americas, April 23, 2026.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
