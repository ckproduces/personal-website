import type { ButtonHTMLAttributes } from "react";
import { cx } from "./cx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
};

export function Button({
  variant = "primary",
  size = "medium",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(
        "button",
        `button-${variant}`,
        size !== "medium" && `button-${size}`,
        className,
      )}
      {...props}
    />
  );
}
