import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts, getPost, formatDate } from "@/lib/posts";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "not found" };

  return {
    title: post.title,
    openGraph: {
      type: "article",
      title: post.title,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { Body } = post;

  return (
    <Stack as="main" gap={12}>
      <Stack as="article" gap={10}>
        <Stack gap={2}>
          <Text as="h1" size="3xl">
            {post.title}
          </Text>
          <Text as="p" size="sm" color="faint">
            {formatDate(post.date)}
          </Text>
        </Stack>
        <div className="prose">
          <Body />
        </div>
      </Stack>
      <Stack padding={20}>
        <img height={100} src="/logo.svg" alt="senato website design" />
      </Stack>
    </Stack>
  );
}
