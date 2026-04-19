import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
    <html
      lang="en"
      className={spaceGrotesk.variable}
      suppressHydrationWarning
    >
      <body className={spaceGrotesk.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
