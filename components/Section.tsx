import type { ReactNode } from "react";
import type { Entry } from "@/lib/site";
import { Link } from "@/components/Link";
import { Stack } from "@/components/Stack";

export function Section({
  label,
  gap = 5,
  children,
}: {
  label: string;
  /** gap between the section's rows, on the space scale */
  gap?: number;
  children: ReactNode;
}) {
  return (
    <Stack as="section" gap={5}>
      <h2 className="section__label">{label}</h2>
      <Stack gap={gap}>{children}</Stack>
    </Stack>
  );
}

/** Renders one portfolio entry as a token-styled row. */
export function EntryRow({ entry }: { entry: Entry }) {
  return (
    <div className="entry">
      <Stack className="entry__body" gap={1}>
        <div className="entry__title">
          {entry.href ? <Link href={entry.href}>{entry.title}</Link> : entry.title}
        </div>
        {entry.meta ? <div className="entry__meta">{entry.meta}</div> : null}
        {entry.note ? <div className="entry__note">{entry.note}</div> : null}
      </Stack>
      {entry.date ? <div className="entry__date">{entry.date}</div> : null}
    </div>
  );
}
