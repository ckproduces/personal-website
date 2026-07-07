import type { ReactNode } from "react";
import { Stack } from "@/components/Stack";

export function Section({
  label,
  gap = 5,
  children,
}: {
  label: string;
  /** gap between the section's rows, on the space scale */
  gap?: number;
  children: ReactNode;
}) {
  return (
    <Stack as="section" gap={4}>
      <Stack gap={0}>
        <p className="section__label">{label}</p>
        <hr />
      </Stack>
      <Stack gap={gap}>{children}</Stack>
    </Stack>
  );
}
