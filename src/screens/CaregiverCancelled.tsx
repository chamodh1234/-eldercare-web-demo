"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { reassignVisit, selectVisit } from "@/lib/actions";
import { lkr } from "@/lib/format";
import { caregiver } from "@/lib/mock/caregivers";

const VISIT = "v-1017";
const PICKS = [
  { id: "shanthi", meta: "Cared for Amma 3 times · 4.8 ★", save: "You save LKR 660" },
  { id: "mala", meta: "2.4 km · Sinhala, Tamil · 4.9 ★", save: "Same price" },
];

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { p: 0 };
  }
  renderVals() {
    const picks = PICKS.map((p, i) => {
      const cg = caregiver(p.id);
      const on = this.state.p === i;
      return {
        av: cg.avatar,
        name: cg.name,
        meta: p.meta,
        rate: `${lkr(cg.rate)}/hr`,
        save: p.save,
        pressed: on ? "true" : "false",
        border: on ? "2px solid #000000" : "1px solid #E2E2E2",
        pick: () => this.setState({ p: i }),
      };
    });
    const chosen = PICKS[this.state.p];
    return {
      picks,
      cta: "Book " + caregiver(chosen.id).first + " instead",
      book: () => reassignVisit(VISIT, chosen.id),
      cancel: () => selectVisit(VISIT),
    };
  }
}

export default function CaregiverCancelledScreen() {
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span>
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
                  Caregiver cancelled
                </span>
              </span>
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
                  {"Nirmala can't make Saturday"}
                </h1>
                <span style={{ fontSize: "15px", color: "#545454" }}>
                  {"She's unwell. We're sorry. You haven't been charged anything extra."}
                </span>
              </div>
            </div>
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>
              Free for Sat 17 Oct · 9:00 – 12:00 · verified
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              {v.picks.map((p: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    aria-pressed={p.pressed}
                    onClick={p.pick}
                    style={{
                      border: p.border,
                      borderRadius: "16px",
                      background: "#FFFFFF",
                      padding: "16px",
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                      textAlign: "left",
                      fontFamily: "var(--font-figtree), sans-serif",
                      color: "#000000",
                    }}
                  >
                    <img
                      src={p.av}
                      alt=""
                      style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover" }}
                    />
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "800" }}>{p.name}</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>{p.meta}</span>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#05663A" }}>{p.save}</span>
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: "800" }}>{p.rate}</span>
                  </button>
                </Fragment>
              ))}
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
                <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"></path>
              </svg>
              <span>Pick one and we move your booking, tasks and payment across. Same time, no new checkout.</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <Link
                href="/confirmed"
                onClick={v.book}
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
              <Link
                href="/search"
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
                See more caregivers
              </Link>
              <Link
                href="/cancel-booking"
                onClick={v.cancel}
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
                {"Cancel & get full refund"}
              </Link>
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
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Your booking</h2>
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
                <span style={{ color: "#545454" }}>When</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  Sat 17 Oct
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    9:00 – 12:00
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
                <span style={{ color: "#545454" }}>For</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>Amma · Colombo 05</span>
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
                <span style={{ color: "#545454" }}>Held</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  LKR 3,960
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    Moves with the booking
                  </span>
                </span>
              </div>
            </div>
            <span style={{ fontSize: "12px", color: "#545454", lineHeight: "1.5" }}>
              If you do nothing by Fri 6 PM, we refund you in full.
            </span>
          </aside>
        </div>
      </main>
    </div>
  );
}
