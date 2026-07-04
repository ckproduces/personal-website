import type { HTMLAttributes } from "react";
import { cx } from "./cx";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "neutral" | "main" | "secondary" | "outline";
};

export function Badge({
  variant = "neutral",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cx(
        "badge",
        variant !== "neutral" && `badge-${variant}`,
        className,
      )}
      {...props}
    />
  );
}
