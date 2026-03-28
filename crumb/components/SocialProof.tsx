"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
  return (
    <section
      style={{
        backgroundColor: "#EDE8DF",
        borderTop: "1px solid #D4CFC6",
        borderBottom: "1px solid #D4CFC6",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
        }}
      >
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ textAlign: "center" }}
        >
          <h3
            style={{
              fontFamily: "var(--font-bitter), Georgia, serif",
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 800,
              letterSpacing: "-0.016em",
              color: "#1C2B3A",
              margin: "0 0 12px",
              lineHeight: 1.2,
            }}
          >
            Open source. MIT licensed.
          </h3>
          <p
            style={{
              fontSize: 16,
              color: "#7A6F66",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Built in the open. Free to use, modify, and distribute.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 24,
            width: "100%",
          }}
        >
          {/* GitHub Stars */}
          <a
            href="https://github.com/joshski/dust"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#F5F0E8",
              border: "1px solid #D4CFC6",
              borderRadius: 12,
              padding: "24px 20px",
              textAlign: "center",
              textDecoration: "none",
              transition: "border-color 0.2s, transform 0.15s",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#E8622A";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#D4CFC6";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#E8622A",
                letterSpacing: "-0.016em",
                fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
              }}
            >
              ⭐
            </div>
            <p
              style={{
                fontFamily: "var(--font-bitter), Georgia, serif",
                fontSize: 13,
                color: "#1C2B3A",
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontWeight: 600,
              }}
            >
              Star on GitHub
            </p>
            <p
              style={{
                fontSize: 11,
                color: "#7A6F66",
                margin: 0,
              }}
            >
              github.com/joshski/dust
            </p>
          </a>

          {/* NPM Package */}
          <a
            href="https://www.npmjs.com/package/@joshski/dust"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#F5F0E8",
              border: "1px solid #D4CFC6",
              borderRadius: 12,
              padding: "24px 20px",
              textAlign: "center",
              textDecoration: "none",
              transition: "border-color 0.2s, transform 0.15s",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#E8622A";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#D4CFC6";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#E8622A",
                letterSpacing: "-0.016em",
                fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
              }}
            >
              📦
            </div>
            <p
              style={{
                fontFamily: "var(--font-bitter), Georgia, serif",
                fontSize: 13,
                color: "#1C2B3A",
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontWeight: 600,
              }}
            >
              NPM Package
            </p>
            <p
              style={{
                fontSize: 11,
                color: "#7A6F66",
                margin: 0,
              }}
            >
              @joshski/dust
            </p>
          </a>

          {/* MIT License */}
          <a
            href="https://github.com/joshski/dust/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#F5F0E8",
              border: "1px solid #D4CFC6",
              borderRadius: 12,
              padding: "24px 20px",
              textAlign: "center",
              textDecoration: "none",
              transition: "border-color 0.2s, transform 0.15s",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#E8622A";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#D4CFC6";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#E8622A",
                letterSpacing: "-0.016em",
                fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
              }}
            >
              📄
            </div>
            <p
              style={{
                fontFamily: "var(--font-bitter), Georgia, serif",
                fontSize: 13,
                color: "#1C2B3A",
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontWeight: 600,
              }}
            >
              MIT License
            </p>
            <p
              style={{
                fontSize: 11,
                color: "#7A6F66",
                margin: 0,
              }}
            >
              Free to use & modify
            </p>
          </a>
        </motion.div>

        {/* Contributing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: 14,
              color: "#7A6F66",
              margin: 0,
            }}
          >
            Want to contribute?{" "}
            <a
              href="https://github.com/joshski/dust/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#E8622A",
                textDecoration: "none",
                fontWeight: 600,
                borderBottom: "1px solid transparent",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottomColor = "#E8622A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottomColor = "transparent";
              }}
            >
              Read the contributing guide
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
