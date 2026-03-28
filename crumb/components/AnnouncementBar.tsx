"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconClose } from "./HandDrawnIcons";

const STORAGE_KEY = "crumb-announcement-dismissed";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="announcement-bar"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            backgroundColor: "rgba(232, 98, 42, 0.10)",
            borderBottom: "1px solid rgba(232, 98, 42, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 16px",
            gap: 12,
          }}
        >
          <p className="announcement-text" style={{ fontSize: 13, color: "#1C2B3A", margin: 0, textAlign: "center", fontWeight: 600 }}>
            <span style={{ color: "#E8622A" }}>●</span>&nbsp; <strong>Crumb is in invite-only beta</strong> — 50 repositories in the first cohort.{" "}
            <a
              href="#apply"
              style={{
                color: "#E8622A",
                textDecoration: "underline",
                textUnderlineOffset: 3,
                fontWeight: 500,
              }}
            >
              Apply for early access →
            </a>
          </p>
          <button
            onClick={dismiss}
            aria-label="Dismiss announcement"
            style={{
              position: "relative",
              flexShrink: 0,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#7A6F66",
              display: "flex",
              alignItems: "center",
              padding: 4,
              borderRadius: 4,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1C2B3A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#7A6F66")}
          >
            <IconClose size={15} color="#7A6F66" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
