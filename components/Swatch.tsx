import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { COLORS, RADII } from "@/lib/tokens";

/** Color swatch for the playbook token gallery. */
export function Swatch({ value, label }: { value: string; label: string }) {
  return (
    <Stack gap={1} align="stretch">
      <div
        style={{
          height: 44,
          background: value,
          borderRadius: RADII.sm,
          border: `1px solid ${COLORS.line}`,
        }}
      />
      <Text size="xs" color="muted">
        {label}
      </Text>
    </Stack>
  );
}
