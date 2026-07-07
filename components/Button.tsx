import type { CSSProperties, ReactNode } from "react";

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  style?: CSSProperties;
  className?: string;
};

/**
 * Unstyled-by-default button primitive: strips native chrome, aligns its
 * contents in a row, and fades on hover (the site's standard "other things"
 * hover — opacity, never transform).
 */
export function Button({
  onClick,
  children,
  disabled,
  ariaLabel,
  ariaExpanded,
  style,
  className,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      className={`hover-fade${className ? ` ${className}` : ""}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-1)",
        background: "none",
        font: "inherit",
        color: "inherit",
        cursor: disabled ? "default" : "pointer",
        textAlign: "left",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
