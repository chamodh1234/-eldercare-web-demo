"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { r: 0 };
  }
  renderVals() {
    const radio = (key, list) =>
      list.map((r, i) => {
        const on = this.state[key] === i;
        return {
          title: r[0],
          note: r[1] || "",
          checked: on ? "true" : "false",
          sep: i === 0 ? "none" : "1px solid #E2E2E2",
          bg: on ? "#F6F6F6" : "#FFFFFF",
          ring: on ? "2px solid #000000" : "2px solid #A6A6A6",
          dot: on ? "#000000" : "transparent",
          pick: () => this.setState({ [key]: i }),
        };
      });
    return {
      opts: radio("r", [
        ["I checked my statement", "It's not there after 8 Oct"],
        ["It shows as pending", "Bank still holding it"],
        ["Wrong amount", "Less than LKR 2,640"],
      ]),
    };
  }
}

export default function RefundMissingScreen() {
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
          <AccountNav active="/payments" />
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link
              href="/refund-detail"
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
              Refund
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
                Refund not arrived?
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                Banks can take up to 10 working days. Most show by day 5.
              </span>
            </div>
            <div
              style={{
                borderRadius: "14px",
                background: "#EAF0FD",
                color: "#1A4FB5",
                padding: "12px 14px",
                fontSize: "13px",
                fontWeight: "600",
                lineHeight: "1.45",
                display: "flex",
                gap: "8px",
              }}
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
                <rect x="3" y="6" width="18" height="13" rx="2"></rect>
                <path d="M3 10h18M7 15h3"></path>
              </svg>
              <span>Give your bank this reference first: ARN 7498 5281 0412 6630. They can find it in minutes.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "620px" }}>
              <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>What are you seeing?</h2>
              <div
                role="radiogroup"
                style={{
                  border: "1px solid #E2E2E2",
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {v.opts.map((r: any, i1: number) => (
                  <Fragment key={i1}>
                    <button
                      role="radio"
                      aria-checked={r.checked}
                      onClick={r.pick}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "12px 16px",
                        border: "none",
                        borderTop: r.sep,
                        background: r.bg,
                        color: "#000000",
                        textAlign: "left",
                        fontFamily: "var(--font-figtree), sans-serif",
                      }}
                    >
                      <span
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "9px",
                          boxSizing: "border-box",
                          border: r.ring,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: "0",
                        }}
                      >
                        <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: r.dot }}></span>
                      </span>
                      <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700" }}>{r.title}</span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>{r.note}</span>
                      </span>
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>
            <span style={{ fontSize: "13px", color: "#545454", maxWidth: "620px", lineHeight: "1.5" }}>
              {
                "If it's still missing after 10 working days, we resend it or pay it by bank transfer. You never lose a refund."
              }
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <Link
                href="/support-chat"
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
                Chat with us about it
              </Link>
              <Link
                href="/refund-detail"
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
                Back to refund
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
