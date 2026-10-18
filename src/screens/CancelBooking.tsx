"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { useRouter } from "next/navigation";
import { toast } from "@/components/Toaster";
import { cancelRefund, cancelVisit } from "@/lib/actions";
import { lkr } from "@/lib/format";
import { selectedVisit, visitView } from "@/lib/selectors";
import { useDemo } from "@/lib/store";

const REASONS = [
  ["Plans changed", "We no longer need this visit"],
  ["Amma is unwell or in hospital", ""],
  ["Found care elsewhere", ""],
  ["Something else", ""],
];

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { r: 0 };
  }
  renderVals() {
    const { demo, router } = this.props;
    const { v: visit, cg, day, time } = visitView(selectedVisit(demo));
    const reasons = REASONS.map((r, i) => {
      const on = this.state.r === i;
      return {
        title: r[0],
        note: r[1] || "",
        checked: on ? "true" : "false",
        sep: i === 0 ? "none" : "1px solid #E2E2E2",
        bg: on ? "#F6F6F6" : "#FFFFFF",
        ring: on ? "2px solid #000000" : "2px solid #A6A6A6",
        dot: on ? "#000000" : "transparent",
        pick: () => this.setState({ r: i }),
      };
    });
    const r = cancelRefund(visit);
    return {
      reasons,
      current: `${day} · ${time} · ${cg.name}`,
      paid: lkr(r.paid),
      fee: lkr(r.fee),
      feeNote: r.late ? "Within 24 hrs · 50%" : "More than 24 hrs before",
      refundTo: `Refund to ${visit.card}`,
      refund: lkr(r.refund),
      cancel: (e) => {
        e.preventDefault();
        cancelVisit(visit.id, REASONS[this.state.r][0]);
        toast(`Visit cancelled · ${lkr(r.refund)} refund started`);
        router.push("/visits");
      },
    };
  }
}

export default function CancelBookingScreen() {
  const demo = useDemo();
  const router = useRouter();
  const v = useLogic(Logic, { props: { demo, router } });
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
      <div style={{ position: "relative", flex: "1", display: "flex", flexDirection: "column" }}>
        <AppHeader active="/visits" />
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
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <h1
              style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.025em" }}
            >
              {"Amma's visits"}
            </h1>
          </div>
          <div
            style={{ height: "320px", border: "1px solid #E2E2E2", borderRadius: "16px", background: "#F6F6F6" }}
          ></div>
        </main>
        <Link
          href="/visits"
          aria-label="Close"
          style={{ position: "absolute", inset: "0", background: "rgba(0,0,0,0.45)" }}
        ></Link>
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "absolute",
            left: "50%",
            top: "64px",
            transform: "translateX(-50%)",
            width: "min(520px, calc(100% - 32px))",
            background: "#FFFFFF",
            borderRadius: "20px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>Cancel this visit?</span>
              <span style={{ fontSize: "14px", color: "#545454" }}>{v.current}</span>
            </span>
            <Link
              href="/visits"
              aria-label="Close"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "16px",
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
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18"></path>
              </svg>
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600" }}>Why are you cancelling?</span>
            <div
              role="radiogroup"
              style={{
                border: "1px solid #E2E2E2",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {v.reasons.map((r: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    role="radio"
                    aria-checked={r.checked}
                    onClick={r.pick}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      border: "none",
                      borderTop: r.sep,
                      background: r.bg,
                      color: "#000000",
                      textAlign: "left",
                      fontFamily: "var(--font-figtree), sans-serif",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "9px",
                        boxSizing: "border-box",
                        border: r.ring,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                      }}
                    >
                      <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: r.dot }}></span>
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>{r.title}</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>{r.note}</span>
                    </span>
                  </button>
                </Fragment>
              ))}
            </div>
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
              <span style={{ color: "#545454" }}>You paid</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>{v.paid}</span>
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
                {v.fee}
                <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                  {v.feeNote}
                </span>
              </span>
            </div>
            <div style={{ height: "1px", background: "#E2E2E2" }}></div>
            <div
              style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", background: "#E6F4EC" }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#05663A" }}>{v.refundTo}</span>
              <span style={{ fontSize: "18px", fontWeight: "800" }}>{v.refund}</span>
            </div>
          </div>
          <span style={{ fontSize: "12px", color: "#545454" }}>
            Within 24 hrs: 50% refund. After the caregiver arrives: no refund.
          </span>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
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
              Keep booking
            </Link>
            <Link
              href="/visits"
              onClick={v.cancel}
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
              Cancel visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
