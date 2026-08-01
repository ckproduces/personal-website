import { connections } from "@/lib/site";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TWITTER,
  SITE_URL,
} from "@/lib/site-meta";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
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
    author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  };
}

export function articleJsonLd(post: {
  title: string;
  slug: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

export function blogPostMetadata(post: {
  title: string;
  slug: string;
  date: string;
}) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: `${post.title} · writing by ${SITE_NAME}`,
    alternates: { canonical: url },
    openGraph: {
      type: "article" as const,
      title: post.title,
      url,
      publishedTime: post.date,
      authors: [SITE_NAME],
    },
    twitter: {
      card: "summary" as const,
      title: post.title,
      creator: SITE_TWITTER,
    },
  };
}
