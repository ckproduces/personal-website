import NextLink from "next/link";
import type { ReactNode } from "react";

type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

/**
 * One link component for the whole site. External hrefs open in a new tab;
 * internal ones route through next/link. Styling comes from the `.link` token.
 */
export function Link({ href, children, className = "link" }: LinkProps) {
  const external = /^https?:\/\//.test(href);

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
}
