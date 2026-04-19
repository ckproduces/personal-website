import { MarkdownPage } from "@/components/MarkdownPage";
import {
  getAllMarkdownDocs,
  getMarkdownBySegments,
  pathToSlugParam,
} from "@/lib/markdown";
import { notFound } from "next/navigation";

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug?: string[] }>;
};

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
  return <MarkdownPage content={doc.body} />;
}
