import type { Metadata } from "next";
import { Link } from "@/components/Link";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";

export const metadata: Metadata = {
  title: "not found",
  description: "this page does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Stack as="main" id="main-content" gap={4}>
      <Text as="h1" size="3xl" weight="semibold">
        404
      </Text>
      <Text as="p" color="muted">
        this page does not exist.
      </Text>
      <Link href="/">back home</Link>
    </Stack>
  );
}
