import { Link } from "@/components/Link";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { formatDate, type PostMeta } from "@/lib/posts";

export function BlogRow({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      plain
      className="interactive-row"
      style={{ display: "block" }}
    >
      <Stack direction="row" justify="space-between" align="baseline" gap={4}>
        <Text>{post.title}</Text>
        <Text size="sm" color="faint" style={{ whiteSpace: "nowrap" }}>
          {formatDate(post.date)}
        </Text>
      </Stack>
    </Link>
  );
}
