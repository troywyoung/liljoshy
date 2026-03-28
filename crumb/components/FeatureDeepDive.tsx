"use client";

import { motion } from "framer-motion";
import { IconCheck } from "./HandDrawnIcons";

/* ─────────────────────────────────────────────────────────────────────
   PLANNING MOCKUP — Ideas tab
───────────────────────────────────────────────────────────────────── */
const ideaList = [
  { name: "Photo Mode with Cinematic Filters", active: true },
  { name: "Companion Dialogue Memory", active: false },
  { name: "Reduce Shader Compile Stutter", active: false },
  { name: "Accessibility: Screen Reader Pass", active: false },
  { name: "New Game+ Roguelite Modifier", active: false },
];

const openQuestions = [
  {
    q: "Should filters be applied in-engine or post-process?",
    status: "open",
    answer: "Post-process preferred — avoids re-render cost and allows real-time preview.",
  },
  {
    q: "What export resolutions do we support?",
    status: "open",
    answer: "At minimum 1080p, 4K. Consider 8K for future-proofing.",
  },
];

function IdeasMockup() {
  return (
    <div
      className="mockup-shrink"
      style={{
        display: "flex",
        height: 340,
        backgroundColor: "#FFFFFF",
        fontSize: 12,
        overflow: "hidden",
        borderRadius: 12,
        border: "1px solid #D4CFC6",
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: 190,
          flexShrink: 0,
          borderRight: "1px solid #E5E7EB",
          backgroundColor: "#F8F8F8",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "10px 12px 8px",
            borderBottom: "1px solid #E5E7EB",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 10, fontWeight: 700, color: "#1C2B3A", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Ideas
          </span>
          <span
            style={{
              fontSize: 9,
              backgroundColor: "rgba(232,98,42,0.12)",
              color: "#E8622A",
              borderRadius: 4,
              padding: "2px 5px",
              fontWeight: 600,
            }}
          >
            + Add
          </span>
        </div>
        {ideaList.map((idea) => (
          <div
            key={idea.name}
            style={{
              padding: "8px 12px",
              borderBottom: "1px solid rgba(229,231,235,0.5)",
              backgroundColor: idea.active ? "#EFF6FF" : "transparent",
              borderLeft: idea.active ? "3px solid #E8622A" : "3px solid transparent",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: idea.active ? 600 : 400,
                color: idea.active ? "#1C2B3A" : "#7A6F66",
                lineHeight: 1.4,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {idea.name}
            </div>
          </div>
        ))}
      </div>

      {/* Detail panel */}
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Title */}
        <div style={{ fontSize: 14, fontWeight: 700, color: "#1C2B3A", lineHeight: 1.3 }}>
          Photo Mode with Cinematic Filters
        </div>
        <div style={{ fontSize: 11, color: "#7A6F66", lineHeight: 1.6 }}>
          Allow players to pause gameplay and capture styled screenshots. Apply real-time post-process filters (film grain, chromatic aberration, vignette, LUT presets) with a drag-to-compare UX.
        </div>

        {/* Why Now */}
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#E8622A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 5 }}>
            Why Now
          </div>
          {["Community has been requesting since launch", "UGC sharing is a key growth lever", "Engine already has hook points for post-process"].map((b) => (
            <div key={b} style={{ display: "flex", gap: 6, alignItems: "flex-start", marginBottom: 3 }}>
              <span style={{ color: "#E8622A", marginTop: 1, fontSize: 10, flexShrink: 0 }}>•</span>
              <span style={{ fontSize: 11, color: "#7A6F66", lineHeight: 1.4 }}>{b}</span>
            </div>
          ))}
        </div>

        {/* Open Questions */}
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#E8622A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
            Open Questions
          </div>
          {openQuestions.map((oq, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(232,98,42,0.07)",
                border: "1px solid rgba(232,98,42,0.2)",
                borderRadius: 7,
                padding: "8px 10px",
                marginBottom: 6,
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 600, color: "#1C2B3A", marginBottom: 4 }}>
                {oq.q}
              </div>
              <div style={{ fontSize: 10.5, color: "#7A6F66", lineHeight: 1.4 }}>
                {oq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   EXECUTION MOCKUP — Sessions tab (different session)
───────────────────────────────────────────────────────────────────── */
const execSessionList = [
  { name: "Auth Token Refresh Logic", time: "Just now", active: true },
  { name: "Reduce Shader Compile Stutter", time: "7m ago", active: false },
  { name: "Companion Dialogue Memory", time: "3h ago", active: false },
  { name: "Photo Mode Cinematic Filters", time: "Yesterday", active: false },
];

const execToolCalls = [
  { icon: "📖", tool: "Read", command: "src/auth/TokenManager.ts", time: "08:14:22" },
  { icon: "📖", tool: "Read", command: "src/auth/refreshToken.test.ts", time: "08:14:25" },
  { summary: "Identified 3 gaps: missing expiry guard, no retry on 401, refresh not cancelling in-flight requests." },
  { icon: "✏️", tool: "Edit", command: "src/auth/TokenManager.ts · lines 44–78", time: "08:14:31" },
  { icon: "✏️", tool: "Edit", command: "src/auth/TokenManager.ts · lines 120–135", time: "08:14:37" },
  { summary: "Added isExpired() guard, exponential backoff retry (max 3), AbortController for concurrent refresh." },
  { icon: "⚡", tool: "Bash", command: "npm run test:auth -- --watch=false", time: "08:14:44" },
  { summary: "All 12 tests passing. Coverage: 94%. Running quality gates…" },
  { icon: "⚡", tool: "Bash", command: "npm run lint && npm run typecheck", time: "08:14:52" },
];

function ExecutionMockup() {
  return (
    <div
      className="mockup-shrink"
      style={{
        display: "flex",
        height: 340,
        backgroundColor: "#FFFFFF",
        fontSize: 12,
        overflow: "hidden",
        borderRadius: 12,
        border: "1px solid #D4CFC6",
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
      }}
    >
      {/* Left sidebar */}
      <div
        style={{
          width: 190,
          flexShrink: 0,
          borderRight: "1px solid #E5E7EB",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div
          style={{
            padding: "10px 12px 8px",
            borderBottom: "1px solid #E5E7EB",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 10, fontWeight: 700, color: "#1C2B3A", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Sessions
          </span>
          <span
            style={{
              fontSize: 9,
              backgroundColor: "rgba(232,98,42,0.12)",
              color: "#E8622A",
              borderRadius: 4,
              padding: "2px 5px",
              fontWeight: 600,
            }}
          >
            + New
          </span>
        </div>
        {execSessionList.map((s) => (
          <div
            key={s.name}
            style={{
              padding: "8px 12px",
              borderBottom: "1px solid rgba(229,231,235,0.5)",
              backgroundColor: s.active ? "#EFF6FF" : "transparent",
              borderLeft: s.active ? "3px solid #E8622A" : "3px solid transparent",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: s.active ? 600 : 400,
                color: s.active ? "#1C2B3A" : "#7A6F66",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: 1.4,
                marginBottom: 2,
              }}
            >
              {s.name}
            </div>
            <div style={{ fontSize: 9.5, color: "#7A6F66", opacity: 0.7 }}>{s.time}</div>
          </div>
        ))}
      </div>

      {/* Detail */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div
          style={{
            padding: "10px 14px",
            borderBottom: "1px solid #E5E7EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#1C2B3A" }}>Auth Token Refresh Logic</span>
            <span
              style={{
                marginLeft: 8,
                fontSize: 9.5,
                backgroundColor: "rgba(74,222,128,0.12)",
                color: "#16a34a",
                borderRadius: 4,
                padding: "2px 6px",
                fontWeight: 600,
                border: "1px solid rgba(74,222,128,0.3)",
              }}
            >
              Running
            </span>
          </div>
          <span style={{ fontSize: 10, color: "#7A6F66" }}>$0.18 · 48s</span>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "10px 14px", display: "flex", flexDirection: "column", gap: 3 }}>
          {execToolCalls.map((row, i) => {
            if ("summary" in row && row.summary) {
              return (
                <div
                  key={i}
                  style={{
                    fontSize: 11,
                    color: "#7A6F66",
                    lineHeight: 1.5,
                    padding: "5px 0 5px 12px",
                    borderLeft: "2px solid #E5E7EB",
                    marginLeft: 2,
                    marginBottom: 3,
                  }}
                >
                  {row.summary}
                </div>
              );
            }
            const r = row as { icon: string; tool: string; command: string; time: string };
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "4px 7px",
                  borderRadius: 5,
                  backgroundColor: "#FAFAFA",
                  border: "1px solid #E5E7EB",
                }}
              >
                <span style={{ fontSize: 11, flexShrink: 0, opacity: 0.8 }}>{r.icon}</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: "#1C2B3A", flexShrink: 0, width: 30 }}>{r.tool}</span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
                    fontSize: 10,
                    color: "#1C2B3A",
                    flex: 1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {r.command}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
                    fontSize: 9.5,
                    color: "#4ADE80",
                    flexShrink: 0,
                    marginLeft: 6,
                  }}
                >
                  {r.time}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   INSIGHTS MOCKUP
───────────────────────────────────────────────────────────────────── */
const statCards = [
  { value: "$423", label: "Total Spend" },
  { value: "270", label: "Sessions" },
  { value: "$1.57", label: "Avg Cost/Session" },
  { value: "13.7", label: "Avg Turns/Session" },
  { value: "$5.80", label: "Most Expensive" },
  { value: "13", label: "Current Streak" },
  { value: "145", label: "Longest Streak" },
];

const categoryData = [
  { label: "Feature Work", pct: 48, color: "#E8622A" },
  { label: "Bug Fixes", pct: 28, color: "#F0A070" },
  { label: "Refactoring", pct: 14, color: "#D4CFC6" },
  { label: "Tests", pct: 10, color: "#7A6F66" },
];

/* Simple SVG sparkline */
function SpendChart() {
  const points = [12, 8, 18, 14, 22, 16, 24, 20, 28, 18, 32, 26, 35, 30, 38, 32, 42, 36, 44, 40];
  const w = 200;
  const h = 60;
  const xStep = w / (points.length - 1);
  const maxV = Math.max(...points);
  const pathD = points
    .map((v, i) => `${i === 0 ? "M" : "L"}${(i * xStep).toFixed(1)},${(h - (v / maxV) * (h - 8)).toFixed(1)}`)
    .join(" ");

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: 8,
        padding: "10px 12px 8px",
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 600, color: "#1C2B3A", marginBottom: 6 }}>Spend per Day</div>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: 60 }}>
        <defs>
          <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8622A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#E8622A" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {/* Area fill */}
        <path
          d={`${pathD} L${w},${h} L0,${h} Z`}
          fill="url(#spendGrad)"
        />
        {/* Line */}
        <path d={pathD} stroke="#E8622A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Axes */}
        <line x1="0" y1={h} x2={w} y2={h} stroke="#E5E7EB" strokeWidth="0.5" />
        <line x1="0" y1="0" x2="0" y2={h} stroke="#E5E7EB" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

function TurnsChart() {
  const points = [10, 12, 9, 14, 11, 16, 13, 15, 12, 18, 14, 16, 13, 17, 15, 14, 16, 13, 15, 14];
  const w = 200;
  const h = 60;
  const xStep = w / (points.length - 1);
  const maxV = Math.max(...points);
  const pathD = points
    .map((v, i) => `${i === 0 ? "M" : "L"}${(i * xStep).toFixed(1)},${(h - (v / maxV) * (h - 8)).toFixed(1)}`)
    .join(" ");

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: 8,
        padding: "10px 12px 8px",
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 600, color: "#1C2B3A", marginBottom: 6 }}>Avg Turns per Session per Day</div>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: 60 }}>
        <defs>
          <linearGradient id="turnsGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7A6F66" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#7A6F66" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d={`${pathD} L${w},${h} L0,${h} Z`} fill="url(#turnsGrad)" />
        <path d={pathD} stroke="#7A6F66" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="0" y1={h} x2={w} y2={h} stroke="#E5E7EB" strokeWidth="0.5" />
        <line x1="0" y1="0" x2="0" y2={h} stroke="#E5E7EB" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

function InsightsMockup() {
  // Donut arcs
  const cx = 40;
  const cy = 40;
  const r = 28;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  const arcs = categoryData.map((cat) => {
    const dash = (cat.pct / 100) * circumference;
    const gap = circumference - dash;
    const arc = { ...cat, dash, gap, offset };
    offset += dash;
    return arc;
  });

  return (
    <div
      className="mockup-shrink"
      style={{
        height: 340,
        backgroundColor: "#FFFFFF",
        fontSize: 12,
        overflow: "hidden",
        borderRadius: 12,
        border: "1px solid #D4CFC6",
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
        padding: "14px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {/* Header */}
      <div style={{ fontSize: 11, fontWeight: 700, color: "#1C2B3A", letterSpacing: "0.05em", textTransform: "uppercase" }}>
        Insights
      </div>

      {/* Stat cards — 7 across */}
      <div style={{ display: "flex", gap: 6, flexWrap: "nowrap", overflowX: "auto" }}>
        {statCards.map((s) => (
          <div
            key={s.label}
            style={{
              flexShrink: 0,
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 7,
              padding: "7px 10px",
              textAlign: "center",
              minWidth: 64,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: "#E8622A", letterSpacing: "-0.016em" }}>{s.value}</div>
            <div style={{ fontSize: 9, color: "#7A6F66", marginTop: 1, lineHeight: 1.2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div style={{ display: "flex", gap: 8, flex: 1, minHeight: 0 }}>
        <SpendChart />
        <TurnsChart />
      </div>

      {/* Session Categories */}
      <div
        style={{
          backgroundColor: "#F8F8F8",
          border: "1px solid #E5E7EB",
          borderRadius: 8,
          padding: "8px 12px",
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 10, fontWeight: 600, color: "#1C2B3A", flexShrink: 0 }}>Categories</div>
        {/* Donut */}
        <svg viewBox="0 0 80 80" style={{ width: 54, height: 54, flexShrink: 0 }}>
          {arcs.map((arc, i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={arc.color}
              strokeWidth={12}
              strokeDasharray={`${arc.dash} ${arc.gap}`}
              strokeDashoffset={-arc.offset}
              transform={`rotate(-90 ${cx} ${cy})`}
            />
          ))}
          <circle cx={cx} cy={cy} r={16} fill="#F8F8F8" />
        </svg>
        {/* Legend */}
        <div style={{ display: "flex", flexDirection: "column", gap: 3, flex: 1 }}>
          {categoryData.map((c) => (
            <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: c.color, flexShrink: 0 }} />
              <span style={{ fontSize: 10, color: "#7A6F66", flex: 1 }}>{c.label}</span>
              <span style={{ fontSize: 10, fontWeight: 600, color: "#1C2B3A" }}>{c.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Shared components
───────────────────────────────────────────────────────────────────── */
function CheckItem({ text }: { text: string }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        fontSize: 14,
        color: "#7A6F66",
        lineHeight: 1.6,
        listStyle: "none",
        marginBottom: 10,
      }}
    >
      <span style={{ color: "#E8622A", flexShrink: 0, marginTop: 2 }}>
        <IconCheck size={16} color="#E8622A" />
      </span>
      {text}
    </li>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────── */
const sections = [
  {
    sectionLabel: "Planning",
    headline: "Ideas that remember themselves",
    body: "Every feature starts as a Crumb spec — a structured document that lives in your repository alongside your code. Capture the intent, the constraints, the edge cases, and the acceptance criteria before a single line is written.",
    checks: [
      "Auto-structured from a sentence, voice note, or rough outline",
      "Stored in .crumb/ — versioned with your codebase in Git",
      "Shareable with teammates, linkable from PRs",
      "Always available as context when an agent starts a new session",
    ],
    Mockup: IdeasMockup,
    imageSide: "left",
  },
  {
    sectionLabel: "Execution",
    headline: "Your agent works while you sleep",
    body: "Kick off a Crumb session and walk away. Claude Code reads the spec, executes the task list, commits incrementally, and leaves a full decision log. No babysitting required.",
    checks: [
      "Async execution — no terminal to watch, no context to maintain",
      "Incremental commits with structured commit messages",
      "Auto-retry on test failures with error context injected",
      "Live session log available at any time via dashboard or CLI",
    ],
    Mockup: ExecutionMockup,
    imageSide: "right",
  },
  {
    sectionLabel: "Insights",
    headline: "A dashboard that improves your process",
    body: "Every session generates a structured report: tasks completed, cost breakdown, quality gate results, and a diff summary. Over time, Crumb builds a picture of which specs produce the best sessions.",
    checks: [
      "Per-session cost tracking with API usage breakdown",
      "Quality gate results and retry history",
      "Spec → outcome correlation across sessions",
      "Export session data for billing and retrospectives",
    ],
    stats: [
      { value: "98%", label: "gate pass rate" },
      { value: "$1.57", label: "avg session cost" },
      { value: "4.2x", label: "faster than manual" },
    ],
    Mockup: InsightsMockup,
    imageSide: "left",
  },
] as const;

/* ─────────────────────────────────────────────────────────────────────
   Main export
───────────────────────────────────────────────────────────────────── */
export default function FeatureDeepDive() {
  return (
    <section
      id="features"
      style={{
        scrollMarginTop: 120,
        padding: "56px 24px",
        backgroundColor: "#EDE8DF",
        borderTop: "1px solid #D4CFC6",
      }}
    >
      <div
        className="feature-sections"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 96,
        }}
      >
        {sections.map((sec, i) => {
          const imageFirst = sec.imageSide === "left";
          return (
            <motion.div
              key={sec.sectionLabel}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                display: "grid",
                gap: 48,
                alignItems: "center",
              }}
              className="grid-cols-1 md:grid-cols-2"
            >
              {imageFirst ? (
                <>
                  <div>
                    <sec.Mockup />
                  </div>
                  <div>
                    <ContentBlock sec={sec} />
                  </div>
                </>
              ) : (
                <>
                  <div className="order-2 md:order-1">
                    <ContentBlock sec={sec} />
                  </div>
                  <div className="order-1 md:order-2">
                    <sec.Mockup />
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function ContentBlock({
  sec,
}: {
  sec: {
    sectionLabel: string;
    headline: string;
    body: string;
    checks: readonly string[];
    stats?: readonly { value: string; label: string }[];
  };
}) {
  return (
    <>
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#E8622A",
          display: "block",
          marginBottom: 14,
        }}
      >
        {sec.sectionLabel}
      </span>
      <h3
        style={{
          fontSize: "clamp(22px, 3vw, 34px)",
          fontWeight: 700,
          letterSpacing: "-0.016em",
          color: "#1C2B3A",
          margin: "0 0 16px",
          lineHeight: 1.2,
          fontFamily: "var(--font-bitter), Georgia, serif",
        }}
      >
        {sec.headline}
      </h3>
      <p
        style={{
          fontSize: 15,
          color: "#7A6F66",
          lineHeight: 1.7,
          margin: "0 0 24px",
        }}
      >
        {sec.body}
      </p>
      <ul style={{ padding: 0, margin: 0 }}>
        {sec.checks.map((c) => (
          <CheckItem key={c} text={c} />
        ))}
      </ul>
      {sec.stats && (
        <div
          style={{
            display: "flex",
            gap: 28,
            marginTop: 28,
            flexWrap: "wrap",
          }}
        >
          {sec.stats.map((s) => (
            <div key={s.label}>
              <p
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#E8622A",
                  margin: "0 0 2px",
                  letterSpacing: "-0.016em",
                  fontFamily: "var(--font-bitter), Georgia, serif",
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "#7A6F66",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
