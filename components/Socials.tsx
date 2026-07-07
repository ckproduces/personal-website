import { connections } from "@/lib/site";
import { Stack } from "@/components/Stack";

/**
 * Logo-only social row. Each logo is drawn as a CSS mask so every icon shares
 * one ink color regardless of the source svg's own fill; they fade on hover
 * (the standard "other things" hover).
 */
export function Socials() {
  return (
    <Stack direction="row" gap={3} align="center">
      {connections.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noreferrer"
          aria-label={c.label}
          className="hover-fade"
          style={{
            width: 20,
            height: 20,
            display: "block",
            backgroundColor: "var(--color-text-muted)",
            WebkitMaskImage: `url(${c.icon})`,
            maskImage: `url(${c.icon})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
      ))}
    </Stack>
  );
}
