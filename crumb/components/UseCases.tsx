"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RobotWorking,
  RobotThinking,
  RobotHappy,
  RobotShrug,
  RobotOverwhelmed,
  RobotWaiting,
} from "./RobotIllustrations";

/* ─── Use-case data ─── */
interface UseCase {
  id: string;
  tab: string;
  situation: string;
  pain: string;
  outcome: string;
  hook: string;
  robot: React.ReactNode;
}

const useCases: UseCase[] = [
  {
    id: "greenfield",
    tab: "Greenfield",
    situation:
      "You're starting something new. Blank repo, blank slate. Without constraints, the agent invents the architecture as it goes — and by session 5 you have three different patterns for the same thing and no consistent structure.",
    pain:
      "The agent makes early architectural decisions that compound. By the time you notice the pattern divergence, you're either refactoring already or accepting a codebase that feels inconsistent from the start. Every session adds more entropy because there's no shared definition of 'how we build things here.'",
    outcome:
      "Before a line of code is written, you define your Principles — the stack, the folder structure, the naming conventions, the patterns you want and the shortcuts you want to avoid. Every subsequent agent session follows those rules. The codebase grows with consistent architecture from the first commit.",
    hook:
      "Define the architecture once. Every agent session that follows builds on it — not around it.",
    robot: <RobotHappy width={70} />,
  },
  {
    id: "complex-builds",
    tab: "Complex Builds",
    situation:
      "You need to build something that isn't a single task — it's a project. A payment flow. A real-time notification system. A complete auth system from scratch. These span 20–40 dependent tasks across multiple files and services.",
    pain:
      "You either prompt the agent to do everything at once (it drifts badly by task 8), or you manually manage a task list and re-prompt context before every session. Neither works reliably once the feature gets complex enough. The more moving parts, the more you're back to babysitting.",
    outcome:
      "Describe the feature to LilJosh. It decomposes it into ordered, dependency-tracked tasks — each with scope, notes, and a Definition of Done. Agents execute them in sequence. You get a coherent feature built piece by piece, not a single chaotic session.",
    hook:
      "Not a prompt. A project. Crumb breaks complex features into tasks an agent can actually complete.",
    robot: <RobotThinking width={70} />,
  },
  {
    id: "refactor",
    tab: "The Big Refactor",
    situation:
      "Your codebase has 18 months of shortcuts in it. You know exactly what needs to change — the auth layer needs extracting, the data models need normalising, the API needs versioning. You just can never get to it between shipping new features.",
    pain:
      "Multi-session refactors fall apart because context evaporates between sessions. The agent on session 12 doesn't know what the agent on session 1 decided. You spend more time stitching it back together than the refactor saves. And every day you wait, the debt compounds.",
    outcome:
      "Queue the refactor as a structured project. Each piece becomes a task with clear scope and a Definition of Done. Crumb tracks what's been done, what's blocked, and what's next — and the agent picks up exactly where the last session left off. The refactor runs in parallel with your normal work.",
    hook:
      "That refactor you've been putting off for six months. Crumb makes it a background process.",
    robot: <RobotWorking width={70} />,
  },
  {
    id: "debt",
    tab: "Tech Debt",
    situation:
      "Dead code that nobody touches. Functions without tests. Error handling that silently swallows exceptions. Modules so tightly coupled that changing one breaks three others. You know it's there. You never have time to fix it.",
    pain:
      "Technical debt stays technical debt because it competes with features for sprint capacity and always loses. Asking an agent to 'clean up the codebase' without structure produces inconsistent, unpredictable results. The debt grows while you argue about prioritisation.",
    outcome:
      "Run an audit. Crumb's structured audit templates scan the codebase and generate a prioritised task backlog. Agents execute the tasks systematically, in the background, while you keep shipping. The debt reduces incrementally — no sprint capacity required.",
    hook:
      "Your tech debt isn't going away by itself. Crumb makes it a queue, not a crisis.",
    robot: <RobotShrug width={70} />,
  },
  {
    id: "side-projects",
    tab: "Side Projects",
    situation:
      "You have a project you chip away at on evenings and weekends. You're the only one who knows the codebase. Every time you pick it up after a week away, you spend 20–30 minutes re-orienting before you can do anything useful.",
    pain:
      "Your project moves at the speed of your available attention. When life gets busy, it stalls. When you come back, the re-orientation tax is brutal. Agent sessions are inconsistent because you re-explain context every time, and the momentum you built last Sunday is gone by Wednesday.",
    outcome:
      "The project state is always current — what's done, what's in progress, what's next, what the codebase's rules are. Add a new idea in two minutes. Check back tomorrow to see what shipped. The project moves even when you can't.",
    hook:
      "Your side project deserves to make progress even when you're too busy to think about it.",
    robot: <RobotWaiting width={70} />,
  },
];

/* ─── Hand-drawn underline SVG ─── */
function TabUnderline() {
  return (
    <svg
      width="100%"
      height="6"
      viewBox="0 0 100 6"
      preserveAspectRatio="none"
      fill="none"
      style={{ display: "block", marginTop: 4 }}
    >
      <path
        d="M2 4 C20 2 40 5 60 3 C80 1 95 4 98 3"
        stroke="#E8622A"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ─── Pain arrow icon ─── */
function PainArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6 C8 8 14 14 18 18"
        stroke="#D4CFC6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M10 18 C14 18 17 18 18 18 C18 17 18 14 18 10"
        stroke="#D4CFC6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* ─── Crumb arrow icon ─── */
function CrumbArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 18 C8 16 14 10 18 6"
        stroke="#E8622A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M10 6 C14 6 17 6 18 6 C18 7 18 10 18 14"
        stroke="#E8622A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* ─── Main component ─── */
export default function UseCases() {
  const [active, setActive] = useState(0);
  const current = useCases[active];

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
          Use Cases
        </motion.p>

        <motion.h2
          className="use-case-heading"
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
            margin: "0 auto 32px",
            maxWidth: 520,
            lineHeight: 1.15,
          }}
        >
          How will you Crumb?
        </motion.h2>

        {/* ─── Tab bar ─── */}
        <div
          className="use-case-tabs"
          style={{
            display: "flex",
            gap: 4,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          {useCases.map((uc, i) => (
            <button
              key={uc.id}
              onClick={() => setActive(i)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px 16px",
                borderRadius: 8,
                fontFamily: "var(--font-bitter), Georgia, serif",
                fontWeight: active === i ? 800 : 600,
                fontSize: 13,
                color: active === i ? "#E8622A" : "#7A6F66",
                backgroundColor: active === i ? "rgba(232,98,42,0.08)" : "transparent",
                transition: "all 0.2s ease",
                position: "relative",
                whiteSpace: "nowrap",
              }}
            >
              {uc.tab}
              {active === i && <TabUnderline />}
            </button>
          ))}
        </div>

        {/* ─── Active use-case card ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              border: "1px solid #D4CFC6",
              boxShadow: "0 4px 24px rgba(28,43,58,0.06)",
              overflow: "hidden",
            }}
          >
            {/* Top: Hook line + Robot */}
            <div
              style={{
                padding: "28px 24px 0",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: 220 }}>
                <p
                  style={{
                    fontFamily: "var(--font-bitter), Georgia, serif",
                    fontSize: "clamp(20px, 3vw, 28px)",
                    fontWeight: 800,
                    color: "#1C2B3A",
                    lineHeight: 1.25,
                    margin: "0 0 8px",
                    letterSpacing: "-0.013em",
                  }}
                >
                  {current.hook}
                </p>
              </div>
              <div
                style={{
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  backgroundColor: "rgba(232,98,42,0.06)",
                }}
              >
                {current.robot}
              </div>
            </div>

            {/* Situation */}
            <div style={{ padding: "24px 24px 0" }}>
              <p
                style={{
                  fontSize: 14,
                  color: "#7A6F66",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {current.situation}
              </p>
            </div>

            {/* Two-column: Without / With */}
            <div
              style={{
                display: "grid",
                gap: 0,
                margin: "28px 24px 24px",
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid #D4CFC6",
              }}
              className="grid-cols-1 md:grid-cols-2"
            >
              {/* Without Crumb */}
              <div
                className="border-bottom-mobile"
                style={{
                  padding: "24px 24px",
                  backgroundColor: "#FAFAFA",
                  borderRight: "1px solid #D4CFC6",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <PainArrow />
                  <p
                    style={{
                      fontFamily: "var(--font-bitter), Georgia, serif",
                      fontWeight: 700,
                      fontSize: 12,
                      color: "#7A6F66",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    Without Crumb
                  </p>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#7A6F66",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {current.pain}
                </p>
              </div>

              {/* With Crumb */}
              <div
                style={{
                  padding: "24px 24px",
                  backgroundColor: "rgba(232,98,42,0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <CrumbArrow />
                  <p
                    style={{
                      fontFamily: "var(--font-bitter), Georgia, serif",
                      fontWeight: 700,
                      fontSize: 12,
                      color: "#E8622A",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    With Crumb
                  </p>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#1C2B3A",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {current.outcome}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
