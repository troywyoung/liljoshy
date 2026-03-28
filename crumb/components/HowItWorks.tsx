"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "IDEA",
    title: "Capture the idea",
    body:
      "Drop a thought, voice note, or rough outline into Crumb. It structures it into a draft spec — goals, constraints, success criteria — and stores it permanently in your repo.",
    time: "2 min",
  },
  {
    number: "02",
    label: "REFINE",
    title: "Refine the spec",
    body:
      "Review and tighten the spec in Crumb's editor. Add acceptance tests, edge cases, and examples. Your agent will read exactly this — no more ambiguity.",
    time: "5 min",
  },
  {
    number: "03",
    label: "TASK",
    title: "Break into tasks",
    body:
      "Crumb decomposes the spec into a prioritized task list. Reorder, merge, or delete tasks before handing off. Each task has explicit inputs, outputs, and test criteria.",
    time: "3 min",
  },
  {
    number: "04",
    label: "EXECUTE",
    title: "Agent runs async",
    body:
      "Kick off the session and close your laptop. Claude Code works through the task list, commits incrementally, and logs every decision. You get a full audit trail when it's done.",
    time: "Async",
  },
  {
    number: "05",
    label: "GUARD",
    title: "Quality gates check",
    body:
      "Before surfacing results, Crumb runs your configured gates: tests, lint, type checks, and coverage thresholds. If anything fails, it retries with the error context automatically.",
    time: "Auto",
  },
  {
    number: "06",
    label: "SHIP",
    title: "Review and ship",
    body:
      "Open your Crumb dashboard to a completed PR with a structured summary, diff, cost breakdown, and test results. One click to approve — or leave feedback for the next iteration.",
    time: "2 min",
  },
];

/* ─── Hand-drawn number circle ─── */
function NumberCircle({ number, accent }: { number: string; accent: boolean }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      {/* Double-stroked hand-drawn circle for extra weight */}
      <path
        d={`M30 5 C42 4 56 14 55.5 30 C55 46 42 56 30 55.5 C18 55 4 45 4.5 30 C5 15 18 5.5 30 5 Z`}
        fill={accent ? "rgba(232,98,42,0.10)" : "none"}
        stroke={accent ? "#E8622A" : "#D4CFC6"}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Second pass — slight offset for hand-drawn weight */}
      <path
        d={`M30 6.5 C41 5.5 54.5 15 54 30 C53.5 44.5 41.5 54.5 30 54 C19 53.5 5.5 44 6 30 C6.5 16 19 6.5 30 6.5 Z`}
        fill="none"
        stroke={accent ? "#E8622A" : "#D4CFC6"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.3}
      />
      <text
        x="30"
        y="31"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-bitter), Georgia, serif"
        fontSize="20"
        fontWeight="900"
        fill={accent ? "#E8622A" : "#1C2B3A"}
        letterSpacing="-0.02em"
      >
        {number}
      </text>
    </svg>
  );
}

/* ─── Mobile vertical layout — simple dot-per-step approach ─── */
function MobileSteps() {
  return (
    <div className="flex flex-col lg:hidden" style={{ gap: 0 }}>
      {steps.map((step, i) => {
        const accent = i === 0 || i === 3 || i === 5;
        const isLast = i === steps.length - 1;
        return (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            style={{
              display: "flex",
              gap: 16,
              position: "relative",
              paddingBottom: isLast ? 0 : 24,
            }}
          >
            {/* Vertical connector line from this circle to next */}
            {!isLast && (
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  left: 29,
                  top: 60,
                  bottom: 0,
                  width: 0,
                  borderLeft: "1.5px dashed #D4CFC6",
                  zIndex: 0,
                }}
              />
            )}

            {/* Circle wrapper with dot */}
            <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
              <NumberCircle number={step.number} accent={accent} />
              {/* Orange dot at center of circle */}
              <motion.div
                aria-hidden
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.15 + 0.3 }}
                style={{
                  position: "absolute",
                  top: 25,
                  left: 25,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#E8622A",
                  boxShadow: "0 0 8px rgba(232,98,42,0.5)",
                  zIndex: 4,
                }}
              />
            </div>

            <div style={{ paddingTop: 8, flex: 1 }}>
              <span
                style={{
                  fontFamily: "var(--font-bitter), Georgia, serif",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#E8622A",
                  display: "block",
                  marginBottom: 4,
                }}
              >
                {step.label}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-bitter), Georgia, serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#1C2B3A",
                  margin: "0 0 6px",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#7A6F66",
                  lineHeight: 1.6,
                  margin: "0 0 8px",
                }}
              >
                {step.body}
              </p>
              <span
                style={{
                  fontFamily: "var(--font-bitter), Georgia, serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#E8622A",
                  backgroundColor: "rgba(232,98,42,0.08)",
                  border: "1px solid rgba(232,98,42,0.20)",
                  borderRadius: 100,
                  padding: "3px 10px",
                  display: "inline-block",
                }}
              >
                {step.time}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ padding: "56px 24px", backgroundColor: "#EDE8DF", scrollMarginTop: 120 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-bitter), Georgia, serif",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#E8622A",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          How It Works
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.018em",
            color: "#1C2B3A",
            textAlign: "center",
            margin: "0 auto 72px",
            maxWidth: 560,
            lineHeight: 1.15,
            fontFamily: "var(--font-bitter), Georgia, serif",
          }}
        >
          Six steps from idea to shipped
        </motion.h2>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:block" style={{ position: "relative" }}>
          {/* Dashed connecting line — aligned to circle centers */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 68,
              left: "calc((100% - 80px) / 12)",
              right: "calc((100% - 80px) / 12)",
              height: 1,
              borderTop: "1.5px dashed #D4CFC6",
              zIndex: 0,
            }}
          />

          {/* Static dot persisting under Idea (first circle) */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 63,
              left: "calc((100% - 80px) / 12 - 5px)",
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#E8622A",
              boxShadow: "0 0 10px rgba(232,98,42,0.5)",
              zIndex: 1,
            }}
          />

          {/* Single dot traveling left to right across all steps — once */}
          <motion.div
            aria-hidden
            initial={{
              left: "calc((100% - 80px) / 12 - 5px)",
              scale: 1,
              opacity: 0.8,
            }}
            whileInView={{
              left: [
                "calc((100% - 80px) * 1 / 12 - 5px)",
                "calc((100% - 80px) * 3 / 12 + 16px - 5px)",
                "calc((100% - 80px) * 5 / 12 + 32px - 5px)",
                "calc((100% - 80px) * 7 / 12 + 48px - 5px)",
                "calc((100% - 80px) * 9 / 12 + 64px - 5px)",
                "calc((100% - 80px) * 11 / 12 + 80px - 5px)",
              ],
              scale: [1, 1.3, 1, 1.3, 1, 1.3],
              opacity: [0.8, 1, 0.8, 1, 0.8, 1],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            }}
            style={{
              position: "absolute",
              top: 63,
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#E8622A",
              boxShadow: "0 0 10px rgba(232,98,42,0.5)",
              zIndex: 2,
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 16,
              position: "relative",
              zIndex: 2,
            }}
          >
            {steps.map((step, i) => {
              const accent = i === 0 || i === 3 || i === 5;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                  {/* Hand-drawn number circle */}
                  <div style={{ marginBottom: 16, position: "relative", zIndex: 1 }}>
                    <NumberCircle number={step.number} accent={accent} />
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-bitter), Georgia, serif",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#E8622A",
                      marginBottom: 8,
                    }}
                  >
                    {step.label}
                  </span>

                  <h3
                    style={{
                      fontFamily: "var(--font-bitter), Georgia, serif",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#1C2B3A",
                      margin: "0 0 8px",
                      textAlign: "center",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 12.5,
                      color: "#7A6F66",
                      lineHeight: 1.65,
                      textAlign: "center",
                      margin: "0 0 12px",
                      flex: 1,
                    }}
                  >
                    {step.body}
                  </p>

                  <span
                    style={{
                      fontFamily: "var(--font-bitter), Georgia, serif",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#E8622A",
                      backgroundColor: "rgba(232,98,42,0.08)",
                      border: "1px solid rgba(232,98,42,0.20)",
                      borderRadius: 100,
                      padding: "3px 10px",
                    }}
                  >
                    {step.time}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <MobileSteps />
      </div>
    </section>
  );
}
