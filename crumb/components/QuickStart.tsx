"use client";

import { motion } from "framer-motion";

export default function QuickStart() {
  return (
    <section style={{ padding: "40px 24px", backgroundColor: "#F5F0E8" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ maxWidth: 560, margin: "0 auto" }}
      >
        {/* Headline */}
        <h3
          style={{
            fontFamily: "var(--font-bitter), Georgia, serif",
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 800,
            letterSpacing: "-0.016em",
            color: "#1C2B3A",
            textAlign: "center",
            margin: "0 0 8px",
            lineHeight: 1.2,
          }}
        >
          Get started in <span style={{ color: "#E8622A" }}>4 commands</span>
        </h3>
        <p
          style={{
            fontSize: 13,
            color: "#7A6F66",
            textAlign: "center",
            margin: "0 0 24px",
            lineHeight: 1.5,
          }}
        >
          No config files. No dashboard signup. Just install, describe what you want, and ship.
        </p>

        {/* Terminal window */}
        <div
          style={{
            borderRadius: 12,
            border: "1px solid #D4CFC6",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >
          {/* Title bar */}
          <div
            style={{
              backgroundColor: "#1C2B3A",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              borderBottom: "1px solid rgba(212,207,198,0.15)",
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FF5F57", opacity: 0.8 }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FFBD2E", opacity: 0.8 }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#28C840", opacity: 0.8 }} />
            </div>
            <span
              style={{
                fontSize: 11,
                color: "#7A6F66",
                flex: 1,
                textAlign: "center",
                marginRight: 36,
              }}
            >
              Terminal
            </span>
          </div>

          {/* Code block */}
          <div
            style={{
              backgroundColor: "#1C2B3A",
              padding: "20px 24px",
              fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
              fontSize: 13,
              lineHeight: 1.8,
              color: "#E5E0D7",
            }}
          >
            <div>
              <span style={{ color: "#7A6F66" }}>$ </span>
              <span>npm install -g crumb</span>
            </div>
            <div>
              <span style={{ color: "#7A6F66" }}>$ </span>
              <span>crumb init</span>
            </div>
            <div>
              <span style={{ color: "#7A6F66" }}>$ </span>
              <span>crumb spec </span>
              <span style={{ color: "#E8622A" }}>&quot;Add dark mode toggle with system preference detection&quot;</span>
            </div>
            <div>
              <span style={{ color: "#7A6F66" }}>$ </span>
              <span>crumb run</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
