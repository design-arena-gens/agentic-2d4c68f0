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
  metadataBase: new URL("https://agentic-2d4c68f0.vercel.app"),
  title: {
    default: "Accelio Lab ? AI Infrastructure Consulting",
    template: "%s ? Accelio Lab",
  },
  description:
    "Accelio Lab designs, deploys, and operates production-grade AI infrastructure for medium to large enterprises.",
  openGraph: {
    title: "Accelio Lab ? AI Infrastructure Consulting",
    description:
      "We build secure, scalable AI platforms: model gateways, RAG, observability, and governance.",
    url: "/",
    siteName: "Accelio Lab",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Accelio Lab",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accelio Lab ? AI Infrastructure Consulting",
    description:
      "We build secure, scalable AI platforms: model gateways, RAG, observability, and governance.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
