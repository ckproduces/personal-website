import type { CSSProperties, ReactNode } from "react";
import { Stack } from "@/components/Stack";
import { space } from "@/lib/tokens";

type ChipProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/**
 * Soft red pill used for project "visit" affordances. Hover and pressed states
 * live in globals.css (.chip) because inline style can't express :hover/:active.
 */
export function Chip({ children, className, style }: ChipProps) {
  return (
    <Stack
      className={`chip${className ? ` ${className}` : ""}`}
      radius="sm"
      direction="row"
      gap={1}
      align="center"
      style={{
        padding: `${space(1)} ${space(2)}`,
        marginTop: space(2),
        ...style,
      }}
    >
      {children}
    </Stack>
  );
}
