"use client";

import { motion } from "framer-motion";
import { IconCheck } from "./HandDrawnIcons";

const freePlan = {
  name: "Free",
  price: "$0",
  period: "forever",
  description: "For solo developers getting started with async agent workflows.",
  cta: "Get Started Free",
  ctaHref: "https://github.com/crumb-dev/crumb",
  features: [
    "Unlimited local sessions",
    "Structured spec system (.crumb/)",
    "Task decomposition",
    "Quality gates (tests, lint, type checks)",
    "Full audit trail per session",
    "CLI (crumb spec, crumb run, crumb review)",
    "Git-native — specs versioned with your code",
    "Claude API cost passthrough (no markup)",
    "Community support",
  ],
};

const proPlan = {
  name: "Pro",
  price: "$25",
  period: "per month",
  description: "For developers who want cloud history, insights, and team features.",
  cta: "Apply for Pro Access",
  ctaHref: "#apply",
  highlighted: true,
  badge: "Most Popular",
  features: [
    "Everything in Free",
    "Cloud dashboard with session history",
    "Cross-session analytics and insights",
    "Spec → outcome correlation tracking",
    "Team session sharing and comments",
    "Webhook integrations (Slack, Linear, GitHub)",
    "Priority support",
    "Early access to new features",
    "Export session data (CSV, JSON)",
  ],
};

function PlanCard({ plan }: { plan: typeof freePlan | typeof proPlan }) {
  const highlighted = "highlighted" in plan && plan.highlighted;
  return (
    <div
      style={{
        backgroundColor: highlighted ? "#EDE8DF" : "#EDE8DF",
        border: highlighted
          ? "1px solid rgba(232,98,42,0.5)"
          : "1px solid #D4CFC6",
        borderRadius: 16,
        padding: "36px 32px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxShadow: highlighted ? "0 0 40px rgba(232,98,42,0.08)" : "none",
      }}
    >
      {"badge" in plan && plan.badge && (
        <span
          style={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#E8622A",
            color: "#1C2B3A",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "4px 14px",
            borderRadius: 100,
            whiteSpace: "nowrap",
          }}
        >
          {plan.badge}
        </span>
      )}

      <div style={{ marginBottom: 28 }}>
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: highlighted ? "#E8622A" : "#7A6F66",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            margin: "0 0 16px",
          }}
        >
          {plan.name}
        </p>
        <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: "-0.022em",
              color: "#1C2B3A",
              lineHeight: 1,
              fontFamily: "var(--font-bitter), Georgia, serif",
            }}
          >
            {plan.price}
          </span>
          <span style={{ fontSize: 14, color: "#7A6F66" }}>/ {plan.period}</span>
        </div>
        <p style={{ fontSize: 13, color: "#7A6F66", margin: 0, lineHeight: 1.6 }}>
          {plan.description}
        </p>
      </div>

      <a
        href={plan.ctaHref}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: highlighted ? "#E8622A" : "transparent",
          color: highlighted ? "#1C2B3A" : "#1C2B3A",
          border: highlighted ? "none" : "1px solid #D4CFC6",
          textDecoration: "none",
          fontSize: 14,
          fontWeight: 700,
          padding: "13px 20px",
          borderRadius: 10,
          marginBottom: 28,
          transition: "background-color 0.2s, border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          if (highlighted) {
            e.currentTarget.style.backgroundColor = "#F07440";
          } else {
            e.currentTarget.style.borderColor = "#E8622A";
          }
        }}
        onMouseLeave={(e) => {
          if (highlighted) {
            e.currentTarget.style.backgroundColor = "#E8622A";
          } else {
            e.currentTarget.style.borderColor = "#D4CFC6";
          }
        }}
      >
        {plan.cta}
      </a>

      <ul style={{ padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
        {plan.features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              fontSize: 13.5,
              color: "#7A6F66",
              lineHeight: 1.5,
              listStyle: "none",
            }}
          >
            <span style={{ flexShrink: 0, marginTop: 2 }}>
              <IconCheck size={14} color="#E8622A" />
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "56px 24px",
        backgroundColor: "#EDE8DF",
        borderTop: "1px solid #D4CFC6",
        scrollMarginTop: 120,
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#E8622A",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Pricing
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{
            fontSize: "clamp(26px, 4vw, 44px)",
            fontWeight: 700,
            letterSpacing: "-0.018em",
            color: "#1C2B3A",
            textAlign: "center",
            margin: "0 auto 12px",
            lineHeight: 1.15,
            fontFamily: "var(--font-bitter), Georgia, serif",
          }}
        >
          Simple, honest pricing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
          style={{
            fontSize: 15,
            color: "#7A6F66",
            textAlign: "center",
            margin: "0 auto 56px",
            maxWidth: 460,
          }}
        >
          The CLI is free and open source. Pay for cloud features when you need them.
        </motion.p>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{
            display: "grid",
            gap: 20,
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          <PlanCard plan={freePlan} />
          <PlanCard plan={proPlan} />
        </motion.div>

        {/* Enterprise note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            textAlign: "center",
            marginTop: 36,
            padding: "20px 24px",
            backgroundColor: "#EDE8DF",
            border: "1px solid #D4CFC6",
            borderRadius: 12,
          }}
        >
          <p style={{ fontSize: 14, color: "#7A6F66", margin: 0 }}>
            <strong style={{ color: "#1C2B3A" }}>Enterprise?</strong> We offer custom contracts,
            SSO, on-premise deployment, and dedicated support.{" "}
            <a
              href="mailto:enterprise@crumb.dev"
              style={{ color: "#E8622A", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              Talk to us →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
