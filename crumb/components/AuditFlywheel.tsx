"use client";

import { motion } from "framer-motion";
import CrumbDots from "./CrumbDots";

/* ─── Session snapshots — concrete before/after ─── */
const sessions = [
  {
    label: "Session 1",
    metrics: [
      { name: "Setup time", value: "45 min", bar: 0.9 },
      { name: "Agent retries", value: "6", bar: 0.85 },
      { name: "Cost", value: "$4.20", bar: 0.8 },
      { name: "Gate pass rate", value: "62%", bar: 0.38 },
    ],
    color: "#D4CFC6",
    note: "You're still explaining your codebase.",
  },
  {
    label: "Session 20",
    metrics: [
      { name: "Setup time", value: "8 min", bar: 0.35 },
      { name: "Agent retries", value: "2", bar: 0.3 },
      { name: "Cost", value: "$2.10", bar: 0.45 },
      { name: "Gate pass rate", value: "81%", bar: 0.81 },
    ],
    color: "#7A6F66",
    note: "Specs are sharper. Context persists.",
  },
  {
    label: "Session 100",
    metrics: [
      { name: "Setup time", value: "2 min", bar: 0.08 },
      { name: "Agent retries", value: "0", bar: 0.02 },
      { name: "Cost", value: "$1.57", bar: 0.25 },
      { name: "Gate pass rate", value: "94%", bar: 0.94 },
    ],
    color: "#E8622A",
    note: "Add an idea. Ship tomorrow.",
  },
];

/* ─── Animated bar ─── */
function MetricBar({
  width,
  color,
  delay,
  inverted,
}: {
  width: number;
  color: string;
  delay: number;
  inverted?: boolean;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: 6,
        borderRadius: 3,
        backgroundColor: "rgba(212,207,198,0.3)",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${width * 100}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        style={{
          height: "100%",
          borderRadius: 3,
          backgroundColor: inverted ? color : color,
          opacity: inverted ? 0.5 : 0.8,
        }}
      />
    </div>
  );
}

/* ─── Main Component ─── */
export default function AuditFlywheel() {
  return (
    <section style={{ padding: "56px 24px", backgroundColor: "#EDE8DF" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-bitter), Georgia, serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            color: "#E8622A",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          The Flywheel
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          style={{
            fontFamily: "var(--font-bitter), Georgia, serif",
            fontSize: "clamp(26px, 4vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-0.016em",
            color: "#1C2B3A",
            textAlign: "center",
            margin: "0 auto 20px",
            maxWidth: 560,
            lineHeight: 1.15,
          }}
        >
          The longer you use Crumb,
          <br />
          <span style={{ color: "#E8622A" }}>the better it gets.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          style={{ fontSize: 16, color: "#7A6F66", textAlign: "center", maxWidth: 460, margin: "0 auto 48px", lineHeight: 1.5 }}
        >
          Same developer. Same agents. Radically different outcomes.
        </motion.p>

        {/* ─── Three session cards ─── */}
        <div
          style={{
            display: "grid",
            gap: 16,
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {sessions.map((session, si) => (
            <motion.div
              key={session.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: si * 0.15 }}
              style={{
                backgroundColor: si === 2 ? "#FFFFFF" : "#F5F0E8",
                border: si === 2 ? "2px solid #E8622A" : "1px solid #D4CFC6",
                borderRadius: 16,
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Session label */}
              <p
                style={{
                  fontFamily: "var(--font-bitter), Georgia, serif",
                  fontSize: 28,
                  fontWeight: 800,
                  color: session.color,
                  margin: "0 0 4px",
                  letterSpacing: "-0.016em",
                  lineHeight: 1,
                }}
              >
                {session.label}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: si === 2 ? "#E8622A" : "#7A6F66",
                  fontWeight: si === 2 ? 600 : 400,
                  fontStyle: "italic",
                  margin: "0 0 24px",
                  lineHeight: 1.4,
                }}
              >
                {session.note}
              </p>

              {/* Metrics */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {session.metrics.map((m, mi) => {
                  // For setup time, retries, cost — lower is better (bars shrink = good)
                  // For gate pass rate — higher is better (bar grows = good)
                  const isGood = mi === 3; // gate pass rate
                  return (
                    <div key={m.name}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          marginBottom: 4,
                        }}
                      >
                        <span style={{ fontSize: 11, color: "#7A6F66", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                          {m.name}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-bitter), Georgia, serif",
                            fontSize: 15,
                            fontWeight: 700,
                            color: si === 2 ? "#E8622A" : "#1C2B3A",
                          }}
                        >
                          {m.value}
                        </span>
                      </div>
                      <MetricBar
                        width={m.bar}
                        color={isGood ? (si === 2 ? "#E8622A" : "#7A6F66") : (si === 0 ? "#D4CFC6" : si === 1 ? "#7A6F66" : "#E8622A")}
                        delay={si * 0.15 + mi * 0.05}
                        inverted={!isGood}
                      />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Connecting message + stats ─── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            fontFamily: "var(--font-bitter), Georgia, serif",
            fontWeight: 700,
            fontSize: 14,
            color: "#1C2B3A",
            textAlign: "center",
            marginTop: 32,
            marginBottom: 24,
            letterSpacing: "0.02em",
          }}
        >
          Every session trains the next one. Context compounds. Costs drop. Quality climbs.
        </motion.p>

        <div
          className="flywheel-stats"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "$1.57", label: "avg session cost" },
            { value: "270+", label: "sessions completed" },
            { value: "94%", label: "gate pass rate" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ textAlign: "center" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-bitter), Georgia, serif",
                  fontSize: 40,
                  fontWeight: 800,
                  color: "#E8622A",
                  margin: "0 0 4px",
                  letterSpacing: "-0.014em",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-bitter), Georgia, serif",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#7A6F66",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
