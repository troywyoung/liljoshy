"use client";

import { motion } from "framer-motion";
import CrumbDots from "./CrumbDots";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

/* ─── Sessions UI Mockup ──────────────────────────────────────────── */
const sessionList = [
  { name: "Reduce Shader Compile Stutter", time: "7m ago", active: true },
  { name: "Build Idea: Campfire Ambient Loop", time: "20m ago", active: false },
  { name: "Auth Token Refresh Logic", time: "1h ago", active: false },
  { name: "Companion Dialogue Memory", time: "3h ago", active: false },
  { name: "Photo Mode Cinematic Filters", time: "Yesterday", active: false },
  { name: "Shader LOD System", time: "2d ago", active: false },
];

const toolCalls = [
  {
    icon: "⚡",
    tool: "Bash",
    command: "npm run test:shaders -- --watch=false",
    time: "07:25:38",
    summary: null,
  },
  {
    icon: null,
    tool: null,
    command: null,
    time: null,
    summary: "3 tests failed: ShaderCache.spec.ts — precompile timeout, cache miss on hot reload, stutter on scene transition.",
  },
  {
    icon: "📖",
    tool: "Read",
    command: "src/rendering/ShaderCache.ts",
    time: "07:25:44",
    summary: null,
  },
  {
    icon: "✏️",
    tool: "Edit",
    command: "src/rendering/ShaderCache.ts · lines 84–112",
    time: "07:25:51",
    summary: null,
  },
  {
    icon: null,
    tool: null,
    command: null,
    time: null,
    summary: "Added async precompile queue with priority scheduling. Cache now warms on scene load rather than first draw call.",
  },
  {
    icon: "⚡",
    tool: "Bash",
    command: "npm run test:shaders -- --watch=false",
    time: "07:26:04",
    summary: null,
  },
  {
    icon: null,
    tool: null,
    command: null,
    time: null,
    summary: "All 3 tests passing. Running full suite...",
  },
  {
    icon: "⚡",
    tool: "Bash",
    command: "npm run test -- --coverage",
    time: "07:26:12",
    summary: null,
  },
];

function SessionsMockup() {
  return (
    <div
      className="mockup-shrink"
      style={{
        display: "flex",
        height: 420,
        backgroundColor: "#FFFFFF",
        fontSize: 12,
        overflow: "hidden",
      }}
    >
      {/* Left sidebar */}
      <div
        style={{
          width: 220,
          flexShrink: 0,
          borderRight: "1px solid #E5E7EB",
          backgroundColor: "#F8F8F8",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Sidebar header */}
        <div
          style={{
            padding: "12px 14px 10px",
            borderBottom: "1px solid #E5E7EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, color: "#1C2B3A", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Sessions
          </span>
          <span
            style={{
              fontSize: 10,
              backgroundColor: "rgba(232,98,42,0.12)",
              color: "#E8622A",
              borderRadius: 4,
              padding: "2px 6px",
              fontWeight: 600,
            }}
          >
            + New
          </span>
        </div>
        {/* Session list */}
        <div style={{ overflowY: "auto", flex: 1 }}>
          {sessionList.map((s) => (
            <div
              key={s.name}
              style={{
                padding: "10px 14px",
                borderBottom: "1px solid rgba(229,231,235,0.5)",
                backgroundColor: s.active ? "#EFF6FF" : "transparent",
                borderLeft: s.active ? "3px solid #E8622A" : "3px solid transparent",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontSize: 11.5,
                  fontWeight: s.active ? 600 : 400,
                  color: s.active ? "#1C2B3A" : "#7A6F66",
                  lineHeight: 1.4,
                  marginBottom: 3,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {s.name}
              </div>
              <div style={{ fontSize: 10, color: "#7A6F66", opacity: 0.7 }}>{s.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Panel header */}
        <div
          style={{
            padding: "12px 18px",
            borderBottom: "1px solid #E5E7EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1C2B3A" }}>
              Reduce Shader Compile Stutter
            </span>
            <span
              style={{
                marginLeft: 10,
                fontSize: 10,
                backgroundColor: "rgba(74,222,128,0.12)",
                color: "#16a34a",
                borderRadius: 4,
                padding: "2px 7px",
                fontWeight: 600,
                border: "1px solid rgba(74,222,128,0.3)",
              }}
            >
              Running
            </span>
          </div>
          <span style={{ fontSize: 10, color: "#7A6F66" }}>$0.34 · 2m 14s</span>
        </div>

        {/* Tool calls */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "12px 18px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {toolCalls.map((row, i) => {
            if (row.summary) {
              return (
                <div
                  key={i}
                  style={{
                    fontSize: 11.5,
                    color: "#7A6F66",
                    lineHeight: 1.5,
                    padding: "6px 0 6px 14px",
                    borderLeft: "2px solid #E5E7EB",
                    marginLeft: 2,
                    marginBottom: 4,
                  }}
                >
                  {row.summary}
                </div>
              );
            }
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "5px 8px",
                  borderRadius: 6,
                  backgroundColor: "#FAFAFA",
                  border: "1px solid #E5E7EB",
                }}
              >
                <span style={{ fontSize: 12, flexShrink: 0, opacity: 0.8 }}>{row.icon}</span>
                <span
                  style={{
                    fontSize: 10.5,
                    fontWeight: 600,
                    color: "#1C2B3A",
                    flexShrink: 0,
                    width: 32,
                  }}
                >
                  {row.tool}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
                    fontSize: 10.5,
                    color: "#1C2B3A",
                    flex: 1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {row.command}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
                    fontSize: 10,
                    color: "#4ADE80",
                    flexShrink: 0,
                    marginLeft: 8,
                  }}
                >
                  {row.time}
                </span>
              </div>
            );
          })}

          {/* Blinking cursor row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 8px",
              borderRadius: 6,
              backgroundColor: "rgba(74,222,128,0.06)",
              border: "1px solid rgba(74,222,128,0.2)",
            }}
          >
            <span style={{ fontSize: 10.5, color: "#4ADE80", fontWeight: 600 }}>▶</span>
            <span style={{ fontSize: 11, color: "#7A6F66", fontStyle: "italic" }}>
              Analyzing test results…
            </span>
            <span
              style={{
                width: 6,
                height: 12,
                backgroundColor: "#4ADE80",
                display: "inline-block",
                opacity: 0.8,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 56px",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 80% 60% at 50% 30%, #EDE8DF 0%, #F5F0E8 70%)",
      }}
    >
      {/* Scattered crumb dots as background texture — hidden on mobile */}
      <div className="hidden md:block" style={{ position: "absolute", top: 60, left: 0 }}>
        <CrumbDots variant="scatter" width={600} height={300} />
      </div>
      <div className="hidden md:block" style={{ position: "absolute", bottom: 40, right: 0 }}>
        <CrumbDots variant="scatter" width={500} height={250} />
      </div>
      <div className="hidden md:block" style={{ position: "absolute", top: 100, right: "10%" }}>
        <CrumbDots variant="trail" width={180} height={70} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 860, width: "100%" }}>
        {/* Badge */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 20 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "rgba(232, 98, 42, 0.10)",
              border: "1px solid rgba(232, 98, 42, 0.30)",
              borderRadius: 100,
              padding: "6px 16px",
              fontSize: 13,
              color: "#E8622A",
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#E8622A",
                display: "inline-block",
              }}
            />
            Open source · Invite-only beta
          </span>
        </motion.div>

        {/* Pre-headline */}
        <motion.p
          {...fadeUp(0.05)}
          style={{
            fontFamily: "var(--font-bitter), Georgia, serif",
            fontSize: "clamp(16px, 2.2vw, 20px)",
            fontWeight: 500,
            color: "#1C2B3A",
            letterSpacing: "-0.009em",
            lineHeight: 1.3,
            margin: "0 0 16px",
          }}
        >
          The model isn&apos;t the problem. The workflow is.
        </motion.p>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.1)}
          style={{
            fontSize: "clamp(32px, 7vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.022em",
            color: "#1C2B3A",
            margin: "0 0 24px",
            fontFamily: "var(--font-bitter), Georgia, serif",
          }}
        >
          Stop babysitting
          <br />
          <span style={{ color: "#E8622A" }}>your agents.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          {...fadeUp(0.2)}
          style={{
            fontSize: "clamp(16px, 2.2vw, 20px)",
            color: "#7A6F66",
            lineHeight: 1.6,
            margin: "0 auto 40px",
            maxWidth: 560,
          }}
        >
          Give Claude Code structured specs, persistent context, and automated quality gates.
          Crumb runs your agents while you&apos;re away — and gets smarter every session.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="hero-ctas"
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 20,
          }}
        >
          <a
            href="#apply"
            style={{
              backgroundColor: "#E8622A",
              color: "#1C2B3A",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: 10,
              transition: "background-color 0.2s, transform 0.15s",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#F07440";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#E8622A";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Apply for Early Access →
          </a>
          <a
            href="https://github.com/crumb-dev/crumb"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "transparent",
              color: "#1C2B3A",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
              padding: "14px 28px",
              borderRadius: 10,
              border: "1px solid #D4CFC6",
              transition: "border-color 0.2s, background-color 0.2s",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#E8622A";
              e.currentTarget.style.backgroundColor = "rgba(232,98,42,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#D4CFC6";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            View on GitHub
          </a>
        </motion.div>

        {/* Caption */}
        <motion.p
          {...fadeUp(0.4)}
          style={{ fontSize: 12, color: "#7A6F66", margin: "0 0 24px" }}
        >
          Free to start · No credit card · 2-minute setup
        </motion.p>

        {/* Sessions Tab Mockup in Browser Chrome */}
        <motion.div
          {...fadeUp(0.5)}
          style={{
            width: "100%",
            maxWidth: 860,
            margin: "0 auto",
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid #D4CFC6",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              backgroundColor: "#F5F5F5",
              borderBottom: "1px solid #E5E7EB",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
                <div
                  key={c}
                  style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: c, opacity: 0.6 }}
                />
              ))}
            </div>
            <div
              style={{
                flex: 1,
                maxWidth: 320,
                margin: "0 auto",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 6,
                padding: "4px 12px",
                fontSize: 11,
                color: "#7A6F66",
                textAlign: "center",
              }}
            >
              app.crumb.dev/sessions
            </div>
          </div>

          {/* Nav tabs inside mockup */}
          <div
            style={{
              backgroundColor: "#F8F8F8",
              borderBottom: "1px solid #E5E7EB",
              display: "flex",
              gap: 0,
              padding: "0 16px",
            }}
          >
            {["Ideas", "Sessions", "Insights"].map((tab) => (
              <div
                key={tab}
                style={{
                  padding: "8px 16px",
                  fontSize: 12,
                  fontWeight: tab === "Sessions" ? 600 : 400,
                  color: tab === "Sessions" ? "#E8622A" : "#7A6F66",
                  borderBottom: tab === "Sessions" ? "2px solid #E8622A" : "2px solid transparent",
                  cursor: "pointer",
                }}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Sessions UI */}
          <SessionsMockup />
        </motion.div>
      </div>
    </section>
  );
}
