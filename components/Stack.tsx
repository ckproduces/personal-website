import type { CSSProperties, ElementType, ReactNode } from "react";

type StackProps = {
  /** element to render as — e.g. "main", "header", "section", "article" */
  as?: ElementType;
  /** gap between children, as a step on the 4-base space scale (→ --space-N) */
  gap?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/**
 * Vertical layout primitive. Stacks its children in a column and controls the
 * space between them with a single token-driven `gap` — so spacing lives on the
 * parent, not as margins scattered across each child.
 */
export function Stack({
  as: Tag = "div",
  gap = 4,
  className,
  style,
  children,
}: StackProps) {
  return (
    <Tag
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: `var(--space-${gap})`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
