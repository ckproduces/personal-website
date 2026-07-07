import { connections } from "@/lib/site";

/**
 * Logo-only social row. Each logo is rendered as a CSS mask so every icon
 * shares one ink color (ignoring the source svg's own fill) and can animate
 * to the accent on hover.
 */
export function Socials() {
  return (
    <div className="socials">
      {connections.map((c) => (
        <a
          key={c.label}
          className="social"
          href={c.href}
          target="_blank"
          rel="noreferrer"
          aria-label={c.label}
          style={{
            WebkitMaskImage: `url(${c.icon})`,
            maskImage: `url(${c.icon})`,
          }}
        />
      ))}
    </div>
  );
}
