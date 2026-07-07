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
  return (
    <Stack as="section" gap={4} background="surface" padding={8} radius="sm">
      <Stack gap={0}>
        <Text size="lg" color="black">
          {label}
        </Text>
        <hr />
      </Stack>
      <Stack gap={gap}>{children}</Stack>
    </Stack>
  );
}
