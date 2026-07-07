import { ArrowUpRight } from "lucide-react";
import type { Entry } from "@/lib/site";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { Icon } from "@/components/Icon";
import { Link } from "@/components/Link";

/**
 * A portfolio row. Everything is shown at once: the position (plain text) and
 * the org (a link) on the top line with the date, then a brief explanation
 * beneath. Projects with a link get a "visit" affordance. Composition only.
 */
export function EntryRow({ entry }: { entry: Entry }) {
  return (
    <Stack gap={1}>
      <Stack direction="row" justify="space-between" align="baseline" gap={4}>
        <Stack gap={0} style={{ minWidth: 0 }}>
          <Text weight="medium">{entry.title}</Text>
          {entry.meta ? (
            <Text size="sm" color="muted">
              {entry.href ? <Link href={entry.href}>{entry.meta}</Link> : entry.meta}
            </Text>
          ) : null}
        </Stack>
        {entry.date ? (
          <Text size="sm" color="faint" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>
            {entry.date}
          </Text>
        ) : null}
      </Stack>

      {entry.note ? (
        <Text size="sm" color="faint">
          {entry.note}
        </Text>
      ) : null}

      {entry.href && !entry.meta ? (
        <Link href={entry.href} plain style={{ alignSelf: "flex-start" }}>
          <Stack direction="row" gap={1} align="center">
            <Text size="sm" color="muted">
              visit
            </Text>
            <Icon icon={ArrowUpRight} size={14} color="muted" />
          </Stack>
        </Link>
      ) : null}
    </Stack>
  );
}
