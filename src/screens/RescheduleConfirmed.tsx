"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { dayLabel } from "@/lib/format";
import { visitById, visitView } from "@/lib/selectors";
import { useDemo } from "@/lib/store";

export default function RescheduleConfirmedScreen() {
  const demo = useDemo();
  const move = demo.ui.lastMove ?? {
    visitId: "v-1017",
    from: { date: "2026-10-17", start: "9:00" },
    to: { date: "2026-10-18", start: "2:00 PM" },
  };
  const { v, cg, amount } = visitView(visitById(demo, move.visitId));
  const short = (x: { date: string; start: string }) => `${dayLabel(x.date).replace(/ \w+$/, "")} · ${x.start}`;
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "32px",
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"></path>
                </svg>
              </span>
              <span
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "32px",
                  background: "#05944F",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "-16px",
                  border: "4px solid #FFFFFF",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12l5 5 9-10"></path>
                </svg>
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#05663A",
                }}
              >
                Visit rescheduled
              </span>
              <h1
                style={{
                  margin: "0",
                  fontSize: "32px",
                  lineHeight: "1.1",
                  fontWeight: "800",
                  letterSpacing: "-0.025em",
                }}
              >
                {`Moved to ${dayLabel(move.to.date)} · ${move.to.start}`}
              </h1>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#333333" }}>
                {`${cg.first} is booked. Your tasks moved with the visit.`}
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
                <span style={{ color: "#545454" }}>When</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  {dayLabel(move.to.date)}
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    {`${v.start} – ${v.end}`}
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
                <span style={{ color: "#545454" }}>Caregiver</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{cg.name}</span>
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
                <span style={{ color: "#545454" }}>Price</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  {amount}
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    No change · still held
                  </span>
                </span>
              </div>
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
                <path d="M6 3h8l4 4v14H6z"></path>
                <path d="M14 3v4h4M9 12h6M9 16h6"></path>
              </svg>
              <span>{'Lunch tasks moved to "after lunch". Check them in the care plan.'}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <Link
                href="/visits"
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
                Done
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
                Check tasks
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
                <span style={{ color: "#545454" }}>Before</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{short(move.from)}</span>
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
                <span style={{ color: "#545454" }}>Now</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{short(move.to)}</span>
              </div>
            </div>
            <span style={{ fontSize: "12px", color: "#545454", lineHeight: "1.5" }}>
              Ruwan in the care circle sees the new time too.
            </span>
          </aside>
        </div>
      </main>
    </div>
  );
}
