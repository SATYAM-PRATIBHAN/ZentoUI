import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "ZentoUI",
  description:
    "ZentoUI is a modern, responsive React component library built for sleek and fast web interfaces. It offers beautifully designed, accessible, and customizable UI elements for effortless development.",
  openGraph: {
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
