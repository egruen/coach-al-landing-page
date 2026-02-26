import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coach Al | Adaptive AI Coach for Real-World Training",
  description: "Coach Al helps you train for real events with adaptive AI coaching. Get clear daily guidance based on training and recovery data. Join the waitlist.",
  keywords: ["AI coach", "training plan", "endurance training", "adaptive coaching", "running coach", "cycling coach"],
  authors: [{ name: "Coach Al" }],
  openGraph: {
    title: "Coach Al | Adaptive AI Coach for Real-World Training",
    description: "Coach Al helps you train for real events with adaptive AI coaching. Get clear daily guidance based on training and recovery data.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coach Al | Adaptive AI Coach for Real-World Training",
    description: "Coach Al helps you train for real events with adaptive AI coaching. Get clear daily guidance based on training and recovery data.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
