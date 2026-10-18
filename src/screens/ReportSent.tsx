"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { caregiver } from "@/lib/mock/caregivers";
import { useDemo } from "@/lib/store";

export default function ReportSentScreen() {
  const demo = useDemo();
  const report = demo.reports[0];
  const cg = caregiver(report?.caregiverId ?? "nirmala");
  const blocked = demo.ui.lastReport?.block ?? true;
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start", paddingTop: "16px" }}>
          <div style={{ flex: "999 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
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
                {`Report ${report?.ref ?? "GL-20418"} sent`}
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
                Thank you for telling us
              </h1>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#333333" }}>
                {"A real person on our safety team will review it. You don't need to do anything else right now."}
              </span>
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
              <span>
                {blocked
                  ? `${cg.first} is blocked and her payment is on hold in escrow.`
                  : `${cg.first}'s payment is on hold in escrow while we review.`}
              </span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link
                href="/report-status"
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
                View report
              </Link>
              <Link
                href="/visits"
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
                Back to visits
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
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>What happens next</h2>
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
              <li style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
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
                  <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#000000" }}></span>
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>Review within 24 hours</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Safety team · every day, 7 am – 10 pm</span>
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  borderTop: "1px solid #E2E2E2",
                }}
              >
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
                  2
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#333333" }}>We may call you</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>From +94 11 755 0000 · Gloocan</span>
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  borderTop: "1px solid #E2E2E2",
                }}
              >
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
                  3
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#333333" }}>
                    You get the outcome here
                  </span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>And what we did about it</span>
                </span>
              </li>
            </ol>
          </aside>
        </div>
      </main>
    </div>
  );
}
