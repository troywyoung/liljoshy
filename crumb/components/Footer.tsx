"use client";

import React from "react";
import Image from "next/image";
import { IconSparkle } from "./HandDrawnIcons";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "GitHub", href: "https://github.com/crumb-dev/crumb" },
  { label: "Apply", href: "#apply" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        backgroundColor: "#EDE8DF",
        borderTop: "1px solid #D4CFC6",
        padding: "48px 24px 36px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gap: 32,
          alignItems: "start",
        }}
        className="grid-cols-1 md:grid-cols-[1fr_auto_1fr]"
      >
        {/* Left: Brand */}
        <div>
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              textDecoration: "none",
              marginBottom: 10,
            }}
          >
            <Image src="/crumb-logo.png" alt="Crumb" width={120} height={84} style={{ objectFit: "contain" }} />
          </a>
          <p
            style={{
              fontSize: 13,
              color: "#7A6F66",
              lineHeight: 1.65,
              margin: "0 0 16px",
              maxWidth: 240,
            }}
          >
            Structured specs, async execution, and quality gates for Claude Code.
          </p>
          <p style={{ fontSize: 12, color: "#7A6F66", margin: 0 }}>
            © {year} Crumb. Open source.
          </p>
        </div>

        {/* Center: Nav links */}
        <nav style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 4 }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 13,
                color: "#7A6F66",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1C2B3A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7A6F66")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Built with LilJosh */}
        <div className="text-center md:text-right">
          <p
            style={{
              fontSize: 13,
              color: "#7A6F66",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Built with{" "}
            <a
              href="https://liljosh.dev"
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
              LilJosh
            </a>{" "}
            <IconSparkle size={14} color="#E8622A" />
          </p>
          <p style={{ fontSize: 11, color: "#7A6F66", marginTop: 8 }}>
            <a
              href="mailto:hello@crumb.dev"
              style={{ color: "#7A6F66", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1C2B3A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7A6F66")}
            >
              hello@crumb.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
