import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { cx } from "./cx";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cx("input", className)} {...props} />;
}

export function Select({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <span className={cx("select", className)}>
      <select {...props}>{children}</select>
    </span>
  );
}
