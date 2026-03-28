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
            margin: "0 0 24px",
            lineHeight: 1.2,
          }}
        >
          Two commands to start
        </h3>

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
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#7A6F66" }}>$ </span>
              <span>npm install --save-dev @joshski/dust</span>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <span style={{ color: "#7A6F66" }}>$ </span>
              <span>npx dust init</span>
            </div>

            <div style={{ color: "#7A6F66", fontSize: 12, marginBottom: "8px" }}>
              # Three steps to flow state:
            </div>

            <div style={{ marginBottom: "8px" }}>
              <span style={{ color: "#7A6F66" }}>$ </span>
              <span style={{ color: "#E8622A" }}># 1. Install and initialize</span>
            </div>
            <div style={{ marginBottom: "12px", paddingLeft: "24px", color: "#B8B3A9" }}>
              Already done above
            </div>

            <div style={{ marginBottom: "8px" }}>
              <span style={{ color: "#7A6F66" }}>$ </span>
              <span style={{ color: "#E8622A" }}># 2. Create your first task</span>
            </div>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#7A6F66" }}>$ </span>
              <span>npx dust task </span>
              <span style={{ color: "#E8622A" }}>&quot;Add user authentication&quot;</span>
            </div>

            <div style={{ marginBottom: "8px" }}>
              <span style={{ color: "#7A6F66" }}>$ </span>
              <span style={{ color: "#E8622A" }}># 3. Let agent implement it</span>
            </div>
            <div>
              <span style={{ color: "#7A6F66" }}>$ </span>
              <span>npx dust agent</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
