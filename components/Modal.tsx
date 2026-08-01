"use client";

import { useEffect, useId, useRef } from "react";
import type { ReactNode } from "react";
import { X } from "lucide-react";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { space, COLORS, RADII } from "@/lib/tokens";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/**
 * Minimal modal: a backdrop that fades in and a panel that rises. Closes on
 * backdrop click or Escape, traps focus, and locks body scroll while open.
 */
export function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const closeBtn = panel?.querySelector<HTMLElement>("button");
    closeBtn?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panel) return;

      const nodes = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previousFocus.current?.focus();
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      role="presentation"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: space(4),
        background: COLORS.overlay,
        backdropFilter: "blur(4px)",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: space(5),
          padding: space(6),
          background: COLORS.white,
          borderRadius: RADII.lg,
          width: "100%",
          maxWidth: 520,
          maxHeight: "80vh",
          overflowY: "auto",
          animation: "rise 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        <Stack direction="row" justify="space-between" align="center">
          <Text as="h2" id={titleId} size="lg" color="black" weight="semibold">
            {title}
          </Text>
          <Button ariaLabel="close dialog" onClick={onClose}>
            <Icon icon={X} size={20} color="muted" />
          </Button>
        </Stack>
        <Stack
          style={{
            maxHeight: "400px",
            overflowY: "auto",
          }}
        >
          {children}
        </Stack>
      </div>
    </div>
  );
}
