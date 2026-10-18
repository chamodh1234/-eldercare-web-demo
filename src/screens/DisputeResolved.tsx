"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { lkr } from "@/lib/format";
import { reportVisit, visitView } from "@/lib/selectors";
import { useDemo } from "@/lib/store";

export default function DisputeResolvedScreen() {
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
        <div style={{ maxWidth: "640px", display: "flex", flexDirection: "column", gap: "22px", paddingTop: "24px" }}>
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
              Dispute closed
            </span>
            <h1
              style={{ margin: "0", fontSize: "32px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.025em" }}
            >
              {dispute.refund ? `Sorted. ${refund} is coming back` : "Sorted. A free re-visit is on its way"}
            </h1>
            <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#333333" }}>
              {`You and ${cg.first} agreed. The rest of the payment has been released to her.`}
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
              <span style={{ color: "#545454" }}>Refund</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>
                {refund}
                <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                  {`To ${v.card} · 3–5 working days`}
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
              <span style={{ color: "#545454" }}>{`Paid to ${cg.first}`}</span>
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
          <div style={{ display: "flex", gap: "10px" }}>
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
              Rate the visit
            </Link>
            <Link
              href="/payments"
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
              See in payments
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
