"use client";

import { useEffect, useState } from "react";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";

const PHRASES = [
  "overfit to excellence",
  "jeune prodige",
  "howard roark laughed",
  "perfect",
  "will figure out",
  "blue tick irl",
  "an outlier by design",
];

const TYPE_MS = 30; // per-letter speed, typing and deleting
const HOLD_MS = 4000; // dwell once a phrase is fully written

/**
 * Footer statement that mimics AI response streaming: the phrase is written
 * letter by letter, holds for 4s, then erased letter by letter before the next
 * one streams in. A blinking caret trails the text.
 */
export function Footer() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = PHRASES[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && text === full) {
      timer = setTimeout(() => setDeleting(true), HOLD_MS);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % PHRASES.length);
    } else {
      const next = deleting
        ? full.slice(0, text.length - 1)
        : full.slice(0, text.length + 1);
      timer = setTimeout(() => setText(next), TYPE_MS);
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <footer>
      <Stack gap={3}>
        <hr />
        <Stack direction="row" justify="space-between" align="baseline" gap={4}>
          <Text size="lg" color="black" style={{ letterSpacing: "-0.02em" }}>
            {text}
            <span className="caret" aria-hidden>
              ▍
            </span>
          </Text>
          <Text size="sm" color="faint" style={{ whiteSpace: "nowrap" }}>
            © 2026 çağrı okan
          </Text>
        </Stack>
      </Stack>
    </footer>
  );
}
