"use client";

/**
 * CrumbDots — decorative dot trail inspired by the Crumb logo.
 * Use as section dividers, heading accents, or background texture.
 *
 * Variants:
 *   "divider"   — horizontal row of dots between sections
 *   "trail"     — curving arc of dots (like the logo's dot trail)
 *   "scatter"   — loose random scatter for background texture
 *   "accent"    — 3-dot cluster for small inline accents
 */

interface CrumbDotsProps {
  variant?: "divider" | "trail" | "scatter" | "accent";
  width?: number;
  height?: number;
  className?: string;
}

export default function CrumbDots({
  variant = "divider",
  width,
  height,
  className,
}: CrumbDotsProps) {
  if (variant === "accent") {
    return (
      <svg
        width={width ?? 40}
        height={height ?? 12}
        viewBox="0 0 40 12"
        fill="none"
        className={className}
        aria-hidden
      >
        <circle cx="6" cy="6" r="3" fill="#E8622A" />
        <circle cx="20" cy="6" r="2" fill="#1C2B3A" />
        <circle cx="32" cy="6" r="3.5" fill="#E8622A" opacity={0.6} />
      </svg>
    );
  }

  if (variant === "divider") {
    // Horizontal dot row, varying sizes and colors, like breadcrumbs
    // Organic scattered dots — hand-drawn feel, not a straight line
    // Dots wander vertically, vary in size, cluster organically
    const w = width ?? 320;
    return (
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 0",
        }}
        aria-hidden
      >
        <svg width={w} height={height ?? 40} viewBox={`0 0 ${w} 40`} fill="none">
          {/* Scattered trail — dots wander up/down, not on a grid */}
          <circle cx={w * 0.04} cy="22" r="2.5" fill="#1C2B3A" opacity={0.18} />
          <circle cx={w * 0.09} cy="14" r="4" fill="#E8622A" opacity={0.3} />
          <circle cx={w * 0.13} cy="28" r="1.8" fill="#1C2B3A" opacity={0.15} />
          <circle cx={w * 0.19} cy="18" r="5.5" fill="#E8622A" opacity={0.12} />
          <circle cx={w * 0.24} cy="24" r="2" fill="#1C2B3A" opacity={0.22} />
          <circle cx={w * 0.30} cy="11" r="3.5" fill="#E8622A" opacity={0.35} />
          <circle cx={w * 0.34} cy="30" r="1.5" fill="#1C2B3A" opacity={0.12} />
          <circle cx={w * 0.40} cy="20" r="6" fill="#E8622A" opacity={0.08} />
          <circle cx={w * 0.44} cy="15" r="2.8" fill="#1C2B3A" opacity={0.2} />
          <circle cx={w * 0.50} cy="25" r="4.5" fill="#E8622A" opacity={0.25} />
          <circle cx={w * 0.55} cy="12" r="2" fill="#1C2B3A" opacity={0.18} />
          <circle cx={w * 0.61} cy="29" r="3" fill="#E8622A" opacity={0.3} />
          <circle cx={w * 0.66} cy="17" r="1.5" fill="#1C2B3A" opacity={0.14} />
          <circle cx={w * 0.72} cy="22" r="5" fill="#E8622A" opacity={0.1} />
          <circle cx={w * 0.77} cy="13" r="3.2" fill="#1C2B3A" opacity={0.2} />
          <circle cx={w * 0.82} cy="27" r="4" fill="#E8622A" opacity={0.28} />
          <circle cx={w * 0.88} cy="16" r="2" fill="#1C2B3A" opacity={0.16} />
          <circle cx={w * 0.93} cy="24" r="3.5" fill="#E8622A" opacity={0.22} />
          <circle cx={w * 0.97} cy="19" r="1.8" fill="#1C2B3A" opacity={0.12} />
        </svg>
      </div>
    );
  }

  if (variant === "trail") {
    // Curving arc of dots — like the logo's dot trail above the "u"
    const w = width ?? 200;
    const h = height ?? 80;
    return (
      <svg
        width={w}
        height={h}
        viewBox="0 0 200 80"
        fill="none"
        className={className}
        aria-hidden
        style={{ overflow: "visible" }}
      >
        {/* Arcing trail of mixed dots */}
        <circle cx="10" cy="65" r="3" fill="#1C2B3A" opacity={0.2} />
        <circle cx="28" cy="50" r="4.5" fill="#E8622A" opacity={0.35} />
        <circle cx="50" cy="36" r="2.5" fill="#1C2B3A" opacity={0.3} />
        <circle cx="72" cy="22" r="5" fill="#E8622A" opacity={0.25} />
        <circle cx="95" cy="14" r="3" fill="#1C2B3A" opacity={0.2} />
        <circle cx="118" cy="12" r="4" fill="#E8622A" opacity={0.4} />
        <circle cx="140" cy="18" r="2" fill="#1C2B3A" opacity={0.25} />
        <circle cx="158" cy="30" r="5.5" fill="#E8622A" opacity={0.2} />
        <circle cx="175" cy="45" r="3" fill="#1C2B3A" opacity={0.3} />
        <circle cx="190" cy="62" r="4" fill="#E8622A" opacity={0.35} />
      </svg>
    );
  }

  // "scatter" — loose random dots for background texture
  const w = width ?? 400;
  const h = height ?? 200;
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      className={className}
      aria-hidden
      style={{ position: "absolute", pointerEvents: "none", overflow: "visible" }}
    >
      <circle cx={w * 0.08} cy={h * 0.2} r="3" fill="#E8622A" opacity={0.12} />
      <circle cx={w * 0.15} cy={h * 0.7} r="5" fill="#1C2B3A" opacity={0.06} />
      <circle cx={w * 0.25} cy={h * 0.35} r="2.5" fill="#E8622A" opacity={0.1} />
      <circle cx={w * 0.4} cy={h * 0.1} r="4" fill="#E8622A" opacity={0.08} />
      <circle cx={w * 0.55} cy={h * 0.85} r="3.5" fill="#1C2B3A" opacity={0.07} />
      <circle cx={w * 0.65} cy={h * 0.45} r="6" fill="#E8622A" opacity={0.06} />
      <circle cx={w * 0.75} cy={h * 0.15} r="2" fill="#1C2B3A" opacity={0.08} />
      <circle cx={w * 0.85} cy={h * 0.6} r="4.5" fill="#E8622A" opacity={0.1} />
      <circle cx={w * 0.92} cy={h * 0.3} r="3" fill="#1C2B3A" opacity={0.06} />
    </svg>
  );
}
