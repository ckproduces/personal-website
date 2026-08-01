import type { ReactNode } from "react";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";

/**
 * A titled section, rendered as a soft-surface card. Composition only — the
 * card, label and rule are all Stack/Text with token props.
 */
export function Section({
  label,
  gap = 4,
  children,
}: {
  label: string;
  /** gap between the section's rows, on the space scale */
  gap?: number;
  children: ReactNode;
}) {
  const titleId = `section-${label.replace(/\s+/g, "-").replace(/[^a-z0-9-]/gi, "")}`;

  return (
    <Stack as="section" gap={2} radius="sm" aria-labelledby={titleId}>
      <Stack gap={0}>
        <Text as="h2" id={titleId} size="lg" color="black" weight="semibold">
          {label}
        </Text>
        <hr />
      </Stack>
      <Stack gap={gap}>{children}</Stack>
    </Stack>
  );
}
