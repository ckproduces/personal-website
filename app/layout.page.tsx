import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "çağrı okan",
  description: "personal website — bio, projects, and writing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={hankenGrotesk.variable}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={hankenGrotesk.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
