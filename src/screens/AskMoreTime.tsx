"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { d: 1, why: 0 };
  }
  renderVals() {
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
    const D: [string, number, string][] = [
      ["30 min", 600, "12:30 PM"],
      ["1 hour", 1200, "1:00 PM"],
      ["2 hours", 2400, "2:00 PM"],
    ];
    const d = D[this.state.d];
    const fee = d[1] / 10;
    const f = (n) => "LKR " + n.toLocaleString("en-US");
    return {
      durs: pick1(
        "d",
        D.map((x) => x[0]),
      ),
      whys: pick1("why", ["Stuck in traffic", "Work is running late", "Amma needs company", "Other"]),
      until: d[2],
      base: f(d[1]),
      fee: f(fee),
      total: f(d[1] + fee),
      cta: "Ask Nirmala · " + f(d[1] + fee),
    };
  }
}

export default function AskMoreTimeScreen() {
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
      <div style={{ position: "relative", flex: "1", display: "flex", flexDirection: "column" }}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <h1
              style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.025em" }}
            >
              Nirmala is with Amma
            </h1>
            <span style={{ fontSize: "15px", color: "#545454" }}>Live · checked in 9:02 · 2:36 of 3 hrs</span>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <div
              style={{
                flex: "3",
                height: "460px",
                border: "1px solid #E2E2E2",
                borderRadius: "16px",
                background: "#F6F6F6",
              }}
            ></div>
            <div
              style={{
                flex: "2",
                height: "300px",
                border: "1px solid #E2E2E2",
                borderRadius: "16px",
                background: "#F6F6F6",
              }}
            ></div>
          </div>
        </main>
        <Link
          href="/live-visit"
          aria-label="Close"
          style={{ position: "absolute", inset: "0", background: "rgba(0,0,0,0.45)" }}
        ></Link>
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "absolute",
            left: "50%",
            top: "64px",
            transform: "translateX(-50%)",
            width: "min(560px, calc(100% - 32px))",
            background: "#FFFFFF",
            borderRadius: "20px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                Ask Nirmala to stay longer
              </span>
              <span style={{ fontSize: "14px", color: "#545454" }}>Visit ends at 12:00. She can say yes or no.</span>
            </span>
            <Link
              href="/live-visit"
              aria-label="Close"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "16px",
                background: "#EEEEEE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
                <path d="M6 6l12 12M18 6L6 18"></path>
              </svg>
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600" }}>How much longer</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {v.durs.map((t: any, i1: number) => (
                <Fragment key={i1}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600" }}>Why · Nirmala sees this</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {v.whys.map((t: any, i2: number) => (
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
              <span style={{ color: "#545454" }}>Visit would end</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>
                {v.until}
                <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                  Instead of 12:00 PM
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
              <span style={{ color: "#545454" }}>Extra time</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>
                {v.base}
                <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                  LKR 1,200/hr
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
              <span style={{ color: "#545454" }}>{"Booking & safety fee"}</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>{v.fee}</span>
            </div>
            <div style={{ height: "1px", background: "#E2E2E2" }}></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                background: "#EAF0FD",
              }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#1A4FB5" }}>Added to your hold</span>
                <span style={{ fontSize: "12px", color: "#333333" }}>Paid only after you approve the visit</span>
              </span>
              <span style={{ fontSize: "18px", fontWeight: "800", whiteSpace: "nowrap" }}>{v.total}</span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "12px", color: "#545454" }}>{"Nothing is charged if she can't stay"}</span>
            <span style={{ display: "flex", gap: "10px" }}>
              <Link
                href="/live-visit"
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
                Cancel
              </Link>
              <Link
                href="/more-time-waiting"
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
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
