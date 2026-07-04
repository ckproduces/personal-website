import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Çağrı Okan",
  description: "Personal website — bio, projects, and writing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={schibstedGrotesk.variable}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={schibstedGrotesk.className}>
        <div className="page-shell">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
