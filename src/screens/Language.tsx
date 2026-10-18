"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { l: 0, tr: true };
  }
  renderVals() {
    const L = [
      ["English", "English", "Your visit starts at 9:00 AM"],
      ["සිංහල", "Sinhala", "ඔබේ පැමිණීම පෙ.ව. 9:00 ට ආරම්භ වේ"],
      ["தமிழ்", "Tamil", "உங்கள் வருகை காலை 9:00 மணிக்கு தொடங்கும்"],
    ];
    const langs = L.map((l, i) => {
      const on = this.state.l === i;
      return {
        native: l[0],
        en: l[1],
        checked: on ? "true" : "false",
        border: on ? "2px solid #000000" : "1px solid #E2E2E2",
        ring: on ? "2px solid #000000" : "2px solid #A6A6A6",
        dot: on ? "#000000" : "transparent",
        pick: () => this.setState({ l: i }),
      };
    });
    const tg = (k) => {
      const on = this.state[k];
      return {
        pressed: on ? "true" : "false",
        track: on ? "#05944F" : "#CBCBCB",
        align: on ? "flex-end" : "flex-start",
        flip: () => this.setState({ [k]: !on }),
      };
    };
    return { langs, sample: L[this.state.l][2], tr: tg("tr") };
  }
}

export default function LanguageScreen() {
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
          <AccountNav active="/language" />
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
                Language
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>භාෂාව · மொழி</span>
            </div>
            <div
              role="radiogroup"
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}
            >
              {v.langs.map((l: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    role="radio"
                    aria-checked={l.checked}
                    onClick={l.pick}
                    style={{
                      border: l.border,
                      borderRadius: "16px",
                      background: "#FFFFFF",
                      padding: "18px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      textAlign: "left",
                      color: "#000000",
                      fontFamily: "var(--font-figtree), var(--font-sinhala), var(--font-tamil), sans-serif",
                    }}
                  >
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "20px", fontWeight: "800" }}>{l.native}</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>{l.en}</span>
                    </span>
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "10px",
                        boxSizing: "border-box",
                        border: l.ring,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ width: "10px", height: "10px", borderRadius: "5px", background: l.dot }}></span>
                    </span>
                  </button>
                </Fragment>
              ))}
            </div>
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
                Preview
              </span>
              <div
                style={{
                  borderRadius: "16px",
                  background: "#F6F6F6",
                  padding: "18px",
                  fontSize: "18px",
                  fontWeight: "700",
                  fontFamily: "var(--font-figtree), var(--font-sinhala), var(--font-tamil), sans-serif",
                }}
              >
                {v.sample}
              </div>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <button
                aria-pressed={v.tr.pressed}
                onClick={v.tr.flip}
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
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Show a translate button on chat messages</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>
                    Messages stay in the language they were written in
                  </span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.tr.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.tr.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
            </div>
            <div>
              <Link
                href="/language"
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
