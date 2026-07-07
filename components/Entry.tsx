import { ArrowUpRight } from "lucide-react";
import type { Entry, EntryLink } from "@/lib/site";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { Icon } from "@/components/Icon";
import { Link } from "@/components/Link";
import { Chip } from "@/components/Chip";
import { space } from "@/lib/tokens";

function EntryChip({ link }: { link: EntryLink }) {
  return (
    <Link href={link.href} plain>
      <Chip style={{ marginTop: 0 }}>
        <Text size="sm" color="black">
          {link.label ?? "visit"}
        </Text>
        <Icon icon={ArrowUpRight} size={14} color="black" />
      </Chip>
    </Link>
  );
}

/**
 * A portfolio row. Everything is shown at once: a "position @ company" line
 * (the company is a link when there's a metaHref) with the date, then a brief
 * explanation beneath. Projects can show one or more link chips in a row.
 */
export function EntryRow({ entry }: { entry: Entry }) {
  const links = entry.links ?? [];

  return (
    <Stack gap={0}>
      <Stack direction="row" justify="space-between" align="baseline" gap={4}>
        <Text weight="medium" style={{ minWidth: 0 }}>
          {entry.title}
          {entry.meta ? (
            <>
              {" @ "}
              {entry.metaHref ? (
                <Link href={entry.metaHref}>{entry.meta}</Link>
              ) : (
                entry.meta
              )}
            </>
          ) : null}
        </Text>
        {entry.date ? (
          <Text
            size="sm"
            color="faint"
            style={{ whiteSpace: "nowrap", flexShrink: 0 }}
          >
            {entry.date}
          </Text>
        ) : null}
      </Stack>

      {entry.note ? (
        <Text size="sm" color="faint">
          {entry.note}
        </Text>
      ) : null}

      {links.length > 0 ? (
        <Stack
          direction="row"
          gap={2}
          wrap
          style={{ marginTop: space(2) }}
        >
          {links.map((link) => (
            <EntryChip key={link.href} link={link} />
          ))}
        </Stack>
      ) : null}
    </Stack>
  );
}
