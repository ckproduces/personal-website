import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import "./site.css";
import "./prose.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "çağrı okan",
  description: "personal website. bio, projects, and writing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interTight.variable}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={interTight.className}>
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}
