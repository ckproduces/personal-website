import styles from "./styleguide.module.css";

const BRAND = [
  { name: "main", token: "--color-main", hex: "#E92E3E" },
  { name: "secondary", token: "--color-secondary", hex: "#E9B72E" },
  { name: "black", token: "--color-black", hex: "#0E0103" },
  { name: "white", token: "--color-white", hex: "#FFFFFF" },
];

const BRAND_STEPS = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const GRAY_STEPS = BRAND_STEPS.flatMap((step) =>
  step < 900 ? [step, step + 50] : [step],
);

const SIZES = [
  1, 2, 4, 8, 9, 10, 11, 13, 14, 16, 18, 20, 23, 26, 29, 32, 36, 41, 46, 52,
  58, 66, 74, 83, 94, 105, 118, 133,
];

const TYPE_STEPS = [
  { label: "h1 · 36px", size: "--text-h1", sample: "heading one" },
  { label: "h2 · 32px", size: "--text-h2", sample: "heading two" },
  { label: "h3 · 29px", size: "--text-h3", sample: "heading three" },
  { label: "h4 · 26px", size: "--text-h4", sample: "heading four" },
  { label: "h5 · 23px", size: "--text-h5", sample: "heading five" },
  { label: "h6 · 20px", size: "--text-h6", sample: "heading six" },
  { label: "body · 18px", size: "--text-body", sample: "body text for reading" },
  { label: "ui · 16px", size: "--text-ui", sample: "interface text on controls" },
  { label: "small · 14px", size: "--text-small", sample: "supporting notes and captions" },
  { label: "caption · 13px", size: "--text-caption", sample: "badges, labels, fine print" },
];

function Ramp({ scale, steps }: { scale: string; steps: number[] }) {
  return (
    <div className={styles.ramp}>
      {steps.map((step) => (
        <span key={step} className={styles.step}>
          <span
            className={styles.chip}
            style={{ background: `var(--color-${scale}-${step})` }}
          />
          <span className={styles.stepLabel}>{step}</span>
        </span>
      ))}
    </div>
  );
}

export function ColorsSection() {
  return (
    <>
      <h2>colors</h2>
      <p>
        the whole palette derives from four brand colors. scales are mixed
        from them, so changing a brand color re-tunes the entire system.
      </p>
      <div className={styles.swatches}>
        {BRAND.map((color) => (
          <div key={color.name}>
            <div
              className={styles.swatch}
              style={{ background: `var(${color.token})` }}
            />
            <strong className={styles.swatchName}>{color.name}</strong>
            <span className={styles.swatchHex}>{color.hex}</span>
          </div>
        ))}
      </div>

      <h3>main scale</h3>
      <p>
        500 is the pure color. steps below mix in white, steps above mix in
        black, 20% at a time.
      </p>
      <Ramp scale="main" steps={BRAND_STEPS} />

      <h3>secondary scale</h3>
      <Ramp scale="secondary" steps={BRAND_STEPS} />

      <h3>gray ramp</h3>
      <p>
        17 grays between white and black, 5% apart. gray-450 is 45% black.
        the black&rsquo;s faint red cast keeps them warm.
      </p>
      <Ramp scale="gray" steps={GRAY_STEPS} />

      <h3>alpha ramps</h3>
      <p>
        black and white each get a translucent twin of the gray ramp.
        black-a-300 over white renders exactly like gray-300, but alphas also
        sit on color and imagery:
      </p>
      <div className={styles.alphaStrip}>
        <Ramp scale="black-a" steps={GRAY_STEPS} />
      </div>
      <div className={`${styles.alphaStrip} ${styles.alphaStripDark}`}>
        <Ramp scale="white-a" steps={GRAY_STEPS} />
      </div>
    </>
  );
}

export function ScaleSection() {
  return (
    <>
      <h2>modular scale</h2>
      <p>
        one ladder for every dimension: base 16px, ratio 1.125, rounded to
        whole pixels. below 8px it continues by halving. font sizes, spacing,
        paddings, radii, and control sizes all snap to a step — nothing is
        eyeballed. values are authored in px and compiled to rem.
      </p>
      <div>
        {SIZES.map((size) => (
          <div key={size} className={styles.barRow}>
            <span className={styles.barLabel}>--size-{size}</span>
            <span className={styles.bar} style={{ width: `var(--size-${size})` }} />
          </div>
        ))}
      </div>
    </>
  );
}

export function TypeSection() {
  return (
    <>
      <h2>type</h2>
      <p>
        one family — onest — in three weights: regular 400 for body, medium
        500 for controls and emphasis, semibold 600 for headings. body sits
        at 18px with 1.6 line height; headings tighten to 1.25 with -0.01em
        tracking. everything renders lowercase except code.
      </p>
      <div>
        {TYPE_STEPS.map((step) => (
          <div key={step.label} className={styles.typeRow}>
            <span className={styles.typeMeta}>{step.label}</span>
            <p
              className={styles.typeSample}
              style={{
                fontSize: `var(${step.size})`,
                fontWeight:
                  step.sample.startsWith("heading") ? 600 : undefined,
              }}
            >
              {step.sample}
            </p>
          </div>
        ))}
      </div>

      <h3>weights</h3>
      <p className={styles.row}>
        <span style={{ fontWeight: 400 }}>regular 400</span>
        <span style={{ fontWeight: 500 }}>medium 500</span>
        <span style={{ fontWeight: 600 }}>semibold 600</span>
      </p>
    </>
  );
}
