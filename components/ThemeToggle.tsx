"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import {
  applyPreference,
  getStoredPreference,
  resolveTheme,
  nextPreference,
  type ThemePreference,
} from "@/lib/theme";

const LABELS: Record<ThemePreference, string> = {
  light: "light mode, switch to dark mode",
  dark: "dark mode, switch to system theme",
  system: "system theme, switch to light mode",
};

const ICONS = { light: Sun, dark: Moon, system: Monitor } as const;

/** Cycles light → dark → system; persists preference in localStorage. */
export function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>("system");
  const [resolved, setResolved] = useState<"light" | "dark">("light");

  useEffect(() => {
    const pref = getStoredPreference();
    setPreference(pref);
    setResolved(resolveTheme(pref));

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (getStoredPreference() === "system") {
        setResolved(resolveTheme("system"));
        applyPreference("system");
      }
    };
    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  }, []);

  const cycle = () => {
    const next = nextPreference(preference);
    setPreference(next);
    setResolved(resolveTheme(next));
    applyPreference(next);
  };

  const IconComponent = ICONS[preference];

  return (
    <Button
      ariaLabel={LABELS[preference]}
      onClick={cycle}
      className="theme-toggle pressable"
      style={{ flexShrink: 0 }}
    >
      <Icon icon={IconComponent} size={18} color="muted" />
      <span className="sr-only">
        theme: {preference}
        {preference === "system" ? ` (${resolved})` : ""}
      </span>
    </Button>
  );
}
