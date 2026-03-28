"use client";

interface CrumbLogoProps {
  size?: "sm" | "md" | "lg";
  /** Override text color. Defaults to #1C2B3A (navy) */
  textColor?: string;
  dotNavyColor?: string;
  dotOrangeColor?: string;
}

const sizes = {
  sm: { fontSize: 24, dotScale: 0.55 },
  md: { fontSize: 36, dotScale: 0.8 },
  lg: { fontSize: 56, dotScale: 1.2 },
};

export default function CrumbLogo({
  size = "md",
  textColor = "#1C2B3A",
  dotNavyColor = "#1C2B3A",
  dotOrangeColor = "#E8622A",
}: CrumbLogoProps) {
  const { fontSize, dotScale } = sizes[size];

  // Dots trail — positioned relative to the wordmark
  // They arc upward from above the "u" and curve back down below
  const dots = [
    // Rising arc left
    { cx: 0,   cy: -22, r: 3.5, color: dotOrangeColor },
    { cx: 8,   cy: -34, r: 5,   color: dotNavyColor },
    { cx: 18,  cy: -43, r: 3.5, color: dotOrangeColor },
    { cx: 29,  cy: -50, r: 5.5, color: dotNavyColor },
    { cx: 40,  cy: -54, r: 2.5, color: dotNavyColor },
    // Peak right
    { cx: 52,  cy: -56, r: 4.5, color: dotOrangeColor },
    { cx: 63,  cy: -53, r: 2,   color: dotNavyColor },
    { cx: 73,  cy: -46, r: 6,   color: dotOrangeColor },
    { cx: 81,  cy: -37, r: 2,   color: dotNavyColor },
    // Descending arc
    { cx: 6,   cy: 14,  r: 3.5, color: dotNavyColor },
    { cx: 5,   cy: 25,  r: 4.5, color: dotNavyColor },
    { cx: 2,   cy: 36,  r: 3,   color: dotOrangeColor },
    { cx: -4,  cy: 46,  r: 5,   color: dotNavyColor },
    { cx: -11, cy: 54,  r: 2.5, color: dotNavyColor },
    { cx: -18, cy: 60,  r: 5.5, color: dotOrangeColor },
  ];

  // The SVG overlay sits centred on the "u" — roughly 55% into "crumb"
  // We offset it from the left edge of the text block
  const textWidth = fontSize * 3.1; // approximate em width of "crumb"
  const uOffset = textWidth * 0.55; // rough x position of the "u"

  return (
    <span
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {/* Wordmark — uses Bitter (loaded in layout) */}
      <span
        style={{
          fontFamily: "var(--font-bitter), Georgia, serif",
          fontWeight: 900,
          fontSize,
          color: textColor,
          letterSpacing: "-0.016em",
          lineHeight: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        crumb
      </span>

      {/* Dot trail overlay */}
      <svg
        aria-hidden
        style={{
          position: "absolute",
          left: uOffset,
          top: "50%",
          transform: "translateY(-50%)",
          overflow: "visible",
          pointerEvents: "none",
          zIndex: 2,
        }}
        width={0}
        height={0}
        viewBox="0 0 0 0"
      >
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.cx * dotScale}
            cy={d.cy * dotScale}
            r={d.r * dotScale}
            fill={d.color}
          />
        ))}
      </svg>
    </span>
  );
}
