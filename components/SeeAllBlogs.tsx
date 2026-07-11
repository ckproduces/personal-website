"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Modal } from "@/components/Modal";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { BlogRow } from "@/components/BlogRow";
import type { PostMeta } from "@/lib/posts";

/** Opens a modal with every blog post when the index exceeds the visible cap. */
export function SeeAllBlogs({ posts }: { posts: PostMeta[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} style={{ alignSelf: "flex-start" }}>
        <Text size="sm" color="muted">
          see all {posts.length}
        </Text>
        <Icon icon={ArrowRight} size={15} color="muted" />
      </Button>

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
