"use client";

import Link from "next/link";
import { Fragment } from "react";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { r: 0 };
  }
  renderVals() {
    const R = [
      ["I'm arranging care for family", "Find and book caregivers, follow visits, add tasks"],
      ["I'm a caregiver", "Get verified, set your rate, get paid every Friday"],
    ];
    const roles = R.map((r, i) => {
      const on = this.state.r === i;
      return {
        title: r[0],
        note: r[1],
        pressed: on ? "true" : "false",
        border: on ? "2px solid #000000" : "1px solid #E2E2E2",
        dot: on ? "#000000" : "transparent",
        ring: on ? "2px solid #000000" : "2px solid #A6A6A6",
        pick: () => this.setState({ r: i }),
      };
    });
    return { roles };
  }
}

export default function SignupRoleScreen() {
  const v = useLogic(Logic, { persist: "signupRole" });
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
      <div style={{ flex: "1", minHeight: "900px", display: "flex", flexWrap: "wrap" }}>
        <section
          style={{
            flex: "0 1 520px",
            background: "#000000",
            color: "#FFFFFF",
            padding: "40px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "18px", fontWeight: "800" }}
          >
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "13px",
                background: "#FFFFFF",
                color: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              g
            </span>
            Gloocan
          </Link>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "420px" }}>
            <h2
              style={{ margin: "0", fontSize: "36px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.03em" }}
            >
              Trusted care for the people you love.
            </h2>
            <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#D6D6D6" }}>
              Verified caregivers, live visit updates from anywhere, and you pay only after the visit.
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
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
              Every caregiver ID and police checked
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
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
              Follow visits live from Colombo or Melbourne
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
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
              Payment held until you approve
            </span>
          </div>
        </section>
        <section
          style={{
            flex: "999 1 480px",
            padding: "48px 32px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                Create account · step 1 of 3
              </span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "4px" }}>
                <span style={{ height: "4px", borderRadius: "2px", background: "#000000" }}></span>
                <span style={{ height: "4px", borderRadius: "2px", background: "#E2E2E2" }}></span>
                <span style={{ height: "4px", borderRadius: "2px", background: "#E2E2E2" }}></span>
              </div>
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
                How will you use Gloocan?
              </h1>
            </div>
            <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {v.roles.map((r: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    role="radio"
                    aria-checked={r.pressed}
                    onClick={r.pick}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "16px",
                      borderRadius: "16px",
                      border: r.border,
                      background: "#FFFFFF",
                      color: "#000000",
                      textAlign: "left",
                      fontFamily: "var(--font-figtree), sans-serif",
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "10px",
                        boxSizing: "border-box",
                        border: r.ring,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                      }}
                    >
                      <span style={{ width: "10px", height: "10px", borderRadius: "5px", background: r.dot }}></span>
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "800" }}>{r.title}</span>
                      <span style={{ fontSize: "13px", color: "#545454" }}>{r.note}</span>
                    </span>
                  </button>
                </Fragment>
              ))}
            </div>
            <Link
              href="/signup-details"
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
                width: "100%",
              }}
            >
              Continue
            </Link>
            <span style={{ fontSize: "14px" }}>
              {"Already have an account? "}
              <Link href="/login" style={{ fontWeight: "800", textDecoration: "underline" }}>
                Log in
              </Link>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
