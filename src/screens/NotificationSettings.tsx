"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = {
      m: {
        visit_push: true,
        visit_wa: true,
        task_push: true,
        msg_push: true,
        msg_email: true,
        book_push: true,
        book_email: true,
        book_wa: true,
        pay_push: true,
        pay_email: true,
        rev_push: true,
        news_email: true,
      },
      quiet: true,
      digest: false,
      ruwan: 1,
      sunil: 2,
    };
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
    const seg = (key, labels) =>
      labels.map((l, i) => {
        const on = this.state[key] === i;
        return {
          label: l,
          sel: on ? "true" : "false",
          bg: on ? "#000000" : "transparent",
          fg: on ? "#FFFFFF" : "#000000",
          weight: on ? "700" : "600",
          pick: () => this.setState({ [key]: i }),
        };
      });
    const CH = ["push", "email", "wa", "sms"];
    const C = [
      ["visit", "Visits & check-ins", "On the way, checked in, checked out"],
      ["task", "Tasks", "Task seen, done or skipped"],
      ["msg", "Messages & calls", "New chats, missed calls, chat requests"],
      ["book", "Booking changes", "Accepted, declined, reschedule, cancel"],
      ["pay", "Payments & receipts", "Charges, refunds, receipts"],
      ["rev", "Reviews", "Reminders to rate a visit"],
      ["news", "Tips & offers", "Rarely · news from Gloocan"],
    ];
    const m = this.state.m;
    const cats = C.map((c) => ({
      title: c[1],
      sub: c[2],
      cells: CH.map((ch) => {
        const k = c[0] + "_" + ch;
        const on = !!m[k];
        return {
          on: on ? "true" : "false",
          bg: on ? "#000000" : "#FFFFFF",
          bd: on ? "#000000" : "#A6A6A6",
          flip: () => this.setState({ m: { ...m, [k]: !on } }),
        };
      }),
    }));
    return {
      cats,
      quiet: tg("quiet"),
      digest: tg("digest"),
      ruwan: seg("ruwan", ["Everything", "Visits", "Safety only"]),
      sunil: seg("sunil", ["Everything", "Visits", "Safety only"]),
    };
  }
}

export default function NotificationSettingsScreen() {
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
          <AccountNav active="/notification-settings" />
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
                Notification settings
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                Choose what reaches you, and where. Safety alerts always come through.
              </span>
            </div>
            <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>For you</h2>
              <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflowX: "auto" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1fr) repeat(4, 64px)",
                    minWidth: "520px",
                    alignItems: "center",
                    padding: "10px 16px",
                    background: "#F6F6F6",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#545454",
                  }}
                >
                  <span>WHAT</span>
                  <span style={{ textAlign: "center" }}>Push</span>
                  <span style={{ textAlign: "center" }}>Email</span>
                  <span style={{ textAlign: "center" }}>WhatsApp</span>
                  <span style={{ textAlign: "center" }}>SMS</span>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1fr) repeat(4, 64px)",
                    minWidth: "520px",
                    alignItems: "center",
                    padding: "12px 16px",
                    borderTop: "1px solid #E2E2E2",
                    background: "#FFEFED",
                  }}
                >
                  <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "700", color: "#C11500" }}>Safety alerts</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>
                      {"Emergencies, incidents, reports · can't be turned off"}
                    </span>
                  </span>
                  <span style={{ display: "flex", justifyContent: "center", color: "#C11500" }}>
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
                  </span>
                  <span style={{ display: "flex", justifyContent: "center", color: "#C11500" }}>
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
                  </span>
                  <span style={{ display: "flex", justifyContent: "center", color: "#C11500" }}>
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
                  </span>
                  <span style={{ display: "flex", justifyContent: "center", color: "#C11500" }}>
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
                  </span>
                </div>
                {v.cats.map((c: any, i1: number) => (
                  <Fragment key={i1}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "minmax(0, 1fr) repeat(4, 64px)",
                        minWidth: "520px",
                        alignItems: "center",
                        padding: "12px 16px",
                        borderTop: "1px solid #E2E2E2",
                      }}
                    >
                      <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700" }}>{c.title}</span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>{c.sub}</span>
                      </span>
                      {c.cells.map((x: any, i2: number) => (
                        <Fragment key={i2}>
                          <span style={{ display: "flex", justifyContent: "center" }}>
                            <button
                              role="checkbox"
                              aria-checked={x.on}
                              onClick={x.flip}
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "6px",
                                border: `2px solid ${x.bd}`,
                                background: x.bg,
                                color: "#FFFFFF",
                                padding: "0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
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
                            </button>
                          </span>
                        </Fragment>
                      ))}
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>
            <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Quiet hours</h2>
              <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                <button
                  aria-pressed={v.quiet.pressed}
                  onClick={v.quiet.flip}
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
                    <span style={{ fontSize: "14px", fontWeight: "700" }}>Pause non-urgent alerts at night</span>
                    <span style={{ fontSize: "13px", color: "#545454" }}>
                      Everything waits until morning except safety alerts
                    </span>
                  </span>
                  <span
                    style={{
                      width: "40px",
                      height: "24px",
                      borderRadius: "12px",
                      background: v.quiet.track,
                      padding: "3px",
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: v.quiet.align,
                      flexShrink: "0",
                    }}
                  >
                    <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                  </span>
                </button>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", padding: "0 16px 14px" }}>
                  <label
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#545454",
                    }}
                  >
                    From
                    <span
                      style={{
                        height: "40px",
                        width: "140px",
                        borderRadius: "10px",
                        background: "#EEEEEE",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 12px",
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
                      10:00 PM
                    </span>
                  </label>
                  <label
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#545454",
                    }}
                  >
                    To
                    <span
                      style={{
                        height: "40px",
                        width: "140px",
                        borderRadius: "10px",
                        background: "#EEEEEE",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 12px",
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
                      6:00 AM
                    </span>
                  </label>
                </div>
                <div style={{ height: "1px", background: "#E2E2E2" }}></div>
                <button
                  aria-pressed={v.digest.pressed}
                  onClick={v.digest.flip}
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
                    <span style={{ fontSize: "14px", fontWeight: "700" }}>Daily summary email</span>
                    <span style={{ fontSize: "13px", color: "#545454" }}>
                      {"One email at 8 PM with the day's visits and tasks"}
                    </span>
                  </span>
                  <span
                    style={{
                      width: "40px",
                      height: "24px",
                      borderRadius: "12px",
                      background: v.digest.track,
                      padding: "3px",
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: v.digest.align,
                      flexShrink: "0",
                    }}
                  >
                    <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                  </span>
                </button>
              </div>
            </section>
            <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>{"Amma's care circle"}</h2>
              <span style={{ fontSize: "13px", color: "#545454", marginTop: "-4px" }}>
                What others in the circle get. They can change their own channels.
              </span>
              <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                <div
                  style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", padding: "12px 16px" }}
                >
                  <img
                    src="/images/ruwan.png"
                    alt=""
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                      flexShrink: "0",
                    }}
                  />
                  <span style={{ flex: "1 1 160px", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "700" }}>Ruwan Fernando</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>Son · Melbourne · times shown in AEDT</span>
                  </span>
                  <div
                    role="tablist"
                    style={{
                      borderRadius: "20px",
                      background: "#EEEEEE",
                      padding: "4px",
                      boxSizing: "border-box",
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                      gap: "4px",
                      flex: "0 1 380px",
                      height: "36px",
                    }}
                  >
                    {v.ruwan.map((t: any, i3: number) => (
                      <Fragment key={i3}>
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
                <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "64px" }}></div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", padding: "12px 16px" }}
                >
                  <img
                    src="/images/sunil.png"
                    alt=""
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                      flexShrink: "0",
                    }}
                  />
                  <span style={{ flex: "1 1 160px", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "700" }}>Sunil Fernando</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>Uncle · Kandy</span>
                  </span>
                  <div
                    role="tablist"
                    style={{
                      borderRadius: "20px",
                      background: "#EEEEEE",
                      padding: "4px",
                      boxSizing: "border-box",
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                      gap: "4px",
                      flex: "0 1 380px",
                      height: "36px",
                    }}
                  >
                    {v.sunil.map((t: any, i4: number) => (
                      <Fragment key={i4}>
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
            </section>
            <div style={{ display: "flex", gap: "8px" }}>
              <Link
                href="/notifications"
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
                Save settings
              </Link>
              <Link
                href="/notifications"
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
