"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { show: true, mkt: false };
  }
  renderVals() {
    const tg = (k) => {
      const on = this.state[k];
      return {
        pressed: on ? "true" : "false",
        track: on ? "#05944F" : "#CBCBCB",
        align: on ? "flex-end" : "flex-start",
        flip: () => this.setState({ [k]: !on }),
      };
    };
    return { show: tg("show"), mkt: tg("mkt") };
  }
}

export default function PrivacyScreen() {
  const demo = useDemo();
  const v = useLogic(Logic, { persist: "privacy" });
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#FFFFFF",
        color: "#000000",
        fontFamily: "var(--font-figtree), system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppHeader />
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "28px 24px 56px",
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>
          <AccountNav active="/security" />
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link
              href="/security"
              style={{
                alignSelf: "flex-start",
                height: "32px",
                padding: "0 14px 0 8px",
                borderRadius: "16px",
                background: "#EEEEEE",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
              Security
            </Link>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <h1
                style={{
                  margin: "0",
                  fontSize: "30px",
                  lineHeight: "1.1",
                  fontWeight: "800",
                  letterSpacing: "-0.025em",
                }}
              >
                {"Privacy & your data"}
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>You decide who sees what</span>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <button
                aria-pressed={v.show.pressed}
                onClick={v.show.flip}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  border: "none",
                  background: "transparent",
                  color: "#000000",
                  textAlign: "left",
                  fontFamily: "var(--font-figtree), sans-serif",
                }}
              >
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Address only after booking</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Caregivers see it 24 hrs before a visit</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.show.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.show.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <button
                aria-pressed={v.mkt.pressed}
                onClick={v.mkt.flip}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  border: "none",
                  background: "transparent",
                  color: "#000000",
                  textAlign: "left",
                  fontFamily: "var(--font-figtree), sans-serif",
                }}
              >
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Offers and news</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Never shared with other companies</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.mkt.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.mkt.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <Link
                href="/blocked"
                style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", color: "#000000" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4"></circle>
                  <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>
                </svg>
                <span style={{ flex: "1", fontSize: "14px", fontWeight: "700" }}>Blocked caregivers</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>{demo.blocked.length}</span>
                <span style={{ color: "#545454", display: "flex" }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 6l6 6-6 6"></path>
                  </svg>
                </span>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <Link
                href="/download-data"
                style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", color: "#000000" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path>
                </svg>
                <span style={{ flex: "1", fontSize: "14px", fontWeight: "700" }}>Download your data</span>
                <span style={{ color: "#545454", display: "flex" }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 6l6 6-6 6"></path>
                  </svg>
                </span>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <Link
                href="/help-article"
                style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", color: "#000000" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4M9 12h6M9 16h6"></path>
                </svg>
                <span style={{ flex: "1", fontSize: "14px", fontWeight: "700" }}>How we use your data</span>
                <span style={{ color: "#545454", display: "flex" }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 6l6 6-6 6"></path>
                  </svg>
                </span>
              </Link>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <Link
                href="/delete-account"
                style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", color: "#C11500" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"></path>
                </svg>
                <span style={{ flex: "1", fontSize: "14px", fontWeight: "700" }}>Delete account</span>
                <span style={{ color: "#545454", display: "flex" }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 6l6 6-6 6"></path>
                  </svg>
                </span>
              </Link>
            </div>
            <span style={{ fontSize: "12px", color: "#545454" }}>
              {"Gloocan follows Sri Lanka's Personal Data Protection Act."}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
