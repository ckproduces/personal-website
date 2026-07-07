import type { ReactNode } from "react";

/**
 * Custom components authored inside blog post bodies. Posts are plain TSX, so
 * they compose these directly — no markdown layer. Each maps to a token-based
 * style in prose.css.
 */

export function Callout({ children }: { children: ReactNode }) {
  return <aside className="callout">{children}</aside>;
}

export function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="figure">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
