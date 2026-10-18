"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { what: ["Visits & reports", "Payments & receipts", "Care profiles"], f: 0, sent: false };
  }
  renderVals() {
    const chips = (key, labels) =>
      labels.map((l) => {
        const on = this.state[key].includes(l);
        return {
          label: l,
          pressed: on ? "true" : "false",
          bg: on ? "#000000" : "#EEEEEE",
          fg: on ? "#FFFFFF" : "#000000",
          flip: () => this.setState({ [key]: on ? this.state[key].filter((x) => x !== l) : [...this.state[key], l] }),
        };
      });
    const pick1 = (key, labels) =>
      labels.map((l, i) => {
        const on = this.state[key] === i;
        return {
          label: l,
          sel: on ? "true" : "false",
          bg: on ? "#000000" : "#EEEEEE",
          fg: on ? "#FFFFFF" : "#000000",
          pick: () => this.setState({ [key]: i }),
        };
      });
    return {
      what: chips("what", ["Visits & reports", "Messages", "Payments & receipts", "Care profiles", "Reviews"]),
      fmts: pick1("f", ["PDF", "Spreadsheet (CSV)"]),
      notSent: !this.state.sent,
      sent: this.state.sent,
      send: () => this.setState({ sent: true }),
    };
  }
}

export default function DownloadDataScreen() {
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
          <AccountNav active="/security" />
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link
              href="/privacy"
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
              Privacy
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
                Download your data
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                A copy of everything you choose, ready within 24 hrs
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>What to include</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {v.what.map((c: any, i1: number) => (
                  <Fragment key={i1}>
                    <button
                      aria-pressed={c.pressed}
                      onClick={c.flip}
                      style={{
                        height: "32px",
                        padding: "0 12px",
                        borderRadius: "16px",
                        border: "none",
                        background: c.bg,
                        color: c.fg,
                        font: "600 13px var(--font-figtree), sans-serif",
                      }}
                    >
                      {c.label}
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Format</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {v.fmts.map((t: any, i2: number) => (
                  <Fragment key={i2}>
                    <button
                      aria-pressed={t.sel}
                      onClick={t.pick}
                      style={{
                        height: "36px",
                        padding: "0 16px",
                        borderRadius: "18px",
                        border: "none",
                        background: t.bg,
                        color: t.fg,
                        font: "700 13px var(--font-figtree), sans-serif",
                      }}
                    >
                      {t.label}
                    </button>
                  </Fragment>
                ))}
              </div>
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
                <span style={{ color: "#545454" }}>Send link to</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  d••••.f@gmail.com
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    Link works for 7 days
                  </span>
                </span>
              </div>
            </div>
            {v.sent ? (
              <>
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
                  <span>{"Requested. We'll email you when it's ready."}</span>
                </div>
              </>
            ) : null}
            {v.notSent ? (
              <>
                <div>
                  <button
                    onClick={v.send}
                    style={{
                      height: "44px",
                      padding: "0 22px",
                      borderRadius: "22px",
                      border: "none",
                      background: "#000000",
                      color: "#FFFFFF",
                      font: "700 15px var(--font-figtree), sans-serif",
                    }}
                  >
                    Request my data
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
