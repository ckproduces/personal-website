import type { Metadata } from "next";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { allPosts, getPost, formatDate } from "@/lib/posts";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { Icon } from "@/components/Icon";

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
  return { title: post ? `${post.title} — çağrı okan` : "not found" };
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
      <NextLink
        href="/"
        className="hover-fade"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--space-1)",
          alignSelf: "flex-start",
          color: "var(--color-text-faint)",
          fontSize: "var(--text-sm)",
        }}
      >
        <Icon icon={ArrowLeft} size={15} /> çağrı okan
      </NextLink>

      <Stack as="article" gap={10}>
        <Stack gap={2}>
          <Text as="h1" size="3xl" style={{ letterSpacing: "-0.03em" }}>
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
    </Stack>
  );
}
