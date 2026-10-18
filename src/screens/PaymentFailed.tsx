"use client";

import Link from "next/link";
import { Fragment } from "react";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { useRouter } from "next/navigation";
import { bookDraft, cardLabel, cardShort } from "@/lib/actions";
import { draftSummary } from "@/lib/selectors";
import { useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { m: 0 };
  }
  renderVals() {
    const { demo, router } = this.props;
    const declined = demo.cards.find((c) => c.id === demo.checkoutCard) ?? demo.cards[0];
    const list = [
      ...demo.cards
        .filter((c) => c.id !== declined?.id)
        .map((c) => [cardLabel(c), `${c.bank} · expires ${c.expiry}`, cardShort(c)]),
      ["Card from abroad", "AUD, GBP or USD", "Card from abroad"],
      ["Add a new card", "", ""],
    ];
    const methods = list.map((r, i) => {
      const on = this.state.m === i;
      return {
        title: r[0],
        note: r[1] || "",
        checked: on ? "true" : "false",
        sep: i === 0 ? "none" : "1px solid #E2E2E2",
        bg: on ? "#F6F6F6" : "#FFFFFF",
        ring: on ? "2px solid #000000" : "2px solid #A6A6A6",
        dot: on ? "#000000" : "transparent",
        pick: () => this.setState({ m: i }),
      };
    });
    const s = draftSummary(demo);
    const chosen = list[Math.min(this.state.m, list.length - 1)];
    return {
      methods,
      s,
      declined: declined ? `${cardShort(declined).replace("MC", "Mastercard")} was declined` : "Your card was declined",
      tryAgain: declined ? `Try ${cardShort(declined).split(" ")[0].replace("MC", "Mastercard")} again` : "Try again",
      body: `Your bank didn't approve the hold of ${s.total}. Nothing was charged. This often happens with a new or foreign card, or a daily limit.`,
      saved: `Your booking with ${s.cg.first} is saved for 15 minutes`,
      payLabel: `Pay ${s.total} & send request`,
      pay: (e) => {
        e.preventDefault();
        if (!chosen[2]) return router.push("/payment-methods");
        bookDraft(chosen[2]);
        router.push("/confirmed");
      },
    };
  }
}

export default function PaymentFailedScreen() {
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
      <header style={{ borderBottom: "1px solid #E2E2E2" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "14px 24px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            gap: "16px",
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
          </Link>
          <span style={{ flex: "1" }}></span>
          <Link
            href="/checkout"
            aria-label="Back to checkout"
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
          </Link>
        </div>
      </header>
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
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
            <div
              style={{
                borderRadius: "16px",
                background: "#FFEFED",
                padding: "16px 18px",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "18px",
                  background: "#E11900",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0",
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
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "17px", fontWeight: "800", color: "#C11500" }}>{v.declined}</span>
                <span style={{ fontSize: "14px", color: "#333333", lineHeight: "1.5" }}>{v.body}</span>
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
                Try another way to pay
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>{v.saved}</span>
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
              {v.methods.map((r: any, i1: number) => (
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <Link
                href="/confirmed"
                onClick={v.pay}
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
                {v.payLabel}
              </Link>
              <Link
                href="/checkout"
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
                {v.tryAgain}
              </Link>
            </div>
            <span style={{ fontSize: "13px", color: "#545454" }}>
              {"Still stuck? "}
              <Link href="/support-chat" style={{ color: "#000000", fontWeight: "700", textDecoration: "underline" }}>
                Chat with us
              </Link>
              {' · or ask your bank to allow payments to "GLOOCAN LK".'}
            </span>
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
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Your booking</h2>
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
                <span style={{ color: "#545454" }}>Caregiver</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{v.s.cg.name}</span>
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
                <span style={{ color: "#545454" }}>When</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  {v.s.when}
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    {v.s.time}
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
                <span style={{ color: "#545454" }}>Total</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{v.s.total}</span>
              </div>
            </div>
            <span style={{ fontSize: "12px", color: "#545454" }}>Held until 3:39 PM</span>
          </aside>
        </div>
      </main>
    </div>
  );
}
