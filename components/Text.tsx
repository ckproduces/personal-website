import type { CSSProperties, ElementType, ReactNode } from "react";
import {
  COLORS,
  text,
  weight,
  type ColorToken,
  type TextSize,
  type TextWeight,
} from "@/lib/tokens";

type TextProps = {
  as?: ElementType;
  size?: TextSize;
  color?: ColorToken;
  weight?: TextWeight;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Record<string, unknown>;

/**
 * Typography primitive. Every piece of text on the site goes through Text, so
 * size / color / weight are always expressed as tokens.
 */
export function Text({
  as: Tag = "span",
  size = "base",
  color = "text",
  weight: w,
  className,
  style,
  children,
  ...rest
}: TextProps) {
  return (
    <Tag
      className={className}
      style={{
        fontSize: text(size),
        color: COLORS[color],
        fontWeight: w ? weight(w) : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
