"use client";

/** Middle dot (U+00B7), repeated as heading-level prefix; click copies URL, updates hash, scrolls to heading. */
const DOT = "\u00B7";

export function HeadingDots({
  level,
  targetId,
}: {
  level: number;
  targetId?: string;
}) {
  const onActivate = () => {
    if (!targetId || typeof window === "undefined") return;
    const url = `${window.location.origin}${window.location.pathname}${window.location.search}#${targetId}`;
    void navigator.clipboard.writeText(url);
    window.history.replaceState(null, "", url);
    const el = document.getElementById(targetId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const n = Math.min(6, Math.max(1, level));

  return (
    <button
      type="button"
      className="heading-dots"
      onClick={onActivate}
      disabled={!targetId}
      aria-label="Copy link to this section and scroll to it"
    >
      {DOT.repeat(n)}
    </button>
  );
}
