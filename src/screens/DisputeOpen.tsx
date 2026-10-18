"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { openChat, resolveDispute } from "@/lib/actions";
import { lkr } from "@/lib/format";
import { reportVisit, visitView } from "@/lib/selectors";
import { useDemo } from "@/lib/store";

export default function DisputeOpenScreen() {
  const demo = useDemo();
  const { v, cg, day } = visitView(reportVisit(demo));
  const dispute = demo.dispute ?? { refund: 1200, reason: "Tasks not done", status: "open" };
  const subTotal = v.hours * v.rate;
  const refund = lkr(dispute.refund);
  const paid = lkr(subTotal - dispute.refund);
  const feeAmt = lkr(v.amount - subTotal);
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
                  Nirmala replied
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
                  {`Visit dispute · ${day}`}
                </h1>
                <span style={{ fontSize: "15px", color: "#545454" }}>
                  {dispute.refund
                    ? `You asked for ${refund} back · ${dispute.reason.toLowerCase()}`
                    : `You asked for a free re-visit · ${dispute.reason.toLowerCase()}`}
                </span>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #E2E2E2",
                borderRadius: "16px",
                padding: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img
                  src="/images/nirmala.png"
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block",
                    flexShrink: "0",
                  }}
                />
                <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "15px", fontWeight: "800" }}>{"Nirmala's offer"}</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Sun, 9:12 AM</span>
                </span>
                <span style={{ fontSize: "22px", fontWeight: "800" }}>{dispute.refund ? refund : "Re-visit"}</span>
              </div>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#333333" }}>
                {
                  '"Sorry, Amma felt dizzy at 11:30 so I sat with her instead of cooking. I should have messaged you. Happy to refund the hour."'
                }
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
                <span style={{ color: "#545454" }}>Refund to you</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  {refund}
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    {`${v.card} · 3–5 days`}
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
                <span style={{ color: "#545454" }}>Nirmala is paid</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{paid}</span>
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
                <span style={{ color: "#545454" }}>Booking fee</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  {feeAmt}
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    Kept by Gloocan
                  </span>
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <Link
                href="/dispute-resolved"
                onClick={resolveDispute}
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
                Accept offer
              </Link>
              <Link
                href="/dispute-resolved"
                onClick={resolveDispute}
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
                Ask Gloocan to decide
              </Link>
              <Link
                href="/messages"
                onClick={() => openChat(cg.id)}
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
                Message Nirmala
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
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Case timeline</h2>
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
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>You opened it</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Sat, 6:40 PM</span>
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
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>Nirmala replied</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Sun, 9:12 AM</span>
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
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>You decide</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Accept, or ask Gloocan</span>
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
                  4
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#333333" }}>Payment released</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Refund and payout together</span>
                </span>
              </li>
            </ol>
            <span style={{ fontSize: "12px", color: "#545454" }}>
              {"If you don't respond in 3 days, the offer is accepted."}
            </span>
          </aside>
        </div>
      </main>
    </div>
  );
}
