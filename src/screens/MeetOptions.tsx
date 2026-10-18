"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { toast } from "@/components/Toaster";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { m: 0, d: 0, t: 2, amma: true, ruwan: true };
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
    const tg = (k) => {
      const on = this.state[k];
      return {
        pressed: on ? "true" : "false",
        track: on ? "#05944F" : "#CBCBCB",
        align: on ? "flex-end" : "flex-start",
        flip: () => this.setState({ [k]: !on }),
      };
    };
    const D = ["Today", "Tomorrow", "Thu 15"];
    const T = ["4:00 PM", "5:30 PM", "7:00 PM", "8:00 PM"];
    return {
      opts: radio("m", [
        ["15-min video call · free", "In the app · numbers stay private"],
        ["Meet at home · free", "30 min · Amma meets her too"],
        ["Paid trial visit · LKR 3,960", "3 hrs of real care · held like any visit"],
      ]),
      days: pick1("d", D),
      times: pick1("t", T),
      amma: tg("amma"),
      ruwan: tg("ruwan"),
      when: D[this.state.d] + " · " + T[this.state.t],
      cta: ["Send call invite", "Send meet invite", "Book trial visit"][this.state.m],
    };
  }
}

export default function MeetOptionsScreen() {
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
        <AppHeader active="/my-jobs" />
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
            href="/my-jobs"
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
            My jobs
          </Link>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <h1
              style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.025em" }}
            >
              Morning companion for Amma
            </h1>
            <span style={{ fontSize: "15px", color: "#545454" }}>4 applicants · Mon–Sat · 9:00 – 12:00</span>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <div
              style={{
                flex: "2",
                height: "460px",
                border: "1px solid #E2E2E2",
                borderRadius: "16px",
                background: "#F6F6F6",
              }}
            ></div>
            <div
              style={{
                flex: "3",
                height: "460px",
                border: "1px solid #E2E2E2",
                borderRadius: "16px",
                background: "#F6F6F6",
              }}
            ></div>
          </div>
        </main>
        <Link
          href="/applicants"
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
            <img
              src="/images/mala.png"
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
            <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                Before you hire
              </span>
              <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>Meet Mala first</span>
            </span>
            <Link
              href="/applicants"
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
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Day</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {v.days.map((t: any, i2: number) => (
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
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Time · her free slots</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {v.times.map((t: any, i3: number) => (
                  <Fragment key={i3}>
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
          </div>
          <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
            <button
              aria-pressed={v.amma.pressed}
              onClick={v.amma.flip}
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
                <span style={{ fontSize: "14px", fontWeight: "700" }}>Amma joins</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>Add her from your phone</span>
              </span>
              <span
                style={{
                  width: "40px",
                  height: "24px",
                  borderRadius: "12px",
                  background: v.amma.track,
                  padding: "3px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: v.amma.align,
                  flexShrink: "0",
                }}
              >
                <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
              </span>
            </button>
            <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
            <button
              aria-pressed={v.ruwan.pressed}
              onClick={v.ruwan.flip}
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
                <span style={{ fontSize: "14px", fontWeight: "700" }}>Invite Ruwan</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>{"From Amma's care circle"}</span>
              </span>
              <span
                style={{
                  width: "40px",
                  height: "24px",
                  borderRadius: "12px",
                  background: v.ruwan.track,
                  padding: "3px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: v.ruwan.align,
                  flexShrink: "0",
                }}
              >
                <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
              </span>
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700" }}>{v.when}</span>
            <span style={{ display: "flex", gap: "10px" }}>
              <Link
                href="/hire"
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
                Skip · hire now
              </Link>
              <Link
                href="/meet-booked"
                onClick={() => toast("Call invite sent")}
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
