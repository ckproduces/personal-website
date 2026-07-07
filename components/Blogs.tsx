"use client";

import { useState } from "react";
import { Link } from "@/components/Link";
import { Modal } from "@/components/Modal";
import { Stack } from "@/components/Stack";
import { formatDate, type PostMeta } from "@/lib/posts";

const MAX_VISIBLE = 5;

function BlogRow({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="writing__item">
      <span className="writing__title">{post.title}</span>
      <span className="writing__date">{formatDate(post.date)}</span>
    </Link>
  );
}

/**
 * Blog index, capped at five rows. When there are more, a "see all" control
 * opens a modal listing every post.
 */
export function Blogs({ posts }: { posts: PostMeta[] }) {
  const [open, setOpen] = useState(false);

  if (posts.length === 0) {
    return <p className="writing__empty">nothing published yet.</p>;
  }

  const visible = posts.slice(0, MAX_VISIBLE);

  return (
    <>
      {visible.map((post) => (
        <BlogRow key={post.slug} post={post} />
      ))}

      {posts.length > MAX_VISIBLE ? (
        <button
          type="button"
          className="see-more"
          onClick={() => setOpen(true)}
        >
          see all {posts.length} <span className="see-more__arrow">→</span>
        </button>
      ) : null}

      {open ? (
        <Modal title="all blogs" onClose={() => setOpen(false)}>
          <Stack gap={4}>
            {posts.map((post) => (
              <BlogRow key={post.slug} post={post} />
            ))}
          </Stack>
        </Modal>
      ) : null}
    </>
  );
}
