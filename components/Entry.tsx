"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { Entry } from "@/lib/site";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { Icon } from "@/components/Icon";
import { Link } from "@/components/Link";

/**
 * A portfolio row as a disclosure. The preview always shows the title (a
 * position — never a link) and the org (a link, where one exists). Clicking the
 * row expands a brief explanation; the row highlights to a soft-gray surface on
 * hover. Built entirely from primitives — no bespoke CSS.
 */
export function EntryRow({ entry }: { entry: Entry }) {
  const [open, setOpen] = useState(false);
  const expandable = Boolean(entry.note || (entry.href && !entry.meta));
  const toggle = () => expandable && setOpen((v) => !v);

  return (
    <Stack
      gap={0}
      padding={2}
      radius="sm"
      className={expandable ? "hover-surface" : undefined}
      role={expandable ? "button" : undefined}
      tabIndex={expandable ? 0 : undefined}
      aria-expanded={expandable ? open : undefined}
      onClick={toggle}
      onKeyDown={
        expandable
          ? (e: React.KeyboardEvent) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle();
              }
            }
          : undefined
      }
      style={{
        cursor: expandable ? "pointer" : "default",
        marginInline: "calc(var(--space-2) * -1)",
      }}
    >
      <Stack direction="row" justify="space-between" align="center" gap={4}>
        <Stack gap={0} style={{ minWidth: 0 }}>
          <Text weight="medium">{entry.title}</Text>
          {entry.meta ? (
            <Text size="sm" color="muted">
              {entry.href ? (
                <Link href={entry.href} onClick={(e) => e.stopPropagation()}>
                  {entry.meta}
                </Link>
              ) : (
                entry.meta
              )}
            </Text>
          ) : null}
        </Stack>

        <Stack direction="row" gap={2} align="center" style={{ flexShrink: 0 }}>
          {entry.date ? (
            <Text size="sm" color="faint" style={{ whiteSpace: "nowrap" }}>
              {entry.date}
            </Text>
          ) : null}
          {expandable ? (
            <Icon
              icon={ChevronRight}
              size={16}
              style={{
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            />
          ) : null}
        </Stack>
      </Stack>

      {expandable ? (
        <div className="collapse" data-open={open}>
          <div>
            <Stack gap={1} style={{ paddingTop: "var(--space-2)" }}>
              {entry.note ? (
                <Text size="sm" color="faint">
                  {entry.note}
                </Text>
              ) : null}
              {entry.href && !entry.meta ? (
                <Link href={entry.href} onClick={(e) => e.stopPropagation()}>
                  visit ↗
                </Link>
              ) : null}
            </Stack>
          </div>
        </div>
      ) : null}
    </Stack>
  );
}
