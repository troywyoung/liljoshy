"use client";

import { motion } from "framer-motion";
import CrumbDots from "./CrumbDots";
import Image from "next/image";

/* ─── Data ─── */
type Val = true | false | "partial" | string;
interface Row {
  feature: string;
  crumb: Val;
  claude: Val;
  devin: Val;
  highlight?: boolean; // call-out row
}

const rows: Row[] = [
  { feature: "Structured spec system", crumb: true, claude: false, devin: false },
  { feature: "Persistent context", crumb: true, claude: "partial", devin: true },
  { feature: "Async execution", crumb: true, claude: "partial", devin: true },
  { feature: "Quality gates", crumb: true, claude: false, devin: "partial" },
  { feature: "Auto-retry on failure", crumb: true, claude: false, devin: "partial" },
  { feature: "Full audit trail", crumb: true, claude: false, devin: "partial" },
  { feature: "Cost transparency", crumb: true, claude: true, devin: false },
  { feature: "Git-native specs", crumb: true, claude: false, devin: false },
  { feature: "Open source", crumb: true, claude: false, devin: false },
  { feature: "BYO agent", crumb: true, claude: "n/a", devin: false },
  { feature: "Team sharing", crumb: "Pro", claude: false, devin: true },
  { feature: "Zero-config setup", crumb: false, claude: true, devin: false },
  { feature: "No account required", crumb: true, claude: true, devin: false },
  {
    feature: "Avg cost per feature",
    crumb: "$1.57",
    claude: "$5-12",
    devin: "$500+",
    highlight: true,
  },
];

/* ─── Cell renderer ─── */
function Tick() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 13 C6 14 8.5 17.5 9.5 18.5 C11 15 16 8 19 5.5"
        stroke="#E8622A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.25 }}>
      <path
        d="M6.5 6 L17.5 18 M17.5 6 L6.5 18"
        stroke="#1C2B3A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Tilde() {
  // hand-drawn "~" for partial
  return (
    <svg width="20" height="14" viewBox="0 0 24 14" fill="none">
      <path
        d="M4 9 C7 4 10 12 14 6 C17 2 20 8 21 7"
        stroke="#7A6F66"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function CellVal({ value, isHighlight }: { value: Val; isHighlight?: boolean }) {
  if (value === true) return <Tick />;
  if (value === false) return <Cross />;
  if (value === "partial") return <Tilde />;
  if (value === "n/a")
    return (
      <span style={{ fontSize: 11, color: "#D4CFC6", fontStyle: "italic" }}>n/a</span>
    );
  return (
    <span
      style={{
        fontFamily: "var(--font-bitter), Georgia, serif",
        fontWeight: 800,
        fontSize: isHighlight ? 22 : 14,
        color: isHighlight ? "#1C2B3A" : "#E8622A",
      }}
    >
      {value}
    </span>
  );
}

/* ─── Component ─── */
export default function ComparisonTable() {
  return (
    <section style={{ padding: "56px 24px", backgroundColor: "#F5F0E8" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Section label */}
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
          Compare
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
            letterSpacing: "-0.018em",
            color: "#1C2B3A",
            textAlign: "center",
            margin: "0 auto 12px",
            maxWidth: 520,
            lineHeight: 1.15,
          }}
        >
          How Crumb stacks up
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          style={{
            fontSize: 16,
            color: "#7A6F66",
            textAlign: "center",
            maxWidth: 440,
            margin: "0 auto 56px",
            lineHeight: 1.5,
          }}
        >
          Side by side with going it alone — or going elsewhere.
        </motion.p>

        {/* ─── Three-column card layout ─── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 0,
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Column headers as cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
              minWidth: 680,
            }}
          >
            {/* Feature label column */}
            <div style={{ padding: "20px 16px 20px 0" }} />

            {/* ─── Crumb column header ─── */}
            <div
              style={{
                background: "linear-gradient(180deg, rgba(232,98,42,0.12) 0%, rgba(232,98,42,0.04) 100%)",
                borderTop: "3px solid #E8622A",
                borderLeft: "1px solid rgba(232,98,42,0.25)",
                borderRight: "1px solid rgba(232,98,42,0.25)",
                borderRadius: "16px 16px 0 0",
                padding: "16px 16px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src="/crumb-logo.png"
                  alt="Crumb"
                  width={84}
                  height={59}
                  unoptimized
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p
                style={{
                  fontSize: 10,
                  fontFamily: "var(--font-bitter), Georgia, serif",
                  fontWeight: 700,
                  color: "#E8622A",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: "6px 0 0",
                }}
              >
                Recommended
              </p>
            </div>

            {/* Claude Code header */}
            <div
              style={{
                padding: "16px 16px",
                textAlign: "center",
                borderTop: "1px solid #D4CFC6",
                borderRadius: "12px 12px 0 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-bitter), Georgia, serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#7A6F66",
                  margin: 0,
                }}
              >
                Claude Code
              </p>
              <p style={{ fontSize: 11, color: "#D4CFC6", margin: "4px 0 0" }}>alone</p>
            </div>

            {/* Devin header */}
            <div
              style={{
                padding: "16px 16px",
                textAlign: "center",
                borderTop: "1px solid #D4CFC6",
                borderRadius: "12px 12px 0 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-bitter), Georgia, serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#7A6F66",
                  margin: 0,
                }}
              >
                Devin
              </p>
              <p style={{ fontSize: 11, color: "#D4CFC6", margin: "4px 0 0" }}>enterprise</p>
            </div>
          </div>

          {/* ─── Feature rows ─── */}
          {rows.map((row, i) => {
            const isLast = i === rows.length - 1;
            const isHighlight = row.highlight;
            return (
              <div
                key={row.feature}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
                  minWidth: 680,
                  alignItems: "center",
                  backgroundColor: isHighlight
                    ? "rgba(232,98,42,0.06)"
                    : i % 2 === 0
                    ? "transparent"
                    : "rgba(237,232,223,0.4)",
                  borderRadius: isLast ? "0 0 12px 12px" : 0,
                }}
              >
                {/* Feature name */}
                <div
                  style={{
                    padding: isHighlight ? "18px 16px 18px 20px" : "12px 16px 12px 20px",
                    fontSize: isHighlight ? 15 : 14,
                    fontWeight: isHighlight ? 700 : 400,
                    fontFamily: isHighlight
                      ? "var(--font-bitter), Georgia, serif"
                      : undefined,
                    color: isHighlight ? "#1C2B3A" : "#7A6F66",
                    borderBottom: isLast ? "none" : "1px solid rgba(212,207,198,0.5)",
                  }}
                >
                  {row.feature}
                </div>

                {/* Crumb column */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: isHighlight ? "18px 12px" : "12px 12px",
                    borderLeft: "1px solid rgba(232,98,42,0.25)",
                    borderRight: "1px solid rgba(232,98,42,0.25)",
                    backgroundColor: isHighlight
                      ? "rgba(232,98,42,0.12)"
                      : "rgba(232,98,42,0.03)",
                    borderBottom: isLast
                      ? "none"
                      : "1px solid rgba(232,98,42,0.08)",
                    borderRadius: isLast ? "0 0 0 0" : 0,
                  }}
                >
                  <CellVal value={row.crumb} isHighlight={isHighlight} />
                </div>

                {/* Claude Code column */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: isHighlight ? "18px 12px" : "12px 12px",
                    borderBottom: isLast ? "none" : "1px solid rgba(212,207,198,0.3)",
                  }}
                >
                  <CellVal value={row.claude} isHighlight={isHighlight} />
                </div>

                {/* Devin column */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: isHighlight ? "18px 12px" : "12px 12px",
                    borderBottom: isLast ? "none" : "1px solid rgba(212,207,198,0.3)",
                  }}
                >
                  <CellVal value={row.devin} isHighlight={isHighlight} />
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom accent */}
        <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
          <CrumbDots variant="accent" />
        </div>

        <p
          style={{
            fontSize: 11,
            color: "#D4CFC6",
            textAlign: "center",
            marginTop: 16,
          }}
        >
          Devin pricing based on public info, early 2026.
        </p>
      </div>
    </section>
  );
}
