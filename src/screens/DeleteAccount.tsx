"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { useRouter } from "next/navigation";
import { toast } from "@/components/Toaster";
import { mutate, useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { done: false };
  }
  renderVals() {
    const { demo, router } = this.props;
    const d = this.state.done || demo.weekly.status === "ended";
    return {
      mark: d ? "#05944F" : "transparent",
      ring: d ? "none" : "2px solid #A6A6A6",
      fix: () => this.setState({ done: !this.state.done }),
      bBg: d ? "#FFEFED" : "#EEEEEE",
      bFg: d ? "#C11500" : "#545454",
      btn: d ? "Delete my account" : "Finish 1 thing first",
      remove: (e) => {
        e.preventDefault();
        if (!d) return toast("End weekly care with Nirmala first");
        mutate((s) => {
          s.ui.deleteScheduled = true;
          s.session.loggedIn = false;
        });
        router.push("/delete-scheduled");
      },
    };
  }
}

export default function DeleteAccountScreen() {
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
          <AccountNav active="/security" />
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link
              href="/privacy"
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
              Privacy
            </Link>
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
                Delete your account?
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                {"Amma's and Appachchi's profiles, tasks and messages are deleted after 30 days."}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
              <div style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#545454",
                  }}
                >
                  Before you go
                </span>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <button
                    onClick={v.fix}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      border: "none",
                      background: "transparent",
                      textAlign: "left",
                      fontFamily: "var(--font-figtree), sans-serif",
                    }}
                  >
                    <span
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "11px",
                        boxSizing: "border-box",
                        border: v.ring,
                        background: v.mark,
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="11"
                        height="11"
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
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>End weekly care with Nirmala</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>
                        LKR 23,760 is held · click to preview it done
                      </span>
                    </span>
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
                      <path d="M9 6l6 6-6 6"></path>
                    </svg>
                  </button>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
                    <span
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "11px",
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
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>No open disputes or reports</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>All settled</span>
                    </span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
                    <span
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "11px",
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
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>Refunds finished</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>LKR 2,640 arrived 6 Oct</span>
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "12px" }}>
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
                    <span style={{ color: "#545454" }}>Kept by law</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>
                      Receipts · 7 years
                      <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                        Tax records only, not care details
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
                    <span style={{ color: "#545454" }}>Ruwan</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>
                      Keeps his own account
                      <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                        {"Loses access to Amma's profile"}
                      </span>
                    </span>
                  </div>
                </div>
                <span style={{ fontSize: "13px", color: "#545454" }}>
                  {"Want a copy first? "}
                  <Link
                    href="/download-data"
                    style={{ color: "#000000", fontWeight: "700", textDecoration: "underline" }}
                  >
                    Download your data
                  </Link>
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link
                href="/delete-scheduled"
                onClick={v.remove}
                style={{
                  height: "44px",
                  padding: "0 22px",
                  borderRadius: "22px",
                  background: v.bBg,
                  color: v.bFg,
                  fontSize: "15px",
                  fontWeight: "700",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {v.btn}
              </Link>
              <Link
                href="/privacy"
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
                Keep my account
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
