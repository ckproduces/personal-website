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
  title: "çağrı okan",
  description: "my personal website: what i've done so far",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content="My personal website showcasing my projects, portfolio, and experience."
        />
        <meta name="author" content="çağrı okan" />
        <meta
          name="keywords"
          content="portfolio, data science, machine learning, web development, çağrı okan, ytu"
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#3C5C99" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta property="og:title" content="çağrı okan — personal website" />
        <meta
          property="og:description"
          content="explore my projects, skills, and achievements."
        />
        <meta property="og:type" content="website" />
        <meta name="category" content="portfolio" />
        <meta name="content-type" content="personal website" />
        <meta property="og:url" content="https://cagriokan.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="çağrı okan — personal website" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://cagriokan.com/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
