"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconList, IconClose } from "./HandDrawnIcons";
import Image from "next/image";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs", soon: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="nav-bar"
        style={{
          position: "fixed",
          top: 48,
          left: 0,
          right: 0,
          zIndex: 90,
          transition: "background-color 0.3s ease, border-color 0.3s ease",
          backgroundColor: scrolled ? "rgba(245, 240, 232, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #D4CFC6" : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
          className="nav-inner"
        >
          {/* Logo */}
          <a href="/" className="nav-logo" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <Image
              src="/crumb-logo.png"
              alt="Crumb"
              width={173}
              height={121}
              unoptimized
              style={{ objectFit: "contain" }}
              priority
            />
          </a>

          {/* Desktop Links */}
          <div
            className="hidden md:flex"
            style={{ gap: 32, alignItems: "center" }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: "#7A6F66",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 450,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1C2B3A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7A6F66")}
              >
                {link.label}
                {link.soon && (
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#E8622A",
                      backgroundColor: "rgba(232, 98, 42, 0.12)",
                      border: "1px solid rgba(232, 98, 42, 0.3)",
                      borderRadius: 4,
                      padding: "1px 5px",
                    }}
                  >
                    soon
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#apply"
            className="hidden md:inline-flex"
            style={{
              backgroundColor: "#E8622A",
              color: "#1C2B3A",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
              padding: "8px 18px",
              borderRadius: 8,
              whiteSpace: "nowrap",
              transition: "background-color 0.2s",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F07440")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E8622A")}
          >
            Apply for Early Access
          </a>

          {/* Mobile Hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#1C2B3A",
              padding: 4,
            }}
          >
            {menuOpen ? <IconClose size={22} color="#1C2B3A" /> : <IconList size={22} color="#1C2B3A" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 85,
              backgroundColor: "rgba(245, 240, 232, 0.98)",
              backdropFilter: "blur(12px)",
              padding: "120px 32px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#1C2B3A",
                  textDecoration: "none",
                  fontSize: 20,
                  fontWeight: 600,
                  padding: "16px 0",
                  borderBottom: "1px solid #D4CFC6",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "var(--font-bitter), Georgia, serif",
                }}
              >
                {link.label}
                {link.soon && (
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#E8622A",
                      backgroundColor: "rgba(232, 98, 42, 0.12)",
                      border: "1px solid rgba(232, 98, 42, 0.3)",
                      borderRadius: 4,
                      padding: "2px 6px",
                    }}
                  >
                    soon
                  </span>
                )}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: 24,
                backgroundColor: "#E8622A",
                color: "#1C2B3A",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 700,
                padding: "14px 24px",
                borderRadius: 10,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Apply for Early Access
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent mobile sticky CTA — always visible on scroll */}
      <div
        className="mobile-sticky-cta"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 80,
          padding: "12px 16px",
          paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
          backgroundColor: "rgba(245, 240, 232, 0.95)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid #D4CFC6",
        }}
      >
        <a
          href="#apply"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#E8622A",
            color: "#1C2B3A",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 700,
            padding: "12px 20px",
            borderRadius: 10,
            width: "100%",
            transition: "background-color 0.2s",
          }}
        >
          Apply for Early Access
        </a>
      </div>
    </>
  );
}
