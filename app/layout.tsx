import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/Navbar";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_LOCALE,
  SITE_TWITTER,
  SITE_URL,
} from "@/lib/site-meta";
import { personJsonLd, webSiteJsonLd } from "@/lib/structured-data";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";
import "./prose.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  keywords: [
    "çağrı okan",
    "cagri okan",
    "ai",
    "entrepreneur",
    "istanbul",
    "dropoutt",
    "portfolio",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: SITE_TWITTER,
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [personJsonLd(), webSiteJsonLd()];

  return (
    <html lang="en" className={nunito.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={nunito.className}>
        <a href="#main-content" className="skip-link">
          skip to content
        </a>
        <Navbar />
        <div className="page-shell">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
