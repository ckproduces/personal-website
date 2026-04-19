"use client";

import { HeadingSquare } from "@/components/HeadingSquare";

export function HeadingSquares({
  level,
  targetId,
}: {
  level: number;
  targetId?: string;
}) {
  const copy = () => {
    if (!targetId || typeof window === "undefined") return;
    const url = `${window.location.origin}${window.location.pathname}${window.location.search}#${targetId}`;
    void navigator.clipboard.writeText(url);
  };

  const n = Math.min(6, Math.max(1, level));

  return (
    <button
      type="button"
      className="heading-squares"
      onClick={() => copy()}
      disabled={!targetId}
      aria-label="Copy link to this section"
    >
      {Array.from({ length: n }, (_, i) => (
        <HeadingSquare key={i} />
      ))}
    </button>
  );
}
