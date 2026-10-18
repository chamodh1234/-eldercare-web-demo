"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic } from "@/lib/logic";
import { mutate, useDemo } from "@/lib/store";

class Logic extends DCLogic {
  renderVals() {
    const { demo } = this.props;
    const blocked = demo.blocked.length > 0;
    return {
      blocked,
      none: !blocked,
      flip: () =>
        mutate((d) => {
          if (d.blocked.length) {
            d.ui.unblocked = d.blocked;
            d.blocked = [];
          } else {
            d.blocked = d.ui.unblocked ?? [{ id: "rohini", when: "2 Oct", from: "from chat requests" }];
          }
        }),
    };
  }
}

export default function BlockedScreen() {
  const demo = useDemo();
  const v = useLogic(Logic, { props: { demo } });
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
                Blocked caregivers
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                {"They can't see your jobs, message you or get your requests"}
              </span>
            </div>
            {v.blocked ? (
              <>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
                    <img
                      src="/images/rohini.png"
                      alt=""
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        display: "block",
                        flexShrink: "0",
                      }}
                    />
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "700" }}>Rohini Fernando</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>Blocked 2 Oct · from chat requests</span>
                    </span>
                    <button
                      onClick={v.flip}
                      style={{
                        height: "32px",
                        padding: "0 14px",
                        borderRadius: "16px",
                        border: "none",
                        background: "#EEEEEE",
                        font: "600 13px var(--font-figtree), sans-serif",
                      }}
                    >
                      Unblock
                    </button>
                  </div>
                </div>
              </>
            ) : null}
            {v.none ? (
              <>
                <div
                  style={{
                    borderRadius: "16px",
                    background: "#F6F6F6",
                    padding: "24px",
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#545454",
                  }}
                >
                  {"Nobody is blocked. "}
                  <button
                    onClick={v.flip}
                    style={{
                      border: "none",
                      background: "none",
                      padding: "0",
                      font: "700 14px var(--font-figtree), sans-serif",
                      textDecoration: "underline",
                    }}
                  >
                    Undo
                  </button>
                </div>
              </>
            ) : null}
            <div
              style={{
                borderRadius: "14px",
                background: "#EAF0FD",
                color: "#1A4FB5",
                padding: "12px 14px",
                fontSize: "13px",
                fontWeight: "600",
                lineHeight: "1.45",
                display: "flex",
                gap: "8px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"></path>
              </svg>
              <span>
                {"Blocking is private. They're never told. If someone made you feel unsafe, report them too."}
              </span>
            </div>
            <Link href="/report-caregiver" style={{ fontSize: "14px", fontWeight: "700", color: "#C11500" }}>
              Report a caregiver
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
