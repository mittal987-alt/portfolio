import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aayush Sharma | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, Node.js, and cloud technologies. Building scalable web applications and stunning user interfaces.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Aayush Mittal" }],
  creator: "Aayush Mittal",
  openGraph: {
    title: "Aayush Mittal | Full-Stack Developer",
    description: "Building scalable web applications with cutting-edge technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Sharma | Full-Stack Developer",
    description: "Building scalable web applications with cutting-edge technologies.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
