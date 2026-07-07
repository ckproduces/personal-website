import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { COLORS, type ColorToken } from "@/lib/tokens";

type IconProps = {
  icon: LucideIcon;
  size?: number;
  color?: ColorToken;
  strokeWidth?: number;
  style?: CSSProperties;
};

/** Thin wrapper over lucide-react icons so color comes from a token. */
export function Icon({
  icon: Glyph,
  size = 18,
  color = "faint",
  strokeWidth = 2,
  style,
}: IconProps) {
  return (
    <Glyph
      size={size}
      color={COLORS[color]}
      strokeWidth={strokeWidth}
      style={style}
      aria-hidden
    />
  );
}
