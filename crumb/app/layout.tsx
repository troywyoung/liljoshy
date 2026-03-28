import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Bitter } from "next/font/google";
import "./globals.css";

// Bitter — closest Google Font match to the logo's bold rounded slab serif
const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-bitter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crumb — Async Agent Workflow for Developers",
  description:
    "Give your coding agents structured specs, persistent context, and quality gates. Crumb runs them while you're away. $1.57/session average. Open source.",
  metadataBase: new URL("https://crumb.dev"),
  openGraph: {
    title: "Crumb — Async Agent Workflow for Developers",
    description:
      "Give your coding agents structured specs, persistent context, and quality gates. Crumb runs them while you're away.",
    url: "https://crumb.dev",
    siteName: "Crumb",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crumb — Async Agent Workflow for Developers",
    description:
      "Give your coding agents structured specs, persistent context, and quality gates.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${bitter.variable}`}
    >
      <body
        style={{
          fontFamily: "var(--font-geist-sans), sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
