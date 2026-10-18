"use client";

import Link from "next/link";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { terms: true, news: false };
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
    return { terms: tg("terms"), news: tg("news") };
  }
}

export default function SignupDetailsScreen() {
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
      <div style={{ flex: "1", minHeight: "900px", display: "flex", flexWrap: "wrap" }}>
        <section
          style={{
            flex: "0 1 520px",
            background: "#000000",
            color: "#FFFFFF",
            padding: "40px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "18px", fontWeight: "800" }}
          >
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "13px",
                background: "#FFFFFF",
                color: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              g
            </span>
            Gloocan
          </Link>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "420px" }}>
            <h2
              style={{ margin: "0", fontSize: "36px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.03em" }}
            >
              Trusted care for the people you love.
            </h2>
            <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#D6D6D6" }}>
              Verified caregivers, live visit updates from anywhere, and you pay only after the visit.
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
                  background: "#05944F",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0",
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
              </span>
              Every caregiver ID and police checked
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
                  background: "#05944F",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0",
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
              </span>
              Follow visits live from Colombo or Melbourne
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
                  background: "#05944F",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0",
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
              </span>
              Payment held until you approve
            </span>
          </div>
        </section>
        <section
          style={{
            flex: "999 1 480px",
            padding: "48px 32px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                Create account · step 2 of 3
              </span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "4px" }}>
                <span style={{ height: "4px", borderRadius: "2px", background: "#000000" }}></span>
                <span style={{ height: "4px", borderRadius: "2px", background: "#000000" }}></span>
                <span style={{ height: "4px", borderRadius: "2px", background: "#E2E2E2" }}></span>
              </div>
            </div>
            <Link
              href="/signup-role"
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
                About you
              </h1>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                <span style={{ fontSize: "13px", fontWeight: "600" }}>First name</span>
                <input
                  defaultValue="Dilani"
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
                <span style={{ fontSize: "13px", fontWeight: "600" }}>Last name</span>
                <input
                  defaultValue="Fernando"
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
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Email · for receipts</span>
              <input
                defaultValue="dilani.f@example.com"
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
            <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Mobile number · verified</span>
              <span style={{ display: "flex", gap: "8px" }}>
                <span
                  style={{
                    height: "48px",
                    padding: "0 12px",
                    border: "1px solid #E2E2E2",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  {"LK +94 "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
                <input
                  defaultValue="77 512 4120"
                  style={{
                    flex: "1",
                    minWidth: "0",
                    height: "48px",
                    border: "1px solid #E2E2E2",
                    borderRadius: "12px",
                    padding: "0 14px",
                    font: "600 15px var(--font-figtree), sans-serif",
                  }}
                />
              </span>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>You live in</span>
              <input
                defaultValue="Sri Lanka · Colombo"
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
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <button
                aria-pressed={v.terms.pressed}
                onClick={v.terms.flip}
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
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>I agree to the terms and privacy policy</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.terms.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.terms.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <button
                aria-pressed={v.news.pressed}
                onClick={v.news.flip}
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
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Send me care tips (monthly)</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.news.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.news.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
            </div>
            <Link
              href="/setup-care"
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
                width: "100%",
              }}
            >
              Continue
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
