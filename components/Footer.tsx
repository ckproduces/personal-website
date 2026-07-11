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
  "an outlier by design",
];

function shufflePhrases(items: string[]) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

const TYPE_MS = 20; // per-letter speed, typing and deleting
const HOLD_MS = 50; // dwell once a phrase is fully written

/**
 * Footer statement that mimics AI response streaming: the phrase is written
 * letter by letter, holds briefly, then erased letter by letter before the next
 * one streams in. A blinking caret trails the text.
 */
export function Footer() {
  const [phrases] = useState(() => shufflePhrases(PHRASES));
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = phrases[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && text === full) {
      timer = setTimeout(
        () => setDeleting(true),
        HOLD_MS * phrases[index].length + 500,
      );
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      const next = deleting
        ? full.slice(0, text.length - 1)
        : full.slice(0, text.length + 1);
      timer = setTimeout(() => setText(next), TYPE_MS);
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases]);

  return (
    <footer>
      <Stack gap={3}>
        <hr />
        <Stack
          direction="row"
          justify="space-between"
          align="baseline"
          gap={10}
        >
          <Text size="lg" color="black" style={{ letterSpacing: "-0.02em" }}>
            {text}
            <Text
              as="span"
              color="red"
              className="select-accent caret"
              aria-hidden
            >
              {" ▍"}
            </Text>
          </Text>
          <Text size="sm" color="faint" style={{ whiteSpace: "nowrap" }}>
            © 2026 çağrı okan
          </Text>
        </Stack>
      </Stack>
    </footer>
  );
}
