"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { toast } from "@/components/Toaster";
import { maskPhone } from "@/lib/format";
import { mutate, useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { lock: true, bio: true, alerts: true };
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
    return { lock: tg("lock"), bio: tg("bio"), alerts: tg("alerts") };
  }
}

export default function SecurityScreen() {
  const demo = useDemo();
  const v: Record<string, any> = { ...useLogic(Logic, { persist: "security" }), devices: demo.devices };
  const signOut = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    mutate((d) => {
      d.devices = d.devices.filter((x) => x !== id);
    });
    toast("Signed out of that device");
  };
  const signOutOthers = (e: React.MouseEvent) => {
    e.preventDefault();
    mutate((d) => {
      d.devices = ["this"];
    });
    toast("Signed out everywhere else");
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>
          <AccountNav active="/security" />
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
                Security
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>{"Keep Amma's care details safe"}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
              <div style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <Link
                    href="/change-phone"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      color: "#000000",
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
                    <span style={{ flex: "1", fontSize: "14px", fontWeight: "700" }}>Mobile number</span>
                    <span style={{ fontSize: "13px", color: "#545454" }}>{maskPhone(demo.account.phone)}</span>
                    <span style={{ color: "#545454", display: "flex" }}>
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
                    </span>
                  </Link>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                  <Link
                    href="/privacy"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      color: "#000000",
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
                    <span style={{ flex: "1", fontSize: "14px", fontWeight: "700" }}>{"Privacy & your data"}</span>
                    <span style={{ color: "#545454", display: "flex" }}>
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
                    </span>
                  </Link>
                </div>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <button
                    aria-pressed={v.lock.pressed}
                    onClick={v.lock.flip}
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
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>Two-step login</span>
                      <span style={{ fontSize: "13px", color: "#545454" }}>Code plus your PIN on new devices</span>
                    </span>
                    <span
                      style={{
                        width: "40px",
                        height: "24px",
                        borderRadius: "12px",
                        background: v.lock.track,
                        padding: "3px",
                        boxSizing: "border-box",
                        display: "flex",
                        justifyContent: v.lock.align,
                        flexShrink: "0",
                      }}
                    >
                      <span
                        style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}
                      ></span>
                    </span>
                  </button>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                  <button
                    aria-pressed={v.bio.pressed}
                    onClick={v.bio.flip}
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
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>Use fingerprint on the app</span>
                      <span style={{ fontSize: "13px", color: "#545454" }}>Instead of the PIN</span>
                    </span>
                    <span
                      style={{
                        width: "40px",
                        height: "24px",
                        borderRadius: "12px",
                        background: v.bio.track,
                        padding: "3px",
                        boxSizing: "border-box",
                        display: "flex",
                        justifyContent: v.bio.align,
                        flexShrink: "0",
                      }}
                    >
                      <span
                        style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}
                      ></span>
                    </span>
                  </button>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                  <button
                    aria-pressed={v.alerts.pressed}
                    onClick={v.alerts.flip}
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
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>New sign-in alerts</span>
                      <span style={{ fontSize: "13px", color: "#545454" }}>Text me when a new device signs in</span>
                    </span>
                    <span
                      style={{
                        width: "40px",
                        height: "24px",
                        borderRadius: "12px",
                        background: v.alerts.track,
                        padding: "3px",
                        boxSizing: "border-box",
                        display: "flex",
                        justifyContent: v.alerts.align,
                        flexShrink: "0",
                      }}
                    >
                      <span
                        style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}
                      ></span>
                    </span>
                  </button>
                </div>
              </div>
              <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Signed in on</h2>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
                    <span
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="4" y="5" width="16" height="11" rx="1.5"></rect>
                        <path d="M2 19h20"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>This browser · Chrome on Mac</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>Colombo · now</span>
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
                      Active
                    </span>
                  </div>
                  {v.devices.includes("samsung") ? (
                    <>
                      <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
                        <span
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <rect x="7" y="3" width="10" height="18" rx="2"></rect>
                            <path d="M11 18h2"></path>
                          </svg>
                        </span>
                        <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "14px", fontWeight: "700" }}>Samsung A54</span>
                          <span style={{ fontSize: "12px", color: "#545454" }}>Colombo · 9:12 AM</span>
                        </span>
                        <a
                          href="#"
                          onClick={signOut("samsung")}
                          style={{
                            height: "30px",
                            padding: "0 12px",
                            borderRadius: "15px",
                            background: "#EEEEEE",
                            display: "inline-flex",
                            alignItems: "center",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          Sign out
                        </a>
                      </div>
                    </>
                  ) : null}
                  {v.devices.includes("ipad") ? (
                    <>
                      <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
                        <span
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <rect x="4" y="5" width="16" height="11" rx="1.5"></rect>
                            <path d="M2 19h20"></path>
                          </svg>
                        </span>
                        <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "14px", fontWeight: "700" }}>Safari on iPad</span>
                          <span style={{ fontSize: "12px", color: "#545454" }}>Melbourne · Mon</span>
                        </span>
                        <a
                          href="#"
                          onClick={signOut("ipad")}
                          style={{
                            height: "30px",
                            padding: "0 12px",
                            borderRadius: "15px",
                            background: "#EEEEEE",
                            display: "inline-flex",
                            alignItems: "center",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          Sign out
                        </a>
                      </div>
                    </>
                  ) : null}
                </div>
                <Link
                  href="/security"
                  onClick={signOutOthers}
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
                  Sign out everywhere else
                </Link>
                <Link
                  href="/recover-account"
                  style={{
                    height: "40px",
                    padding: "0 18px",
                    borderRadius: "20px",
                    background: "#FFFFFF",
                    border: "1px solid #E2E2E2",
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
                  Lost your phone or SIM?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
