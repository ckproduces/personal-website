import { connections } from "@/lib/site";
import {
  SITE_DESCRIPTION,
  SITE_LANG,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_TWITTER,
  SITE_URL,
} from "@/lib/site-meta";

const image = `${SITE_URL}${SITE_OG_IMAGE}`;

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    image,
    description: SITE_DESCRIPTION,
    jobTitle: "co-founder",
    worksFor: { "@type": "Organization", name: "dropoutt" },
    sameAs: connections.map((c) => c.href),
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: SITE_LANG,
    image,
    author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  };
}

export function articleJsonLd(post: {
  title: string;
  slug: string;
  date: string;
}) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    inLanguage: SITE_LANG,
    image,
    author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
    url,
    mainEntityOfPage: url,
  };
}

export function blogPostMetadata(post: {
  title: string;
  slug: string;
  date: string;
}) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const description = `${post.title} · writing by ${SITE_NAME}`;
  return {
    title: post.title,
    description,
    alternates: { canonical: url, languages: { en: url } },
    openGraph: {
      type: "article" as const,
      title: post.title,
      description,
      url,
      publishedTime: post.date,
      authors: [SITE_NAME],
      locale: "en_US",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: post.title,
      description,
      creator: SITE_TWITTER,
    },
  };
}
