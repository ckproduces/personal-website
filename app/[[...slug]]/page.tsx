import { MarkdownPage } from "@/components/MarkdownPage";
import { SiteFooter } from "@/components/SiteFooter";
import {
  getAllMarkdownDocs,
  getMarkdownBySegments,
  pathToSlugParam,
} from "@/lib/markdown";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
  const docs = getAllMarkdownDocs();
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
  return (
    <div className="page-shell">
      <MarkdownPage content={doc.body} />
      <SiteFooter />
    </div>
  );
}
