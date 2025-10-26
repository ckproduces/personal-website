"use client";
import { useState } from "react";

interface ChipProps {
  children: React.ReactNode;
  chipStatus?: boolean;
  onClick?: () => void;
  style?: string; // optional extra Tailwind classes
}

const Chip: React.FC<ChipProps> = ({
  children,
  chipStatus = false,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      style={{
        cursor: "pointer",
        fontSize: "1rem",
        borderRadius: "0.5rem",
        padding: "0.4rem 0.6rem",
        color: "hsl(var(--color-primary-dark-1))",
        border: 0,
        minWidth: "4rem",
        scale: chipStatus ? 1 : hovered ? 0.98 : 1,
        backgroundColor: chipStatus
          ? "hsl(var(--color-primary-dark-10))"
          : "hsl(var(--color-primary-dark-12))",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
};

export default Chip;
