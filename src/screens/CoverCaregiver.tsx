"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { toast } from "@/components/Toaster";
import { mutate } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { sel: [20, 21, 22], cg: 0 };
  }
  renderVals() {
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
    const P = [
      {
        av: "/images/mala.png",
        name: "Mala Wickrama",
        first: "Mala",
        sub: "Cared for Amma before · 4.9 ★ · LKR 1,200/hr",
        free: "Free all days",
        ok: true,
        rate: 3960,
        tag: "Best match",
      },
      {
        av: "/images/priya.png",
        name: "Priya Senanayake",
        first: "Priya",
        sub: "4.6 ★ · LKR 950/hr",
        free: "Free Tue & Wed",
        ok: true,
        rate: 3135,
        tag: "",
      },
      {
        av: "/images/shanthi.png",
        name: "Shanthi Rajapaksha",
        first: "Shanthi",
        sub: "4.8 ★ · LKR 1,000/hr",
        free: "Busy these days",
        ok: false,
        rate: 3300,
        tag: "",
      },
    ];
    const people = P.map((p, i) => {
      const on = this.state.cg === i;
      return {
        ...p,
        checked: on ? "true" : "false",
        bg: on ? "#F6F6F6" : "#FFFFFF",
        ring: on ? "2px solid #000000" : "2px solid #A6A6A6",
        dot: on ? "#000000" : "transparent",
        sep: i === 0 ? "none" : "1px solid #E2E2E2",
        op: p.ok ? "1" : "0.45",
        freeBg: p.ok ? "#E6F4EC" : "#EEEEEE",
        freeFg: p.ok ? "#05663A" : "#545454",
        showTag: !!p.tag,
        pick: () => {
          if (p.ok) this.setState({ cg: i });
        },
      };
    });
    const p = P[this.state.cg];
    const n = this.state.sel.length;
    const diff = 3960 - p.rate;
    return {
      weeks: dayGrid("sel", [
        [19, 20, 21, 22, 23, 24],
        [26, 27, 28, 29, 30, 31],
      ]),
      people,
      price:
        diff === 0 ? "Same price · " + fmt(p.rate) + " a visit" : fmt(p.rate) + " a visit · " + fmt(diff) + " less",
      cta: n ? "Ask " + p.first + " to cover " + n + " day" + (n > 1 ? "s" : "") : "Pick days",
      ask: (e) => {
        if (!n) {
          e.preventDefault();
          return toast("Pick the days she's off");
        }
        mutate((d) => {
          d.weekly.cover = this.state.sel.map((x) => `2026-10-${x}`);
          d.weekly.coverBy = p.first.toLowerCase();
        });
      },
    };
  }
}

export default function CoverCaregiverScreen() {
  const v = useLogic(Logic, { persist: "coverCaregiver" });
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
              <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>Cover for Nirmala</span>
              <span style={{ fontSize: "14px", color: "#545454" }}>
                {"Pick the days she's off. She stays Amma's main caregiver."}
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
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600" }}>Who covers</span>
            <div
              role="radiogroup"
              style={{
                border: "1px solid #E2E2E2",
                borderRadius: "14px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {v.people.map((p: any, i3: number) => (
                <Fragment key={i3}>
                  <button
                    role="radio"
                    aria-checked={p.checked}
                    onClick={p.pick}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "8px 12px",
                      padding: "10px 14px",
                      border: "none",
                      borderTop: p.sep,
                      background: p.bg,
                      color: "#000000",
                      textAlign: "left",
                      fontFamily: "var(--font-figtree), sans-serif",
                      opacity: p.op,
                    }}
                  >
                    <img
                      src={p.av}
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        flexShrink: "0",
                      }}
                    />
                    <span
                      style={{ flex: "1 1 140px", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>{p.name}</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>{p.sub}</span>
                    </span>
                    {p.showTag ? (
                      <>
                        <span
                          style={{
                            height: "22px",
                            padding: "0 8px",
                            borderRadius: "11px",
                            background: "#EEEEEE",
                            fontSize: "11px",
                            fontWeight: "700",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {p.tag}
                        </span>
                      </>
                    ) : null}
                    <span
                      style={{
                        height: "22px",
                        padding: "0 8px",
                        borderRadius: "11px",
                        background: p.freeBg,
                        color: p.freeFg,
                        fontSize: "11px",
                        fontWeight: "700",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {p.free}
                    </span>
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "9px",
                        boxSizing: "border-box",
                        border: p.ring,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                      }}
                    >
                      <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: p.dot }}></span>
                    </span>
                  </button>
                </Fragment>
              ))}
            </div>
            <span style={{ fontSize: "12px", color: "#545454" }}>
              {v.price}
              {" · Amma's care plan is shared with them"}
            </span>
          </div>
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
              Cancel
            </Link>
            <Link
              href="/cover-requested"
              onClick={v.ask}
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
          </div>
        </div>
      </div>
    </div>
  );
}
