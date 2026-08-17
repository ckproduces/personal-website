import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/Navbar";
import {
  SITE_DESCRIPTION,
  SITE_LANG,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TWITTER,
  SITE_URL,
} from "@/lib/site-meta";
import { personJsonLd, webSiteJsonLd } from "@/lib/structured-data";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";
import "./prose.css";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
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
  verification: {
    google: "jGgRF7XCgSB404Y4ZHcePs7Rl_ra584JQajzEYLCjb0",
    other: {
      "msvalidate.01": "F6143E346FC77676C2CCF0CEB858F64E",
    },
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: SITE_TWITTER,
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
    <html lang={SITE_LANG} className={nunito.variable} suppressHydrationWarning>
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
