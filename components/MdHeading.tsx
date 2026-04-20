import { HeadingLink } from "@/components/HeadingLink";
import { createElement, type ReactNode } from "react";

type Level = 1 | 2 | 3 | 4 | 5 | 6;

const TAGS: Record<Level, "h1" | "h2" | "h3" | "h4" | "h5" | "h6"> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

export function MdHeading({
  level,
  id,
  children,
  className,
  spaced,
  node: _node,
  ...rest
}: {
  level: Level;
  id?: string;
  children?: ReactNode;
  className?: string;
  spaced?: boolean;
  node?: unknown;
} & Record<string, unknown>) {
  const cls = ["md-heading", spaced && "md-heading--spaced", className]
    .filter(Boolean)
    .join(" ") || undefined;
  return createElement(
    TAGS[level],
    {
      id,
      ...rest,
      className: cls,
    },
    <>
      <span className="md-heading__label">{children}</span>
      <HeadingLink targetId={typeof id === "string" ? id : undefined} />
    </>,
  );
}
