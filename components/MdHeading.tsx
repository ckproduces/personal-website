import { HeadingSquares } from "@/components/HeadingSquares";
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
  node: _node,
  ...rest
}: {
  level: Level;
  id?: string;
  children?: ReactNode;
  className?: string;
  node?: unknown;
} & Record<string, unknown>) {
  const cls = ["md-heading", className].filter(Boolean).join(" ");
  return createElement(
    TAGS[level],
    {
      id,
      ...rest,
      className: cls,
    },
    <HeadingSquares
      level={level}
      targetId={typeof id === "string" ? id : undefined}
    />,
    <span className="md-heading-text">{children}</span>,
  );
}
