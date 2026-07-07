"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/components/Link";
import { Modal } from "@/components/Modal";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { formatDate, type PostMeta } from "@/lib/posts";

const MAX_VISIBLE = 5;

function BlogRow({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} plain>
      <Stack direction="row" justify="space-between" align="baseline" gap={4}>
        <Text>{post.title}</Text>
        <Text size="sm" color="faint" style={{ whiteSpace: "nowrap" }}>
          {formatDate(post.date)}
        </Text>
      </Stack>
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
    return (
      <Text size="sm" color="faint">
        nothing published yet.
      </Text>
    );
  }

  return (
    <>
      {posts.slice(0, MAX_VISIBLE).map((post) => (
        <BlogRow key={post.slug} post={post} />
      ))}

      {posts.length > MAX_VISIBLE ? (
        <Button onClick={() => setOpen(true)} style={{ alignSelf: "flex-start" }}>
          <Text size="sm" color="muted">
            see all {posts.length}
          </Text>
          <Icon icon={ArrowRight} size={15} color="muted" />
        </Button>
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
