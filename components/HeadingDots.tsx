"use client";

import type { KeyboardEvent } from "react";

const DOT = ".";

export function HeadingDots({
  level,
  targetId,
}: {
  level: number;
  targetId?: string;
}) {
  const onActivate = () => {
    if (!targetId || typeof window === "undefined") return;
    const slug = `#${targetId}`;
    const url = `${window.location.pathname}${window.location.search}${slug}`;
    void navigator.clipboard.writeText(slug);
    window.history.replaceState(null, "", url);
    const el = document.getElementById(targetId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    onActivate();
  };

  const n = Math.min(6, Math.max(1, level));

  return (
    <span
      className="heading-dots"
      role="button"
      tabIndex={targetId ? 0 : -1}
      onClick={onActivate}
      aria-label="Copy link to this section and scroll to it"
      aria-disabled={!targetId}
      onKeyDown={onKeyDown}
    >
      {DOT.repeat(n)}{" "}
    </span>
  );
}
