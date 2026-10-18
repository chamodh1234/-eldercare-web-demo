"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { sel: [26, 27, 28, 29, 30, 31], extend: true, keep: true };
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
    const dayGrid = (key, weeks) =>
      weeks.map((w) => ({
        days: w.map((d) => {
          const on = this.state[key].includes(d);
          return {
            d,
            pressed: on ? "true" : "false",
            bg: on ? "#000000" : "#EEEEEE",
            fg: on ? "#FFFFFF" : "#000000",
            flip: () =>
              this.setState({
                [key]: on ? this.state[key].filter((x) => x !== d) : [...this.state[key], d].sort((a, b) => a - b),
              }),
          };
        }),
      }));
    const fmt = (n) => "LKR " + n.toLocaleString("en-US");
    const n = this.state.sel.length;
    const f = this.state.sel[0],
      l = this.state.sel[n - 1];
    const ends = [
      "Sat 7 Nov",
      "Mon 9 Nov",
      "Tue 10 Nov",
      "Wed 11 Nov",
      "Thu 12 Nov",
      "Fri 13 Nov",
      "Sat 14 Nov",
      "Mon 16 Nov",
      "Tue 17 Nov",
      "Wed 18 Nov",
      "Thu 19 Nov",
      "Fri 20 Nov",
      "Sat 21 Nov",
    ];
    return {
      weeks: dayGrid("sel", [
        [19, 20, 21, 22, 23, 24],
        [26, 27, 28, 29, 30, 31],
      ]),
      n,
      range: n ? (f === l ? f + " Oct" : f + " – " + l + " Oct") : "No days picked",
      saved: fmt(n * 3960),
      extend: tg("extend"),
      keep: tg("keep"),
      endDate: this.state.extend ? ends[n] : "Sat 7 Nov",
      cta: n ? "Pause " + n + " visit" + (n > 1 ? "s" : "") : "Pick days",
    };
  }
}

export default function PauseCareScreen() {
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
              <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>Pause weekly care</span>
              <span style={{ fontSize: "14px", color: "#545454" }}>
                {"Pick the days Nirmala shouldn't come. You're not charged for them."}
              </span>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600" }}>October</span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "6px" }}>
              <span style={{ textAlign: "center", fontSize: "11px", fontWeight: "700", color: "#545454" }}>Mon</span>
              <span style={{ textAlign: "center", fontSize: "11px", fontWeight: "700", color: "#545454" }}>Tue</span>
              <span style={{ textAlign: "center", fontSize: "11px", fontWeight: "700", color: "#545454" }}>Wed</span>
              <span style={{ textAlign: "center", fontSize: "11px", fontWeight: "700", color: "#545454" }}>Thu</span>
              <span style={{ textAlign: "center", fontSize: "11px", fontWeight: "700", color: "#545454" }}>Fri</span>
              <span style={{ textAlign: "center", fontSize: "11px", fontWeight: "700", color: "#545454" }}>Sat</span>
            </div>
            {v.weeks.map((w: any, i1: number) => (
              <Fragment key={i1}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "6px" }}>
                  {w.days.map((x: any, i2: number) => (
                    <Fragment key={i2}>
                      <button
                        aria-pressed={x.pressed}
                        onClick={x.flip}
                        style={{
                          height: "40px",
                          borderRadius: "10px",
                          border: "none",
                          background: x.bg,
                          color: x.fg,
                          font: "700 14px var(--font-figtree), sans-serif",
                        }}
                      >
                        {x.d}
                      </button>
                    </Fragment>
                  ))}
                </div>
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
              <span style={{ color: "#545454" }}>Paused</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>
                {v.range}
                <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                  {v.n}
                  {" visits"}
                </span>
              </span>
            </div>
            <div style={{ height: "1px", background: "#E2E2E2" }}></div>
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
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#05663A" }}>Not charged</span>
                <span style={{ fontSize: "12px", color: "#333333" }}>Taken off the weekly hold</span>
              </span>
              <span style={{ fontSize: "18px", fontWeight: "800", whiteSpace: "nowrap" }}>{v.saved}</span>
            </div>
          </div>
          <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
            <button
              aria-pressed={v.extend.pressed}
              onClick={v.extend.flip}
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
                <span style={{ fontSize: "14px", fontWeight: "700" }}>Add paused days to the end</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>
                  {"Weekly care now runs until "}
                  {v.endDate}
                </span>
              </span>
              <span
                style={{
                  width: "40px",
                  height: "24px",
                  borderRadius: "12px",
                  background: v.extend.track,
                  padding: "3px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: v.extend.align,
                  flexShrink: "0",
                }}
              >
                <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
              </span>
            </button>
            <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
            <button
              aria-pressed={v.keep.pressed}
              onClick={v.keep.flip}
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
                <span style={{ fontSize: "14px", fontWeight: "700" }}>{"Keep Nirmala's 9–12 slot for us"}</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>{"She won't take other bookings then"}</span>
              </span>
              <span
                style={{
                  width: "40px",
                  height: "24px",
                  borderRadius: "12px",
                  background: v.keep.track,
                  padding: "3px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: v.keep.align,
                  flexShrink: "0",
                }}
              >
                <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
              </span>
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "12px", color: "#545454" }}>Nirmala is told right away</span>
            <span style={{ display: "flex", gap: "10px" }}>
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
                Cancel
              </Link>
              <Link
                href="/care-paused"
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
