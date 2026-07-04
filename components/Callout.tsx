import type { HTMLAttributes } from "react";
import { cx } from "./cx";

type CalloutProps = HTMLAttributes<HTMLElement> & {
  variant?: "note" | "main" | "secondary";
  title?: string;
};

export function Callout({
  variant = "note",
  title,
  children,
  className,
  ...props
}: CalloutProps) {
  return (
    <aside
      className={cx(
        "callout",
        variant !== "note" && `callout-${variant}`,
        className,
      )}
      {...props}
    >
      {title && <strong className="callout-title">{title}</strong>}
      {children}
    </aside>
  );
}
