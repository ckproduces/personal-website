import type { CSSProperties } from "react";
import { COLORS, type ColorToken } from "@/lib/tokens";

type MaskIconProps = {
  src: string;
  size?: number;
  color?: ColorToken;
  label?: string;
  /** preserve red (or other accent) when text-selected */
  selectAccent?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Renders an SVG as a CSS mask filled with a token color. Used for the site
 * logo and social logos so every mark shares one ink/red regardless of source.
 */
export function MaskIcon({
  src,
  size = 20,
  color = "muted",
  label,
  selectAccent = false,
  className,
  style,
}: MaskIconProps) {
  const cls = [selectAccent ? "select-accent" : undefined, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cls || undefined}
      style={{
        display: "block",
        width: size,
        height: size,
        backgroundColor: COLORS[color],
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        ...style,
      }}
    />
  );
}
