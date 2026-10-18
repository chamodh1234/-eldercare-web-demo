"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { last: 0, why: ["Amma is doing better"] };
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
    const D = [
      {
        more: "None",
        cancelled: "20 visits",
        money: "LKR 5,940",
        lbl: "Refund to Visa ·· 4417",
        sub: "Sat in full · Fri 50% (inside 24 hrs)",
        g: true,
        btn: "End after today",
      },
      {
        more: "2 · already paid",
        cancelled: "18 visits",
        money: "LKR 0",
        lbl: "Nothing more to pay",
        sub: "No more weekly holds",
        g: true,
        btn: "End after Sat 17 Oct",
      },
      {
        more: "8 · 6 held Mon 19",
        cancelled: "12 visits",
        money: "LKR 23,760",
        lbl: "Last hold · Mon 19 Oct",
        sub: "Then no more charges",
        g: false,
        btn: "End after Sat 24 Oct",
      },
    ];
    const d = D[this.state.last];
    return {
      opts: radio("last", [
        ["After today · Thu 15 Oct", "Fri and Sat this week are refunded"],
        ["After Sat 17 Oct", "Finish this week, already paid"],
        ["After Sat 24 Oct", "One more week"],
      ]),
      why: chips("why", ["Amma is doing better", "Found other care", "Cost", "Not happy with care"]),
      ...d,
      b: !d.g,
      unhappy: this.state.why.includes("Not happy with care"),
    };
  }
}

export default function EndCareScreen() {
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
            maxWidth: "1360px",
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
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img
              src="/images/nirmala.png"
              alt=""
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                flexShrink: "0",
              }}
            />
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
                Weekly care with Nirmala
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                Mon–Sat · 9:00 – 12:00 · 12 Oct – 7 Nov · for Amma
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <div
              style={{
                flex: "3",
                height: "420px",
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
          href="/weekly-care"
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
              <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>End weekly care</span>
              <span style={{ fontSize: "14px", color: "#545454" }}>{"Choose Amma's last visit with Nirmala"}</span>
            </span>
            <Link
              href="/weekly-care"
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
              <span style={{ color: "#545454" }}>Visits still to come</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>{v.more}</span>
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
              <span style={{ color: "#545454" }}>Cancelled · never charged</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>{v.cancelled}</span>
            </div>
            <div style={{ height: "1px", background: "#E2E2E2" }}></div>
            {v.g ? (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    background: "#E6F4EC",
                  }}
                >
                  <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "700", color: "#05663A" }}>{v.lbl}</span>
                    <span style={{ fontSize: "12px", color: "#333333" }}>{v.sub}</span>
                  </span>
                  <span style={{ fontSize: "18px", fontWeight: "800", whiteSpace: "nowrap" }}>{v.money}</span>
                </div>
              </>
            ) : null}
            {v.b ? (
              <>
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
                    <span style={{ fontSize: "14px", fontWeight: "700", color: "#1A4FB5" }}>{v.lbl}</span>
                    <span style={{ fontSize: "12px", color: "#333333" }}>{v.sub}</span>
                  </span>
                  <span style={{ fontSize: "18px", fontWeight: "800", whiteSpace: "nowrap" }}>{v.money}</span>
                </div>
              </>
            ) : null}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600" }}>Why are you ending? · optional</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {v.why.map((c: any, i2: number) => (
                <Fragment key={i2}>
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
          {v.unhappy ? (
            <>
              <Link href="/dispute" style={{ fontSize: "13px", color: "#545454" }}>
                {"Something went wrong? "}
                <b style={{ color: "#000000", textDecoration: "underline" }}>Tell us about a visit</b>
              </Link>
            </>
          ) : null}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Link
              href="/weekly-care"
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
              Keep weekly care
            </Link>
            <Link
              href="/care-ended"
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
              {v.btn}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
