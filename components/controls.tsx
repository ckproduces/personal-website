import type { InputHTMLAttributes } from "react";
import { cx } from "./cx";

type ControlProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function Checkbox({ className, ...props }: ControlProps) {
  return (
    <input type="checkbox" className={cx("checkbox", className)} {...props} />
  );
}

export function Radio({ className, ...props }: ControlProps) {
  return <input type="radio" className={cx("radio", className)} {...props} />;
}

export function Switch({ className, ...props }: ControlProps) {
  return (
    <input
      type="checkbox"
      role="switch"
      className={cx("switch", className)}
      {...props}
    />
  );
}
