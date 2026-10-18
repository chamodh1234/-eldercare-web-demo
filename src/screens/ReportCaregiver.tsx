"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { useRouter } from "next/navigation";
import { toast } from "@/components/Toaster";
import { blockCaregiver } from "@/lib/actions";
import { caregiver } from "@/lib/mock/caregivers";
import { useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { r: 1 };
  }
  renderVals() {
    const radio = (key, list) =>
      list.map((r, i) => {
        const on = this.state[key] === i;
        return {
          title: r[0],
          note: r[1] || "",
          checked: on ? "true" : "false",
          sep: i === 0 ? "none" : "1px solid #E2E2E2",
          bg: on ? "#F6F6F6" : "#FFFFFF",
          ring: on ? "2px solid #000000" : "2px solid #A6A6A6",
          dot: on ? "#000000" : "transparent",
          pick: () => this.setState({ [key]: i }),
        };
      });
    return {
      reasons: radio("r", [
        ["Rough handling or neglect", "Of Amma or anyone at home"],
        ["Theft or missing items", "Money, jewellery or belongings"],
        ["Rude, threatening or harassing", "In person, chat or call"],
        ["Asked to pay outside the app", "Cash, transfers, extra fees"],
        ["No-show or left early", "Without telling you"],
        ["Not the person on the profile", ""],
        ["Something else", ""],
      ]),
    };
  }
}

export default function ReportCaregiverScreen() {
  const demo = useDemo();
  const router = useRouter();
  const cg = caregiver(demo.selectedCaregiver);
  const v = useLogic(Logic, { persist: "reportReason" });
  const justBlock = (e: React.MouseEvent) => {
    e.preventDefault();
    blockCaregiver(cg.id);
    toast(`${cg.first} is blocked. She isn't told.`);
    router.push("/visits");
  };
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
        <AppHeader active="/search" />
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
            href="/search"
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
            48 caregivers
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img
              src="/images/nirmala.png"
              alt=""
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                flexShrink: "0",
              }}
            />
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
                {cg.name}
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>Caregiver · Colombo 05</span>
            </div>
          </div>
          <div
            style={{ height: "320px", border: "1px solid #E2E2E2", borderRadius: "16px", background: "#F6F6F6" }}
          ></div>
        </main>
        <Link
          href="/profile"
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
            width: "min(560px, calc(100% - 32px))",
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
              <span
                style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}
              >{`Report ${cg.first}`}</span>
              <span style={{ fontSize: "14px", color: "#545454" }}>Step 1 of 2 · what happened?</span>
            </span>
            <Link
              href="/profile"
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
          <div
            style={{
              borderRadius: "14px",
              background: "#FFEFED",
              color: "#C11500",
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
              fontWeight: "700",
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
            <span style={{ flex: "1" }}>Is someone in danger right now?</span>
            <Link
              href="/safety-help"
              style={{
                height: "32px",
                padding: "0 14px",
                borderRadius: "16px",
                background: "#E11900",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              Get help now
            </Link>
          </div>
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
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", alignItems: "center" }}>
            <Link
              href="/profile"
              onClick={justBlock}
              style={{ fontSize: "13px", fontWeight: "700", textDecoration: "underline" }}
            >
              {`Just block ${cg.first}`}
            </Link>
            <span style={{ display: "flex", gap: "10px" }}>
              <Link
                href="/profile"
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
                Cancel
              </Link>
              <Link
                href="/report-details"
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
                Continue
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
