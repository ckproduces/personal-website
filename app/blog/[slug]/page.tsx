import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts, getPost, formatDate } from "@/lib/posts";
import { articleJsonLd, blogPostMetadata } from "@/lib/structured-data";
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
  return blogPostMetadata(post);
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(post)),
        }}
      />
      <Stack as="main" id="main-content" gap={12}>
        <Stack as="article" gap={10}>
          <Stack gap={2}>
            <Text as="h1" size="3xl" weight="semibold">
              {post.title}
            </Text>
            <Text as="time" dateTime={post.date} size="sm" color="faint">
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
    </>
  );
}
