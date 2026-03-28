"use client";

import { motion } from "framer-motion";
import CrumbDots from "./CrumbDots";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

/* ─── Terminal Mockup with Dust CLI Output ─────────────────────────── */
const terminalLines = [
  { type: "command", text: "$ dust tasks" },
  { type: "output", text: "" },
  { type: "output", text: "📋 Tasks" },
  { type: "output", text: "" },
  { type: "output", text: "Ready to work on:" },
  { type: "output", text: "  • Add user authentication" },
  { type: "output", text: "  • Implement dark mode toggle" },
  { type: "output", text: "  • Optimize database queries" },
  { type: "output", text: "" },
  { type: "output", text: "Blocked:" },
  { type: "output", text: "  • Deploy to staging (blocked by: Add user authentication)" },
  { type: "output", text: "" },
  { type: "command", text: "$ dust agent" },
  { type: "output", text: "" },
  { type: "output", text: "🤖 Agent Workflow" },
  { type: "output", text: "" },
  { type: "output", text: "Pick a task → implement it → delete the task file → commit atomically." },
  { type: "output", text: "" },
  { type: "output", text: "Next task: Add user authentication" },
  { type: "output", text: "Location: .dust/tasks/add-user-authentication.md" },
  { type: "output", text: "" },
  { type: "command", text: "$ dust check" },
  { type: "output", text: "" },
  { type: "output", text: "✨ Running quality checks..." },
  { type: "output", text: "" },
  { type: "success", text: "✓ All tests passing" },
  { type: "success", text: "✓ Type check passed" },
  { type: "success", text: "✓ Lint passed" },
  { type: "success", text: "✓ No blocked tasks with missing dependencies" },
  { type: "output", text: "" },
  { type: "success", text: "All validations passed!" },
];

function TerminalMockup() {
  return (
    <div
      className="mockup-shrink"
      style={{
        backgroundColor: "#1C2B3A",
        borderRadius: 8,
        padding: "20px 24px",
        fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
        fontSize: 13,
        lineHeight: 1.6,
        overflow: "auto",
        maxHeight: 420,
      }}
    >
      {terminalLines.map((line, i) => {
        let color = "#D4CFC6";
        if (line.type === "command") color = "#4ADE80";
        if (line.type === "success") color = "#4ADE80";

        return (
          <div
            key={i}
            style={{
              color,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {line.text}
          </div>
        );
      })}
      <div
        style={{
          display: "inline-block",
          width: 8,
          height: 16,
          backgroundColor: "#4ADE80",
          marginLeft: 4,
          animation: "blink 1s infinite",
        }}
      />
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
            Open source · MIT license
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.05)}
          style={{
            fontFamily: "var(--font-bitter), Georgia, serif",
            fontSize: "clamp(16px, 2.2vw, 20px)",
            fontWeight: 500,
            color: "#E8622A",
            letterSpacing: "-0.009em",
            lineHeight: 1.3,
            margin: "0 0 16px",
          }}
        >
          Flow state for AI coding agents.
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
          Stop managing agents.
          <br />
          <span style={{ color: "#E8622A" }}>Start building.</span>
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
          Dust structures your project so AI agents can understand what needs to be done and execute systematically.
          Agents read tasks, implement changes, and commit atomically — no manual management required.
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
            href="https://github.com/joshski/dust"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#E8622A",
              color: "#FFFFFF",
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
            View on GitHub →
          </a>
          <a
            href="https://github.com/joshski/dust#readme"
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
            Read Documentation
          </a>
        </motion.div>

        {/* Caption */}
        <motion.p
          {...fadeUp(0.4)}
          style={{ fontSize: 12, color: "#7A6F66", margin: "0 0 24px" }}
        >
          Open source · MIT license · Install in 2 minutes
        </motion.p>

        {/* Terminal Mockup */}
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
          {/* Terminal chrome */}
          <div
            style={{
              backgroundColor: "#2D3748",
              borderBottom: "1px solid #1C2B3A",
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
                  style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: c, opacity: 0.8 }}
                />
              ))}
            </div>
            <div
              style={{
                fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
                fontSize: 11,
                color: "#D4CFC6",
                marginLeft: 12,
              }}
            >
              dust — terminal
            </div>
          </div>

          {/* Terminal content */}
          <TerminalMockup />
        </motion.div>
      </div>
    </section>
  );
}
