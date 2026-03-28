"use client";

import React from "react";

interface RobotProps {
  width?: number;
  height?: number;
  className?: string;
}

/* ─── Palette ─────────────────────────────────────────────────────────── */
const STROKE = "#1C2B3A";
const ACCENT = "#E8622A";

/* ─── Common stroke props — 30% bolder ────────────────────────────────── */
const heavy: React.SVGProps<SVGPathElement> = {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: STROKE,
  strokeWidth: 4.5,
  fill: "none",
};

const medium: React.SVGProps<SVGPathElement> = {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: STROKE,
  strokeWidth: 3.2,
  fill: "none",
};

const light: React.SVGProps<SVGPathElement> = {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: STROKE,
  strokeWidth: 2.6,
  fill: "none",
};

/* Circle-compatible versions */
const cHeavy: React.SVGProps<SVGCircleElement> = {
  stroke: STROKE,
  strokeWidth: 4.5,
  fill: "none",
};

const cMedium: React.SVGProps<SVGCircleElement> = {
  stroke: STROKE,
  strokeWidth: 3.2,
  fill: "none",
};

const cLight: React.SVGProps<SVGCircleElement> = {
  stroke: STROKE,
  strokeWidth: 2.6,
  fill: "none",
};

/* ════════════════════════════════════════════════════════════════════════
   RobotShrug — "The Bewildered One"
   Short, squat, wide body. Bug eyes looking sideways. Shrugging hard.
   Crooked antenna with a big orange bobble.
   ════════════════════════════════════════════════════════════════════════ */
export function RobotShrug({ width = 120, height = 160, className }: RobotProps) {
  return (
    <svg
      viewBox="0 0 120 160"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Antenna — crooked wire with big orange bobble */}
      <path d="M 56 38 Q 48 20, 42 14" {...medium} />
      <circle cx="40" cy="11" r="5.5" fill={ACCENT} stroke={STROKE} strokeWidth={2.5} />

      {/* Head — wide box, slightly wonky */}
      <path
        d="M 28 38 C 28 33, 33 30, 38 30 L 83 31 C 88 31, 93 35, 92 40 L 91 63 C 91 68, 86 71, 81 71 L 38 70 C 33 70, 28 66, 29 61 Z"
        {...heavy}
      />

      {/* Left eye — big round, pupil looking right */}
      <circle cx="50" cy="46" r="10" {...cMedium} />
      <circle cx="55" cy="45" r="3.5" fill={STROKE} stroke="none" />

      {/* Right eye — big round, pupil looking right */}
      <circle cx="72" cy="47" r="10" {...cMedium} />
      <circle cx="77" cy="46" r="3.5" fill={STROKE} stroke="none" />

      {/* Eyebrow — one raised, one flat (confused) */}
      <path d="M 40 33 L 56 31" {...medium} />
      <path d="M 64 30 C 67 27, 78 28, 80 32" {...medium} />

      {/* Mouth — little wobbly O of surprise */}
      <path
        d="M 56 60 C 56 56, 65 56, 65 60 C 65 64, 56 64, 56 60 Z"
        {...medium}
      />

      {/* Body — short squat wide rectangle with belly button */}
      <path
        d="M 26 74 C 26 70, 31 68, 35 68 L 87 69 C 91 69, 95 73, 95 77 L 94 113 C 94 117, 89 120, 85 120 L 35 119 C 31 119, 26 116, 27 112 Z"
        {...heavy}
      />
      {/* Belly bolt */}
      <circle cx="60" cy="96" r="4" stroke={STROKE} strokeWidth={2.6} fill="none" />
      <circle cx="60" cy="96" r="1.5" fill={STROKE} stroke="none" />

      {/* Left arm — flung up and out, palm open */}
      <path d="M 26 82 L 12 72 L 6 56" {...heavy} />
      {/* Left hand — 3 chunky fingers splayed */}
      <path d="M 6 56 L 1 46" {...medium} />
      <path d="M 6 56 L 6 44" {...medium} />
      <path d="M 6 56 L 12 48" {...medium} />

      {/* Right arm — flung up and out, palm open */}
      <path d="M 95 83 L 109 73 L 115 57" {...heavy} />
      {/* Right hand — 3 chunky fingers splayed */}
      <path d="M 115 57 L 110 47" {...medium} />
      <path d="M 115 57 L 115 45" {...medium} />
      <path d="M 115 57 L 119 49" {...medium} />

      {/* Left leg — pigeon-toed */}
      <path d="M 44 119 L 42 140" {...heavy} />
      <path
        d="M 42 140 C 37 140, 34 142, 34 145 C 34 149, 39 150, 44 150 C 49 150, 50 147, 50 145 C 50 142, 47 140, 42 140 Z"
        fill={STROKE} stroke="none"
      />

      {/* Right leg — pigeon-toed */}
      <path d="M 76 120 L 78 140" {...heavy} />
      <path
        d="M 78 140 C 73 140, 70 142, 70 145 C 70 149, 75 150, 80 150 C 85 150, 86 147, 86 145 C 86 142, 83 140, 78 140 Z"
        fill={STROKE} stroke="none"
      />

      {/* Confusion sparks above head */}
      <path d="M 48 24 L 46 16" {...light} />
      <path d="M 60 22 L 60 14" {...light} />
      <path d="M 72 24 L 76 16" {...light} />

      {/* Big question mark floating */}
      <path d="M 104 36 C 104 30, 114 30, 114 36 C 114 40, 109 41, 109 46" {...medium} />
      <circle cx="109" cy="50" r="1.8" fill={STROKE} stroke="none" />

      {/* Sweat drop */}
      <path d="M 20 42 C 20 38, 24 36, 23 40 C 22 44, 20 44, 20 42 Z" fill={ACCENT} stroke="none" opacity={0.6} />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   RobotThinking — "The Tall Thinker"
   Tall, thin, narrow capsule body. One eye bigger than the other.
   Hand on chin, thought bubbles. Quirky rabbit-ear antennae.
   ════════════════════════════════════════════════════════════════════════ */
export function RobotThinking({ width = 120, height = 160, className }: RobotProps) {
  return (
    <svg
      viewBox="0 0 120 160"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Antenna — two rabbit ears, one droopy */}
      <path d="M 48 26 L 38 6" {...medium} />
      <circle cx="36" cy="4" r="3" fill={STROKE} stroke="none" />
      <path d="M 64 25 Q 72 14, 76 8" {...medium} />
      <circle cx="78" cy="6" r="3" fill={STROKE} stroke="none" />
      {/* Connecting wire between ears */}
      <path d="M 38 6 Q 58 -2, 76 8" {...light} opacity={0.3} />

      {/* Head — tall oval/egg, slightly tilted */}
      <path
        d="M 36 38 C 34 26, 44 20, 60 21 C 76 22, 84 30, 82 42 C 80 54, 70 60, 56 59 C 42 58, 34 50, 36 38 Z"
        {...heavy}
      />

      {/* Left eye — large circle with fat pupil */}
      <circle cx="49" cy="36" r="9" {...cMedium} />
      <circle cx="51" cy="35" r="3.5" fill={STROKE} stroke="none" />
      {/* Glint */}
      <circle cx="47" cy="33" r="1.5" fill="#FFFFFF" stroke="none" />

      {/* Right eye — smaller (quirky asymmetry), ORANGE pupil */}
      <circle cx="68" cy="38" r="7" {...cMedium} />
      <circle cx="69" cy="37" r="3" fill={ACCENT} stroke="none" />

      {/* One eyebrow raised high */}
      <path d="M 40 24 C 44 20, 54 21, 58 24" {...medium} />
      <path d="M 62 28 L 74 27" {...medium} />

      {/* Mouth — tiny squiggly concentrating line */}
      <path d="M 52 50 C 54 48, 58 52, 62 49" {...medium} />

      {/* Body — tall narrow capsule */}
      <path
        d="M 44 62 C 42 60, 42 58, 46 58 L 70 59 C 74 59, 76 62, 75 64 L 73 114 C 73 118, 69 120, 66 120 L 52 119 C 48 119, 44 116, 44 112 Z"
        {...heavy}
      />

      {/* Chest panel with lines */}
      <path d="M 50 76 L 68 77" {...light} opacity={0.4} />
      <path d="M 51 82 L 67 83" {...light} opacity={0.4} />
      <path d="M 52 88 L 62 89" {...light} opacity={0.4} />

      {/* Right arm — bent up, hand on chin */}
      <path d="M 75 74 L 86 66 L 84 54 L 76 50" {...heavy} />
      {/* Chunky mitten hand at chin */}
      <path
        d="M 76 50 C 72 46, 68 48, 70 52 C 72 56, 78 54, 76 50 Z"
        fill={STROKE} stroke="none" opacity={0.8}
      />

      {/* Left arm — behind back, hand peeking */}
      <path d="M 44 76 L 34 84 L 30 82" {...heavy} />

      {/* Left leg — long thin, one foot turned out */}
      <path d="M 50 119 L 44 144" {...heavy} />
      <path
        d="M 44 144 C 39 143, 34 145, 34 148 C 34 152, 42 153, 48 151 C 52 149, 50 146, 44 144 Z"
        fill={STROKE} stroke="none"
      />

      {/* Right leg — crossed slightly */}
      <path d="M 66 120 L 70 144" {...heavy} />
      <path
        d="M 70 144 C 65 143, 62 145, 62 148 C 62 152, 70 153, 76 151 C 80 149, 76 146, 70 144 Z"
        fill={STROKE} stroke="none"
      />

      {/* Thought bubbles — ascending, getting bigger */}
      <circle cx="88" cy="24" r="2.5" fill={STROKE} stroke="none" opacity={0.5} />
      <circle cx="94" cy="16" r="3.5" fill={STROKE} stroke="none" opacity={0.6} />
      <circle cx="102" cy="8" r="5" fill={STROKE} stroke="none" opacity={0.4} />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   RobotOverwhelmed — "The Panicker"
   Medium body tilted, spiral eyes spinning, hands grabbing head.
   Zigzag antenna sparking. Stressed grimace mouth.
   ════════════════════════════════════════════════════════════════════════ */
export function RobotOverwhelmed({ width = 120, height = 160, className }: RobotProps) {
  return (
    <svg
      viewBox="0 0 120 160"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Antenna — zigzag spring, sparking at tip */}
      <path d="M 55 28 L 48 20 L 58 14 L 46 8 L 54 2" {...medium} />
      {/* Spark at tip */}
      <path d="M 54 2 L 50 -2" {...light} stroke={ACCENT} />
      <path d="M 54 2 L 58 -1" {...light} stroke={ACCENT} />
      <path d="M 54 2 L 54 -3" {...light} stroke={ACCENT} />

      {/* Head — square-ish, tilted, wobbling */}
      <path
        d="M 32 32 C 31 27, 37 24, 42 24 L 82 26 C 87 26, 91 30, 90 35 L 89 58 C 88 63, 83 66, 78 66 L 38 64 C 33 64, 29 59, 30 54 Z"
        {...heavy}
      />

      {/* Left spiral eye — bigger, more frantic */}
      <path
        d="M 46 40 C 49 37, 54 38, 53 42 C 52 46, 46 46, 45 42 C 44 37, 55 35, 56 42 C 57 49, 44 50, 43 42 Z"
        {...medium}
      />

      {/* Right spiral eye — bigger */}
      <path
        d="M 65 41 C 68 38, 73 39, 72 43 C 71 47, 65 47, 64 43 C 63 38, 74 36, 75 43 C 76 50, 63 51, 62 43 Z"
        {...medium}
      />

      {/* Mouth — jagged stressed grimace — ORANGE */}
      <path
        d="M 44 56 L 49 52 L 54 57 L 59 52 L 64 57 L 69 52 L 74 56"
        stroke={ACCENT}
        strokeWidth={3.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Body — medium rectangle, tilted to match panic */}
      <path
        d="M 30 70 C 29 66, 33 63, 37 63 L 85 65 C 90 65, 94 69, 93 73 L 91 116 C 90 120, 86 123, 82 123 L 34 121 C 30 121, 27 117, 28 113 Z"
        {...heavy}
      />

      {/* Warning triangle on chest — ORANGE */}
      <path
        d="M 56 84 L 64 84 L 60 76 Z"
        stroke={ACCENT}
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M 60 79 L 60 82" stroke={ACCENT} strokeWidth={2} strokeLinecap="round" fill="none" />
      <circle cx="60" cy="83.5" r="0.8" fill={ACCENT} stroke="none" />

      {/* Left arm — grabbing side of head */}
      <path d="M 30 78 L 18 66 L 24 50 L 34 40" {...heavy} />
      <path
        d="M 34 40 C 30 36, 26 39, 29 43 C 32 46, 37 43, 34 40 Z"
        fill={STROKE} stroke="none" opacity={0.8}
      />

      {/* Right arm — grabbing other side of head */}
      <path d="M 93 79 L 104 67 L 98 51 L 88 42" {...heavy} />
      <path
        d="M 88 42 C 92 38, 96 41, 93 45 C 90 48, 86 45, 88 42 Z"
        fill={STROKE} stroke="none" opacity={0.8}
      />

      {/* Left leg */}
      <path d="M 44 121 L 40 144" {...heavy} />
      <path
        d="M 40 144 C 35 144, 32 146, 32 149 C 32 152, 38 154, 44 153 C 49 152, 49 149, 48 147 C 47 145, 44 144, 40 144 Z"
        fill={STROKE} stroke="none"
      />

      {/* Right leg — slightly bent, stumbling */}
      <path d="M 76 122 L 82 138 L 80 144" {...heavy} />
      <path
        d="M 80 144 C 75 144, 72 146, 72 149 C 72 152, 78 154, 84 153 C 89 152, 89 149, 88 147 C 87 145, 84 144, 80 144 Z"
        fill={STROKE} stroke="none"
      />

      {/* Stress lines radiating from head */}
      <path d="M 28 26 L 20 18" {...light} />
      <path d="M 34 20 L 28 10" {...light} />
      <path d="M 90 22 L 98 14" {...light} />
      <path d="M 94 32 L 102 26" {...light} />
      <path d="M 96 42 L 104 38" {...light} />

      {/* Sweat drops — bigger */}
      <path d="M 18 36 C 18 32, 22 28, 22 33 C 22 38, 18 40, 18 36 Z" fill={STROKE} stroke="none" opacity={0.5} />
      <path d="M 100 50 C 100 46, 104 42, 104 47 C 104 52, 100 54, 100 50 Z" fill={STROKE} stroke="none" opacity={0.5} />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   RobotWorking — "The Focused Builder"
   Boxy/sturdy trapezoid body. Hard hat. Determined slit eyes.
   Holding wrench, gear spinning nearby. Chest indicator glows orange.
   ════════════════════════════════════════════════════════════════════════ */
export function RobotWorking({ width = 120, height = 160, className }: RobotProps) {
  return (
    <svg
      viewBox="0 0 120 160"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Antenna — short piston with flag */}
      <path d="M 60 26 L 60 12" {...medium} />
      <path d="M 60 12 L 72 8 L 60 4" {...light} fill={ACCENT} stroke={ACCENT} strokeWidth={2} />

      {/* Head — rectangle with hard hat brim */}
      <path
        d="M 34 28 L 86 29 C 90 29, 92 32, 92 36 L 91 56 C 91 60, 87 63, 83 63 L 37 62 C 33 62, 30 58, 30 54 L 31 32 C 31 29, 33 28, 34 28 Z"
        {...heavy}
      />
      {/* Hard hat brim — thick */}
      <path d="M 26 28 L 94 30" {...heavy} />

      {/* Left eye — determined slit with brow */}
      <path d="M 40 40 L 54 40" {...heavy} />
      <path d="M 39 36 L 55 35" {...medium} />

      {/* Right eye — determined slit with brow */}
      <path d="M 66 41 L 80 41" {...heavy} />
      <path d="M 65 37 L 81 36" {...medium} />

      {/* Mouth — clenched determined line with uptick */}
      <path d="M 48 53 L 72 54 L 74 52" {...medium} />

      {/* Body — trapezoid, wider at base, sturdy */}
      <path
        d="M 36 66 L 84 67 C 90 67, 95 71, 96 76 L 99 112 C 99 116, 95 119, 90 119 L 30 118 C 26 118, 22 114, 23 110 L 26 73 C 27 69, 31 66, 36 66 Z"
        {...heavy}
      />

      {/* Chest indicator — glowing ORANGE circle */}
      <circle cx="62" cy="84" r="5.5" fill={ACCENT} stroke={STROKE} strokeWidth={2.6} />
      {/* Glow ring */}
      <circle cx="62" cy="84" r="8" fill="none" stroke={ACCENT} strokeWidth={1.5} opacity={0.3} />

      {/* Left arm — forward, holding wrench */}
      <path d="M 26 80 L 12 84 L 6 76" {...heavy} />
      {/* Wrench */}
      <path d="M 6 76 L 2 70" {...medium} />
      <path d="M -1 68 L 5 72" {...medium} />
      <path d="M 5 72 L 2 74" {...medium} />

      {/* Right arm — reaching toward gear */}
      <path d="M 96 81 L 108 86 L 112 94" {...heavy} />
      {/* Chunky mitten hand */}
      <path
        d="M 112 94 C 116 91, 118 95, 116 98 C 114 100, 110 97, 112 94 Z"
        fill={STROKE} stroke="none" opacity={0.8}
      />

      {/* Gear shape — more detailed, spinning vibe */}
      <path
        d="M 106 102 L 108 98 L 112 100 L 114 96 L 118 98 L 119 94 L 118 98 L 116 102 L 118 105 L 114 106 L 113 110 L 109 108 L 106 110 L 105 106 L 102 105 L 104 102 Z"
        {...light}
      />

      {/* Motion lines near wrench */}
      <path d="M -1 66 L 3 63" {...light} />
      <path d="M 0 62 L 5 60" {...light} />
      <path d="M 1 58 L 4 57" {...light} />

      {/* Left leg — sturdy, planted */}
      <path d="M 42 118 L 38 140" {...heavy} />
      <path
        d="M 38 140 C 33 140, 28 142, 28 146 C 28 150, 34 152, 42 151 C 48 150, 48 147, 48 144 C 48 142, 43 140, 38 140 Z"
        fill={STROKE} stroke="none"
      />

      {/* Right leg — sturdy, planted */}
      <path d="M 80 119 L 82 140" {...heavy} />
      <path
        d="M 82 140 C 77 140, 72 142, 72 146 C 72 150, 78 152, 86 151 C 92 150, 92 147, 92 144 C 92 142, 87 140, 82 140 Z"
        fill={STROKE} stroke="none"
      />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   RobotHappy — "The Celebrator"
   Round bouncy body. ^_^ squint smile. Arms thrown up in V.
   Floating off the ground. Sparkles and confetti everywhere.
   ════════════════════════════════════════════════════════════════════════ */
export function RobotHappy({ width = 120, height = 160, className }: RobotProps) {
  return (
    <svg
      viewBox="0 0 120 160"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Antenna — party hat / propeller */}
      <path d="M 60 22 L 60 10" {...medium} />
      <circle cx="60" cy="8" r="3" fill={ACCENT} stroke={STROKE} strokeWidth={2} />
      {/* Propeller blades */}
      <path d="M 60 8 L 52 2" {...medium} />
      <path d="M 60 8 L 68 2" {...medium} />
      <path d="M 60 8 L 60 -1" {...medium} />

      {/* Head — big round circle, bouncy */}
      <path
        d="M 36 36 C 34 22, 44 14, 60 14 C 76 14, 86 22, 84 36 C 82 50, 74 56, 60 56 C 46 56, 34 50, 36 36 Z"
        {...heavy}
      />

      {/* Happy squint eyes — thick upside-down U arcs (^_^) */}
      <path d="M 42 34 C 44 26, 54 26, 56 34" {...heavy} />
      <path d="M 64 34 C 66 26, 76 26, 78 34" {...heavy} />

      {/* Cheek blush — ORANGE circles */}
      <circle cx="42" cy="42" r="5" fill={ACCENT} stroke="none" opacity={0.5} />
      <circle cx="78" cy="42" r="5" fill={ACCENT} stroke="none" opacity={0.5} />

      {/* Mouth — big wide grin */}
      <path d="M 44 42 C 46 54, 74 54, 76 42" {...medium} />
      {/* Tooth */}
      <path d="M 56 48 L 56 52 L 64 52 L 64 48" fill="#FFFFFF" stroke={STROKE} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

      {/* Body — round capsule, bouncy */}
      <path
        d="M 36 60 C 32 58, 30 64, 30 70 L 31 102 C 31 112, 38 118, 60 118 C 82 118, 89 112, 89 102 L 90 70 C 90 64, 88 58, 84 60 Z"
        {...heavy}
      />

      {/* Heart on chest */}
      <path
        d="M 56 82 C 56 78, 60 76, 60 80 C 60 76, 64 78, 64 82 C 64 88, 60 92, 60 92 C 60 92, 56 88, 56 82 Z"
        fill={ACCENT} stroke="none" opacity={0.7}
      />

      {/* Left arm — raised HIGH in V */}
      <path d="M 30 70 L 10 28" {...heavy} />
      {/* Left mitten — open celebrating */}
      <path
        d="M 10 28 C 6 24, 3 27, 6 30 C 9 33, 14 30, 10 28 Z"
        fill={STROKE} stroke="none" opacity={0.8}
      />

      {/* Right arm — raised HIGH in V */}
      <path d="M 90 70 L 110 28" {...heavy} />
      {/* Right mitten */}
      <path
        d="M 110 28 C 114 24, 117 27, 114 30 C 111 33, 106 30, 110 28 Z"
        fill={STROKE} stroke="none" opacity={0.8}
      />

      {/* Legs — bent like jumping, bouncing */}
      <path d="M 48 118 L 42 132 L 44 138" {...heavy} />
      <path d="M 72 118 L 78 132 L 76 138" {...heavy} />

      {/* Shadow oval below (floating!) */}
      <path
        d="M 40 154 C 40 152, 80 152, 80 154 C 80 156, 40 156, 40 154 Z"
        stroke={STROKE} strokeWidth={2} fill="none" opacity={0.2}
      />

      {/* Sparkle bursts — bigger, bolder */}
      <path d="M 14 18 L 14 10 M 10 14 L 18 14" {...light} />
      <path d="M 106 18 L 106 10 M 102 14 L 110 14" {...light} />
      <path d="M 20 58 L 20 52 M 17 55 L 23 55" {...light} />
      <path d="M 100 58 L 100 52 M 97 55 L 103 55" {...light} />

      {/* Confetti dots */}
      <circle cx="24" cy="40" r="2" fill={ACCENT} stroke="none" opacity={0.6} />
      <circle cx="96" cy="44" r="2.5" fill={ACCENT} stroke="none" opacity={0.5} />
      <circle cx="16" cy="50" r="1.5" fill={STROKE} stroke="none" opacity={0.4} />
      <circle cx="104" cy="36" r="1.5" fill={STROKE} stroke="none" opacity={0.4} />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   RobotWaiting — "The Patient One"
   Pill/capsule body. Heavy-lidded sleepy eyes. Droopy antenna.
   Leaning, one hand in pocket, other arm has orange watch.
   "..." dots floating nearby.
   ════════════════════════════════════════════════════════════════════════ */
export function RobotWaiting({ width = 120, height = 160, className }: RobotProps) {
  return (
    <svg
      viewBox="0 0 120 160"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Antenna — droopy, curves downward with weight */}
      <path d="M 58 20 Q 54 8, 64 4 Q 74 0, 80 6" {...medium} />
      <circle cx="82" cy="7" r="3.5" fill={STROKE} stroke="none" opacity={0.7} />

      {/* Head — dome/half-circle top, flat bottom, chunky */}
      <path
        d="M 32 52 L 32 38 C 32 22, 44 16, 60 16 C 76 16, 88 22, 88 38 L 88 52 L 32 52 Z"
        {...heavy}
      />

      {/* Left eye — heavy-lidded, droopy */}
      <path d="M 40 36 L 54 36" {...heavy} />
      <path d="M 41 36 C 42 42, 53 42, 54 36" {...medium} />
      {/* Tiny pupil peeking out */}
      <circle cx="48" cy="39" r="2" fill={STROKE} stroke="none" />

      {/* Right eye — heavy-lidded, droopy */}
      <path d="M 66 36 L 80 36" {...heavy} />
      <path d="M 67 36 C 68 42, 79 42, 80 36" {...medium} />
      <circle cx="74" cy="39" r="2" fill={STROKE} stroke="none" />

      {/* Mouth — flat bored line, slight droop */}
      <path d="M 48 47 C 52 46, 68 46, 72 47 C 70 48, 50 48, 48 47" {...medium} />

      {/* Body — pill/capsule, slightly leaning */}
      <path
        d="M 34 56 C 30 56, 28 60, 28 64 L 29 110 C 29 118, 36 122, 60 122 C 84 122, 91 118, 91 110 L 92 64 C 92 60, 90 56, 86 56 Z"
        {...heavy}
      />

      {/* Pocket on body */}
      <path d="M 38 94 L 38 108 L 52 108 L 52 94" {...light} opacity={0.4} />

      {/* Left arm — hand tucked in pocket */}
      <path d="M 28 74 L 18 80 L 20 90 L 28 92" {...heavy} />

      {/* Right arm — hanging down, with orange watch */}
      <path d="M 92 74 L 100 82 L 98 100" {...heavy} />
      {/* Watch — bigger, more detailed */}
      <circle cx="98" cy="98" r="5" fill={ACCENT} stroke={STROKE} strokeWidth={2.6} />
      {/* Watch face */}
      <path d="M 98 98 L 98 95" stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" fill="none" />
      <path d="M 98 98 L 100 98" stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" fill="none" />

      {/* Left leg — standing, foot turned out */}
      <path d="M 48 122 L 44 142" {...heavy} />
      <path
        d="M 44 142 C 39 142, 34 144, 34 147 C 34 151, 40 153, 48 152 C 54 151, 54 147, 50 145 Z"
        fill={STROKE} stroke="none"
      />

      {/* Right leg — standing, crossed slightly */}
      <path d="M 72 122 L 76 142" {...heavy} />
      <path
        d="M 76 142 C 71 142, 68 144, 68 147 C 68 151, 74 153, 80 152 C 86 151, 86 147, 82 145 Z"
        fill={STROKE} stroke="none"
      />

      {/* "..." dots — bigger, floating lazily */}
      <circle cx="102" cy="58" r="3" fill={STROKE} stroke="none" opacity={0.4} />
      <circle cx="109" cy="56" r="3" fill={STROKE} stroke="none" opacity={0.5} />
      <circle cx="116" cy="58" r="3" fill={STROKE} stroke="none" opacity={0.3} />

      {/* Z's floating — sleeping vibe */}
      <path d="M 94 26 L 100 26 L 94 32 L 100 32" {...light} opacity={0.3} />
      <path d="M 102 18 L 108 18 L 102 24 L 108 24" {...light} opacity={0.2} />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   Robot — Unified component with pose prop
   ════════════════════════════════════════════════════════════════════════ */
type RobotPose =
  | "shrug"
  | "thinking"
  | "overwhelmed"
  | "working"
  | "happy"
  | "waiting";

interface RobotComponentProps extends RobotProps {
  pose: RobotPose;
}

const POSE_MAP: Record<RobotPose, React.FC<RobotProps>> = {
  shrug: RobotShrug,
  thinking: RobotThinking,
  overwhelmed: RobotOverwhelmed,
  working: RobotWorking,
  happy: RobotHappy,
  waiting: RobotWaiting,
};

export function Robot({ pose, ...props }: RobotComponentProps) {
  const Component = POSE_MAP[pose];
  return <Component {...props} />;
}

export default Robot;
