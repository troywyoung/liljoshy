"use client";

import { motion } from "framer-motion";

export default function Reframe() {
  return (
    <section
      style={{
        padding: "56px 24px",
        backgroundColor: "#EDE8DF",
        borderTop: "1px solid #D4CFC6",
        borderBottom: "1px solid #D4CFC6",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-bitter), Georgia, serif",
            fontSize: "clamp(22px, 3.5vw, 36px)",
            fontWeight: 800,
            letterSpacing: "-0.018em",
            lineHeight: 1.2,
            color: "#1C2B3A",
            margin: "0 auto 20px",
            maxWidth: 620,
          }}
        >
          You love Claude Code.
          <br />
          <span style={{ color: "#E8622A" }}>It just needs a co-pilot.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "#7A6F66",
            lineHeight: 1.7,
            margin: 0,
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Claude Code is already capable enough to ship production features. What&apos;s missing is the
          layer around it — structured specs, persistent context, quality gates, and async orchestration.
          That&apos;s exactly what Crumb provides.
        </motion.p>
      </div>
    </section>
  );
}
