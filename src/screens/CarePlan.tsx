"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { day: 3 };
  }
  renderVals() {
    const D = [
      ["Mon", 12],
      ["Tue", 13],
      ["Wed", 14],
      ["Thu", 15],
      ["Fri", 16],
      ["Sat", 17],
    ];
    const ONE = {
      3: [["11:00", "Let the electrician in", "Today · from Dilani 6:05", "Seen 6:12"]],
      5: [["10:00", "Aunty Rani visits · tea for two", "Use the good cups", "Planned"]],
      1: [],
      0: [],
      2: [],
      4: [["9:30", "Physio comes · stay with Amma", "Added by Ruwan", "Planned"]],
    };
    const days = D.map((d, i) => {
      const on = this.state.day === i;
      const today = i === 3;
      const extra = ONE[i] || [];
      return {
        dow: d[0],
        num: d[1],
        pressed: on ? "true" : "false",
        border: on ? "2px solid #000000" : "1px solid #E2E2E2",
        headBg: today ? "#000000" : "#F6F6F6",
        headFg: today ? "#FFFFFF" : "#000000",
        tag: today ? "Today" : "",
        extras: extra.map((e) => ({ time: e[0], title: e[1] })),
        hasExtra: extra.length > 0,
        done: i < 3 ? "Done · 7 of 7" : i === 3 ? "3 of 8 done" : "6 tasks",
        doneFg: i < 3 ? "#05663A" : "#545454",
        pick: () => this.setState({ day: i }),
      };
    });
    const sel = this.state.day;
    const one = (ONE[sel] || []).map((e, i) => ({
      time: e[0],
      title: e[1],
      note: e[2],
      tag: e[3],
      tagBg: e[3].startsWith("Seen") ? "#E6F4EC" : "#EEEEEE",
      tagFg: e[3].startsWith("Seen") ? "#05663A" : "#333333",
      sep: i === 0 ? "none" : "1px solid #E2E2E2",
    }));
    return {
      days,
      one,
      hasOne: one.length > 0,
      noOne: one.length === 0,
      selTitle: D[sel][0] + " " + D[sel][1] + " Oct" + (sel === 3 ? " · today" : ""),
    };
  }
}

export default function CarePlanScreen() {
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
      <AppHeader active="/care-plan" />
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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img
              src="/images/amma.png"
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
                {"Amma's care plan"}
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>Nirmala · Mon–Sat 9:00–12:00 · 12 Oct – 7 Nov</span>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                height: "40px",
                borderRadius: "20px",
                background: "#EEEEEE",
                padding: "0 6px",
              }}
            >
              <Link
                href="/care-plan"
                aria-label="Previous week"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "15px",
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
                  <path d="M15 18l-6-6 6-6"></path>
                </svg>
              </Link>
              <span style={{ fontSize: "14px", fontWeight: "700", padding: "0 6px" }}>12 – 17 Oct</span>
              <Link
                href="/care-plan"
                aria-label="Next week"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "15px",
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
                  <path d="M9 6l6 6-6 6"></path>
                </svg>
              </Link>
            </span>
            <Link
              href="/routine"
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
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 12a8 8 0 0 1 14-5.3L20 9"></path>
                <path d="M20 4v5h-5"></path>
                <path d="M20 12a8 8 0 0 1-14 5.3L4 15"></path>
                <path d="M4 20v-5h5"></path>
              </svg>
              {"Amma's routine"}
            </Link>
            <Link
              href="/add-task"
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
              Add task
            </Link>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <section
            aria-label="Week"
            style={{ flex: "999 1 640px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, minmax(104px, 1fr))",
                gap: "8px",
                overflowX: "auto",
                paddingBottom: "2px",
              }}
            >
              {v.days.map((d: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    aria-pressed={d.pressed}
                    onClick={d.pick}
                    style={{
                      border: d.border,
                      borderRadius: "14px",
                      background: "#FFFFFF",
                      padding: "0",
                      textAlign: "left",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      minHeight: "260px",
                      fontFamily: "var(--font-figtree), sans-serif",
                      color: "#000000",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        padding: "10px 12px",
                        background: d.headBg,
                        color: d.headFg,
                      }}
                    >
                      <span style={{ fontSize: "13px", fontWeight: "600" }}>
                        {d.dow} <b style={{ fontSize: "18px", fontWeight: "800" }}>{d.num}</b>
                      </span>
                      <span style={{ fontSize: "11px", fontWeight: "700" }}>{d.tag}</span>
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "10px" }}>
                      {d.hasExtra ? (
                        <>
                          {d.extras.map((e: any, i2: number) => (
                            <Fragment key={i2}>
                              <span
                                style={{
                                  borderRadius: "10px",
                                  background: "#EAF0FD",
                                  padding: "8px",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "2px",
                                }}
                              >
                                <span style={{ fontSize: "11px", fontWeight: "700", color: "#1A4FB5" }}>
                                  {e.time}
                                  {" · this day"}
                                </span>
                                <span style={{ fontSize: "12px", fontWeight: "700", lineHeight: "1.3" }}>
                                  {e.title}
                                </span>
                              </span>
                            </Fragment>
                          ))}
                        </>
                      ) : null}
                      <span
                        style={{
                          borderRadius: "10px",
                          background: "#F6F6F6",
                          padding: "8px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "2px",
                        }}
                      >
                        <span style={{ fontSize: "11px", fontWeight: "700", color: "#545454" }}>
                          10:30 · this booking
                        </span>
                        <span style={{ fontSize: "12px", fontWeight: "700" }}>Knee exercises</span>
                      </span>
                      <span
                        style={{
                          borderRadius: "10px",
                          border: "1px dashed #CBCBCB",
                          padding: "8px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "2px",
                        }}
                      >
                        <span style={{ fontSize: "11px", fontWeight: "700", color: "#545454" }}>Every visit</span>
                        <span style={{ fontSize: "12px", fontWeight: "600" }}>Walk · tea · medicine · lunch</span>
                      </span>
                    </span>
                    <span
                      style={{
                        marginTop: "auto",
                        padding: "8px 12px",
                        borderTop: "1px solid #E2E2E2",
                        fontSize: "12px",
                        fontWeight: "700",
                        color: d.doneFg,
                      }}
                    >
                      {d.done}
                    </span>
                  </button>
                </Fragment>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "12px", color: "#545454" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#EAF0FD" }}></span>
                Only that day
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "3px",
                    background: "#F6F6F6",
                    border: "1px solid #E2E2E2",
                  }}
                ></span>
                Whole booking
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{ width: "12px", height: "12px", borderRadius: "3px", border: "1px dashed #A6A6A6" }}
                ></span>
                Every visit (routine)
              </span>
            </div>
          </section>
          <aside
            style={{
              flex: "1 1 300px",
              maxWidth: "360px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <div
                style={{ padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <span style={{ fontSize: "16px", fontWeight: "800" }}>{v.selTitle}</span>
                <Link
                  href="/add-task"
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
                  Add
                </Link>
              </div>
              <div style={{ height: "1px", background: "#E2E2E2" }}></div>
              <div
                style={{
                  padding: "8px 16px",
                  background: "#F6F6F6",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
                </svg>
                Only this day
              </div>
              {v.hasOne ? (
                <>
                  {v.one.map((t: any, i3: number) => (
                    <Fragment key={i3}>
                      <div style={{ display: "flex", gap: "10px", padding: "10px 16px", borderTop: t.sep }}>
                        <span style={{ width: "40px", fontSize: "12px", fontWeight: "700", paddingTop: "2px" }}>
                          {t.time}
                        </span>
                        <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "14px", fontWeight: "700" }}>{t.title}</span>
                          <span style={{ fontSize: "12px", color: "#545454" }}>{t.note}</span>
                        </span>
                        <span
                          style={{
                            height: "22px",
                            padding: "0 8px",
                            borderRadius: "11px",
                            background: t.tagBg,
                            color: t.tagFg,
                            fontSize: "11px",
                            fontWeight: "700",
                            display: "flex",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {t.tag}
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </>
              ) : null}
              {v.noOne ? (
                <>
                  <Link
                    href="/add-task"
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#545454",
                    }}
                  >
                    Nothing extra · add a task for this day
                  </Link>
                </>
              ) : null}
              <div
                style={{
                  padding: "8px 16px",
                  background: "#F6F6F6",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  borderTop: "1px solid #E2E2E2",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 12a8 8 0 0 1 14-5.3L20 9"></path>
                  <path d="M20 4v5h-5"></path>
                  <path d="M20 12a8 8 0 0 1-14 5.3L4 15"></path>
                  <path d="M4 20v-5h5"></path>
                </svg>
                Whole booking
              </div>
              <div style={{ display: "flex", gap: "10px", padding: "10px 16px" }}>
                <span style={{ width: "40px", fontSize: "12px", fontWeight: "700" }}>10:30</span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Knee exercises from physio</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Until 7 Nov · sheet on the fridge</span>
                </span>
              </div>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div>
              <div style={{ display: "flex", gap: "10px", padding: "10px 16px" }}>
                <span style={{ width: "40px", fontSize: "12px", fontWeight: "700" }}>Any</span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Check knee bandage is dry</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Call Dilani if wet or red</span>
                </span>
              </div>
              <div
                style={{
                  padding: "8px 16px",
                  background: "#F6F6F6",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  borderTop: "1px solid #E2E2E2",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 12a8 8 0 0 1 14-5.3L20 9"></path>
                  <path d="M20 4v5h-5"></path>
                  <path d="M20 12a8 8 0 0 1-14 5.3L4 15"></path>
                  <path d="M4 20v-5h5"></path>
                </svg>
                Every visit · routine
              </div>
              <Link
                href="/routine"
                style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px" }}
              >
                <span style={{ flex: "1", fontSize: "14px", fontWeight: "600" }}>
                  Walk 9:00 · tea 9:30 · medicine 10:00 · lunch 11:30
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
            </div>
            <div
              style={{
                borderRadius: "14px",
                background: "#EAF0FD",
                color: "#1A4FB5",
                padding: "12px 14px",
                fontSize: "13px",
                fontWeight: "600",
                lineHeight: "1.45",
              }}
            >
              {"Changes reach Nirmala instantly. You see a "}
              <b>Seen</b>
              {" tick when she reads them."}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
