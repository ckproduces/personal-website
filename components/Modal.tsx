"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

/**
 * Minimal modal: a backdrop that fades in and a panel that scales up. Closes on
 * backdrop click or Escape, and locks body scroll while open.
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
    <div className="modal" onClick={onClose} role="presentation">
      <div
        className="modal__panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="modal__head">
          <span className="section__label">{title}</span>
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="close"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
