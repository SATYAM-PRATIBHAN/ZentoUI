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
  title: "ZentoUI - Modern React Component Library",
  description:
    "ZentoUI is a modern, responsive React component library built for sleek and fast web interfaces. It offers beautifully designed, accessible, and customizable UI elements for effortless development.",
  keywords: [
    "React",
    "Component Library",
    "UI",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
  authors: [{ name: "ZentoUI Team" }],
  creator: "ZentoUI",
  publisher: "ZentoUI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ZentoUI - Modern React Component Library",
    description:
      "ZentoUI is a modern, responsive React component library built for sleek and fast web interfaces. It offers beautifully designed, accessible, and customizable UI elements for effortless development.",
    url: "https://zento-ui.vercel.app", // Update this with your actual domain
    siteName: "ZentoUI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "ZentoUI - Modern React Component Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZentoUI - Modern React Component Library",
    description:
      "ZentoUI is a modern, responsive React component library built for sleek and fast web interfaces. It offers beautifully designed, accessible, and customizable UI elements for effortless development.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "ZentoUI - Modern React Component Library",
      },
    ],
    creator: "@s_pratibhan",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
