import type { HTMLAttributes } from "react";

export function Content({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  const cls = ["content", className].filter(Boolean).join(" ");
  return <article className={cls} {...props} />;
}
