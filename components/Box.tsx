import type { CSSProperties, HTMLAttributes } from "react";

type BoxProps = HTMLAttributes<HTMLDivElement> & {
  gap?: string | number;
  borderRadius?: string | number;
};

function toRem(value: string | number): string {
  if (typeof value === "number") {
    return `${value}rem`;
  }
  if (/^-?\d+(\.\d+)?$/.test(value.trim())) {
    return `${value.trim()}rem`;
  }
  return value;
}

export function Box({
  gap = 1,
  borderRadius = 0.5,
  style,
  children,
  ...props
}: BoxProps) {
  const boxStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: toRem(gap),
    borderRadius: toRem(borderRadius),
    backgroundColor: "color-mix(in srgb, var(--color-base) 30%, transparent)",
    padding: "1rem",
    ...style,
  };

  return (
    <div style={boxStyle} {...props}>
      {children}
    </div>
  );
}
