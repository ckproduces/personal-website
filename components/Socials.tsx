import { connections } from "@/lib/site";
import { Stack } from "@/components/Stack";
import { MaskIcon } from "@/components/MaskIcon";

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
          className="hover-fade pressable"
        >
          <MaskIcon src={c.icon} color="muted" />
          <span className="sr-only">{c.label}</span>
        </a>
      ))}
    </Stack>
  );
}
