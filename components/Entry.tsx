import { ArrowUpRight } from "lucide-react";
import type { Entry } from "@/lib/site";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { Icon } from "@/components/Icon";
import { Link } from "@/components/Link";

/**
 * A portfolio row. Everything is shown at once: a "position @ company" line
 * (the company is a link when there's an href) with the date, then a brief
 * explanation beneath. Projects with a link get a "visit" affordance.
 */
export function EntryRow({ entry }: { entry: Entry }) {
  return (
    <Stack gap={0}>
      <Stack direction="row" justify="space-between" align="baseline" gap={4}>
        <Text weight="medium" style={{ minWidth: 0 }}>
          {entry.title}
          {entry.meta ? (
            <>
              {" @ "}
              {entry.href ? (
                <Link href={entry.href}>{entry.meta}</Link>
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

      {entry.href && !entry.meta ? (
        <Link href={entry.href} plain style={{ alignSelf: "flex-start" }}>
          <Stack
            radius="sm"
            background="line"
            style={{
              padding: "2px 8px",
              marginTop: "8px",
            }}
            direction="row"
            gap={1}
            align="center"
          >
            <Text size="sm" color="red">
              visit
            </Text>
            <Icon icon={ArrowUpRight} size={14} color="red" />
          </Stack>
        </Link>
      ) : null}
    </Stack>
  );
}
