"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { openChat } from "@/lib/actions";
import { addDays, dayLabel, lkr, weekday } from "@/lib/format";
import { selectedVisit, visitView } from "@/lib/selectors";
import { mutate, useDemo } from "@/lib/store";

const STAGE = { requested: 0, confirmed: 1, covering: 1, live: 1, toApprove: 2, paid: 2, cancelled: 0 };

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { st: null };
  }
  renderVals() {
    const { demo } = this.props;
    const { v: visit, cg, day, time, amount } = visitView(selectedVisit(demo));
    const n = cg.first;
    const seg = (key, labels, current) =>
      labels.map((l, i) => {
        const on = current === i;
        return {
          label: l,
          sel: on ? "true" : "false",
          bg: on ? "#000000" : "transparent",
          fg: on ? "#FFFFFF" : "#000000",
          weight: on ? "700" : "600",
          pick: () => this.setState({ [key]: i }),
        };
      });
    const s = this.state.st ?? STAGE[visit.status];
    const day2 = dayLabel(addDays(visit.date, 1));
    const S = [
      ["Request sent", `${visit.requestedAt} · ${lkr(visit.held ?? visit.amount)} held on ${visit.card}`],
      [`${n} accepts`, s === 0 ? "Usually replies within 2 hrs" : "Accepted · she'll be there"],
      ["Visit", `${day}, ${time} · Colombo 05`],
      [
        `You approve · ${n} is paid`,
        s === 2 ? `Auto-approves ${day2}, ${visit.end} if you do nothing` : `After ${n} checks out`,
      ],
    ];
    const steps = S.map((x, i) => {
      const st = i <= s ? "done" : i === s + 1 ? "now" : "todo";
      return {
        t: x[0],
        sub: x[1],
        n: i + 1,
        done: st === "done",
        now: st === "now",
        todo: st === "todo",
        sep: i ? "1px solid #E2E2E2" : "none",
        fg: st === "todo" ? "#545454" : "#000000",
      };
    });
    const H = [
      [
        `Waiting for ${n}`,
        "She usually replies within 2 hours. Your money is only held, not taken.",
        "Waiting",
        "#EAF0FD",
        "#1A4FB5",
      ],
      [
        `${n} accepted`,
        `See you ${weekday(visit.date)}. You can add tasks for the day until the visit starts.`,
        "Accepted",
        "#E6F4EC",
        "#05663A",
      ],
      [
        "Visit done · review it",
        `${n} checked out at ${visit.end}. Read the report, then approve to pay her.`,
        "To approve",
        "#EEEEEE",
        "#000000",
      ],
    ];
    const h = H[s];
    return {
      tabs: seg("st", ["Waiting", "Accepted", "Visit done"], s),
      steps,
      head: h[0],
      sub: h[1],
      tag: h[2],
      tagBg: h[3],
      tagFg: h[4],
      s0: s === 0,
      s1: s === 1,
      s2: s === 2,
      notDone: s < 2,
      visit,
      cg,
      day,
      time,
      amount: lkr(visit.held ?? visit.amount),
      help: visit.help,
      tasks: visit.note.trim() ? "Routine + 1 extra" : "Routine",
      ref: `Booking ${visit.ref}`,
      message: () => openChat(cg.id),
      addTasks: () =>
        mutate((d) => {
          d.ui.addTask = { w: 2, date: visit.date };
        }),
      addLabel: `Add tasks for ${weekday(visit.date)}`,
      messageLabel: `Message ${n}`,
      cgSub: `${cg.rating.toFixed(1)} ★ · ${cg.visitsWithAmma} visits with Amma`,
      paidAfter: `Paid to ${n} after you approve`,
      fallback: `If ${n} can't take it, the hold is released straight away and we show you similar caregivers free on ${weekday(visit.date)}.`,
      amountLine: amount,
    };
  }
}

export default function BookingStatusScreen() {
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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#545454",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {v.ref}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "12px", color: "#545454" }}>Preview</span>
                <div
                  role="tablist"
                  style={{
                    borderRadius: "20px",
                    background: "#EEEEEE",
                    boxSizing: "border-box",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "4px",
                    minWidth: "300px",
                    height: "32px",
                    padding: "3px",
                  }}
                >
                  {v.tabs.map((t: any, i1: number) => (
                    <Fragment key={i1}>
                      <button
                        role="tab"
                        aria-selected={t.sel}
                        onClick={t.pick}
                        style={{
                          border: "none",
                          borderRadius: "16px",
                          background: t.bg,
                          color: t.fg,
                          font: `${t.weight} 13px var(--font-figtree), sans-serif`,
                          padding: "0 10px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t.label}
                      </button>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span
                style={{
                  alignSelf: "flex-start",
                  height: "24px",
                  padding: "0 10px",
                  borderRadius: "12px",
                  background: v.tagBg,
                  color: v.tagFg,
                  fontSize: "12px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {v.tag}
              </span>
              <h1
                style={{
                  margin: "0",
                  fontSize: "30px",
                  lineHeight: "1.1",
                  fontWeight: "800",
                  letterSpacing: "-0.025em",
                }}
              >
                {v.head}
              </h1>
              <span style={{ fontSize: "15px", color: "#545454", maxWidth: "560px", lineHeight: "1.5" }}>{v.sub}</span>
            </div>
            <ol
              style={{
                listStyle: "none",
                margin: "0",
                padding: "0",
                border: "1px solid #E2E2E2",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {v.steps.map((x: any, i2: number) => (
                <Fragment key={i2}>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      borderTop: x.sep,
                    }}
                  >
                    {x.done ? (
                      <>
                        <span
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "12px",
                            background: "#05944F",
                            color: "#FFFFFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: "0",
                          }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12l5 5 9-10"></path>
                          </svg>
                        </span>
                      </>
                    ) : null}
                    {x.now ? (
                      <>
                        <span
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "12px",
                            border: "2px solid #000000",
                            boxSizing: "border-box",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: "0",
                          }}
                        >
                          <span
                            style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#000000" }}
                          ></span>
                        </span>
                      </>
                    ) : null}
                    {x.todo ? (
                      <>
                        <span
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "12px",
                            background: "#EEEEEE",
                            color: "#545454",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "11px",
                            fontWeight: "800",
                            flexShrink: "0",
                          }}
                        >
                          {x.n}
                        </span>
                      </>
                    ) : null}
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: x.fg }}>{x.t}</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>{x.sub}</span>
                    </span>
                  </li>
                </Fragment>
              ))}
            </ol>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {v.s0 ? (
                <>
                  <Link
                    href="/messages"
                    onClick={v.message}
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
                    {v.messageLabel}
                  </Link>
                  <Link
                    href="/request-no-reply"
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
                    No reply? See options
                  </Link>
                  <Link
                    href="/cancel-booking"
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
                    Cancel request
                  </Link>
                </>
              ) : null}
              {v.s1 ? (
                <>
                  <Link
                    href="/add-task"
                    onClick={v.addTasks}
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
                    {v.addLabel}
                  </Link>
                  <Link
                    href="/messages"
                    onClick={v.message}
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
                    Message
                  </Link>
                  <Link
                    href="/reschedule"
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
                    Reschedule
                  </Link>
                  <Link
                    href="/cancel-booking"
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
                    Cancel visit
                  </Link>
                </>
              ) : null}
              {v.s2 ? (
                <>
                  <Link
                    href="/visit-report"
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
                    {"Review & approve"}
                  </Link>
                  <Link
                    href="/dispute"
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
                    Report a problem
                  </Link>
                </>
              ) : null}
            </div>
            {v.s0 ? (
              <>
                <div
                  style={{
                    borderRadius: "14px",
                    background: "#EAF0FD",
                    color: "#1A4FB5",
                    padding: "12px 14px",
                    fontSize: "13px",
                    fontWeight: "600",
                    lineHeight: "1.45",
                    display: "flex",
                    gap: "8px",
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
                    <rect x="5" y="11" width="14" height="9" rx="2"></rect>
                    <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  <span>{v.fallback}</span>
                </div>
              </>
            ) : null}
            {v.s1 ? (
              <>
                <div
                  style={{
                    borderRadius: "14px",
                    background: "#F6F6F6",
                    color: "#333333",
                    padding: "12px 14px",
                    fontSize: "13px",
                    fontWeight: "600",
                    lineHeight: "1.45",
                    display: "flex",
                    gap: "8px",
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
                  <span>Free to cancel until Fri 16 Oct, 9:00 AM. After that you get 50% back.</span>
                </div>
              </>
            ) : null}
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src={v.cg.avatar}
                alt=""
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                }}
              />
              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>{v.cg.name}</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>{v.cgSub}</span>
              </span>
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
                Verified
              </span>
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
                <span style={{ color: "#545454" }}>For</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  Amma
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    Kamala F., 78
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
                <span style={{ color: "#545454" }}>When</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  {v.day}
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    {v.time}
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
                <span style={{ color: "#545454" }}>Care</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{v.help}</span>
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
                <span style={{ color: "#545454" }}>Tasks</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{v.tasks}</span>
              </div>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "14px",
                  background: "#EAF0FD",
                }}
              >
                <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#1A4FB5" }}>Held in escrow</span>
                  <span style={{ fontSize: "12px", color: "#333333" }}>{v.paidAfter}</span>
                </span>
                <span style={{ fontSize: "20px", fontWeight: "800" }}>{v.amount}</span>
              </div>
            </div>
            <Link
              href="/receipt"
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
              View receipt
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
