"use client";
import { unitSpace } from "@/design-system/spaces";
import { useRouter } from "next/navigation";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; // optional extra Tailwind classes
  style?: React.CSSProperties; // optional inline styles
  to?: string;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  style,
  to,
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (to) {
          router.push(to);
        } else if (onClick) {
          onClick();
        }
      }}
      className={className}
      style={{
        border: 0,
        backgroundColor: "hsl(var(--color-primary-dark-7))",
        borderRadius: unitSpace(0.2),
        fontSize: "1rem",
        cursor: "pointer",
        display: "flex",
        ...(style || {}),
      }}
    >
      {children}
    </button>
  );
};
