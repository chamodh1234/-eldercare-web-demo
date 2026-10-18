"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { r1: true, r2: true, r3: true, r4: false, p1: true, p2: false, p3: false, p4: false };
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
    return {
      r1: tg("r1"),
      r2: tg("r2"),
      r3: tg("r3"),
      r4: tg("r4"),
      p1: tg("p1"),
      p2: tg("p2"),
      p3: tg("p3"),
      p4: tg("p4"),
    };
  }
}

export default function CareCircleScreen() {
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
          <AccountNav active="/care-circle" />
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "12px",
              }}
            >
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
                  {"Amma's care circle"}
                </h1>
                <span style={{ fontSize: "15px", color: "#545454" }}>
                  {"Family who can follow Amma's care. Each person signs in with their own phone."}
                </span>
              </div>
              <Link
                href="/invite"
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
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
                Invite family
              </Link>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <div style={{ overflowX: "auto" }}>
                <div style={{ minWidth: "640px" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "minmax(220px, 2fr) repeat(4, minmax(80px, 1fr))",
                      gap: "12px",
                      alignItems: "center",
                      padding: "12px 16px",
                      background: "#F6F6F6",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "#545454",
                      }}
                    >
                      Member
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "#545454",
                      }}
                    >
                      See updates
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "#545454",
                      }}
                    >
                      Message
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "#545454",
                      }}
                    >
                      Add tasks
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "#545454",
                      }}
                    >
                      {"Book & pay"}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "minmax(220px, 2fr) repeat(4, minmax(80px, 1fr))",
                      gap: "12px",
                      alignItems: "center",
                      padding: "12px 16px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img
                        src="/images/dilani.png"
                        alt=""
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          display: "block",
                          flexShrink: "0",
                        }}
                      />
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700" }}>Dilani (you)</span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>Daughter · Colombo · owner</span>
                      </span>
                    </span>
                    <span style={{ color: "#05663A" }}>
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
                    </span>
                    <span style={{ color: "#05663A" }}>
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
                    </span>
                    <span style={{ color: "#05663A" }}>
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
                    </span>
                    <span style={{ color: "#05663A" }}>
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
                    </span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2" }}></div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "minmax(220px, 2fr) repeat(4, minmax(80px, 1fr))",
                      gap: "12px",
                      alignItems: "center",
                      padding: "12px 16px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img
                        src="/images/ruwan.png"
                        alt=""
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          display: "block",
                          flexShrink: "0",
                        }}
                      />
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700" }}>Ruwan Fernando</span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>Son · Melbourne · seen today</span>
                      </span>
                    </span>
                    <button
                      aria-pressed={v.r1.pressed}
                      aria-label="Toggle"
                      onClick={v.r1.flip}
                      style={{
                        width: "40px",
                        height: "24px",
                        borderRadius: "12px",
                        border: "none",
                        background: v.r1.track,
                        padding: "3px",
                        display: "flex",
                        justifyContent: v.r1.align,
                      }}
                    >
                      <span
                        style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}
                      ></span>
                    </button>
                    <button
                      aria-pressed={v.r2.pressed}
                      aria-label="Toggle"
                      onClick={v.r2.flip}
                      style={{
                        width: "40px",
                        height: "24px",
                        borderRadius: "12px",
                        border: "none",
                        background: v.r2.track,
                        padding: "3px",
                        display: "flex",
                        justifyContent: v.r2.align,
                      }}
                    >
                      <span
                        style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}
                      ></span>
                    </button>
                    <button
                      aria-pressed={v.r3.pressed}
                      aria-label="Toggle"
                      onClick={v.r3.flip}
                      style={{
                        width: "40px",
                        height: "24px",
                        borderRadius: "12px",
                        border: "none",
                        background: v.r3.track,
                        padding: "3px",
                        display: "flex",
                        justifyContent: v.r3.align,
                      }}
                    >
                      <span
                        style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}
                      ></span>
                    </button>
                    <button
                      aria-pressed={v.r4.pressed}
                      aria-label="Toggle"
                      onClick={v.r4.flip}
                      style={{
                        width: "40px",
                        height: "24px",
                        borderRadius: "12px",
                        border: "none",
                        background: v.r4.track,
                        padding: "3px",
                        display: "flex",
                        justifyContent: v.r4.align,
                      }}
                    >
                      <span
                        style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}
                      ></span>
                    </button>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2" }}></div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "minmax(220px, 2fr) repeat(4, minmax(80px, 1fr))",
                      gap: "12px",
                      alignItems: "center",
                      padding: "12px 16px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img
                        src="/images/priya.png"
                        alt=""
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          display: "block",
                          flexShrink: "0",
                        }}
                      />
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700" }}>
                          {"Priya F. "}
                          <span
                            style={{
                              height: "24px",
                              padding: "0 10px",
                              borderRadius: "12px",
                              background: "#EAF0FD",
                              color: "#1A4FB5",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              fontSize: "12px",
                              fontWeight: "700",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Invited
                          </span>
                        </span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>Granddaughter · invited 2 days ago</span>
                      </span>
                    </span>
                    <button
                      aria-pressed={v.p1.pressed}
                      aria-label="Toggle"
                      onClick={v.p1.flip}
                      style={{
                        width: "40px",
                        height: "24px",
                        borderRadius: "12px",
                        border: "none",
                        background: v.p1.track,
                        padding: "3px",
                        display: "flex",
                        justifyContent: v.p1.align,
                      }}
                    >
                      <span
                        style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}
                      ></span>
                    </button>
                    <button
                      aria-pressed={v.p2.pressed}
                      aria-label="Toggle"
                      onClick={v.p2.flip}
                      style={{
                        width: "40px",
                        height: "24px",
                        borderRadius: "12px",
                        border: "none",
                        background: v.p2.track,
                        padding: "3px",
                        display: "flex",
                        justifyContent: v.p2.align,
                      }}
                    >
                      <span
                        style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}
                      ></span>
                    </button>
                    <button
                      aria-pressed={v.p3.pressed}
                      aria-label="Toggle"
                      onClick={v.p3.flip}
                      style={{
                        width: "40px",
                        height: "24px",
                        borderRadius: "12px",
                        border: "none",
                        background: v.p3.track,
                        padding: "3px",
                        display: "flex",
                        justifyContent: v.p3.align,
                      }}
                    >
                      <span
                        style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}
                      ></span>
                    </button>
                    <button
                      aria-pressed={v.p4.pressed}
                      aria-label="Toggle"
                      onClick={v.p4.flip}
                      style={{
                        width: "40px",
                        height: "24px",
                        borderRadius: "12px",
                        border: "none",
                        background: v.p4.track,
                        padding: "3px",
                        display: "flex",
                        justifyContent: v.p4.align,
                      }}
                    >
                      <span
                        style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              <div style={{ flex: "999 1 380px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Recent activity</h2>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div style={{ display: "flex", gap: "12px", padding: "10px 16px", fontSize: "13px" }}>
                    <img
                      src="/images/ruwan.png"
                      alt=""
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        display: "block",
                        flexShrink: "0",
                      }}
                    />
                    <span style={{ flex: "1" }}>
                      <b>Ruwan</b>
                      {' added a task for Fri 16: "Physio comes 9:30"'}
                    </span>
                    <span style={{ color: "#545454" }}>Tue</span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "56px" }}></div>
                  <div style={{ display: "flex", gap: "12px", padding: "10px 16px", fontSize: "13px" }}>
                    <img
                      src="/images/ruwan.png"
                      alt=""
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        display: "block",
                        flexShrink: "0",
                      }}
                    />
                    <span style={{ flex: "1" }}>
                      <b>Ruwan</b>
                      {" viewed the visit report for Sat 10 Oct"}
                    </span>
                    <span style={{ color: "#545454" }}>Sun</span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "56px" }}></div>
                  <div style={{ display: "flex", gap: "12px", padding: "10px 16px", fontSize: "13px" }}>
                    <img
                      src="/images/dilani.png"
                      alt=""
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        display: "block",
                        flexShrink: "0",
                      }}
                    />
                    <span style={{ flex: "1" }}>
                      <b>You</b>
                      {" invited Priya F."}
                    </span>
                    <span style={{ color: "#545454" }}>Thu</span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 260px",
                  borderRadius: "16px",
                  background: "#F6F6F6",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  fontSize: "13px",
                  lineHeight: "1.5",
                  color: "#333333",
                }}
              >
                <b style={{ fontSize: "14px", color: "#000000" }}>Who pays?</b>
                {
                  'Only you pay for bookings, unless someone has "Book & pay" switched on. They then use their own card.'
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
