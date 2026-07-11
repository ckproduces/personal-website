import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { BlogRow } from "@/components/BlogRow";
import { SeeAllBlogs } from "@/components/SeeAllBlogs";
import type { PostMeta } from "@/lib/posts";

const MAX_VISIBLE = 5;

/**
 * Blog index, capped at five rows. When there are more, a "see all" control
 * opens a modal listing every post.
 */
export function Blogs({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return (
      <Text size="sm" color="faint">
        nothing published yet.
      </Text>
    );
  }

  const visible = posts.slice(0, MAX_VISIBLE);

  return (
    <Stack gap={4}>
      {visible.map((post) => (
        <BlogRow key={post.slug} post={post} />
      ))}

      {posts.length > MAX_VISIBLE ? <SeeAllBlogs posts={posts} /> : null}
    </Stack>
  );
}
