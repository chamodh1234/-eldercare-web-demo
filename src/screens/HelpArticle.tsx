"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { article } from "@/lib/mock/help";
import { mutate, useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { v: 0 };
  }
  renderVals() {
    const V = ["Yes", "No"];
    const votes = V.map((v, i) => {
      const on = this.state.v === i + 1;
      return {
        label: v,
        pressed: on ? "true" : "false",
        bg: on ? "#000000" : "#EEEEEE",
        fg: on ? "#FFFFFF" : "#000000",
        pick: () => this.setState({ v: i + 1 }),
      };
    });
    return {
      votes,
      thanks:
        this.state.v === 1
          ? "Thanks! Glad it helped."
          : this.state.v === 2
            ? "Sorry about that. Chat with us and we'll sort it out."
            : "",
    };
  }
}

export default function HelpArticleScreen() {
  const demo = useDemo();
  const art = article(demo.ui.article);
  const v = useLogic(Logic);
  const open = (id: string) => {
    mutate((d) => {
      d.ui.article = id === art.id ? "card-charged" : id;
    });
    window.scrollTo({ top: 0 });
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
        <Link
          href="/help-centre"
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
          Help centre
        </Link>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                {art.topic}
              </span>
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
                  {art.title}
                </h1>
              </div>
              <span style={{ fontSize: "13px", color: "#545454" }}>Updated 2 Oct 2026 · 2 min read</span>
            </div>
            {art.id === "card-charged" ? (
              <>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#333333", maxWidth: "680px" }}>
                  {"We "}
                  <b>hold</b>
                  {
                    " the amount on your card when you book. The caregiver is paid only after you approve the visit, or 24 hours after check-out if you do nothing."
                  }
                </p>
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
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>You book</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>Amount is held on your card, not taken</span>
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
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>Visit happens</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>
                        Check-in, tasks and check-out are recorded
                      </span>
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
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>You approve</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>Or auto-approve after 24 hrs</span>
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
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#333333" }}>Caregiver is paid</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>Your receipt appears in Payments</span>
                    </span>
                  </li>
                </ol>
                <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Weekly care</h2>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#333333", maxWidth: "680px" }}>
                  {
                    "Each week is held on Monday for that week's visits. Skip a day by 9 AM the day before and it is never charged."
                  }
                </p>
                <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Paying from abroad</h2>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#333333", maxWidth: "680px" }}>
                  Any international card works. Your bank converts from LKR; we show the LKR amount before you pay.
                </p>
              </>
            ) : (
              <>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#333333", maxWidth: "680px" }}>
                  {art.intro}
                </p>
                {art.sections.map((sec) => (
                  <Fragment key={sec.h}>
                    <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>{sec.h}</h2>
                    <p
                      style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#333333", maxWidth: "680px" }}
                    >
                      {sec.p}
                    </p>
                  </Fragment>
                ))}
              </>
            )}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "10px",
                borderTop: "1px solid #E2E2E2",
                paddingTop: "16px",
              }}
            >
              <span style={{ fontSize: "15px", fontWeight: "800", marginRight: "6px" }}>Did this answer it?</span>
              {v.votes.map((v: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    aria-pressed={v.pressed}
                    onClick={v.pick}
                    style={{
                      height: "36px",
                      padding: "0 18px",
                      borderRadius: "18px",
                      border: "none",
                      background: v.bg,
                      color: v.fg,
                      font: "700 13px var(--font-figtree), sans-serif",
                    }}
                  >
                    {v.label}
                  </button>
                </Fragment>
              ))}
              <span style={{ fontSize: "13px", color: "#545454" }}>{v.thanks}</span>
            </div>
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
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Related</h2>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <Link
                href="/help-article"
                onClick={() => open("refunds")}
                style={{ display: "flex", padding: "12px 14px", fontSize: "13px", fontWeight: "600" }}
              >
                How refunds work
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "0px" }}></div>
              <Link
                href="/help-article"
                onClick={() => open("problem-visit")}
                style={{ display: "flex", padding: "12px 14px", fontSize: "13px", fontWeight: "600" }}
              >
                Problem with a visit
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "0px" }}></div>
              <Link
                href="/help-article"
                onClick={() => open("cancel-move")}
                style={{ display: "flex", padding: "12px 14px", fontSize: "13px", fontWeight: "600" }}
              >
                Cancel or move a visit
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "0px" }}></div>
              <Link
                href="/help-article"
                onClick={() => open("payment-methods")}
                style={{ display: "flex", padding: "12px 14px", fontSize: "13px", fontWeight: "600" }}
              >
                Payment methods
              </Link>
            </div>
            <Link
              href="/support-chat"
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
              Chat with us
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
