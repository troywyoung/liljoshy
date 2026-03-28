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
        Dust is a lightweight planning system that stores project context as
        markdown artifacts. AI agents need structure to work
        effectively&nbsp;&mdash; without it, they lose context, forget
        requirements, and make inconsistent decisions. Dust structures your
        project so agents can understand what needs to be done and execute
        systematically, reading artifacts to pick tasks and committing changes
        atomically.
      </motion.p>
    </div>
  );
}
