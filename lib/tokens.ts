/**
 * Design-token accessors. Components read tokens through these instead of
 * hard-coding var(--…) strings, so the whole system is driven from one place.
 * The raw values live in app/globals.css.
 */

export const COLORS = {
  text: "var(--color-text)",
  muted: "var(--color-text-muted)",
  faint: "var(--color-text-faint)",
  accent: "var(--color-accent)",
  accentStrong: "var(--color-accent-strong)",
  black: "var(--color-black)",
  white: "var(--color-white)",
  surface: "var(--color-surface)",
  surfaceHover: "var(--color-surface-hover)",
  line: "var(--color-line)",
  lineStrong: "var(--color-line-strong)",
  red: "var(--color-red)",
  redHover: "var(--color-red-hover)",
  redPressed: "var(--color-red-pressed)",
  redSoft: "var(--color-red-soft)",
  overlay: "var(--color-overlay)",
} as const;
export type ColorToken = keyof typeof COLORS;

export const RADII = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
} as const;
export type RadiusToken = keyof typeof RADII;

export type TextSize =
  | "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type TextWeight = "normal" | "medium" | "semibold";

/** step on the 4-base space scale → the matching CSS custom property */
export const space = (step: number) => `var(--space-${step})`;
export const text = (size: TextSize) => `var(--text-${size})`;
export const weight = (w: TextWeight) => `var(--weight-${w})`;
