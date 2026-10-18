"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { tab: 0, push: true, email: true, wa: true, sms: false };
  }
  renderVals() {
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
    const tg = (k) => {
      const on = this.state[k];
      return {
        pressed: on ? "true" : "false",
        track: on ? "#05944F" : "#CBCBCB",
        align: on ? "flex-end" : "flex-start",
        flip: () => this.setState({ [k]: !on }),
      };
    };
    return {
      tabs: seg("tab", ["All", "Visits", "Payments", "Safety"]),
      push: tg("push"),
      email: tg("email"),
      wa: tg("wa"),
      sms: tg("sms"),
    };
  }
}

export default function NotificationsScreen() {
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
          <section
            style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
              }}
            >
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
                  Notifications
                </h1>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                <div
                  role="tablist"
                  style={{
                    height: "40px",
                    borderRadius: "20px",
                    background: "#EEEEEE",
                    padding: "4px",
                    boxSizing: "border-box",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                    gap: "4px",
                    minWidth: "340px",
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
                <Link
                  href="/notifications"
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
                  Mark all read
                </Link>
              </div>
            </div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#545454",
              }}
            >
              Today
            </span>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden", marginTop: "-8px" }}>
              <Link
                href="/incident-alert"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "18px",
                    background: "#FFEFED",
                    color: "#C11500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
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
                    <path d="M12 3l9 16H3z"></path>
                    <path d="M12 10v4M12 17v.5"></path>
                  </svg>
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "800" }}>Incident: Amma had a fall</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Nirmala reported it · needs a doctor today</span>
                </span>
                <span style={{ fontSize: "12px", color: "#545454", whiteSpace: "nowrap" }}>10:44</span>
                <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#276EF1" }}></span>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div>
              <Link
                href="/extend-request"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "18px",
                    background: "#EAF0FD",
                    color: "#1A4FB5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
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
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "800" }}>Nirmala asks to stay 1 more hour</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Approve by 12:00 · LKR 1,320</span>
                </span>
                <span style={{ fontSize: "12px", color: "#545454", whiteSpace: "nowrap" }}>11:38</span>
                <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#276EF1" }}></span>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div>
              <Link
                href="/caregiver-cancelled"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "18px",
                    background: "#FFEFED",
                    color: "#C11500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
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
                    <path d="M12 3l9 16H3z"></path>
                    <path d="M12 10v4M12 17v.5"></path>
                  </svg>
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "800" }}>{"Nirmala can't make Sat 17 Oct"}</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Pick a stand-in or get a full refund</span>
                </span>
                <span style={{ fontSize: "12px", color: "#545454", whiteSpace: "nowrap" }}>10:15</span>
                <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#276EF1" }}></span>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div>
              <Link
                href="/live-visit"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "18px",
                    background: "#EAF0FD",
                    color: "#1A4FB5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
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
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "800" }}>Nirmala checked in with Amma</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Visit code 4821 confirmed · 9:02</span>
                </span>
                <span style={{ fontSize: "12px", color: "#545454", whiteSpace: "nowrap" }}>9:02</span>
                <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#276EF1" }}></span>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div>
              <Link
                href="/incoming-call"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "18px",
                    background: "#FFEFED",
                    color: "#C11500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
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
                    <path d="M5 4h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"></path>
                  </svg>
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "800" }}>Missed call from Nirmala</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>In-app call · tap to see it again</span>
                </span>
                <span style={{ fontSize: "12px", color: "#545454", whiteSpace: "nowrap" }}>10:40</span>
                <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#276EF1" }}></span>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div>
              <Link
                href="/on-the-way"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "18px",
                    background: "#EEEEEE",
                    color: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
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
                    <path d="M5 4h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"></path>
                  </svg>
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>Nirmala is on the way</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Arriving about 8:58 · code 4821</span>
                </span>
                <span style={{ fontSize: "12px", color: "#545454", whiteSpace: "nowrap" }}>8:41</span>
                <span style={{ width: "8px" }}></span>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div>
              <Link
                href="/care-plan"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "18px",
                    background: "#E6F4EC",
                    color: "#05663A",
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
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "800" }}>Nirmala saw your task for today</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>{'"Let the electrician in" · seen 6:12'}</span>
                </span>
                <span style={{ fontSize: "12px", color: "#545454", whiteSpace: "nowrap" }}>6:12</span>
                <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#276EF1" }}></span>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div>
              <Link
                href="/account"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "18px",
                    background: "#EEEEEE",
                    color: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
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
                    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"></path>
                  </svg>
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>Safety team replied</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Report GL-20418 · 1 new message</span>
                </span>
                <span style={{ fontSize: "12px", color: "#545454", whiteSpace: "nowrap" }}>11:20</span>
                <span style={{ width: "8px" }}></span>
              </Link>
            </div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#545454",
              }}
            >
              This week
            </span>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden", marginTop: "-8px" }}>
              <Link
                href="/time-offer"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "18px",
                    background: "#EEEEEE",
                    color: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
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
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>Nirmala suggested a new time</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Sun 18 · 2:00 PM instead of 10:00</span>
                </span>
                <span style={{ fontSize: "12px", color: "#545454", whiteSpace: "nowrap" }}>Fri</span>
                <span style={{ width: "8px" }}></span>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div>
              <Link
                href="/booking-status"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "18px",
                    background: "#E6F4EC",
                    color: "#05663A",
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
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>Nirmala accepted Sat 17 Oct</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>9:00 – 12:00 · LKR 3,960 held</span>
                </span>
                <span style={{ fontSize: "12px", color: "#545454", whiteSpace: "nowrap" }}>Mon</span>
                <span style={{ width: "8px" }}></span>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div>
              <Link
                href="/visit-report"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "18px",
                    background: "#EEEEEE",
                    color: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
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
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>Visit report ready to approve</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Sat 10 Oct · LKR 3,600 to release</span>
                </span>
                <span style={{ fontSize: "12px", color: "#545454", whiteSpace: "nowrap" }}>Sat</span>
                <span style={{ width: "8px" }}></span>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div>
              <Link
                href="/payments"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "18px",
                    background: "#E6F4EC",
                    color: "#05663A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
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
                    <rect x="3" y="6" width="18" height="13" rx="2"></rect>
                    <path d="M3 10h18M7 15h3"></path>
                  </svg>
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>Refund sent</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>LKR 2,640 to Visa ·· 4417</span>
                </span>
                <span style={{ fontSize: "12px", color: "#545454", whiteSpace: "nowrap" }}>Thu</span>
                <span style={{ width: "8px" }}></span>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div>
              <Link
                href="/care-circle"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "18px",
                    background: "#EEEEEE",
                    color: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
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
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>{"Ruwan joined Amma's care circle"}</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>He can see visits and add tasks</span>
                </span>
                <span style={{ fontSize: "12px", color: "#545454", whiteSpace: "nowrap" }}>Tue</span>
                <span style={{ width: "8px" }}></span>
              </Link>
            </div>
          </section>
          <aside
            style={{ flex: "1 1 280px", maxWidth: "340px", display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>How we reach you</h2>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <button
                aria-pressed={v.push.pressed}
                onClick={v.push.flip}
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
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Push on my phone</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Check-ins, tasks seen, messages</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.push.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.push.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <button
                aria-pressed={v.email.pressed}
                onClick={v.email.flip}
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
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Email</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Receipts and weekly summary</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.email.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.email.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <button
                aria-pressed={v.wa.pressed}
                onClick={v.wa.flip}
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
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>WhatsApp</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Only safety and payment alerts</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.wa.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.wa.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <button
                aria-pressed={v.sms.pressed}
                onClick={v.sms.flip}
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
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>SMS</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>If the app is offline</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.sms.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.sms.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
            </div>
            <span style={{ fontSize: "12px", color: "#545454", lineHeight: "1.5" }}>
              {"Safety alerts are always on, for everyone in Amma's care circle."}
            </span>
            <Link
              href="/notification-settings"
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
              All notification settings
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
