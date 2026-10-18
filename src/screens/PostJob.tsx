"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { k: 0, needs: ["Walking support", "Medicine reminders"], langs: ["Sinhala"] };
  }
  renderVals() {
    const radio = (key, list) =>
      list.map((r, i) => {
        const on = this.state[key] === i;
        return {
          title: r[0],
          note: r[1] || "",
          checked: on ? "true" : "false",
          sep: i === 0 ? "none" : "1px solid #E2E2E2",
          bg: on ? "#F6F6F6" : "#FFFFFF",
          ring: on ? "2px solid #000000" : "2px solid #A6A6A6",
          dot: on ? "#000000" : "transparent",
          pick: () => this.setState({ [key]: i }),
        };
      });
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
      kinds: radio("k", [
        ["Companionship", "Company, walks, meals, reminders"],
        ["Personal care", "Bathing, dressing, toilet help"],
        ["Memory care", "Dementia-trained caregivers"],
        ["Overnight / live-in", "Stays the night or lives in"],
      ]),
      needs: chips("needs", [
        "Walking support",
        "Memory support",
        "Diabetic meals",
        "Medicine reminders",
        "Light cleaning",
        "Clinic visits",
      ]),
      langs: chips("langs", ["Sinhala", "Tamil", "English"]),
    };
  }
}

export default function PostJobScreen() {
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
      <AppHeader active="/my-jobs" />
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
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                Post a job · step 1 of 3
              </span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "4px" }}>
                <span style={{ height: "4px", borderRadius: "2px", background: "#000000" }}></span>
                <span style={{ height: "4px", borderRadius: "2px", background: "#E2E2E2" }}></span>
                <span style={{ height: "4px", borderRadius: "2px", background: "#E2E2E2" }}></span>
              </div>
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
                What help does Amma need?
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                Caregivers near Colombo 05 will see your job and apply
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Type of care</span>
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
                {v.kinds.map((r: any, i1: number) => (
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
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Must be able to help with</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {v.needs.map((c: any, i2: number) => (
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
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Speaks</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {v.langs.map((c: any, i3: number) => (
                  <Fragment key={i3}>
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
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Job title</span>
              <input
                defaultValue="Morning companion for Amma, 3 hrs, Mon–Sat"
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
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Describe the job</span>
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
                defaultValue="Amma is 78 and recovering from a knee injury. We need someone patient for mornings: a short walk, tea, knee exercises and lunch."
              />
            </label>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link
                href="/job-schedule"
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
                Continue
              </Link>
              <Link
                href="/my-jobs"
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
                Save draft
              </Link>
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
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Why post a job?</h2>
            <div style={{ display: "flex", gap: "10px", padding: "8px 0" }}>
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
              <span style={{ fontSize: "13px", lineHeight: "1.45" }}>Only verified caregivers can apply</span>
            </div>
            <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "0px" }}></div>
            <div style={{ display: "flex", gap: "10px", padding: "8px 0" }}>
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
              <span style={{ fontSize: "13px", lineHeight: "1.45" }}>Compare applicants side by side</span>
            </div>
            <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "0px" }}></div>
            <div style={{ display: "flex", gap: "10px", padding: "8px 0" }}>
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
              <span style={{ fontSize: "13px", lineHeight: "1.45" }}>Chat before you hire</span>
            </div>
            <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "0px" }}></div>
            <div style={{ display: "flex", gap: "10px", padding: "8px 0" }}>
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
              <span style={{ fontSize: "13px", lineHeight: "1.45" }}>Pay only after each visit, same as booking</span>
            </div>
            <div style={{ height: "1px", background: "#E2E2E2" }}></div>
            <span style={{ fontSize: "13px", color: "#545454" }}>
              {"Prefer to choose yourself? "}
              <Link href="/search" style={{ color: "#000000", fontWeight: "700", textDecoration: "underline" }}>
                Find a caregiver
              </Link>
            </span>
          </aside>
        </div>
      </main>
    </div>
  );
}
