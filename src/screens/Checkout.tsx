"use client";

import Link from "next/link";
import { Fragment } from "react";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { method: 0 };
  }
  renderVals() {
    const M = [
      ["VISA", "#1A1F71", "Visa ·· 4417", "Expires 08/28 · default"],
      ["MC", "#333333", "Mastercard ·· 9012", "Sampath Bank · expires 01/27"],
      ["INTL", "#545454", "Card from abroad", "Pay in AUD, GBP or USD · we convert"],
    ];
    const methods = M.map((m, i) => {
      const on = this.state.method === i;
      return {
        logo: m[0],
        logoBg: m[1],
        title: m[2],
        note: m[3],
        checked: on ? "true" : "false",
        sep: i === 0 ? "none" : "1px solid #E2E2E2",
        bg: on ? "#F6F6F6" : "#FFFFFF",
        ring: on ? "2px solid #000000" : "2px solid #A6A6A6",
        dot: on ? "#000000" : "transparent",
        pick: () => this.setState({ method: i }),
      };
    });
    return { methods };
  }
}

export default function CheckoutScreen() {
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
      <header style={{ borderBottom: "1px solid #E2E2E2" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "14px 24px",
            boxSizing: "border-box",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "12px 18px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "18px",
              fontWeight: "800",
              letterSpacing: "-0.02em",
            }}
          >
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "13px",
                background: "#000000",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              g
            </span>
            Gloocan
          </Link>{" "}
          <ol
            aria-label="Booking steps"
            style={{
              listStyle: "none",
              margin: "0 auto",
              padding: "0",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            <li>
              <Link
                href="/book"
                style={{
                  height: "30px",
                  padding: "0 12px",
                  borderRadius: "15px",
                  background: "#E6F4EC",
                  color: "#05663A",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <svg
                  width="14"
                  height="14"
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
                {"Visit & tasks"}
              </Link>
            </li>{" "}
            <li
              style={{
                height: "30px",
                padding: "0 12px",
                borderRadius: "15px",
                background: "#000000",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>2</span>
              {"Review & pay"}
            </li>
          </ol>{" "}
          <Link
            href="/book"
            aria-label="Back to visit details"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "18px",
              background: "#EEEEEE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="18"
              height="18"
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
          </Link>
        </div>
      </header>{" "}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 24px 50px",
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "38px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
          <h1
            style={{ margin: "0", fontSize: "32px", lineHeight: "1.05", fontWeight: "800", letterSpacing: "-0.03em" }}
          >
            Review and pay
          </h1>{" "}
          <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Pay with</h2>{" "}
            <div
              role="radiogroup"
              aria-label="Payment method"
              style={{
                border: "1px solid #E2E2E2",
                borderRadius: "14px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {v.methods.map((m: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    role="radio"
                    aria-checked={m.checked}
                    onClick={m.pick}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "14px 16px",
                      border: "none",
                      borderTop: m.sep,
                      background: m.bg,
                      color: "#000000",
                      textAlign: "left",
                      fontFamily: "var(--font-figtree), sans-serif",
                    }}
                  >
                    <span
                      style={{
                        width: "40px",
                        height: "28px",
                        borderRadius: "6px",
                        background: m.logoBg,
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: "800",
                        letterSpacing: "0.04em",
                        flexShrink: "0",
                      }}
                    >
                      {m.logo}
                    </span>{" "}
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>{m.title}</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>{m.note}</span>
                    </span>{" "}
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "9px",
                        boxSizing: "border-box",
                        border: m.ring,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ width: "10px", height: "10px", borderRadius: "5px", background: m.dot }}></span>
                    </span>
                  </button>
                </Fragment>
              ))}
            </div>{" "}
            <Link
              href="/checkout"
              style={{
                alignSelf: "flex-start",
                height: "36px",
                padding: "0 14px",
                borderRadius: "18px",
                background: "#EEEEEE",
                display: "flex",
                alignItems: "center",
                gap: "8px",
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
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12h14"></path>
              </svg>
              Add a card
            </Link>
          </section>{" "}
          <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>How your money is protected</h2>{" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" }}>
              <div
                style={{
                  background: "#F6F6F6",
                  borderRadius: "12px",
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: "800", color: "#545454" }}>1 · NOW</span>
                <span style={{ fontSize: "14px", fontWeight: "700" }}>Held on your card</span>
                <span style={{ fontSize: "13px", color: "#545454", lineHeight: "1.45" }}>
                  Released back if Nirmala declines.
                </span>
              </div>{" "}
              <div
                style={{
                  background: "#F6F6F6",
                  borderRadius: "12px",
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: "800", color: "#545454" }}>2 · SAT 17</span>
                <span style={{ fontSize: "14px", fontWeight: "700" }}>Visit happens</span>
                <span style={{ fontSize: "13px", color: "#545454", lineHeight: "1.45" }}>
                  Check-in, tasks and notes live.
                </span>
              </div>{" "}
              <div
                style={{
                  background: "#F6F6F6",
                  borderRadius: "12px",
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: "800", color: "#545454" }}>3 · AFTER</span>
                <span style={{ fontSize: "14px", fontWeight: "700" }}>You approve</span>
                <span style={{ fontSize: "13px", color: "#545454", lineHeight: "1.45" }}>
                  Then Nirmala is paid. Problem? It stays on hold.
                </span>
              </div>
            </div>
          </section>{" "}
          <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.55", color: "#545454", maxWidth: "640px" }}>
            {"Free to cancel until Fri 16 Oct, 9:00 AM. Within 24 hours you get 50% back. By paying you agree to the "}
            <Link href="/" style={{ textDecoration: "underline", color: "#000000" }}>
              booking terms
            </Link>
            .
          </p>
        </div>{" "}
        <aside
          aria-label="Booking summary"
          style={{
            flex: "1 1 320px",
            maxWidth: "400px",
            minWidth: "0",
            border: "1px solid #E2E2E2",
            borderRadius: "16px",
            padding: "18px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/images/nirmala.png"
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
            />
            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "15px", fontWeight: "800" }}>Companionship with Nirmala</span>
              <span style={{ fontSize: "12px", color: "#545454" }}>For Amma · Colombo 05</span>
            </span>
          </div>{" "}
          <div style={{ border: "1px solid #E2E2E2", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 14px", fontSize: "14px" }}>
              <span style={{ color: "#545454" }}>When</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>
                Sat 17 Oct
                <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                  9:00 – 12:00
                </span>
              </span>
            </div>{" "}
            <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>{" "}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 14px", fontSize: "14px" }}>
              <span style={{ color: "#545454" }}>Tasks</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>Routine + 1 extra</span>
            </div>{" "}
            <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>{" "}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 14px", fontSize: "14px" }}>
              <span style={{ color: "#545454" }}>3 hrs × LKR 1,200</span>
              <span style={{ fontWeight: "700" }}>LKR 3,600</span>
            </div>{" "}
            <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>{" "}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 14px", fontSize: "14px" }}>
              <span style={{ color: "#545454" }}>{"Booking & safety fee"}</span>
              <span style={{ fontWeight: "700" }}>LKR 360</span>
            </div>{" "}
            <div style={{ height: "1px", background: "#E2E2E2" }}></div>{" "}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "14px",
                background: "#EAF0FD",
              }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#1A4FB5" }}>Held in escrow</span>
                <span style={{ fontSize: "12px", color: "#333333" }}>Paid to Nirmala after you approve</span>
              </span>
              <span style={{ fontSize: "20px", fontWeight: "800" }}>LKR 3,960</span>
            </div>
          </div>{" "}
          <Link
            href="/add-promo"
            style={{ fontSize: "13px", fontWeight: "600", color: "#545454", textDecoration: "underline" }}
          >
            Add promo or referral code
          </Link>{" "}
          <Link
            href="/confirmed"
            style={{
              height: "44px",
              borderRadius: "22px",
              background: "#000000",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "15px",
              fontWeight: "700",
            }}
          >
            {"Pay & send request"}
          </Link>{" "}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              fontSize: "12px",
              color: "#545454",
              marginTop: "-6px",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="5" y="11" width="14" height="9" rx="2"></rect>
              <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
            </svg>
            Card details handled by our payment partner
          </span>{" "}
          <Link
            href="/payment-failed"
            style={{ fontSize: "12px", color: "#545454", textAlign: "center", textDecoration: "underline" }}
          >
            Preview: card declined
          </Link>
        </aside>
      </main>
    </div>
  );
}
