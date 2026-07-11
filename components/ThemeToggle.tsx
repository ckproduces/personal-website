"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { applyTheme, getPreferredTheme, type Theme } from "@/lib/theme";

/** Switches between light and dark mode; persists choice in localStorage. */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  return (
    <Button
      ariaLabel={theme === "dark" ? "switch to light mode" : "switch to dark mode"}
      onClick={toggle}
      style={{ flexShrink: 0 }}
    >
      <Icon icon={theme === "dark" ? Sun : Moon} size={18} color="muted" />
    </Button>
  );
}
