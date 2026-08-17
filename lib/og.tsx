import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site-meta";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = SITE_NAME;

async function loadAssets() {
  const fonts = join(process.cwd(), "lib/fonts");
  const [latin, latinExt, icon] = await Promise.all([
    readFile(join(fonts, "Nunito-latin-700.ttf")),
    readFile(join(fonts, "Nunito-latin-ext-700.ttf")),
    readFile(join(process.cwd(), "public/favicon.png")),
  ]);
  return {
    latin,
    latinExt,
    icon: `data:image/png;base64,${icon.toString("base64")}`,
  };
}

/** PNG Open Graph card. Nunito subsets: SIL OFL 1.1. */
export async function renderOgImage(
  title = SITE_NAME,
  subtitle = SITE_DESCRIPTION,
) {
  const { latin, latinExt, icon } = await loadAssets();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          padding: 80,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} width={72} height={72} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 28,
            fontFamily: "Nunito",
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 700, color: "#141414" }}>
            {title}
          </div>
          <div style={{ fontSize: 28, color: "#666666", marginTop: 16 }}>
            {subtitle}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Nunito", data: latin, weight: 700, style: "normal" },
        { name: "Nunito", data: latinExt, weight: 700, style: "normal" },
      ],
    },
  );
}
