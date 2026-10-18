"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic } from "@/lib/logic";
import { openChat } from "@/lib/actions";
import { mutate, useDemo } from "@/lib/store";

class Logic extends DCLogic {
  renderVals() {
    const seen = this.props.demo.incidentSeen;
    return {
      notSeen: !seen,
      seen,
      ack: () =>
        mutate((d) => {
          d.incidentSeen = true;
          d.notices = d.notices.map((n) => (n.href === "/incident-alert" ? { ...n, unread: false } : n));
        }),
    };
  }
}

export default function IncidentAlertScreen() {
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
      <AppHeader active="/visits" />
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
            <Link
              href="/live-visit"
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
              Live visit
            </Link>
            <div
              style={{
                borderRadius: "20px",
                background: "#FFEFED",
                padding: "22px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "8px", color: "#C11500" }}>
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
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#C11500",
                  }}
                >
                  Incident · needs a doctor today
                </span>
              </span>
              <h1 style={{ margin: "0", fontSize: "32px", fontWeight: "800", letterSpacing: "-0.025em" }}>
                Amma had a fall
              </h1>
              <span style={{ fontSize: "14px", color: "#333333" }}>
                10:44 AM · during the live visit · Ruwan was told too
              </span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <img
                src="/images/nirmala.png"
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
              <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "13px", fontWeight: "700" }}>Nirmala · 10:42 AM</span>
                <span style={{ fontSize: "15px", color: "#333333", lineHeight: "1.5", maxWidth: "620px" }}>
                  Amma slipped getting up from the chair. I held her arm and she sat down on the floor. No bleeding.
                  Left hip hurts a little.
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <div
                style={{
                  flex: "1 1 280px",
                  height: "180px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #8FA58C, #4B5E49)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "12px 14px",
                  boxSizing: "border-box",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                Photo · Amma sitting with ice pack
              </div>
              <div style={{ flex: "1 1 260px" }}>
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
                    <span style={{ color: "#545454" }}>Amma now</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>
                      Sitting, talking
                      <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                        Updated 10:51 AM
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
                    <span style={{ color: "#545454" }}>Pain</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>Left hip · mild</span>
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
                    <span style={{ color: "#545454" }}>Visit</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>
                      Still live
                      <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                        Nirmala is with her
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {v.seen ? (
              <>
                <div
                  style={{
                    borderRadius: "14px",
                    background: "#E6F4EC",
                    color: "#05663A",
                    padding: "12px 14px",
                    fontSize: "13px",
                    fontWeight: "600",
                    lineHeight: "1.45",
                    display: "flex",
                    gap: "8px",
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
                  <span>{"You saw this at 10:46 AM. Nirmala knows you're on it."}</span>
                </div>
              </>
            ) : null}
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
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Act now</h2>
            <Link
              href="/voice-call"
              onClick={() => openChat("nirmala")}
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
                <path d="M5 4h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"></path>
              </svg>
              Call Nirmala
            </Link>
            <a
              href="tel:1990"
              style={{
                height: "44px",
                borderRadius: "22px",
                background: "#FFEFED",
                color: "#C11500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              Call 1990 ambulance
            </a>
            {v.notSeen ? (
              <>
                <button
                  onClick={v.ack}
                  style={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "20px",
                    border: "none",
                    background: "#EEEEEE",
                    color: "#000000",
                    font: "600 14px var(--font-figtree), sans-serif",
                  }}
                >
                  {"I've seen this"}
                </button>
              </>
            ) : null}
            {v.seen ? (
              <>
                <Link
                  href="/incident-detail"
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
                    width: "100%",
                  }}
                >
                  What happens next
                </Link>
              </>
            ) : null}
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
                <span style={{ color: "#545454" }}>Family doctor</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  Dr. S. Gunasekara
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    +94 11 ••• 8890
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
                <span style={{ color: "#545454" }}>Also told</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  Ruwan
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    Melbourne · 3:14 PM there
                  </span>
                </span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
