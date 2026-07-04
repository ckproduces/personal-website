import type { HTMLAttributes } from "react";
import { cx } from "./cx";
import { SmartLink } from "./SmartLink";

type CardProps = HTMLAttributes<HTMLElement> & { href?: string };

export function Card({ href, className, ...props }: CardProps) {
  const cls = cx("card", className);
  if (href) {
    return <SmartLink href={href} className={cls} {...props} />;
  }
  return <div className={cls} {...props} />;
}
