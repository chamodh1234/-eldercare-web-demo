"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { chat: true, block: true, hold: true };
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
    return { chat: tg("chat"), block: tg("block"), hold: tg("hold") };
  }
}

export default function ReportDetailsScreen() {
  const v = useLogic(Logic);
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
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
            <Link
              href="/report-caregiver"
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
              Back
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
                Report Nirmala · tell us more
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>Step 2 of 2 · Theft or missing items</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                <span style={{ fontSize: "13px", fontWeight: "600" }}>Which visit</span>
                <input
                  defaultValue="Sat 10 Oct · 9:00 – 12:00"
                  style={{
                    height: "44px",
                    border: "1px solid #E2E2E2",
                    outline: "none",
                    borderRadius: "12px",
                    background: "#FFFFFF",
                    color: "#000000",
                    padding: "0 12px",
                    font: "500 14px var(--font-figtree), sans-serif",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                <span style={{ fontSize: "13px", fontWeight: "600" }}>When did you notice?</span>
                <input
                  defaultValue="Sat 10 Oct, around 1 PM"
                  style={{
                    height: "44px",
                    border: "1px solid #E2E2E2",
                    outline: "none",
                    borderRadius: "12px",
                    background: "#FFFFFF",
                    color: "#000000",
                    padding: "0 12px",
                    font: "500 14px var(--font-figtree), sans-serif",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                />
              </label>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>What happened</span>
              <textarea
                rows={3}
                style={{
                  border: "1px solid #E2E2E2",
                  outline: "none",
                  resize: "none",
                  borderRadius: "12px",
                  background: "#FFFFFF",
                  color: "#000000",
                  padding: "10px 12px",
                  font: "500 14px var(--font-figtree), sans-serif",
                  lineHeight: "1.45",
                }}
                defaultValue="After Saturday's visit, Amma's gold bangle was missing from her bedside drawer. It was there in the morning."
              />
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Photos or files · optional</span>
              <div style={{ display: "flex", gap: "8px" }}>
                <span
                  style={{
                    width: "88px",
                    height: "88px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #5B4B3A, #2E2A26)",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      right: "6px",
                      top: "6px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "10px",
                      background: "rgba(0,0,0,0.6)",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 6l12 12M18 6L6 18"></path>
                    </svg>
                  </span>
                </span>
                <span
                  style={{
                    width: "88px",
                    height: "88px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #3B4A5C, #23282E)",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      right: "6px",
                      top: "6px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "10px",
                      background: "rgba(0,0,0,0.6)",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 6l12 12M18 6L6 18"></path>
                    </svg>
                  </span>
                </span>
                <button
                  aria-label="Add photo or file"
                  style={{
                    width: "88px",
                    height: "88px",
                    borderRadius: "12px",
                    border: "1.5px dashed #A6A6A6",
                    background: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000000",
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
                    <path d="M12 5v14M5 12h14"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <button
                aria-pressed={v.chat.pressed}
                onClick={v.chat.flip}
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
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Include my chat with Nirmala</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Only the safety team can read it</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.chat.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.chat.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
            </div>
          </div>
          <aside
            style={{
              flex: "1 1 300px",
              maxWidth: "380px",
              minWidth: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "20px",
              padding: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>While we look into it</h2>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <button
                aria-pressed={v.block.pressed}
                onClick={v.block.flip}
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
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Block Nirmala</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>{"She can't message you or see your jobs"}</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.block.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.block.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <button
                aria-pressed={v.hold.pressed}
                onClick={v.hold.flip}
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
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Hold payment for this visit</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>LKR 3,960 stays in escrow</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.hold.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.hold.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
            </div>
            <span style={{ display: "flex", gap: "6px", alignItems: "center", fontSize: "12px", color: "#545454" }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="5" y="11" width="14" height="9" rx="2"></rect>
                <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
              </svg>
              Nirmala never sees who reported or what you wrote.
            </span>
            <Link
              href="/report-sent"
              style={{
                height: "44px",
                padding: "0 22px",
                borderRadius: "22px",
                background: "#000000",
                color: "#FFFFFF",
                fontSize: "15px",
                fontWeight: "700",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxSizing: "border-box",
                whiteSpace: "nowrap",
              }}
            >
              Send report
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
