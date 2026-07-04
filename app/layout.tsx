import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
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
    <html lang="en" className={onest.variable}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={onest.className}>
        <div className="page-shell">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
