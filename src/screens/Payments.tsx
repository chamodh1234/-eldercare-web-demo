"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { f: 0 };
  }
  renderVals() {
    const F = ["All", "Paid", "Held", "Refunded"];
    const fil = F.map((f, i) => {
      const on = this.state.f === i;
      return {
        label: f,
        pressed: on ? "true" : "false",
        bg: on ? "#000000" : "#EEEEEE",
        fg: on ? "#FFFFFF" : "#000000",
        flip: () => this.setState({ f: i }),
      };
    });
    const R = [
      ["15 Oct", "Weekly care · week 12–17 Oct", "Nirmala P.", "Visa ·· 4417", "LKR 23,760", "Held", 2],
      ["10 Oct", "Visit · Sat 10 Oct", "Nirmala P.", "Visa ·· 4417", "LKR 3,960", "Paid", 1],
      ["3 Oct", "Visit · Sat 3 Oct", "Nirmala P.", "Visa ·· 4417", "LKR 3,960", "Paid", 1],
      ["1 Oct", "Visit · Thu 1 Oct (cancelled)", "Mala W.", "Visa ·· 4417", "− LKR 2,640", "Refunded", 3],
      ["21 Sep", "Visit · Mon 21 Sep", "Shanthi R.", "MC ·· 9012", "LKR 2,200", "Paid", 1],
    ];
    const C = { Paid: ["#EEEEEE", "#333333"], Held: ["#EAF0FD", "#1A4FB5"], Refunded: ["#E6F4EC", "#05663A"] };
    const rowsList = R.filter((r) => this.state.f === 0 || r[6] === this.state.f).map((r) => ({
      date: r[0],
      what: r[1],
      who: r[2],
      method: r[3],
      amount: r[4],
      status: r[5],
      sBg: C[r[5]][0],
      sFg: C[r[5]][1],
      href: r[5] === "Refunded" ? "/refund-detail" : "/receipt",
      link: r[5] === "Refunded" ? "Track" : "Receipt",
    }));
    return { fil, rowsList };
  }
}

export default function PaymentsScreen() {
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
          maxWidth: "1360px",
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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
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
                  {"Payments & receipts"}
                </h1>
                <span style={{ fontSize: "15px", color: "#545454" }}>
                  {"Every hold, payment and refund for Amma's care"}
                </span>
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
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path>
                </svg>
                Download year statement
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <div
                style={{
                  borderRadius: "16px",
                  background: "#F6F6F6",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#545454" }}>Paid in October</span>
                <span style={{ fontSize: "22px", fontWeight: "800" }}>LKR 7,920</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>2 visits approved</span>
              </div>
              <div
                style={{
                  borderRadius: "16px",
                  background: "#EAF0FD",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#1A4FB5" }}>Held now</span>
                <span style={{ fontSize: "22px", fontWeight: "800" }}>LKR 23,760</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>Released visit by visit</span>
              </div>
              <div
                style={{
                  borderRadius: "16px",
                  background: "#E6F4EC",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#05663A" }}>Refunds</span>
                <span style={{ fontSize: "22px", fontWeight: "800" }}>LKR 2,640</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>1 cancelled visit</span>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {v.fil.map((c: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    aria-pressed={c.pressed}
                    onClick={c.flip}
                    style={{
                      height: "32px",
                      padding: "0 14px",
                      borderRadius: "16px",
                      border: "none",
                      background: c.bg,
                      color: c.fg,
                      font: "600 13px var(--font-figtree), sans-serif",
                    }}
                  >
                    {c.label}
                  </button>
                </Fragment>
              ))}
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflowX: "auto" }}>
              <div style={{ minWidth: "820px" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "80px minmax(180px, 2fr) minmax(100px, 1fr) minmax(100px, 1fr) 110px 90px 70px",
                    gap: "12px",
                    alignItems: "center",
                    padding: "12px 16px",
                    background: "#F6F6F6",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#545454",
                  }}
                >
                  <span>Date</span>
                  <span>Description</span>
                  <span>Caregiver</span>
                  <span>Method</span>
                  <span>Amount</span>
                  <span>Status</span>
                  <span></span>
                </div>
                {v.rowsList.map((r: any, i2: number) => (
                  <Fragment key={i2}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "80px minmax(180px, 2fr) minmax(100px, 1fr) minmax(100px, 1fr) 110px 90px 70px",
                        gap: "12px",
                        alignItems: "center",
                        padding: "12px 16px",
                        borderTop: "1px solid #E2E2E2",
                        fontSize: "13px",
                      }}
                    >
                      <span style={{ color: "#545454" }}>{r.date}</span>
                      <span style={{ fontWeight: "700" }}>{r.what}</span>
                      <span>{r.who}</span>
                      <span style={{ color: "#545454" }}>{r.method}</span>
                      <span style={{ fontWeight: "800" }}>{r.amount}</span>
                      <span
                        style={{
                          justifySelf: "start",
                          height: "22px",
                          padding: "0 8px",
                          borderRadius: "11px",
                          background: r.sBg,
                          color: r.sFg,
                          fontSize: "11px",
                          fontWeight: "700",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {r.status}
                      </span>
                      <Link href={r.href} style={{ fontWeight: "700", textDecoration: "underline" }}>
                        {r.link}
                      </Link>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
