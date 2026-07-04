import type { HTMLAttributes } from "react";
import { cx } from "./cx";

/** Placeholder container marking where future content will go. */
export function Slot({
  className,
  children = "empty slot",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx("slot", className)} {...props}>
      {children}
    </div>
  );
}
