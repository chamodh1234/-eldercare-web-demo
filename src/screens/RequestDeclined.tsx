"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { all: false };
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
    return { all: tg("all"), cta: this.state.all ? "Send to all 3" : "Request Shanthi" };
  }
}

export default function RequestDeclinedScreen() {
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
      <AppHeader active="/visits" />
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
              href="/visits"
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
              All visits
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src="/images/nirmala.png"
                alt=""
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                }}
              />
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#545454",
                  }}
                >
                  Request declined
                </span>
                <span style={{ fontSize: "14px", color: "#333333" }}>Sat 17 Oct · 9:00 – 12:00</span>
              </span>
            </div>
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
                {"Nirmala can't take this visit"}
              </h1>
            </div>
            <span style={{ fontSize: "15px", color: "#333333", lineHeight: "1.5", maxWidth: "620px" }}>
              {'"So sorry, I have a family function that day." – Nirmala'}
            </span>
            <div
              style={{
                borderRadius: "14px",
                background: "#E6F4EC",
                color: "#05663A",
                padding: "12px 14px",
                fontSize: "13px",
                fontWeight: "600",
                lineHeight: "1.45",
                display: "flex",
                gap: "8px",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12l5 5 9-10"></path>
              </svg>
              <span>Hold released · nothing was charged to Visa ·· 4417</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Free on Sat 17 · 9:00 – 12:00</h2>
              <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                <div
                  style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", padding: "12px 16px" }}
                >
                  <img
                    src="/images/shanthi.png"
                    alt=""
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                      flexShrink: "0",
                    }}
                  />
                  <span style={{ flex: "1 1 150px", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "700" }}>Shanthi Rajapaksha</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>4.8 ★ · cared for Amma 3 times</span>
                  </span>
                  <span
                    style={{
                      height: "24px",
                      padding: "0 10px",
                      borderRadius: "12px",
                      background: "#E6F4EC",
                      color: "#05663A",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                    }}
                  >
                    LKR 1,000/hr
                  </span>
                  <Link
                    href="/checkout"
                    style={{
                      height: "32px",
                      padding: "0 14px",
                      borderRadius: "16px",
                      background: "#EEEEEE",
                      color: "#000000",
                      fontSize: "13px",
                      fontWeight: "600",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      boxSizing: "border-box",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Request
                  </Link>
                </div>
                <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "72px" }}></div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", padding: "12px 16px" }}
                >
                  <img
                    src="/images/mala.png"
                    alt=""
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                      flexShrink: "0",
                    }}
                  />
                  <span style={{ flex: "1 1 150px", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "700" }}>Mala Wickrama</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>4.9 ★ · 2.4 km away</span>
                  </span>
                  <span
                    style={{
                      height: "24px",
                      padding: "0 10px",
                      borderRadius: "12px",
                      background: "#E6F4EC",
                      color: "#05663A",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                    }}
                  >
                    LKR 1,200/hr
                  </span>
                  <Link
                    href="/checkout"
                    style={{
                      height: "32px",
                      padding: "0 14px",
                      borderRadius: "16px",
                      background: "#EEEEEE",
                      color: "#000000",
                      fontSize: "13px",
                      fontWeight: "600",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      boxSizing: "border-box",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Request
                  </Link>
                </div>
                <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "72px" }}></div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", padding: "12px 16px" }}
                >
                  <img
                    src="/images/priya.png"
                    alt=""
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                      flexShrink: "0",
                    }}
                  />
                  <span style={{ flex: "1 1 150px", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "700" }}>Priya Senanayake</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>4.6 ★ · 3.8 km away</span>
                  </span>
                  <span
                    style={{
                      height: "24px",
                      padding: "0 10px",
                      borderRadius: "12px",
                      background: "#E6F4EC",
                      color: "#05663A",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                    }}
                  >
                    LKR 950/hr
                  </span>
                  <Link
                    href="/checkout"
                    style={{
                      height: "32px",
                      padding: "0 14px",
                      borderRadius: "16px",
                      background: "#EEEEEE",
                      color: "#000000",
                      fontSize: "13px",
                      fontWeight: "600",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      boxSizing: "border-box",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Request
                  </Link>
                </div>
              </div>
              <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                <button
                  aria-pressed={v.all.pressed}
                  onClick={v.all.flip}
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
                    <span style={{ fontSize: "14px", fontWeight: "700" }}>Ask all 3 at once</span>
                    <span style={{ fontSize: "13px", color: "#545454" }}>The first to accept gets the visit</span>
                  </span>
                  <span
                    style={{
                      width: "40px",
                      height: "24px",
                      borderRadius: "12px",
                      background: v.all.track,
                      padding: "3px",
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: v.all.align,
                      flexShrink: "0",
                    }}
                  >
                    <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                  </span>
                </button>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <Link
                href="/booking-status"
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
                {v.cta}
              </Link>
              <Link
                href="/book"
                style={{
                  height: "40px",
                  padding: "0 18px",
                  borderRadius: "20px",
                  background: "#EEEEEE",
                  color: "#000000",
                  fontSize: "14px",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                }}
              >
                Pick another day
              </Link>
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src="/images/nirmala.png"
                alt=""
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                }}
              />
              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>Companionship for Amma</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>Booking GL-B-58344</span>
              </span>
              <span
                style={{
                  height: "24px",
                  padding: "0 10px",
                  borderRadius: "12px",
                  background: "#EEEEEE",
                  color: "#333333",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "12px",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                }}
              >
                Declined
              </span>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 16px",
                  fontSize: "14px",
                }}
              >
                <span style={{ color: "#545454" }}>When</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  Sat 17 Oct
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    9:00 – 12:00
                  </span>
                </span>
              </div>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 16px",
                  fontSize: "14px",
                }}
              >
                <span style={{ color: "#545454" }}>Caregiver</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>Nirmala Perera</span>
              </div>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 16px",
                  fontSize: "14px",
                }}
              >
                <span style={{ color: "#545454" }}>Tasks</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>Routine + 1 extra</span>
              </div>
            </div>
            <span style={{ fontSize: "12px", color: "#545454", lineHeight: "1.5" }}>
              Your tasks and notes are kept. They go to whoever you book next.
            </span>
          </aside>
        </div>
      </main>
    </div>
  );
}
