"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "overfit to excellence",
  "jeune prodige",
  "howard roark laughed",
  "perfect",
  "will figure out",
  "blue tick irl",
  "an outlier by design",
];

/**
 * The footer statement. A huge phrase is stretched to fill the full container
 * width via SVG textLength (fixed viewBox → fixed aspect ratio, so swapping the
 * phrase never changes layout). Phrases rotate every 10s with a fade crossover.
 */
export function Footer() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % PHRASES.length);
        setVisible(true);
      }, 700);
    }, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="footer">
      <svg
        className="footer__hero"
        viewBox="0 0 1000 150"
        width="100%"
        role="img"
        aria-label={PHRASES[index]}
      >
        <text
          className={`footer__hero-text${visible ? "" : " footer__hero-text--out"}`}
          x="500"
          y="120"
          textAnchor="middle"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
        >
          {PHRASES[index]}
        </text>
      </svg>
      <span className="footer__copy">© 2026 çağrı okan</span>
    </footer>
  );
}
