"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { d: 2, t: 2 };
  }
  renderVals() {
    const D = [
      ["Fri", 16],
      ["Sat", 17],
      ["Sun", 18],
      ["Mon", 19],
      ["Tue", 20],
      ["Wed", 21],
      ["Thu", 22],
    ];
    const T = ["8:00", "9:00", "10:00", "2:00 PM", "3:00 PM"];
    const busy = [3];
    const days = D.map((d, i) => {
      const on = this.state.d === i;
      const off = i >= 4;
      return {
        dow: d[0],
        num: d[1],
        pressed: on ? "true" : "false",
        bg: on ? "#000000" : off ? "#F6F6F6" : "#EEEEEE",
        fg: on ? "#FFFFFF" : off ? "#A6A6A6" : "#000000",
        pick: () => {
          if (!off) this.setState({ d: i });
        },
      };
    });
    const times = T.map((t, i) => {
      const on = this.state.t === i;
      const b = busy.includes(i);
      return {
        label: t,
        pressed: on ? "true" : "false",
        bg: on ? "#000000" : "#EEEEEE",
        fg: on ? "#FFFFFF" : b ? "#A6A6A6" : "#000000",
        deco: b ? "line-through" : "none",
        pick: () => {
          if (!b) this.setState({ t: i });
        },
      };
    });
    return { days, times, newWhen: D[this.state.d][0] + " " + D[this.state.d][1] + " Oct · " + T[this.state.t] };
  }
}

export default function RescheduleScreen() {
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
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <h1
              style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.025em" }}
            >
              {"Amma's visits"}
            </h1>
          </div>
          <div
            style={{ height: "320px", border: "1px solid #E2E2E2", borderRadius: "16px", background: "#F6F6F6" }}
          ></div>
        </main>
        <Link
          href="/visits"
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
            width: "min(600px, calc(100% - 32px))",
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
              <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>Change date or time</span>
              <span style={{ fontSize: "14px", color: "#545454" }}>Sat 17 Oct · 9:00 – 12:00 · Nirmala</span>
            </span>
            <Link
              href="/visits"
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
            <span style={{ fontSize: "13px", fontWeight: "600" }}>New day · greyed days Nirmala is off</span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: "6px" }}>
              {v.days.map((d: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    aria-pressed={d.pressed}
                    onClick={d.pick}
                    style={{
                      height: "52px",
                      borderRadius: "12px",
                      border: "none",
                      background: d.bg,
                      color: d.fg,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1px",
                      fontFamily: "var(--font-figtree), sans-serif",
                    }}
                  >
                    <span style={{ fontSize: "11px", fontWeight: "600" }}>{d.dow}</span>
                    <span style={{ fontSize: "16px", fontWeight: "800" }}>{d.num}</span>
                  </button>
                </Fragment>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600" }}>Start time · 3 hrs</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {v.times.map((t: any, i2: number) => (
                <Fragment key={i2}>
                  <button
                    aria-pressed={t.pressed}
                    onClick={t.pick}
                    style={{
                      height: "36px",
                      padding: "0 16px",
                      borderRadius: "18px",
                      border: "none",
                      background: t.bg,
                      color: t.fg,
                      textDecoration: t.deco,
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
              <span style={{ color: "#545454" }}>Was</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>Sat 17 Oct · 9:00</span>
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
              <span style={{ color: "#545454" }}>New</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>{v.newWhen}</span>
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
              <span style={{ color: "#545454" }}>Price</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>
                No change
                <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                  LKR 3,960 stays in escrow
                </span>
              </span>
            </div>
          </div>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
            <span style={{ fontSize: "13px", fontWeight: "600" }}>Message to Nirmala · optional</span>
            <input
              defaultValue="Amma has a clinic visit on Saturday morning."
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
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Link
              href="/visits"
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
              Keep current time
            </Link>
            <Link
              href="/visits"
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
              Send to Nirmala
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
