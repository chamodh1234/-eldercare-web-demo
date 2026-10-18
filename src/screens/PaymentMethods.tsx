"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { def: false };
  }
  renderVals() {
    const tg = (k) => {
      const on = this.state[k];
      return {
        pressed: on ? "true" : "false",
        track: on ? "#05944F" : "#CBCBCB",
        align: on ? "flex-end" : "flex-start",
        flip: () => this.setState({ [k]: !on }),
      };
    };
    return { def: tg("def") };
  }
}

export default function PaymentMethodsScreen() {
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
          <AccountNav active="/payment-methods" />
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
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
                Payment methods
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                Used to hold payment until you approve each visit
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
              <div
                style={{ flex: "999 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 16px" }}>
                    <span
                      style={{
                        width: "48px",
                        height: "32px",
                        borderRadius: "6px",
                        background: "#1A1F71",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: "800",
                      }}
                    >
                      VISA
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>Visa ·· 4417</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>Expires 08/28 · Commercial Bank</span>
                    </span>
                    <span
                      style={{
                        height: "24px",
                        padding: "0 10px",
                        borderRadius: "12px",
                        background: "#E6F4EC",
                        color: "#05663A",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12px",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Default
                    </span>
                    <Link
                      href="/payment-methods"
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
                      Remove
                    </Link>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "78px" }}></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 16px" }}>
                    <span
                      style={{
                        width: "48px",
                        height: "32px",
                        borderRadius: "6px",
                        background: "#333333",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: "800",
                      }}
                    >
                      MC
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>Mastercard ·· 9012</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>Expires 01/27 · Sampath Bank</span>
                    </span>
                    <Link
                      href="/payment-methods"
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
                      Make default
                    </Link>
                    <Link
                      href="/payment-methods"
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
                      Remove
                    </Link>
                  </div>
                </div>
                <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800", marginTop: "8px" }}>
                  Other ways to pay
                </h2>
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
                    <span style={{ color: "#545454" }}>Bank transfer</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>
                      For 4+ visits
                      <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                        Pay by reference number · 1 working day
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
                    <span style={{ color: "#545454" }}>Pay from abroad</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>
                      AUD · GBP · USD
                      <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                        Any international card · we show the LKR amount
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ flex: "1 1 300px", minWidth: "0" }}>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Add a card</h2>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                      <span style={{ fontSize: "13px", fontWeight: "600" }}>Name on card</span>
                      <input
                        defaultValue="Dilani Fernando"
                        style={{
                          height: "44px",
                          border: "1px solid #E2E2E2",
                          outline: "none",
                          borderRadius: "12px",
                          background: "#FFFFFF",
                          color: "#000000",
                          padding: "0 12px",
                          font: "500 14px var(--font-figtree), sans-serif",
                          boxSizing: "border-box",
                          width: "100%",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                      <span style={{ fontSize: "13px", fontWeight: "600" }}>Card number</span>
                      <input
                        defaultValue="•••• •••• •••• ••••"
                        style={{
                          height: "44px",
                          border: "1px solid #E2E2E2",
                          outline: "none",
                          borderRadius: "12px",
                          background: "#FFFFFF",
                          color: "#000000",
                          padding: "0 12px",
                          font: "500 14px var(--font-figtree), sans-serif",
                          boxSizing: "border-box",
                          width: "100%",
                        }}
                      />
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                        <span style={{ fontSize: "13px", fontWeight: "600" }}>Expiry</span>
                        <input
                          defaultValue="MM / YY"
                          style={{
                            height: "44px",
                            border: "1px solid #E2E2E2",
                            outline: "none",
                            borderRadius: "12px",
                            background: "#FFFFFF",
                            color: "#000000",
                            padding: "0 12px",
                            font: "500 14px var(--font-figtree), sans-serif",
                            boxSizing: "border-box",
                            width: "100%",
                          }}
                        />
                      </label>
                      <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                        <span style={{ fontSize: "13px", fontWeight: "600" }}>CVC</span>
                        <input
                          defaultValue="•••"
                          style={{
                            height: "44px",
                            border: "1px solid #E2E2E2",
                            outline: "none",
                            borderRadius: "12px",
                            background: "#FFFFFF",
                            color: "#000000",
                            padding: "0 12px",
                            font: "500 14px var(--font-figtree), sans-serif",
                            boxSizing: "border-box",
                            width: "100%",
                          }}
                        />
                      </label>
                    </div>
                    <div style={{ border: "1px solid #E2E2E2", borderRadius: "12px" }}>
                      <button
                        aria-pressed={v.def.pressed}
                        onClick={v.def.flip}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px 16px",
                          border: "none",
                          background: "transparent",
                          color: "#000000",
                          textAlign: "left",
                          fontFamily: "var(--font-figtree), sans-serif",
                        }}
                      >
                        <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "14px", fontWeight: "700" }}>Make this my default</span>
                        </span>
                        <span
                          style={{
                            width: "40px",
                            height: "24px",
                            borderRadius: "12px",
                            background: v.def.track,
                            padding: "3px",
                            boxSizing: "border-box",
                            display: "flex",
                            justifyContent: v.def.align,
                            flexShrink: "0",
                          }}
                        >
                          <span
                            style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}
                          ></span>
                        </span>
                      </button>
                    </div>
                    <Link
                      href="/payment-methods"
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
                      Add card
                    </Link>
                    <span
                      style={{ display: "flex", gap: "6px", alignItems: "center", fontSize: "12px", color: "#545454" }}
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
                      Card details go straight to our payment partner.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
