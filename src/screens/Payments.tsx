"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { toast } from "@/components/Toaster";
import { downloadFile } from "@/lib/download";
import { lkr } from "@/lib/format";
import { mutate, useDemo } from "@/lib/store";

const COLORS = { Paid: ["#EEEEEE", "#333333"], Held: ["#EAF0FD", "#1A4FB5"], Refunded: ["#E6F4EC", "#05663A"] };

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { f: 0 };
  }
  renderVals() {
    const { demo } = this.props;
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
    const want = F[this.state.f];
    const rowsList = demo.payments
      .filter((p) => this.state.f === 0 || p.status === want)
      .map((p) => ({
        date: p.date,
        what: p.what,
        who: p.who,
        method: p.method,
        amount: lkr(p.amount),
        status: p.status,
        sBg: COLORS[p.status][0],
        sFg: COLORS[p.status][1],
        href: p.status === "Refunded" ? "/refund-detail" : "/receipt",
        link: p.status === "Refunded" ? "Track" : "Receipt",
        open: () =>
          mutate((d) => {
            d.selectedPayment = p.id;
          }),
      }));
    const sum = (st, month = "") =>
      demo.payments
        .filter((p) => p.status === st && p.date.endsWith(month))
        .reduce((t, p) => t + Math.abs(p.amount), 0);
    const paidOct = demo.payments.filter((p) => p.status === "Paid" && p.date.endsWith("Oct"));
    const refunds = demo.payments.filter((p) => p.status === "Refunded");
    return {
      fil,
      rowsList,
      none: rowsList.length === 0,
      paid: lkr(sum("Paid", "Oct")),
      paidNote: `${paidOct.length} payment${paidOct.length === 1 ? "" : "s"} approved`,
      held: lkr(sum("Held")),
      refunded: lkr(sum("Refunded")),
      refundNote: `${refunds.length} refund${refunds.length === 1 ? "" : "s"}`,
      statement: (e) => {
        e.preventDefault();
        const rows = demo.payments.map((p) =>
          [p.date + " 2026", p.what, p.who, p.method, p.amount, p.status]
            .map((x) => `"${String(x).replace(/"/g, '""')}"`)
            .join(","),
        );
        downloadFile(
          "gloocan-statement-2026.csv",
          ["Date,Description,Caregiver,Method,Amount (LKR),Status", ...rows].join("\n"),
          "text/csv",
        );
        toast("Statement downloaded");
      },
    };
  }
}

export default function PaymentsScreen() {
  const demo = useDemo();
  const v = useLogic(Logic, { props: { demo }, persist: "payments" });
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
                onClick={v.statement}
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
                <span style={{ fontSize: "22px", fontWeight: "800" }}>{v.paid}</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>{v.paidNote}</span>
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
                <span style={{ fontSize: "22px", fontWeight: "800" }}>{v.held}</span>
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
                <span style={{ fontSize: "22px", fontWeight: "800" }}>{v.refunded}</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>{v.refundNote}</span>
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
                {v.none ? (
                  <div
                    style={{ padding: "18px 16px", borderTop: "1px solid #E2E2E2", fontSize: "13px", color: "#545454" }}
                  >
                    Nothing here yet.
                  </div>
                ) : null}
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
                      <Link href={r.href} onClick={r.open} style={{ fontWeight: "700", textDecoration: "underline" }}>
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
