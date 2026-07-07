import type { Metadata } from "next";
import { Sparkles, Star, Zap, Heart, ArrowRight } from "lucide-react";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { Section } from "@/components/Section";
import { Link } from "@/components/Link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Socials } from "@/components/Socials";
import { EntryRow } from "@/components/Entry";
import { Blogs } from "@/components/Blogs";
import { Footer } from "@/components/Footer";
import type { TextSize } from "@/lib/tokens";

export const metadata: Metadata = { title: "playbook — çağrı okan" };

const GRAYS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const INKS = [50, 100, 200, 400, 600, 800, 950];
const ROLES = [
  "text", "muted", "faint", "accent", "accent-strong",
  "line", "surface", "surface-hover", "black",
];
const SIZES: TextSize[] = ["xs", "sm", "base", "md", "lg", "xl", "2xl", "3xl"];
const SPACES = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24];

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))",
  gap: "var(--space-3)",
};

function Swatch({ value, label }: { value: string; label: string }) {
  return (
    <Stack gap={1} align="stretch">
      <div
        style={{
          height: 44,
          background: value,
          borderRadius: "var(--radius-sm)",
          border: "1px solid var(--color-line)",
        }}
      />
      <Text size="xs" color="muted">
        {label}
      </Text>
    </Stack>
  );
}

const demoPosts = Array.from({ length: 6 }, (_, i) => ({
  slug: `demo-${i + 1}`,
  title: `example blog post ${i + 1}`,
  date: `2026-0${(i % 6) + 1}-15`,
}));

const demoEntry = {
  title: "software engineer intern",
  meta: "ai business school",
  note: "a brief explanation shown inline. the position is plain text; the org is a link.",
  href: "https://aibusinessschool.com",
  date: "feb 2026 — present",
};

export default function Playbook() {
  return (
    <Stack as="main" gap={12}>
      <Stack as="header" gap={1}>
        <Text as="h1" size="3xl" style={{ letterSpacing: "-0.03em" }}>
          playbook
        </Text>
        <Text as="p" color="muted" size="md">
          the design tokens and components. everything on the site is built from
          these — reuse them instead of writing new css.
        </Text>
      </Stack>

      {/* ---------------------------------------------------- tokens: color */}
      <Section label="color · gray ramp">
        <div style={gridStyle}>
          {GRAYS.map((n) => (
            <Swatch key={n} value={`var(--gray-${n})`} label={`${n}`} />
          ))}
        </div>
      </Section>

      <Section label="color · ink">
        <div style={gridStyle}>
          {INKS.map((n) => (
            <Swatch key={n} value={`var(--ink-${n})`} label={`${n}`} />
          ))}
        </div>
      </Section>

      <Section label="color · roles">
        <div style={gridStyle}>
          {ROLES.map((r) => (
            <Swatch key={r} value={`var(--color-${r})`} label={r} />
          ))}
        </div>
      </Section>

      {/* ----------------------------------------------------- tokens: type */}
      <Section label="type · 1.125 scale">
        {SIZES.map((s) => (
          <Stack key={s} direction="row" gap={4} align="baseline">
            <Text size="xs" color="faint" style={{ width: 40, flexShrink: 0 }}>
              {s}
            </Text>
            <Text size={s}>inter tight — overfit to excellence</Text>
          </Stack>
        ))}
      </Section>

      {/* --------------------------------------------------- tokens: space */}
      <Section label="space · 4-base scale">
        {SPACES.map((n) => (
          <Stack key={n} direction="row" gap={4} align="center">
            <Text size="xs" color="faint" style={{ width: 40, flexShrink: 0 }}>
              {n}
            </Text>
            <div
              style={{
                width: `var(--space-${n})`,
                height: 12,
                background: "var(--color-accent)",
                borderRadius: 2,
              }}
            />
          </Stack>
        ))}
      </Section>

      <Section label="radius">
        <Stack direction="row" gap={5} align="center">
          {(["sm", "md"] as const).map((r) => (
            <Stack key={r} gap={1} align="center">
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-line)",
                  borderRadius: `var(--radius-${r})`,
                }}
              />
              <Text size="xs" color="muted">
                {r}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Section>

      {/* -------------------------------------------------------- components */}
      <Section label="text">
        <Text size="xl" weight="semibold">semibold xl</Text>
        <Text weight="medium">medium base</Text>
        <Text color="muted">muted base</Text>
        <Text color="faint" size="sm">faint sm</Text>
        <Text color="accent" weight="medium">accent medium</Text>
      </Section>

      <Section label="link">
        <Text>
          an <Link href="https://example.com">inline link</Link> reads in accent
          with an underline.
        </Text>
        <Link href="/" plain>
          a plain link inherits its surroundings →
        </Link>
      </Section>

      <Section label="button · icon">
        <Stack direction="row" gap={5} align="center" wrap>
          <Button>
            <Text size="sm" color="muted">see all 6</Text>
            <Icon icon={ArrowRight} size={15} color="muted" />
          </Button>
          <Stack direction="row" gap={4} align="center">
            <Icon icon={Sparkles} color="accent" />
            <Icon icon={Star} color="accent" />
            <Icon icon={Zap} color="muted" />
            <Icon icon={Heart} color="muted" />
          </Stack>
        </Stack>
      </Section>

      <Section label="socials">
        <Socials />
      </Section>

      <Section label="entry">
        <EntryRow entry={demoEntry} />
        <EntryRow entry={{ ...demoEntry, title: "another role", href: undefined }} />
      </Section>

      <Section label="blogs · capped + modal" gap={4}>
        <Blogs posts={demoPosts} />
      </Section>

      <Section label="footer · streaming">
        <Footer />
      </Section>

      <Link href="/" plain>
        <Stack direction="row" gap={1} align="center">
          <Icon icon={ArrowRight} size={15} style={{ transform: "rotate(180deg)" }} />
          <Text size="sm" color="faint">back home</Text>
        </Stack>
      </Link>
    </Stack>
  );
}
