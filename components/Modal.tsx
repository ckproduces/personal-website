"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { X } from "lucide-react";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

/**
 * Minimal modal: a backdrop that fades in and a panel that rises. Closes on
 * backdrop click or Escape, and locks body scroll while open. Keyframes live in
 * globals.css; everything else is token-styled primitives.
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
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
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
        padding: "var(--space-4)",
        background: "rgba(0, 0, 0, 0.35)",
        backdropFilter: "blur(2px)",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <Stack
        gap={5}
        padding={6}
        background="white"
        radius="md"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 520,
          maxHeight: "80vh",
          overflowY: "auto",
          border: "1px solid var(--color-line)",
          animation: "rise 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        <Stack direction="row" justify="space-between" align="center">
          <Text size="lg" color="black">
            {title}
          </Text>
          <Button ariaLabel="close" onClick={onClose}>
            <Icon icon={X} size={20} color="muted" />
          </Button>
        </Stack>
        {children}
      </Stack>
    </div>
  );
}
