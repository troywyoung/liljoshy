"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const artifactTypes = [
  {
    name: "Tasks",
    icon: "📋",
    summary: "Actionable work with definitions of done",
    details:
      "Each task is a markdown file in .dust/tasks/ with clear requirements, context, and success criteria. Tasks define what needs to be done before work begins.",
  },
  {
    name: "Ideas",
    icon: "💡",
    summary: "Proposals waiting to be refined",
    details:
      "Ideas are markdown files in .dust/ideas/ that capture future work. They can be rough or detailed. Ideas get decomposed into tasks when you're ready to implement them.",
  },
  {
    name: "Principles",
    icon: "🎯",
    summary: "Guiding values and design constraints",
    details:
      "Principles live in .dust/principles/ and describe how decisions should be made. They provide consistent guidance across all work in the repository.",
  },
  {
    name: "Facts",
    icon: "📄",
    summary: "Documentation of current system state",
    details:
      "Facts in .dust/facts/ capture how things work today. They provide essential context about architecture, decisions, and the current state of the codebase.",
  },
];

const workflowSteps = [
  {
    number: "01",
    label: "CAPTURE",
    title: "Create artifacts in .dust/",
    body: "Write tasks, ideas, principles, or facts as markdown files in the .dust/ directory. Structure emerges from the filesystem.",
  },
  {
    number: "02",
    label: "PICK",
    title: "Agent reads context and selects a task",
    body: "Run dust agent. It reads available tasks, checks blockers, and picks the next task to implement based on priority and dependencies.",
  },
  {
    number: "03",
    label: "IMPLEMENT",
    title: "Agent makes changes defined in task",
    body: "The agent implements the task following the requirements. It reads linked principles and facts for context, then writes code and tests.",
  },
  {
    number: "04",
    label: "COMMIT",
    title: "Atomic commit including task deletion",
    body: "Each commit bundles implementation changes with task deletion and documentation updates. One complete story per commit.",
  },
  {
    number: "05",
    label: "REPEAT",
    title: "Continue until backlog is clear",
    body: "dust agent picks the next task automatically. The workflow repeats until all unblocked tasks are complete.",
  },
];

/* ─── Artifact type card with progressive disclosure ─── */
function ArtifactCard({ artifact }: { artifact: typeof artifactTypes[number] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #D4CFC6",
        borderRadius: 12,
        padding: "20px",
        cursor: "pointer",
        transition: "border-color 0.2s",
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#E8622A";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#D4CFC6";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <span style={{ fontSize: 28 }}>{artifact.icon}</span>
        <h3
          style={{
            fontFamily: "var(--font-bitter), Georgia, serif",
            fontSize: 18,
            fontWeight: 700,
            color: "#1C2B3A",
            margin: 0,
            flex: 1,
          }}
        >
          {artifact.name}
        </h3>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: "#7A6F66", fontSize: 20 }}
        >
          ▾
        </motion.span>
      </div>
      <p
        style={{
          fontSize: 13,
          color: "#7A6F66",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {artifact.summary}
      </p>
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          marginTop: isExpanded ? 12 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          overflow: "hidden",
        }}
      >
        <p
          style={{
            fontSize: 13,
            color: "#7A6F66",
            lineHeight: 1.6,
            margin: 0,
            paddingTop: 12,
            borderTop: "1px solid #EDE8DF",
          }}
        >
          {artifact.details}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ─── Hand-drawn number circle ─── */
function NumberCircle({ number }: { number: string }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      {/* Double-stroked hand-drawn circle for extra weight */}
      <path
        d={`M30 5 C42 4 56 14 55.5 30 C55 46 42 56 30 55.5 C18 55 4 45 4.5 30 C5 15 18 5.5 30 5 Z`}
        fill="rgba(232,98,42,0.10)"
        stroke="#E8622A"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Second pass — slight offset for hand-drawn weight */}
      <path
        d={`M30 6.5 C41 5.5 54.5 15 54 30 C53.5 44.5 41.5 54.5 30 54 C19 53.5 5.5 44 6 30 C6.5 16 19 6.5 30 6.5 Z`}
        fill="none"
        stroke="#E8622A"
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
        fill="#E8622A"
        letterSpacing="-0.02em"
      >
        {number}
      </text>
    </svg>
  );
}

/* ─── Mobile vertical layout ─── */
function MobileWorkflow() {
  return (
    <div className="flex flex-col lg:hidden" style={{ gap: 0 }}>
      {workflowSteps.map((step, i) => {
        const isLast = i === workflowSteps.length - 1;
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
              <NumberCircle number={step.number} />
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
                  margin: 0,
                }}
              >
                {step.body}
              </p>
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
      style={{ padding: "72px 24px", backgroundColor: "#EDE8DF", scrollMarginTop: 120 }}
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
            margin: "0 auto 48px",
            maxWidth: 700,
            lineHeight: 1.15,
            fontFamily: "var(--font-bitter), Georgia, serif",
          }}
        >
          Four artifact types, one workflow
        </motion.h2>

        {/* Artifact Types Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 72,
          }}
        >
          {artifactTypes.map((artifact) => (
            <ArtifactCard key={artifact.name} artifact={artifact} />
          ))}
        </div>

        {/* Workflow Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            marginBottom: 56,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-bitter), Georgia, serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.018em",
              color: "#1C2B3A",
              margin: 0,
            }}
          >
            Five-step workflow
          </h3>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:block" style={{ position: "relative" }}>
          {/* Dashed connecting line — aligned to circle centers */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 68,
              left: "calc((100% - 48px) / 10)",
              right: "calc((100% - 48px) / 10)",
              height: 1,
              borderTop: "1.5px dashed #D4CFC6",
              zIndex: 0,
            }}
          />

          {/* Static dot persisting under first circle */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 63,
              left: "calc((100% - 48px) / 10 - 5px)",
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#E8622A",
              boxShadow: "0 0 10px rgba(232,98,42,0.5)",
              zIndex: 1,
            }}
          />

          {/* Single dot traveling left to right across all steps */}
          <motion.div
            aria-hidden
            initial={{
              left: "calc((100% - 48px) / 10 - 5px)",
              scale: 1,
              opacity: 0.8,
            }}
            whileInView={{
              left: [
                "calc((100% - 48px) * 1 / 10 - 5px)",
                "calc((100% - 48px) * 3 / 10 + 12px - 5px)",
                "calc((100% - 48px) * 5 / 10 + 24px - 5px)",
                "calc((100% - 48px) * 7 / 10 + 36px - 5px)",
                "calc((100% - 48px) * 9 / 10 + 48px - 5px)",
              ],
              scale: [1, 1.3, 1, 1.3, 1],
              opacity: [0.8, 1, 0.8, 1, 0.8],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
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
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 12,
              position: "relative",
              zIndex: 2,
            }}
          >
            {workflowSteps.map((step, i) => {
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
                    <NumberCircle number={step.number} />
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

                  <h4
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
                  </h4>

                  <p
                    style={{
                      fontSize: 12.5,
                      color: "#7A6F66",
                      lineHeight: 1.65,
                      textAlign: "center",
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {step.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <MobileWorkflow />
      </div>
    </section>
  );
}
