"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCaretDown, IconCaretUp } from "./HandDrawnIcons";

const faqs = [
  {
    q: "Does Crumb replace Claude Code?",
    a: "No — Crumb is built on top of Claude Code, not instead of it. You still use your own Claude API key and Claude Code does the actual coding. Crumb adds the layer that's missing: structured specs so the agent knows exactly what to build, persistent context so it doesn't start from scratch every session, quality gates that catch failures automatically, and async orchestration so you don't have to watch. Think of it as the project management layer that makes Claude Code production-ready.",
  },
  {
    q: "Do I need to change how I write code? Is there a new DSL to learn?",
    a: "No. Crumb uses plain Markdown specs stored in a .crumb/ directory in your repo. There's no proprietary language or new format to learn. The CLI has three core commands: crumb spec, crumb run, and crumb review. That's it. Everything else is optional and progressive.",
  },
  {
    q: "What happens when an agent gets stuck or fails a quality gate?",
    a: "Crumb automatically retries failed steps with the error output injected as context into the next attempt. You configure a max retry count per quality gate in your .crumb/config.yaml. If all retries fail, the session halts and surfaces a structured error report so you can diagnose and re-run manually. No silent failures.",
  },
  {
    q: "How much does it cost? Are API costs included?",
    a: "Crumb itself is free to start — the open-source CLI has no usage caps. API costs are passed through directly at Claude API pricing; Crumb doesn't mark them up. The Pro plan ($25/mo) adds the cloud dashboard, session history, team sharing, and advanced analytics. Our average session costs $1.57 in API usage.",
  },
  {
    q: "Is my code sent to Crumb's servers?",
    a: "No. Crumb is a local-first tool. Your code never leaves your machine or your own Claude API connection. The cloud dashboard (Pro) stores session metadata — task lists, cost data, gate results — but not your source code or diffs. You remain in full control.",
  },
  {
    q: "Can I use Crumb with tools other than Claude Code?",
    a: "Crumb is designed around Claude Code and tightly integrated with its session model. However, the spec format and quality gate system are tool-agnostic. We plan to add first-class support for Cursor, Codex, and custom agents in a future release. If you're interested in a specific integration, let us know when you apply.",
  },
];

function FAQItem({
  faq,
  defaultOpen,
}: {
  faq: (typeof faqs)[number];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <div
      style={{
        borderBottom: "1px solid #D4CFC6",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "20px 0",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 16,
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: open ? "#1C2B3A" : "#7A6F66",
            lineHeight: 1.5,
            transition: "color 0.2s",
            flex: 1,
          }}
        >
          {faq.q}
        </span>
        <span
          style={{
            color: "#E8622A",
            flexShrink: 0,
            marginTop: 2,
            transition: "transform 0.2s",
          }}
        >
          {open ? <IconCaretUp size={16} color="#E8622A" /> : <IconCaretDown size={16} color="#E8622A" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontSize: 14,
                color: "#7A6F66",
                lineHeight: 1.75,
                margin: "0 0 20px",
                paddingRight: 32,
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      style={{
        padding: "56px 24px",
        backgroundColor: "#EDE8DF",
        borderTop: "1px solid #D4CFC6",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
          FAQ
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
            margin: "0 auto 56px",
            maxWidth: 480,
            lineHeight: 1.15,
            fontFamily: "var(--font-bitter), Georgia, serif",
          }}
        >
          Common questions
        </motion.h2>

        {/* Two-column grid */}
        <div
          style={{
            display: "grid",
            gap: "0 28px",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left column */}
          <div>
            {faqs.slice(0, 3).map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} defaultOpen={i === 0} />
            ))}
          </div>
          {/* Right column */}
          <div>
            {faqs.slice(3).map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
