"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { v: [0, 1, 3] };
  }
  renderVals() {
    const D = [
      ["Prescription · Dr. Gunasekara", "12 Oct · valid till 12 Jan", "Rx"],
      ["Knee surgery discharge note", "Nawaloka Hospital · 28 Sep", "Note"],
      ["Blood report", "5 Oct · sugar & cholesterol", "Lab"],
      ["Physio exercise sheet", "2 Oct · 6 exercises", "Plan"],
    ];
    const docs = D.map((d, i) => {
      const on = this.state.v.includes(i);
      return {
        t: d[0],
        s: d[1],
        k: d[2],
        sep: i ? "1px solid #E2E2E2" : "none",
        eye: on ? "Caregiver sees" : "Only family",
        eyeBg: on ? "#EAF0FD" : "#EEEEEE",
        eyeFg: on ? "#1A4FB5" : "#545454",
        flip: () => this.setState({ v: on ? this.state.v.filter((x) => x !== i) : [...this.state.v, i] }),
      };
    });
    return { docs };
  }
}

export default function CareDocsScreen() {
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
          <AccountNav active="/care-profile" />
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "12px",
              }}
            >
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
                  {"Amma's documents"}
                </h1>
                <span style={{ fontSize: "15px", color: "#545454" }}>
                  Prescriptions, notes and reports in one place
                </span>
              </div>
              <Link
                href="/add-document"
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
                Add a document
              </Link>
            </div>
            <Link
              href="/medicine-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                borderRadius: "16px",
                background: "#EAF0FD",
                padding: "14px 16px",
              }}
            >
              <span
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "20px",
                  background: "#276EF1",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)"></rect>
                  <path d="M9.5 9.5l5 5"></path>
                </svg>
              </span>
              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>Medicine card</span>
                <span style={{ fontSize: "12px", color: "#333333" }}>3 medicines · what caregivers see each visit</span>
              </span>
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
            </Link>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#545454",
              }}
            >
              Files · click the tag to change who sees it
            </span>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              {v.docs.map((d: any, i1: number) => (
                <Fragment key={i1}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "12px 16px",
                      borderTop: d.sep,
                    }}
                  >
                    <span
                      style={{
                        width: "40px",
                        height: "48px",
                        borderRadius: "8px",
                        background: "#F6F6F6",
                        border: "1px solid #E2E2E2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: "800",
                        color: "#545454",
                      }}
                    >
                      {d.k}
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>{d.t}</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>{d.s}</span>
                    </span>
                    <button
                      onClick={d.flip}
                      style={{
                        height: "26px",
                        padding: "0 10px",
                        borderRadius: "13px",
                        border: "none",
                        background: d.eyeBg,
                        color: d.eyeFg,
                        font: "700 11px var(--font-figtree), sans-serif",
                      }}
                    >
                      {d.eye}
                    </button>
                    <a
                      href="#"
                      style={{
                        height: "30px",
                        padding: "0 12px",
                        borderRadius: "15px",
                        background: "#EEEEEE",
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      View
                    </a>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
