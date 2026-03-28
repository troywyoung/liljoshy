"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────────
   Features data
───────────────────────────────────────────────────────────────────── */
const features = [
  {
    name: "Task-First Workflow",
    description: "Every change starts as documented task, creates traceability",
    explanation: "Work captured before implementation begins ensures traceability between intent and outcome. Git history shows pairs of tasks followed by implementation, preventing scope creep by defining boundaries upfront.",
  },
  {
    name: "Atomic Commits",
    description: "Implementation + documentation + task deletion in one commit",
    explanation: "Each commit tells a complete story, bundling changes with corresponding documentation updates. Git history becomes a self-documenting sequence of coherent states, making archaeology straightforward for future developers and agents.",
  },
  {
    name: "Quality Gates",
    description: "`dust check` validates before commit, configurable checks",
    explanation: "Configurable validation runs before each commit to enforce tests, linting, and type checking. Every check produces the same result regardless of who runs it, when, or on what machine.",
  },
  {
    name: "Progressive Disclosure",
    description: "Minimal context in tasks, agent reads deeper as needed",
    explanation: "Tasks show just titles until implementation starts, then reveal full details. Linked principles and facts are followed when deeper context is required, keeping initial reads lightweight while preserving access to complete information.",
  },
  {
    name: "Trunk-Based Development",
    description: "No branching required, direct commits to main",
    explanation: "Agents pull from main, implement a task, and push directly back to main. No feature branches, no pull requests, no merge queues. Fast feedback loops through discipline rather than isolation.",
  },
] as const;

/* ─────────────────────────────────────────────────────────────────────
   Feature card component
───────────────────────────────────────────────────────────────────── */
function FeatureCard({ feature }: { feature: typeof features[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #D4CFC6",
        borderRadius: 12,
        padding: "24px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <h4
        style={{
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-0.014em",
          color: "#1C2B3A",
          margin: "0 0 12px",
          fontFamily: "var(--font-bitter), Georgia, serif",
        }}
      >
        {feature.name}
      </h4>
      <p
        style={{
          fontSize: 14,
          color: "#7A6F66",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {feature.description}. {feature.explanation}
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Main export
───────────────────────────────────────────────────────────────────── */
export default function FeatureDeepDive() {
  return (
    <section
      id="features"
      style={{
        scrollMarginTop: 120,
        padding: "72px 24px",
        backgroundColor: "#EDE8DF",
        borderTop: "1px solid #D4CFC6",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: 56,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#E8622A",
              display: "block",
              marginBottom: 16,
            }}
          >
            Core Features
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.018em",
              color: "#1C2B3A",
              margin: "0 auto",
              lineHeight: 1.2,
              maxWidth: 700,
              fontFamily: "var(--font-bitter), Georgia, serif",
            }}
          >
            Structured workflow for systematic execution
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.name} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
