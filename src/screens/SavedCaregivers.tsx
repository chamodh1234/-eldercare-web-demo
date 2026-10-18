"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { saved: ["n", "s"] };
  }
  renderVals() {
    const P = [
      {
        id: "n",
        av: "/images/nirmala.png",
        name: "Nirmala Perera",
        sub: "4.9 ★ · 18 visits with Amma · LKR 1,200/hr",
        free: "Free Sat 9:00",
        ok: true,
      },
      {
        id: "s",
        av: "/images/shanthi.png",
        name: "Shanthi Rajapaksha",
        sub: "4.8 ★ · 3 visits with Amma · LKR 1,000/hr",
        free: "Busy this week",
        ok: false,
      },
      {
        id: "m",
        av: "/images/mala.png",
        name: "Mala Wickrama",
        sub: "4.9 ★ · covered 20–22 Oct · LKR 1,200/hr",
        free: "Free Mon & Tue",
        ok: true,
      },
      {
        id: "p",
        av: "/images/priya.png",
        name: "Priya Senanayake",
        sub: "4.6 ★ · 1 visit in Sep · LKR 950/hr",
        free: "Free tomorrow",
        ok: true,
      },
    ];
    const card = (p) => {
      const on = this.state.saved.includes(p.id);
      return {
        ...p,
        fill: on ? "#000000" : "transparent",
        stroke: on ? "#000000" : "#A6A6A6",
        label: on ? "Remove from saved" : "Save",
        fBg: p.ok ? "#E6F4EC" : "#EEEEEE",
        fFg: p.ok ? "#05663A" : "#545454",
        flip: () =>
          this.setState({ saved: on ? this.state.saved.filter((x) => x !== p.id) : [...this.state.saved, p.id] }),
      };
    };
    const saved = P.filter((p) => this.state.saved.includes(p.id)).map(card);
    const past = P.filter((p) => !this.state.saved.includes(p.id)).map(card);
    return { saved, past, n: saved.length, hasPast: past.length > 0 };
  }
}

export default function SavedCaregiversScreen() {
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
          <AccountNav active="/saved-caregivers" />
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
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
                Saved caregivers
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                Saved caregivers see your requests and jobs first
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                {"Saved · "}
                {v.n}
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
              {v.saved.map((p: any, i1: number) => (
                <Fragment key={i1}>
                  <div
                    style={{
                      border: "1px solid #E2E2E2",
                      borderRadius: "16px",
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <img
                        src={p.av}
                        alt=""
                        style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover" }}
                      />
                      <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                        <span style={{ fontSize: "15px", fontWeight: "800" }}>{p.name}</span>
                        <span style={{ fontSize: "12px", color: "#545454", lineHeight: "1.4" }}>{p.sub}</span>
                      </span>
                      <button
                        aria-label={p.label}
                        onClick={p.flip}
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "16px",
                          border: "none",
                          background: "#EEEEEE",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "0",
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={p.fill}
                          stroke={p.stroke}
                          strokeWidth="2"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10z"></path>
                        </svg>
                      </button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                      <span
                        style={{
                          height: "24px",
                          padding: "0 10px",
                          borderRadius: "12px",
                          background: p.fBg,
                          color: p.fFg,
                          fontSize: "12px",
                          fontWeight: "700",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {p.free}
                      </span>
                      <span style={{ display: "flex", gap: "6px" }}>
                        <Link
                          href="/messages"
                          style={{
                            height: "32px",
                            padding: "0 14px",
                            borderRadius: "16px",
                            background: "#EEEEEE",
                            color: "#000000",
                            fontSize: "13px",
                            fontWeight: "600",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            boxSizing: "border-box",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Message
                        </Link>
                        <Link
                          href="/rebook"
                          style={{
                            height: "32px",
                            padding: "0 14px",
                            borderRadius: "16px",
                            background: "#000000",
                            color: "#FFFFFF",
                            fontSize: "13px",
                            fontWeight: "700",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          Rebook
                        </Link>
                      </span>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
            {v.hasPast ? (
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#545454",
                    }}
                  >
                    Cared for Amma before
                  </span>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                      gap: "12px",
                    }}
                  >
                    {v.past.map((p: any, i2: number) => (
                      <Fragment key={i2}>
                        <div
                          style={{
                            border: "1px solid #E2E2E2",
                            borderRadius: "16px",
                            padding: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                            <img
                              src={p.av}
                              alt=""
                              style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover" }}
                            />
                            <span
                              style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}
                            >
                              <span style={{ fontSize: "15px", fontWeight: "800" }}>{p.name}</span>
                              <span style={{ fontSize: "12px", color: "#545454", lineHeight: "1.4" }}>{p.sub}</span>
                            </span>
                            <button
                              aria-label={p.label}
                              onClick={p.flip}
                              style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "16px",
                                border: "none",
                                background: "#EEEEEE",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "0",
                              }}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill={p.fill}
                                stroke={p.stroke}
                                strokeWidth="2"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10z"></path>
                              </svg>
                            </button>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "8px",
                            }}
                          >
                            <span
                              style={{
                                height: "24px",
                                padding: "0 10px",
                                borderRadius: "12px",
                                background: p.fBg,
                                color: p.fFg,
                                fontSize: "12px",
                                fontWeight: "700",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              {p.free}
                            </span>
                            <span style={{ display: "flex", gap: "6px" }}>
                              <Link
                                href="/messages"
                                style={{
                                  height: "32px",
                                  padding: "0 14px",
                                  borderRadius: "16px",
                                  background: "#EEEEEE",
                                  color: "#000000",
                                  fontSize: "13px",
                                  fontWeight: "600",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: "8px",
                                  boxSizing: "border-box",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Message
                              </Link>
                              <Link
                                href="/rebook"
                                style={{
                                  height: "32px",
                                  padding: "0 14px",
                                  borderRadius: "16px",
                                  background: "#000000",
                                  color: "#FFFFFF",
                                  fontSize: "13px",
                                  fontWeight: "700",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                Rebook
                              </Link>
                            </span>
                          </div>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
