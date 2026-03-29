"use client";

import { motion } from "framer-motion";

export default function GroundingParagraph() {
  return (
    <div
      style={{
        backgroundColor: "#F5F0E8",
        padding: "32px 24px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: 640,
          fontSize: "clamp(14px, 1.8vw, 16px)",
          color: "#7A6F66",
          lineHeight: 1.75,
          textAlign: "center",
          margin: 0,
        }}
      >
        Crumb is a workflow layer on top of Claude Code. By itself, Claude Code
        is a capable agent&nbsp;&mdash; but it has no persistent memory, no spec
        format, no quality gates, and no async orchestration. Every session
        starts from scratch. Crumb adds all of that, so every session builds on
        the last.
      </motion.p>
    </div>
  );
}
