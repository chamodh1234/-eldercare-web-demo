"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { openDispute } from "@/lib/actions";
import { lkr } from "@/lib/format";
import { reportVisit, visitView } from "@/lib/selectors";
import { useDemo } from "@/lib/store";

const REASONS = [
  ["Arrived late", "Check-in after the booked time"],
  ["Left early", "Checked out before the booked time"],
  ["Tasks not done", "Some tasks were skipped"],
  ["Times look wrong", "Check-in or out doesn't match"],
  ["Charged the wrong amount", ""],
];

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { r: 2, a: 1, note: "Lunch wasn't ready when I called at 12:15 and the sheets weren't changed." };
  }
  renderVals() {
    const { demo } = this.props;
    const { v: visit, cg, day, amount } = visitView(reportVisit(demo));
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
    const A: [string, string, number][] = [
      [lkr(visit.rate / 2), "Part refund", visit.rate / 2],
      [lkr(visit.rate), "1 hour back", visit.rate],
      ["Free re-visit", `${cg.first} comes again`, 0],
    ];
    const asks = A.map((a, i) => {
      const on = this.state.a === i;
      return {
        amt: a[0],
        label: a[1],
        pressed: on ? "true" : "false",
        bg: on ? "#000000" : "#EEEEEE",
        fg: on ? "#FFFFFF" : "#000000",
        pick: () => this.setState({ a: i }),
      };
    });
    return {
      reasons: radio("r", REASONS),
      asks,
      sub: `${day} · ${cg.name} · ${amount} stays on hold until this is sorted`,
      sendLabel: `Send to ${cg.first}`,
      note: this.state.note,
      setNote: (e) => this.setState({ note: e.target.value }),
      send: () => openDispute(visit.id, REASONS[this.state.r][0], A[this.state.a][2], this.state.note),
    };
  }
}

export default function DisputeScreen() {
  const demo = useDemo();
  const v = useLogic(Logic, { props: { demo } });
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
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
            <Link
              href="/visit-report"
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
              Visit report
            </Link>
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
                Problem with the visit
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>{v.sub}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
              <div style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600" }}>What went wrong?</span>
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
                  {v.reasons.map((r: any, i1: number) => (
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
              </div>
              <div style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600" }}>From the visit log</span>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 16px",
                      fontSize: "14px",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>Walk in the garden</span>
                    <span
                      style={{
                        height: "24px",
                        padding: "0 10px",
                        borderRadius: "12px",
                        background: "#E6F4EC",
                        color: "#05663A",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12px",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Done
                    </span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 16px",
                      fontSize: "14px",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>Tea, no sugar</span>
                    <span
                      style={{
                        height: "24px",
                        padding: "0 10px",
                        borderRadius: "12px",
                        background: "#E6F4EC",
                        color: "#05663A",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12px",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Done
                    </span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 16px",
                      fontSize: "14px",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>Medicine reminder</span>
                    <span
                      style={{
                        height: "24px",
                        padding: "0 10px",
                        borderRadius: "12px",
                        background: "#E6F4EC",
                        color: "#05663A",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12px",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Done
                    </span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 16px",
                      fontSize: "14px",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>Help with lunch</span>
                    <span
                      style={{
                        height: "24px",
                        padding: "0 10px",
                        borderRadius: "12px",
                        background: "#FFEFED",
                        color: "#C11500",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12px",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Not done
                    </span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 16px",
                      fontSize: "14px",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>{"Tidy room & bedsheets"}</span>
                    <span
                      style={{
                        height: "24px",
                        padding: "0 10px",
                        borderRadius: "12px",
                        background: "#FFEFED",
                        color: "#C11500",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12px",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Not done
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>What would make it right?</span>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "8px",
                  maxWidth: "520px",
                }}
              >
                {v.asks.map((a: any, i2: number) => (
                  <Fragment key={i2}>
                    <button
                      aria-pressed={a.pressed}
                      onClick={a.pick}
                      style={{
                        height: "60px",
                        borderRadius: "14px",
                        border: "none",
                        background: a.bg,
                        color: a.fg,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2px",
                        fontFamily: "var(--font-figtree), sans-serif",
                      }}
                    >
                      <span style={{ fontSize: "15px", fontWeight: "800" }}>{a.amt}</span>
                      <span style={{ fontSize: "12px", fontWeight: "600", opacity: ".8" }}>{a.label}</span>
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Anything else</span>
              <textarea
                rows={3}
                style={{
                  border: "1px solid #E2E2E2",
                  outline: "none",
                  resize: "none",
                  borderRadius: "12px",
                  background: "#FFFFFF",
                  color: "#000000",
                  padding: "10px 12px",
                  font: "500 14px var(--font-figtree), sans-serif",
                  lineHeight: "1.45",
                }}
                value={v.note}
                onChange={v.setNote}
              />
            </label>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Link
                href="/dispute-open"
                onClick={v.send}
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
                {v.sendLabel}
              </Link>
              <span style={{ fontSize: "12px", color: "#545454" }}>She has 48 hrs to reply · then Gloocan decides</span>
            </div>
          </div>
          <aside
            style={{
              flex: "1 1 300px",
              maxWidth: "380px",
              minWidth: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "20px",
              padding: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Not a payment problem?</h2>
            <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#333333" }}>
              If anyone was hurt, unsafe or treated badly, make a safety report instead. A person reviews it within 24
              hours.
            </span>
            <Link
              href="/report-caregiver"
              style={{
                height: "40px",
                padding: "0 18px",
                borderRadius: "20px",
                background: "#FFEFED",
                color: "#C11500",
                fontSize: "14px",
                fontWeight: "700",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxSizing: "border-box",
                whiteSpace: "nowrap",
              }}
            >
              Make a safety report
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
