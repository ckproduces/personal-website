import type { CSSProperties } from "react";
import { MaskIcon } from "@/components/MaskIcon";

/** Site star logo — one of the three intentional red marks. */
export function Logo({
  size = 62,
  style,
}: {
  size?: number;
  style?: CSSProperties;
}) {
  return (
    <MaskIcon
      src="/logo.svg"
      size={size}
      color="red"
      label="logo"
      selectAccent
      style={{
        marginBottom: "var(--space-2)",
        WebkitMaskPosition: "left center",
        maskPosition: "left center",
        ...style,
      }}
    />
  );
}
