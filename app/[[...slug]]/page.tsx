import { MarkdownPage } from "@/components/MarkdownPage";
import { SiteFooter } from "@/components/SiteFooter";
import {
  getMarkdownBySegments,
  getMarkdownDocsForRoutes,
  getSiteFooterDoc,
  pathToSlugParam,
} from "@/lib/markdown";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

/** Used when `pages/site-footer.md` is missing (e.g. deploy without content files). */
const DEFAULT_FOOTER_MARKDOWN = `built with 🌪️🧠

© 2026 çağrı okan. all rights reserved.
`;

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getMarkdownBySegments(slug ?? []);
  if (!doc) {
    return {};
  }
  return {
    title: doc.title,
  };
}

export function generateStaticParams() {
  const docs = getMarkdownDocsForRoutes();
  return docs.map((doc) => ({
    slug: pathToSlugParam(doc.path),
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const segments = slug ?? [];
  const doc = getMarkdownBySegments(segments);
  if (!doc) {
    notFound();
  }
  const footer = getSiteFooterDoc();
  return (
    <div className="page-shell">
      <MarkdownPage content={doc.body} />
      <SiteFooter content={footer?.body ?? DEFAULT_FOOTER_MARKDOWN} />
    </div>
  );
}
