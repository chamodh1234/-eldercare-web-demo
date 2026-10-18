"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { skip: [] };
  }
  renderVals() {
    const V = [
      ["Thu 15", "Today · live", "live"],
      ["Fri 16", "9:00 – 12:00 · physio 9:30", "up"],
      ["Sat 17", "9:00 – 12:00 · Aunty Rani visits", "up"],
      ["Mon 19", "9:00 – 12:00", "up"],
      ["Tue 20", "Mala covers · Nirmala off", "cover"],
      ["Wed 21", "Mala covers", "cover"],
      ["Thu 22", "Mala covers", "cover"],
      ["Fri 23", "9:00 – 12:00", "up"],
      ["Sat 24", "9:00 – 12:00", "up"],
    ];
    const visits = V.map((v, i) => {
      const sk = this.state.skip.includes(i);
      const k = v[2];
      return {
        day: v[0],
        note: sk ? "Skipped · not charged" : v[1],
        op: sk ? "0.45" : "1",
        deco: sk ? "line-through" : "none",
        sep: i === 0 ? "none" : "1px solid #E2E2E2",
        tag: k === "live" ? "Live" : k === "cover" ? "Stand-in" : sk ? "Skipped" : "Booked",
        tagBg: k === "live" ? "#E6F4EC" : k === "cover" ? "#EAF0FD" : "#EEEEEE",
        tagFg: k === "live" ? "#05663A" : k === "cover" ? "#1A4FB5" : "#333333",
        canSkip: k !== "live",
        label: sk ? "Undo" : "Skip",
        flip: () => this.setState({ skip: sk ? this.state.skip.filter((x) => x !== i) : [...this.state.skip, i] }),
      };
    });
    const nextWeek = [3, 4, 5, 6, 7, 8].filter((i) => !this.state.skip.includes(i)).length;
    return { visits, charge: "LKR " + (nextWeek * 3960).toLocaleString("en-US"), nextWeek };
  }
}

export default function WeeklyCareScreen() {
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
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
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
          <span style={{ flex: "1 1 300px" }}>
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
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <Link
              href="/book"
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
                <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                <path d="M4 10h16M9 3v4M15 3v4"></path>
              </svg>
              Change days
            </Link>
            <Link
              href="/care-plan"
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
                <path d="M6 3h8l4 4v14H6z"></path>
                <path d="M14 3v4h4M9 12h6M9 16h6"></path>
              </svg>
              Care plan
            </Link>
            <Link
              href="/pause-care"
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
                <rect x="6" y="5" width="4" height="14" rx="1"></rect>
                <rect x="14" y="5" width="4" height="14" rx="1"></rect>
              </svg>
              Pause
            </Link>
            <Link
              href="/cover-caregiver"
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
                <circle cx="9" cy="8" r="3.5"></circle>
                <path d="M2.5 20c1-3.5 3.5-5 6.5-5s5.5 1.5 6.5 5"></path>
                <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 15c2 .7 3.2 2.3 3.5 5"></path>
              </svg>
              Cover days
            </Link>
            <Link
              href="/end-care"
              style={{
                height: "40px",
                padding: "0 18px",
                borderRadius: "20px",
                background: "#FFFFFF",
                border: "1px solid #E2E2E2",
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
              End weekly care
            </Link>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #E2E2E2",
            borderRadius: "16px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          }}
        >
          <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "20px", fontWeight: "800" }}>3 of 24</span>
            <span style={{ fontSize: "12px", color: "#545454" }}>Visits done</span>
          </div>
          <div
            style={{
              padding: "14px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              borderLeft: "1px solid #E2E2E2",
            }}
          >
            <span style={{ fontSize: "20px", fontWeight: "800" }}>3</span>
            <span style={{ fontSize: "12px", color: "#545454" }}>Days covered by Mala</span>
          </div>
          <div
            style={{
              padding: "14px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              borderLeft: "1px solid #E2E2E2",
            }}
          >
            <span style={{ fontSize: "20px", fontWeight: "800" }}>LKR 11,880</span>
            <span style={{ fontSize: "12px", color: "#545454" }}>Paid so far</span>
          </div>
          <div
            style={{
              padding: "14px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              borderLeft: "1px solid #E2E2E2",
            }}
          >
            <span style={{ fontSize: "20px", fontWeight: "800" }}>4.9 ★</span>
            <span style={{ fontSize: "12px", color: "#545454" }}>Your average rating</span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <section
            style={{ flex: "999 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Next 2 weeks</h2>
              <span style={{ fontSize: "12px", color: "#545454" }}>Skip by 9 AM the day before · no charge</span>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              {v.visits.map((v: any, i1: number) => (
                <Fragment key={i1}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "10px 16px",
                      borderTop: v.sep,
                    }}
                  >
                    <span
                      style={{
                        width: "64px",
                        fontSize: "14px",
                        fontWeight: "800",
                        opacity: v.op,
                        textDecoration: v.deco,
                      }}
                    >
                      {v.day}
                    </span>
                    <span style={{ flex: "1", fontSize: "13px", color: "#545454" }}>{v.note}</span>
                    <span
                      style={{
                        height: "22px",
                        padding: "0 8px",
                        borderRadius: "11px",
                        background: v.tagBg,
                        color: v.tagFg,
                        fontSize: "11px",
                        fontWeight: "700",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {v.tag}
                    </span>
                    {v.canSkip ? (
                      <>
                        <button
                          onClick={v.flip}
                          style={{
                            height: "28px",
                            padding: "0 12px",
                            borderRadius: "14px",
                            border: "none",
                            background: "#EEEEEE",
                            color: "#000000",
                            font: "600 12px var(--font-figtree), sans-serif",
                          }}
                        >
                          {v.label}
                        </button>
                      </>
                    ) : null}
                  </div>
                </Fragment>
              ))}
            </div>
          </section>
          <section style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Billing · held weekly</h2>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 0.8fr 1fr 0.9fr",
                  gap: "10px",
                  padding: "10px 16px",
                  background: "#F6F6F6",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                <span>Week</span>
                <span>Visits</span>
                <span>Amount</span>
                <span>Status</span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 0.8fr 1fr 0.9fr",
                  gap: "10px",
                  alignItems: "center",
                  padding: "12px 16px",
                  borderTop: "1px solid #E2E2E2",
                  fontSize: "13px",
                }}
              >
                <span style={{ fontWeight: "700" }}>12 – 17 Oct</span>
                <span>6</span>
                <span style={{ fontWeight: "700" }}>LKR 23,760</span>
                <span>
                  <span
                    style={{
                      height: "24px",
                      padding: "0 10px",
                      borderRadius: "12px",
                      background: "#EAF0FD",
                      color: "#1A4FB5",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Held
                  </span>
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 0.8fr 1fr 0.9fr",
                  gap: "10px",
                  alignItems: "center",
                  padding: "12px 16px",
                  borderTop: "1px solid #E2E2E2",
                  fontSize: "13px",
                }}
              >
                <span style={{ fontWeight: "700" }}>19 – 24 Oct</span>
                <span>{v.nextWeek}</span>
                <span style={{ fontWeight: "700" }}>{v.charge}</span>
                <span>
                  <span
                    style={{
                      height: "24px",
                      padding: "0 10px",
                      borderRadius: "12px",
                      background: "#EEEEEE",
                      color: "#333333",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Mon 19
                  </span>
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 0.8fr 1fr 0.9fr",
                  gap: "10px",
                  alignItems: "center",
                  padding: "12px 16px",
                  borderTop: "1px solid #E2E2E2",
                  fontSize: "13px",
                }}
              >
                <span style={{ fontWeight: "700" }}>26 – 31 Oct</span>
                <span>6</span>
                <span style={{ fontWeight: "700" }}>LKR 23,760</span>
                <span>
                  <span
                    style={{
                      height: "24px",
                      padding: "0 10px",
                      borderRadius: "12px",
                      background: "#EEEEEE",
                      color: "#333333",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Upcoming
                  </span>
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 0.8fr 1fr 0.9fr",
                  gap: "10px",
                  alignItems: "center",
                  padding: "12px 16px",
                  borderTop: "1px solid #E2E2E2",
                  fontSize: "13px",
                }}
              >
                <span style={{ fontWeight: "700" }}>2 – 7 Nov</span>
                <span>6</span>
                <span style={{ fontWeight: "700" }}>LKR 23,760</span>
                <span>
                  <span
                    style={{
                      height: "24px",
                      padding: "0 10px",
                      borderRadius: "12px",
                      background: "#EEEEEE",
                      color: "#333333",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Upcoming
                  </span>
                </span>
              </div>
            </div>
            <span style={{ fontSize: "12px", color: "#545454", lineHeight: "1.5" }}>
              Each week is held on Monday and released to Nirmala visit by visit, after you approve.
            </span>
          </section>
        </div>
      </main>
    </div>
  );
}
