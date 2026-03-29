"use client";

import { motion } from "framer-motion";

/* ─── Problem data ─── */
const problems = [
  {
    num: "01",
    title: "Planning is disposable",
    pull: "Every chat session starts from zero.",
    body:
      "You spend 20 minutes briefing your agent in a thread that disappears. Next session you start over. No canonical spec, no shared memory — just orphaned conversations.",
  },
  {
    num: "02",
    title: "Agents guess what you want",
    pull: "Without structure, agents improvise.",
    body:
      "They optimize for plausible-sounding output, not your actual intent. The result is code that compiles but misses the point — and you find out after it's built.",
  },
  {
    num: "03",
    title: "You become the bottleneck",
    pull: "The whole point was to delegate.",
    body:
      "Agents stall at ambiguities. You monitor progress, unblock edge cases, re-run failures. You're still glued to the screen, shepherding every task from start to finish.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      style={{ padding: "56px 24px", backgroundColor: "#F5F0E8", scrollMarginTop: 120 }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Section label */}
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
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          The Problem
        </motion.p>

        {/* Headline */}
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
            margin: "0 auto 56px",
            maxWidth: 600,
            lineHeight: 1.15,
            fontFamily: "var(--font-bitter), Georgia, serif",
          }}
        >
          Why agents keep<br />letting you down.
        </motion.h2>

        {/* ─── Stacked horizontal rows ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="problem-row"
              style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr",
                gap: 24,
                padding: "32px 0",
                borderTop: i === 0 ? "2px solid #E8622A" : "1px solid #D4CFC6",
                alignItems: "start",
              }}
            >
              {/* Big number */}
              <div>
                <span
                  className="problem-num"
                  style={{
                    fontFamily: "var(--font-bitter), Georgia, serif",
                    fontSize: 36,
                    fontWeight: 900,
                    color: i === 0 ? "#E8622A" : "rgba(28,43,58,0.12)",
                    lineHeight: 1,
                    letterSpacing: "-0.018em",
                  }}
                >
                  {p.num}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-bitter), Georgia, serif",
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#1C2B3A",
                    margin: "0 0 8px",
                    letterSpacing: "-0.013em",
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-bitter), Georgia, serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#E8622A",
                    margin: "0 0 10px",
                    lineHeight: 1.4,
                  }}
                >
                  {p.pull}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "#7A6F66",
                    lineHeight: 1.7,
                    margin: 0,
                    maxWidth: 640,
                  }}
                >
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
