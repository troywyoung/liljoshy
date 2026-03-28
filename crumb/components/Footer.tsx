"use client";

import React from "react";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/joshski/dust", external: true },
  { label: "Documentation", href: "https://github.com/joshski/dust#readme", external: true },
  { label: "NPM Package", href: "https://www.npmjs.com/package/@joshski/dust", external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        backgroundColor: "#1C2B3A",
        borderTop: "1px solid rgba(212, 207, 198, 0.15)",
        padding: "56px 24px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {/* Top: Logo/Name and Links */}
        <div
          style={{
            display: "grid",
            gap: 40,
            gridTemplateColumns: "1fr",
          }}
          className="md:grid-cols-[1fr_auto]"
        >
          {/* Left: Brand */}
          <div>
            <a
              href="/"
              style={{
                display: "inline-block",
                fontSize: 24,
                fontWeight: 700,
                color: "#F5F0E8",
                textDecoration: "none",
                marginBottom: 12,
                fontFamily: "var(--font-bitter), Georgia, serif",
                letterSpacing: "-0.01em",
              }}
            >
              dust
            </a>
            <p
              style={{
                fontSize: 14,
                color: "#D4CFC6",
                lineHeight: 1.65,
                margin: 0,
                maxWidth: 360,
              }}
            >
              Flow state for AI coding agents. Dust structures your project so agents can understand what needs to be done and execute systematically.
            </p>
          </div>

          {/* Right: Links */}
          <nav style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                style={{
                  fontSize: 14,
                  color: "#D4CFC6",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E8622A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#D4CFC6")}
              >
                {link.label} {link.external && "↗"}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom: License and Credits */}
        <div
          style={{
            paddingTop: 24,
            borderTop: "1px solid rgba(212, 207, 198, 0.15)",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
          className="md:flex-row md:justify-between md:items-center"
        >
          <p style={{ fontSize: 13, color: "#7A6F66", margin: 0 }}>
            © {year} Dust. Open source under MIT license.
          </p>
          <p style={{ fontSize: 13, color: "#7A6F66", margin: 0 }}>
            Made by{" "}
            <a
              href="https://github.com/joshski"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#E8622A",
                textDecoration: "none",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              Josh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
