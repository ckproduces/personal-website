"use client";

import { Link2Icon } from "lucide-react";

export function HeadingLink({ targetId }: { targetId?: string }) {
  const onActivate = () => {
    if (!targetId || typeof window === "undefined") return;
    const slug = `#${targetId}`;
    const url = `${window.location.pathname}${window.location.search}${slug}`;
    void navigator.clipboard.writeText(slug);
    window.history.replaceState(null, "", url);
    const el = document.getElementById(targetId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      className="heading-link"
      type="button"
      onClick={onActivate}
      aria-label="Copy link to this section and scroll to it"
      disabled={!targetId}
    >
      <Link2Icon aria-hidden="true" strokeWidth={2} />
    </button>
  );
}
