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
  metadataBase: new URL("https://willmclaughlin.vercel.app"),
  title: "Will McLaughlin | GTM Strategy & Operations",
  description:
    "GTM Strategy & Operations leader specializing in pricing, commercial performance, revenue growth, and AI-enabled operating systems.",
  alternates: { canonical: "https://willmclaughlin.vercel.app" },
  openGraph: {
    title: "Will McLaughlin | GTM Strategy & Operations",
    description: "GTM Strategy & Operations leader specializing in pricing, commercial performance, revenue growth, and AI-enabled operating systems.",
    url: "https://willmclaughlin.vercel.app",
    siteName: "Will OS",
    images: [{
      url: "https://willmclaughlin.vercel.app/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Will McLaughlin — GTM Strategy & Operations",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will McLaughlin | GTM Strategy & Operations",
    description: "GTM Strategy & Operations leader specializing in pricing, commercial performance, revenue growth, and AI-enabled operating systems.",
    images: [{
      url: "https://willmclaughlin.vercel.app/opengraph-image",
      alt: "Will McLaughlin — GTM Strategy & Operations",
    }],
  },
  other: {
    "twitter:url": "https://willmclaughlin.vercel.app",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
