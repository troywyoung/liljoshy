"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconSparkle } from "./HandDrawnIcons";

const toolOptions = [
  "Claude Code",
  "Cursor",
  "GitHub Copilot",
  "Codex",
  "VS Code",
  "Neovim",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function FinalCTA() {
  const [github, setGithub] = useState("");
  const [building, setBuilding] = useState("");
  const [tools, setTools] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function toggleTool(tool: string) {
    setTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!github.trim() || !building.trim()) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ github: github.trim(), building: building.trim(), tools }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section
      id="apply"
      style={{
        padding: "56px 24px 72px",
        backgroundColor: "#EDE8DF",
        position: "relative",
        overflow: "hidden",
        scrollMarginTop: 120,
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

      <div style={{ maxWidth: 560, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 44 }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#E8622A",
              marginBottom: 16,
            }}
          >
            Early Access
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.018em",
              color: "#1C2B3A",
              margin: "0 0 16px",
              lineHeight: 1.1,
              fontFamily: "var(--font-bitter), Georgia, serif",
            }}
          >
            50 repositories.
            <br />
            <span style={{ color: "#E8622A" }}>First come, first built.</span>
          </h2>
          <p style={{ fontSize: 15, color: "#7A6F66", lineHeight: 1.65, margin: 0 }}>
            We&apos;re onboarding 50 repositories in our first cohort. Tell us about your
            project and we&apos;ll reach out within 48 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          {status === "success" ? (
            <div
              style={{
                backgroundColor: "#EDE8DF",
                border: "1px solid rgba(232,98,42,0.4)",
                borderRadius: 16,
                padding: "48px 32px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  backgroundColor: "rgba(232,98,42,0.12)",
                  border: "2px solid #E8622A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: 24,
                }}
              >
                <IconSparkle size={24} color="#E8622A" />
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#1C2B3A",
                  margin: "0 0 12px",
                }}
              >
                Application received!
              </h3>
              <p style={{ fontSize: 14, color: "#7A6F66", margin: 0, lineHeight: 1.7 }}>
                We&apos;ll review your application and reach out within 48 hours.
                <br />
                In the meantime, star us on{" "}
                <a
                  href="https://github.com/crumb-dev/crumb"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#E8622A", textDecoration: "underline", textUnderlineOffset: 3 }}
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="cta-form"
              style={{
                backgroundColor: "#EDE8DF",
                border: "1px solid #D4CFC6",
                borderRadius: 16,
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              {/* GitHub username */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#7A6F66",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  GitHub Username *
                </label>
                <div style={{ position: "relative" }}>
                  <span
                    style={{
                      position: "absolute",
                      left: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#7A6F66",
                      fontSize: 14,
                    }}
                  >
                    @
                  </span>
                  <input
                    type="text"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    placeholder="yourusername"
                    required
                    style={{
                      width: "100%",
                      backgroundColor: "#F5F0E8",
                      border: "1px solid #D4CFC6",
                      borderRadius: 8,
                      padding: "12px 14px 12px 30px",
                      fontSize: 14,
                      color: "#1C2B3A",
                      outline: "none",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,98,42,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#D4CFC6")}
                  />
                </div>
              </div>

              {/* What are you building */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#7A6F66",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  What are you building? *
                </label>
                <textarea
                  value={building}
                  onChange={(e) => setBuilding(e.target.value)}
                  placeholder="A SaaS app for teams that... / An open source tool that..."
                  required
                  rows={3}
                  style={{
                    width: "100%",
                    backgroundColor: "#F5F0E8",
                    border: "1px solid #D4CFC6",
                    borderRadius: 8,
                    padding: "12px 14px",
                    fontSize: 14,
                    color: "#1C2B3A",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,98,42,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#D4CFC6")}
                />
              </div>

              {/* Tools used */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#7A6F66",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  Tools you use (select all that apply)
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {toolOptions.map((tool) => {
                    const selected = tools.includes(tool);
                    return (
                      <button
                        key={tool}
                        type="button"
                        onClick={() => toggleTool(tool)}
                        style={{
                          backgroundColor: selected
                            ? "rgba(232,98,42,0.15)"
                            : "transparent",
                          border: selected
                            ? "1px solid rgba(232,98,42,0.5)"
                            : "1px solid #D4CFC6",
                          borderRadius: 6,
                          padding: "6px 12px",
                          fontSize: 13,
                          color: selected ? "#E8622A" : "#7A6F66",
                          cursor: "pointer",
                          transition: "all 0.15s",
                          fontFamily: "inherit",
                        }}
                      >
                        {tool}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Error */}
              {(status === "error" || errorMsg) && (
                <p
                  style={{
                    fontSize: 13,
                    color: "#FF6B6B",
                    margin: 0,
                    padding: "10px 14px",
                    backgroundColor: "rgba(255,107,107,0.08)",
                    border: "1px solid rgba(255,107,107,0.2)",
                    borderRadius: 8,
                  }}
                >
                  {errorMsg || "Something went wrong. Please try again."}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  backgroundColor: status === "loading" ? "rgba(232,98,42,0.5)" : "#E8622A",
                  color: "#1C2B3A",
                  border: "none",
                  borderRadius: 10,
                  padding: "15px 24px",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  transition: "background-color 0.2s",
                  fontFamily: "inherit",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading")
                    e.currentTarget.style.backgroundColor = "#F07440";
                }}
                onMouseLeave={(e) => {
                  if (status !== "loading")
                    e.currentTarget.style.backgroundColor = "#E8622A";
                }}
              >
                {status === "loading" ? "Submitting..." : "Apply for Early Access →"}
              </button>

              <p style={{ fontSize: 11, color: "#7A6F66", textAlign: "center", margin: 0 }}>
                No spam. We&apos;ll only email you about your application status.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
