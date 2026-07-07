import NextLink from "next/link";
import type { CSSProperties, ReactNode } from "react";

type LinkProps = {
  href: string;
  children: ReactNode;
  /** plain = inherit styling (block/list links); default = inline accent link */
  plain?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: CSSProperties;
};

/**
 * One link for the whole site. External hrefs open in a new tab; internal ones
 * route through next/link. Inline by default (accent + underline); pass `plain`
 * for links that wrap their own layout. Always fades on hover.
 */
export function Link({ href, children, plain, onClick, className, style }: LinkProps) {
  const external = /^https?:\/\//.test(href);
  const inlineStyle: CSSProperties = plain
    ? {}
    : {
        color: "var(--color-accent-strong)",
        borderBottom: "1px solid var(--red-200)",
      };
  const cls = `hover-fade${className ? ` ${className}` : ""}`;
  const merged = { ...inlineStyle, ...style };

  if (external) {
    return (
      <a
        href={href}
        className={cls}
        style={merged}
        onClick={onClick}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={cls} style={merged} onClick={onClick}>
      {children}
    </NextLink>
  );
}
