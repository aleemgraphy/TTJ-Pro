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
  title: "TTJ PRO NEAT HOME CARE & SUPPORT SERVICES",
  description:
    "TTJ PRO provides compassionate, personalized non-medical home care and in-home support for Bellevue and surrounding Puget Sound communities.",
  keywords: [
    "TTJ PRO",
    "non-medical home care",
    "Bellevue Washington",
    "companion care",
    "personal care",
    "in-home support",
  ],
  openGraph: {
    title: "TTJ PRO NEAT HOME CARE & SUPPORT SERVICES",
    description:
      "Compassionate, local care and support services for Bellevue and surrounding Puget Sound communities.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
