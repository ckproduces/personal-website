"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/components/Link";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";

const ThemeToggle = dynamic(() =>
  import("@/components/ThemeToggle").then((m) => m.ThemeToggle),
);

/** Fixed top bar with logo + theme toggle; hides on scroll down, shows on scroll up. */
export function Navbar() {
  const pathname = usePathname();
  const isBlogPost = pathname.startsWith("/blog/");
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      if (y <= 0) {
        setVisible(true);
      } else if (y > lastY.current) {
        setVisible(false);
      } else if (y < lastY.current) {
        setVisible(true);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-navbar${visible ? "" : " is-hidden"}`} role="banner">
      <div className="site-navbar__inner content-width">
        <Stack direction="row" justify="space-between" align="center" gap={4}>
          {isBlogPost ? (
            <Link href="/" plain>
              <Stack direction="row" gap={1} align="center">
                <Icon icon={ArrowLeft} size={15} color="faint" />
                <Text size="sm" color="faint">
                  çağrı okan
                </Text>
              </Stack>
            </Link>
          ) : (
            <Link href="/" plain aria-label="home">
              <Logo size={36} style={{ marginBottom: 0 }} />
            </Link>
          )}
          <ThemeToggle />
        </Stack>
      </div>
    </header>
  );
}
