"use client";

// Hand-drawn SVG icon components — slightly irregular paths, round caps/joins, warm sketchy feel

export function IconLinkBroken({ size = 24, color = "#E8622A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top-left chain link — C shape */}
      <path
        d="M8.5 6.3 C6.8 6.1 4.9 7.2 4.2 9.0 C3.5 10.8 4.1 12.9 5.7 14.0 L7.3 15.1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.8 7.5 L11.2 8.6 C12.7 9.7 13.1 11.6 12.3 13.2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Gap indicator */}
      <path
        d="M12.4 11.5 L13.2 12.1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="1.5 2"
      />
      {/* Bottom-right chain link — C shape, offset */}
      <path
        d="M14.8 10.3 L16.1 11.2 C17.6 12.3 18.1 14.3 17.4 15.9 C16.6 17.7 14.7 18.6 12.9 18.1 L11.5 17.6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 9.2 C14.0 8.6 14.9 8.4 15.5 8.7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconQuestion({ size = 24, color = "#E8622A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Curvy question mark stem */}
      <path
        d="M8.5 8.8 C8.3 6.5 9.9 4.8 11.8 4.6 C13.8 4.4 15.5 5.8 15.6 7.7 C15.7 9.3 14.6 10.6 13.2 11.4 C12.4 11.9 12.1 12.5 12.0 13.4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dot — slightly wobbly circle */}
      <circle cx="12.1" cy="18.0" r="1.2" fill={color} />
    </svg>
  );
}

export function IconHourglass({ size = 24, color = "#E8622A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top triangle — slightly asymmetric */}
      <path
        d="M5.5 4.5 L18.3 4.7 L12.2 12.1 Z"
        stroke={color}
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom triangle — slightly asymmetric */}
      <path
        d="M5.7 19.6 L18.1 19.4 L11.9 12.1 Z"
        stroke={color}
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sand draining */}
      <path
        d="M12.1 14.5 L12.0 17.8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconList({ size = 24, color = "#1C2B3A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 3 slightly uneven horizontal lines */}
      <path d="M4.1 7.2 L19.6 7.0" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M4.3 12.1 L19.8 12.0" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M4.0 17.0 L19.5 17.2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ size = 24, color = "#1C2B3A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Two crossing lines, slightly wobbly */}
      <path d="M5.8 5.6 C9.2 9.1 14.5 14.8 18.3 18.4" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M18.2 5.8 C14.7 9.2 9.3 14.6 5.7 18.2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconCaretDown({ size = 24, color = "#1C2B3A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Slightly irregular V shape */}
      <path
        d="M5.5 8.5 C7.8 11.2 10.2 13.9 12.1 15.6 C14.0 13.8 16.4 11.0 18.5 8.6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCaretUp({ size = 24, color = "#1C2B3A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Slightly irregular inverted V */}
      <path
        d="M5.5 15.5 C7.8 12.8 10.2 10.1 12.1 8.4 C14.0 10.2 16.4 13.0 18.5 15.4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCheck({ size = 20, color = "#E8622A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hand-drawn tick, slightly swoopy */}
      <path
        d="M4.5 12.8 C7.0 14.5 9.0 16.8 10.5 18.5 C13.5 14.2 17.0 9.5 20.2 6.0"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconArrow({ size = 24, color = "#1C2B3A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Arrow shaft */}
      <path d="M4.2 12.1 C9.5 12.0 15.2 11.9 19.4 12.0" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Arrow head — slightly uneven */}
      <path
        d="M14.5 7.5 C16.5 9.2 18.8 11.1 19.5 12.0 C18.7 12.9 16.3 14.9 14.5 16.6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconStar({ size = 24, color = "#E8622A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 5-pointed star — hand-drawn, slightly imperfect */}
      <path
        d="M12.0 3.2 L13.8 8.7 L19.5 8.9 L15.0 12.3 L16.8 17.9 L12.0 14.6 L7.2 17.9 L9.1 12.3 L4.5 8.9 L10.2 8.7 Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function IconSparkle({ size = 20, color = "#E8622A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 4-point star / sparkle — like ✦ but hand-drawn */}
      <path
        d="M12 3.5 C12.3 7.2 11.8 11.3 12.1 12.0 C12.8 11.7 17.0 12.2 20.4 12.0 C17.1 11.8 12.7 12.3 12.0 12.1 C11.7 12.8 12.2 16.9 12.0 20.5 C11.8 16.8 12.3 12.7 12.0 12.0 C11.3 12.3 7.2 11.8 3.6 12.0 C6.9 12.2 11.3 11.7 12.0 11.9 C12.3 11.2 11.8 7.1 12.0 3.5 Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.15"
      />
    </svg>
  );
}

export function IconDot({ size = 8, color = "#E8622A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="3.2" fill={color} />
    </svg>
  );
}

// IconMinus — for ComparisonTable partial indicator
export function IconMinus({ size = 16, color = "#7A6F66" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 12.1 L18.5 11.9" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// IconX — for ComparisonTable false indicator (different from close button)
export function IconX({ size = 16, color = "#D4CFC6" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 6.3 L17.7 17.7" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M17.5 6.5 L6.3 17.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
