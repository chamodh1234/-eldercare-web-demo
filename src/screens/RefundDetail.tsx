"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { toast } from "@/components/Toaster";
import { copyText } from "@/lib/download";

const ARN = "7498 5281 0412 6630";

async function copyArn(e: React.MouseEvent) {
  e.preventDefault();
  toast((await copyText(ARN.replace(/ /g, ""))) ? "Reference copied" : "Couldn't copy · select it instead");
}

export default function RefundDetailScreen() {
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
          <AccountNav active="/payments" />
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link
              href="/payments"
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
              Payments
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src="/images/mala.png"
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
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#545454",
                  }}
                >
                  Refund · on its way
                </span>
                <span style={{ fontSize: "14px", color: "#333333" }}>Visit Thu 1 Oct · Mala W. · cancelled</span>
              </span>
            </div>
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
                LKR 2,640 back to Visa ·· 4417
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>Expected on your card by Thu 8 Oct</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
              <div style={{ flex: "3 1 340px", minWidth: "0" }}>
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
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>Visit cancelled</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>Thu 1 Oct, 8:40 AM · by Mala</span>
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
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>
                        Refund sent by Gloocan
                      </span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>Thu 1 Oct, 8:41 AM</span>
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
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>
                        Your bank is processing
                      </span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>Usually 3–5 working days</span>
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
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#333333" }}>Back on your card</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>By Thu 8 Oct</span>
                    </span>
                  </li>
                </ol>
              </div>
              <div style={{ flex: "2 1 260px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
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
                    <span style={{ color: "#545454" }}>You paid</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>LKR 3,960</span>
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
                    <span style={{ color: "#545454" }}>Cancel fee</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>
                      LKR 1,320
                      <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                        Under 24 hrs · paid to Mala
                      </span>
                    </span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2" }}></div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      background: "#E6F4EC",
                    }}
                  >
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#05663A" }}>Refund</span>
                      <span style={{ fontSize: "12px", color: "#333333" }}>Full fee refunded</span>
                    </span>
                    <span style={{ fontSize: "18px", fontWeight: "800", whiteSpace: "nowrap" }}>LKR 2,640</span>
                  </div>
                </div>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                    }}
                  >
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "12px", color: "#545454" }}>Bank reference (ARN)</span>
                      <span style={{ fontSize: "15px", fontWeight: "700" }}>7498 5281 0412 6630</span>
                    </span>
                    <Link
                      href="/refund-detail"
                      onClick={copyArn}
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
                      Copy
                    </Link>
                  </div>
                </div>
                <Link
                  href="/refund-missing"
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
                  Not on my card yet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
