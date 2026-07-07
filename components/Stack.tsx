import type { CSSProperties, ElementType, ReactNode } from "react";
import { COLORS, RADII, space, type ColorToken, type RadiusToken } from "@/lib/tokens";

type StackProps = {
  /** element to render as — e.g. "main", "header", "section", "article" */
  as?: ElementType;
  /** gap between children, as a step on the 4-base space scale (→ --space-N) */
  gap?: number;
  direction?: "row" | "column";
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  wrap?: boolean;
  /** inner padding, as a step on the space scale */
  padding?: number;
  /** background fill, as a color token */
  background?: ColorToken;
  radius?: RadiusToken;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Record<string, unknown>;

/**
 * The layout primitive. A flex container whose spacing, padding, surface and
 * radius are all driven by design tokens — so layout is composed by nesting
 * Stacks with token props rather than writing bespoke CSS.
 */
export function Stack({
  as: Tag = "div",
  gap = 4,
  direction = "column",
  align,
  justify,
  wrap,
  padding,
  background,
  radius,
  className,
  style,
  children,
  ...rest
}: StackProps) {
  return (
    <Tag
      className={className}
      style={{
        display: "flex",
        flexDirection: direction,
        gap: space(gap),
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? "wrap" : undefined,
        padding: padding !== undefined ? space(padding) : undefined,
        background: background ? COLORS[background] : undefined,
        borderRadius: radius ? RADII[radius] : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
