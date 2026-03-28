"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      style={{
        padding: "80px 24px",
        backgroundColor: "#EDE8DF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial gold glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,98,42,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 660, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.020em",
            color: "#1C2B3A",
            margin: "0 0 36px",
            lineHeight: 1.1,
            fontFamily: "var(--font-bitter), Georgia, serif",
          }}
        >
          Start building with structure
        </motion.h2>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 20,
          }}
        >
          <a
            href="https://github.com/joshski/dust"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#E8622A",
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 700,
              padding: "16px 32px",
              borderRadius: 10,
              transition: "background-color 0.2s, transform 0.15s",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#F07440";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#E8622A";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Install Dust →
          </a>
          <a
            href="https://github.com/joshski/dust#readme"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "transparent",
              color: "#1C2B3A",
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 600,
              padding: "16px 32px",
              borderRadius: 10,
              border: "1px solid #D4CFC6",
              transition: "border-color 0.2s, background-color 0.2s",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#E8622A";
              e.currentTarget.style.backgroundColor = "rgba(232,98,42,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#D4CFC6";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Read the docs
          </a>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 13,
            color: "#7A6F66",
            margin: 0,
            letterSpacing: "0.01em",
          }}
        >
          Open source · MIT license · 2-minute setup
        </motion.p>
      </div>
    </section>
  );
}
