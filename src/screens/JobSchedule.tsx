"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { toast } from "@/components/Toaster";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = {
      days: ["M", "T", "W", "Th", "F", "Sa"],
      l: 1,
      r: 1,
      start: "Mon 12 Oct",
      from: "9:00 AM",
      to: "12:00 PM",
    };
  }
  renderVals() {
    const W = ["M", "T", "W", "Th", "F", "Sa", "Su"];
    const days = W.map((w) => {
      const on = this.state.days.includes(w);
      return {
        label: w,
        pressed: on ? "true" : "false",
        bg: on ? "#000000" : "#EEEEEE",
        fg: on ? "#FFFFFF" : "#000000",
        flip: () => this.setState({ days: on ? this.state.days.filter((x) => x !== w) : [...this.state.days, w] }),
      };
    });
    const seg = (key, labels) =>
      labels.map((l, i) => {
        const on = this.state[key] === i;
        return {
          label: l,
          sel: on ? "true" : "false",
          bg: on ? "#000000" : "transparent",
          fg: on ? "#FFFFFF" : "#000000",
          weight: on ? "700" : "600",
          pick: () => this.setState({ [key]: i }),
        };
      });
    const per = this.state.days.length;
    const rate = [1000, 1200, 1400][this.state.r];
    const fmt = (n) => "LKR " + n.toLocaleString("en-US");
    return {
      days,
      len: seg("l", ["2 weeks", "4 weeks", "Ongoing"]),
      rates: seg("r", ["LKR 1,000", "LKR 1,200", "LKR 1,400"]),
      weekly: fmt(per * 3 * rate * 1.1),
      per,
      start: { value: this.state.start, onChange: (e) => this.setState({ start: e.target.value }) },
      from: { value: this.state.from, onChange: (e) => this.setState({ from: e.target.value }) },
      to: { value: this.state.to, onChange: (e) => this.setState({ to: e.target.value }) },
      next: (e) => {
        if (!this.state.days.length) {
          e.preventDefault();
          toast("Pick at least one day");
        }
      },
    };
  }
}

export default function JobScheduleScreen() {
  const v = useLogic(Logic, { persist: "jobSchedule" });
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
                Post a job · step 2 of 3
              </span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "4px" }}>
                <span style={{ height: "4px", borderRadius: "2px", background: "#000000" }}></span>
                <span style={{ height: "4px", borderRadius: "2px", background: "#000000" }}></span>
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
                When and how much?
              </h1>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Days</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {v.days.map((d: any, i1: number) => (
                  <Fragment key={i1}>
                    <button
                      aria-pressed={d.pressed}
                      onClick={d.flip}
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "22px",
                        border: "none",
                        background: d.bg,
                        color: d.fg,
                        font: "700 13px var(--font-figtree), sans-serif",
                      }}
                    >
                      {d.label}
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                <span style={{ fontSize: "13px", fontWeight: "600" }}>Start date</span>
                <input
                  {...v.start}
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
                <span style={{ fontSize: "13px", fontWeight: "600" }}>From</span>
                <input
                  {...v.from}
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
                <span style={{ fontSize: "13px", fontWeight: "600" }}>To</span>
                <input
                  {...v.to}
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
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>How long</span>
              <div
                role="tablist"
                style={{
                  height: "40px",
                  borderRadius: "20px",
                  background: "#EEEEEE",
                  padding: "4px",
                  boxSizing: "border-box",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "4px",
                  maxWidth: "420px",
                }}
              >
                {v.len.map((t: any, i2: number) => (
                  <Fragment key={i2}>
                    <button
                      role="tab"
                      aria-selected={t.sel}
                      onClick={t.pick}
                      style={{
                        border: "none",
                        borderRadius: "16px",
                        background: t.bg,
                        color: t.fg,
                        font: `${t.weight} 13px var(--font-figtree), sans-serif`,
                        padding: "0 10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t.label}
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                Hourly rate you offer · area average LKR 1,150
              </span>
              <div
                role="tablist"
                style={{
                  height: "40px",
                  borderRadius: "20px",
                  background: "#EEEEEE",
                  padding: "4px",
                  boxSizing: "border-box",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "4px",
                  maxWidth: "420px",
                }}
              >
                {v.rates.map((t: any, i3: number) => (
                  <Fragment key={i3}>
                    <button
                      role="tab"
                      aria-selected={t.sel}
                      onClick={t.pick}
                      style={{
                        border: "none",
                        borderRadius: "16px",
                        background: t.bg,
                        color: t.fg,
                        font: `${t.weight} 13px var(--font-figtree), sans-serif`,
                        padding: "0 10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t.label}
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link
                href="/job-review"
                onClick={v.next}
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
                href="/post-job"
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
                Back
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
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Estimate</h2>
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
                <span style={{ color: "#545454" }}>Days a week</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{v.per}</span>
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
                <span style={{ color: "#545454" }}>Hours a visit</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>3</span>
              </div>
              <div style={{ height: "1px", background: "#E2E2E2" }}></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  background: "#EAF0FD",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#1A4FB5" }}>Per week incl. fee</span>
                <span style={{ fontSize: "18px", fontWeight: "800" }}>{v.weekly}</span>
              </div>
            </div>
            <span style={{ fontSize: "12px", color: "#545454", lineHeight: "1.5" }}>
              Nothing is charged now. You pay week by week after you hire, held until each visit is approved.
            </span>
          </aside>
        </div>
      </main>
    </div>
  );
}
