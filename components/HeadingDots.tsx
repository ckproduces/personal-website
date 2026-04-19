"use client";

/** Middle dot (U+00B7), repeated as heading-level prefix; click copies section URL. */
const DOT = "\u00B7";

export function HeadingDots({
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
      className="heading-dots"
      onClick={() => copy()}
      disabled={!targetId}
      aria-label="Copy link to this section"
    >
      {DOT.repeat(n)}
    </button>
  );
}
