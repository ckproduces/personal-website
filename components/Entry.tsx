"use client";

import { useState } from "react";
import type { Entry } from "@/lib/site";
import { Link } from "@/components/Link";

/**
 * A portfolio row as a disclosure. Closed by default: the title (a position —
 * never a link) and the date. Expanding reveals the details — the org (a link,
 * where it exists) and the note — via a smooth grid-rows transition.
 */
export function EntryRow({ entry }: { entry: Entry }) {
  const [open, setOpen] = useState(false);
  const hasDetails = Boolean(entry.meta || entry.note || entry.href);

  return (
    <div className={`entry${open ? " entry--open" : ""}`}>
      <button
        type="button"
        className="entry__header"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        disabled={!hasDetails}
      >
        <span className="entry__title">{entry.title}</span>
        <span className="entry__right">
          {entry.date ? <span className="entry__date">{entry.date}</span> : null}
          {hasDetails ? <span className="entry__chevron" aria-hidden>›</span> : null}
        </span>
      </button>

      {hasDetails ? (
        <div className="entry__panel">
          <div className="entry__panel-inner">
            {entry.meta ? (
              <div className="entry__meta">
                {entry.href ? <Link href={entry.href}>{entry.meta}</Link> : entry.meta}
              </div>
            ) : null}
            {entry.note ? <p className="entry__note">{entry.note}</p> : null}
            {entry.href && !entry.meta ? (
              <Link href={entry.href} className="entry__visit">
                visit ↗
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
