import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts, getPost, formatDate } from "@/lib/posts";

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
    <main>
      <Link href="/" className="post__back">
        ← çağrı okan
      </Link>
      <article>
        <h1 className="post__title">{post.title}</h1>
        <p className="post__date">{formatDate(post.date)}</p>
        <div className="prose">
          <Body />
        </div>
      </article>
    </main>
  );
}
