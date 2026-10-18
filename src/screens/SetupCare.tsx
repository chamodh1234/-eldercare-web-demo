"use client";

import Link from "next/link";
import { Fragment } from "react";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { toast } from "@/components/Toaster";
import { logIn } from "@/lib/actions";
import { mutate } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = {
      langs: ["Sinhala"],
      needs: ["Company", "Walking support", "Medicine reminders"],
      call: "Amma",
      age: "78",
      address: "24/3 Kirula Road, Colombo 05",
    };
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
      langs: chips("langs", ["Sinhala", "Tamil", "English"]),
      needs: chips("needs", ["Company", "Walking support", "Memory support", "Meals", "Medicine reminders", "Bathing"]),
      call: { value: this.state.call, onChange: (e) => this.setState({ call: e.target.value }) },
      age: { value: this.state.age, onChange: (e) => this.setState({ age: e.target.value }) },
      address: { value: this.state.address, onChange: (e) => this.setState({ address: e.target.value }) },
      finish: () => {
        mutate((d) => {
          const p = d.people.find((x) => x.id === "amma");
          if (p) Object.assign(p, { call: this.state.call.trim() || "Amma", age: Number(this.state.age) || p.age });
          d.account.area = this.state.address.split(",").pop()?.trim() || d.account.area;
        });
        logIn();
        toast("Welcome to Gloocan");
      },
    };
  }
}

export default function SetupCareScreen() {
  const v = useLogic(Logic, { persist: "setupCare" });
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
      <div style={{ flex: "1", minHeight: "900px", display: "flex", flexWrap: "wrap" }}>
        <section
          style={{
            flex: "0 1 520px",
            background: "#000000",
            color: "#FFFFFF",
            padding: "40px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "18px", fontWeight: "800" }}
          >
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "13px",
                background: "#FFFFFF",
                color: "#000000",
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
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "420px" }}>
            <h2
              style={{ margin: "0", fontSize: "36px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.03em" }}
            >
              Trusted care for the people you love.
            </h2>
            <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#D6D6D6" }}>
              Verified caregivers, live visit updates from anywhere, and you pay only after the visit.
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
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
              Every caregiver ID and police checked
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
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
              Follow visits live from Colombo or Melbourne
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
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
              Payment held until you approve
            </span>
          </div>
        </section>
        <section
          style={{
            flex: "999 1 480px",
            padding: "48px 32px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "20px" }}>
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
                Create account · step 3 of 3
              </span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "4px" }}>
                <span style={{ height: "4px", borderRadius: "2px", background: "#000000" }}></span>
                <span style={{ height: "4px", borderRadius: "2px", background: "#000000" }}></span>
                <span style={{ height: "4px", borderRadius: "2px", background: "#000000" }}></span>
              </div>
            </div>
            <Link
              href="/signup-details"
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
              Back
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
                Who needs care?
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>You can add more people later</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "28px",
                  border: "1.5px dashed #A6A6A6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#545454",
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
              </span>
              <span style={{ fontSize: "13px", color: "#545454" }}>Add a photo so caregivers recognise them</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "12px" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                <span style={{ fontSize: "13px", fontWeight: "600" }}>What do you call them?</span>
                <input
                  {...v.call}
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
                <span style={{ fontSize: "13px", fontWeight: "600" }}>Age</span>
                <input
                  inputMode="numeric"
                  {...v.age}
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
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Where do they live?</span>
              <input
                {...v.address}
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
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Speaks</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {v.langs.map((c: any, i1: number) => (
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
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>What help do they need?</span>
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
            <Link
              href="/search"
              onClick={v.finish}
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
              {"Finish & find a caregiver"}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
