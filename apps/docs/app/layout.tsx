import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/ui/Navbar";
import CombinedNavigation from "./components/ui/CombinedNavigation";
import Footer from "./components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZentoUI",
  openGraph: {
    title: "ZentoUI - a modern component library",
    description: "ZentoUI - a modern component library",
    url: "", //to be audited
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "ZentoUI Open Graph Image",
      },
    ],
  },
  description:
    "ZentoUI is a modern, responsive React component library built for sleek and fast web interfaces. It offers beautifully designed, accessible, and customizable UI elements for effortless development.",
  twitter: {
    card: "summary_large_image",
    title: "ZentoUI - a modern component library",
    description: "ZentoUI - a modern component library",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "ZentoUI Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {/* Mobile/Tablet Navigation */}
        <div className="md:hidden">
          <CombinedNavigation />
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
