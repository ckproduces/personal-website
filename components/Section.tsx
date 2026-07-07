import type { ReactNode } from "react";
import type { Entry } from "@/lib/site";
import { Link } from "@/components/Link";

export function Section({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="section">
      <h2 className="section__label">{label}</h2>
      {children}
    </section>
  );
}

/** Renders one portfolio entry as a token-styled row. */
export function EntryRow({ entry }: { entry: Entry }) {
  return (
    <div className="entry">
      <div className="entry__body">
        <div className="entry__title">
          {entry.href ? <Link href={entry.href}>{entry.title}</Link> : entry.title}
        </div>
        {entry.meta ? <div className="entry__meta">{entry.meta}</div> : null}
        {entry.note ? <div className="entry__note">{entry.note}</div> : null}
      </div>
      {entry.date ? <div className="entry__date">{entry.date}</div> : null}
    </div>
  );
}
