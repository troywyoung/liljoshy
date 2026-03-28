"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const tools = ["Claude Code", "GitHub", "VS Code", "Cursor", "Codex"];

const stats = [
  { value: 270, suffix: "", label: "sessions tracked" },
  { value: 1.57, suffix: "", prefix: "$", label: "avg cost / session", decimals: 2 },
  { value: 145, suffix: "", label: "longest streak (days)" },
];

function CountUp({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section
      style={{
        backgroundColor: "#EDE8DF",
        borderTop: "1px solid #D4CFC6",
        borderBottom: "1px solid #D4CFC6",
        padding: "32px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          rowGap: 28,
        }}
      >
        {/* Works with — text pills */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: "var(--font-bitter), Georgia, serif", fontSize: 12, color: "#7A6F66", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, whiteSpace: "nowrap" }}>
            Pairs with your existing tools
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {tools.map((name) => (
              <span
                key={name}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#1C2B3A",
                  backgroundColor: "rgba(122,111,102,0.08)",
                  border: "1px solid #D4CFC6",
                  borderRadius: 100,
                  padding: "5px 14px",
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#7A6F66", fontStyle: "italic", textAlign: "center", margin: "4px 0 0" }}>
            Built by an indie dev shipping production code with agents daily.
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 1,
            height: 32,
            backgroundColor: "#D4CFC6",
            flexShrink: 0,
          }}
          className="hidden lg:block"
        />

        {/* Stats */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#D4CFC6", textAlign: "center" as const, marginBottom: 12, margin: "0 0 12px" }}>
            From the creator&apos;s daily workflow
          </p>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ textAlign: "center" }}
              >
                <p
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#E8622A",
                    margin: "0 0 2px",
                    letterSpacing: "-0.016em",
                  }}
                >
                  <CountUp
                    target={stat.value}
                    decimals={stat.decimals ?? 0}
                    prefix={stat.prefix ?? ""}
                    suffix={stat.suffix}
                  />
                </p>
                <p style={{ fontFamily: "var(--font-bitter), Georgia, serif", fontSize: 11, color: "#7A6F66", margin: 0, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
