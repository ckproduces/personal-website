export const THEME_KEY = "theme";

export type ThemePreference = "light" | "dark" | "system";
export type Theme = "light" | "dark";

const PREFERENCES: ThemePreference[] = ["light", "dark", "system"];

export function isThemePreference(value: string | null): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

export function getStoredPreference(): ThemePreference {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(THEME_KEY);
  return isThemePreference(stored) ? stored : "system";
}

export function resolveTheme(preference: ThemePreference): Theme {
  if (preference === "dark") return "dark";
  if (preference === "light") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/** Resolved theme currently applied to the document. */
export function getPreferredTheme(): Theme {
  return resolveTheme(getStoredPreference());
}

export function applyPreference(preference: ThemePreference) {
  localStorage.setItem(THEME_KEY, preference);
  document.documentElement.setAttribute("data-theme", resolveTheme(preference));
}

export function nextPreference(current: ThemePreference): ThemePreference {
  const i = PREFERENCES.indexOf(current);
  return PREFERENCES[(i + 1) % PREFERENCES.length];
}

/** Inline script to set theme before paint — avoids a flash of wrong mode. */
export const themeInitScript = `(function(){try{var k="theme",t=localStorage.getItem(k),d;t==="dark"?d=!0:t==="light"?d=!1:d=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",d?"dark":"light")}catch(e){}})();`;
