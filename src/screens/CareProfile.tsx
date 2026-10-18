"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { needs: ["Walking support", "Memory support", "Diabetic meals"], langs: ["Sinhala", "English"] };
  }
  renderVals() {
    const chips = (key, labels) =>
      labels.map((l) => {
        const on = this.state[key].includes(l);
        return {
          label: l,
          pressed: on ? "true" : "false",
          bg: on ? "#000000" : "#EEEEEE",
          fg: on ? "#FFFFFF" : "#000000",
          flip: () => this.setState({ [key]: on ? this.state[key].filter((x) => x !== l) : [...this.state[key], l] }),
        };
      });
    return {
      needs: chips("needs", [
        "Walking support",
        "Memory support",
        "Diabetic meals",
        "Hard of hearing",
        "Needs help bathing",
        "Uses a wheelchair",
        "Fall risk",
      ]),
      langs: chips("langs", ["Sinhala", "Tamil", "English"]),
    };
  }
}

export default function CareProfileScreen() {
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
          <AccountNav active="/care-profile" />
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
              <img
                src="/images/amma.png"
                alt=""
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                }}
              />
              <span style={{ flex: "1 1 240px" }}>
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
                    {"Amma's care profile"}
                  </h1>
                  <span style={{ fontSize: "15px", color: "#545454" }}>
                    Kamala Fernando · 78 · 24/3 Kirula Road, Colombo 05
                  </span>
                </div>
              </span>
              <Link
                href="/routine"
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
                  <path d="M4 12a8 8 0 0 1 14-5.3L20 9"></path>
                  <path d="M20 4v5h-5"></path>
                  <path d="M20 12a8 8 0 0 1-14 5.3L4 15"></path>
                  <path d="M4 20v-5h5"></path>
                </svg>
                {"Amma's routine"}
              </Link>
              <Link
                href="/switch-person"
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
                  <circle cx="9" cy="8" r="3.5"></circle>
                  <path d="M2.5 20c1-3.5 3.5-5 6.5-5s5.5 1.5 6.5 5"></path>
                  <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 15c2 .7 3.2 2.3 3.5 5"></path>
                </svg>
                Switch person
              </Link>
              <Link
                href="/add-person"
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
                Add someone
              </Link>
              <Link
                href="/care-docs"
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
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4M9 12h6M9 16h6"></path>
                </svg>
                {"Documents & medicines"}
              </Link>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
              <div
                style={{ flex: "999 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Care needs</h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {v.needs.map((c: any, i1: number) => (
                        <Fragment key={i1}>
                          <button
                            aria-pressed={c.pressed}
                            onClick={c.flip}
                            style={{
                              height: "32px",
                              padding: "0 12px",
                              borderRadius: "16px",
                              border: "none",
                              background: c.bg,
                              color: c.fg,
                              font: "600 13px var(--font-figtree), sans-serif",
                            }}
                          >
                            {c.label}
                          </button>
                        </Fragment>
                      ))}
                    </div>
                    <span style={{ fontSize: "12px", color: "#545454" }}>
                      Used to match caregivers with the right skills.
                    </span>
                  </div>
                </div>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Speaks</h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {v.langs.map((c: any, i2: number) => (
                        <Fragment key={i2}>
                          <button
                            aria-pressed={c.pressed}
                            onClick={c.flip}
                            style={{
                              height: "32px",
                              padding: "0 12px",
                              borderRadius: "16px",
                              border: "none",
                              background: c.bg,
                              color: c.fg,
                              font: "600 13px var(--font-figtree), sans-serif",
                            }}
                          >
                            {c.label}
                          </button>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Notes every caregiver sees</h2>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                      <span style={{ fontSize: "13px", fontWeight: "600" }}></span>
                      <textarea
                        rows={3}
                        style={{
                          border: "1px solid #E2E2E2",
                          outline: "none",
                          resize: "none",
                          borderRadius: "12px",
                          background: "#FFFFFF",
                          color: "#000000",
                          padding: "10px 12px",
                          font: "500 14px var(--font-figtree), sans-serif",
                          lineHeight: "1.45",
                        }}
                        defaultValue="Hold her left arm on the steps. Likes old Sinhala songs. Gets tired after long walks."
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Emergency contacts</h2>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
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
                    <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>Dilani Fernando · daughter</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>+94 77 ••• 4120 · Colombo</span>
                    </span>
                    <span
                      style={{
                        height: "24px",
                        padding: "0 10px",
                        borderRadius: "12px",
                        background: "#000000",
                        color: "#FFFFFF",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12px",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                      }}
                    >
                      First call
                    </span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "64px" }}></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
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
                    <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>Ruwan Fernando · son</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>+61 412 ••• 018 · Melbourne</span>
                    </span>
                    <span
                      style={{
                        height: "24px",
                        padding: "0 10px",
                        borderRadius: "12px",
                        background: "#EEEEEE",
                        color: "#333333",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12px",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Second
                    </span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "64px" }}></div>
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
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>Dr. S. Gunasekara · family doctor</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>+94 11 ••• 8890</span>
                    </span>
                  </div>
                </div>
                <Link
                  href="/care-profile"
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
                  Add contact
                </Link>
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
                  <span>Only shown to caregivers you book, from 24 hours before the visit.</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link
                href="/care-profile"
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
                Save
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
