"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { helps: ["Companionship"], langs: ["Sinhala"], verified: true, saved: false };
  }
  renderVals() {
    const chip = (key, labels) =>
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
    const tg = (k) => {
      const on = this.state[k];
      return {
        pressed: on ? "true" : "false",
        track: on ? "#05944F" : "#CBCBCB",
        align: on ? "flex-end" : "flex-start",
        flip: () => this.setState({ [k]: !on }),
      };
    };
    const all = [
      {
        av: "/images/nirmala.png",
        name: "Nirmala Perera",
        rating: "4.9",
        reviews: 86,
        meta: "8 yrs · Sinhala, English · 1.4 km",
        blurb: "Patient and calm. Dementia and mobility support.",
        rate: "1,200",
        saved: true,
      },
      {
        av: "/images/mala.png",
        name: "Mala Wickrama",
        rating: "4.9",
        reviews: 52,
        meta: "6 yrs · Sinhala, Tamil · 2.4 km",
        blurb: "Former hospital aide. Good with post-surgery recovery.",
        rate: "1,200",
        saved: true,
      },
      {
        av: "/images/shanthi.png",
        name: "Shanthi Rajapaksha",
        rating: "4.8",
        reviews: 31,
        meta: "5 yrs · Sinhala · 3.1 km",
        blurb: "Cooks traditional meals. Calm with early memory loss.",
        rate: "1,000",
        saved: true,
      },
      {
        av: "/images/priya.png",
        name: "Priya Senanayake",
        rating: "4.6",
        reviews: 12,
        meta: "3 yrs · English, Tamil · 3.8 km",
        blurb: "Companion and errands. Drives to clinic visits.",
        rate: "950",
        saved: false,
      },
    ];
    const list = this.state.saved ? all.filter((p) => p.saved) : all;
    const people = list.map((p, i) => ({ ...p, sep: i === 0 ? "none" : "1px solid #E2E2E2" }));
    return {
      helps: chip("helps", ["Companionship", "Personal care", "Memory care", "Errands", "Overnight"]),
      langs: chip("langs", ["Sinhala", "Tamil", "English"]),
      verified: tg("verified"),
      saved: tg("saved"),
      people,
      count: people.length === 4 ? 48 : people.length,
    };
  }
}

export default function SearchScreen() {
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
      <AppHeader active="/search" action="none" />{" "}
      <main
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "22px 24px 38px",
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
          <label
            style={{
              flex: "999 1 360px",
              minWidth: "0",
              height: "44px",
              borderRadius: "22px",
              background: "#EEEEEE",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "0 16px",
              color: "#545454",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7"></circle>
              <path d="M20 20l-3.5-3.5"></path>
            </svg>
            <input
              aria-label="Search caregivers"
              placeholder="Search by name, skill or language, e.g. dementia"
              style={{
                flex: "1",
                minWidth: "0",
                border: "none",
                outline: "none",
                background: "transparent",
                font: "500 14px var(--font-figtree), sans-serif",
                color: "#000000",
              }}
            />
          </label>{" "}
          <span
            style={{
              height: "44px",
              padding: "0 16px",
              borderRadius: "22px",
              background: "#EEEEEE",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontWeight: "700",
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
              aria-hidden="true"
            >
              <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"></path>
              <circle cx="12" cy="10" r="2.5"></circle>
            </svg>
            Colombo 05
          </span>{" "}
          <span
            style={{
              height: "44px",
              padding: "0 16px",
              borderRadius: "22px",
              background: "#EEEEEE",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontWeight: "700",
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
              aria-hidden="true"
            >
              <rect x="4" y="5" width="16" height="16" rx="2"></rect>
              <path d="M4 10h16M9 3v4M15 3v4"></path>
            </svg>
            Sat 17 Oct · 9:00 · 3 hrs
          </span>
        </div>{" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <aside
            aria-label="Filters"
            style={{ flex: "1 1 240px", maxWidth: "300px", display: "flex", flexDirection: "column", gap: "18px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                Help needed
              </span>{" "}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {v.helps.map((h: any, i1: number) => (
                  <Fragment key={i1}>
                    <button
                      aria-pressed={h.pressed}
                      onClick={h.flip}
                      style={{
                        height: "32px",
                        padding: "0 12px",
                        borderRadius: "16px",
                        border: "none",
                        background: h.bg,
                        color: h.fg,
                        font: "600 13px var(--font-figtree), sans-serif",
                      }}
                    >
                      {h.label}
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>{" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                Speaks
              </span>{" "}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {v.langs.map((h: any, i2: number) => (
                  <Fragment key={i2}>
                    <button
                      aria-pressed={h.pressed}
                      onClick={h.flip}
                      style={{
                        height: "32px",
                        padding: "0 12px",
                        borderRadius: "16px",
                        border: "none",
                        background: h.bg,
                        color: h.fg,
                        font: "600 13px var(--font-figtree), sans-serif",
                      }}
                    >
                      {h.label}
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>{" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                Price per hour
              </span>{" "}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: "700" }}>
                <span>LKR 800</span>
                <span>LKR 1,500</span>
              </div>{" "}
              <div style={{ height: "6px", borderRadius: "3px", background: "#E2E2E2", position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "10%",
                    right: "25%",
                    top: "0",
                    bottom: "0",
                    borderRadius: "3px",
                    background: "#000000",
                  }}
                ></span>
                <span
                  style={{
                    position: "absolute",
                    left: "calc(10% - 10px)",
                    top: "-7px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "10px",
                    background: "#FFFFFF",
                    border: "2px solid #000000",
                    boxSizing: "border-box",
                  }}
                ></span>
                <span
                  style={{
                    position: "absolute",
                    right: "calc(25% - 10px)",
                    top: "-7px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "10px",
                    background: "#FFFFFF",
                    border: "2px solid #000000",
                    boxSizing: "border-box",
                  }}
                ></span>
              </div>
            </div>{" "}
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "12px", overflow: "hidden" }}>
              <button
                aria-pressed={v.verified.pressed}
                onClick={v.verified.flip}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 14px",
                  border: "none",
                  background: "transparent",
                  color: "#000000",
                  textAlign: "left",
                  fontFamily: "var(--font-figtree), sans-serif",
                }}
              >
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Fully verified only</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>ID, police and certificate</span>
                </span>
                <span
                  style={{
                    width: "38px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.verified.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.verified.align,
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>{" "}
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>{" "}
              <button
                aria-pressed={v.saved.pressed}
                onClick={v.saved.flip}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 14px",
                  border: "none",
                  background: "transparent",
                  color: "#000000",
                  textAlign: "left",
                  fontFamily: "var(--font-figtree), sans-serif",
                }}
              >
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Cared for Amma before</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Saved and past caregivers</span>
                </span>
                <span
                  style={{
                    width: "38px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.saved.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.saved.align,
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
            </div>
          </aside>{" "}
          <section
            aria-label="Results"
            style={{ flex: "999 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <h1 style={{ margin: "0", fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                {v.count}
                {" caregivers free on Sat"}
              </h1>{" "}
              <span
                style={{
                  height: "32px",
                  padding: "0 14px",
                  borderRadius: "16px",
                  background: "#EEEEEE",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Sort: Best match
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>{" "}
            <div
              style={{
                border: "1px solid #E2E2E2",
                borderRadius: "14px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {v.people.map((p: any, i3: number) => (
                <Fragment key={i3}>
                  <Link
                    href="/profile"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "14px",
                      padding: "14px 16px",
                      borderTop: p.sep,
                    }}
                  >
                    <span style={{ position: "relative", flexShrink: "0" }}>
                      <img
                        src={p.av}
                        alt=""
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          right: "-2px",
                          bottom: "-2px",
                          width: "18px",
                          height: "18px",
                          borderRadius: "9px",
                          background: "#05944F",
                          border: "3px solid #FFFFFF",
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12l5 5 9-10"></path>
                        </svg>
                      </span>
                    </span>{" "}
                    <span
                      style={{ flex: "1 1 240px", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "15px", fontWeight: "800" }}>{p.name}</span>
                        <span style={{ fontSize: "13px", fontWeight: "700" }}>
                          {"★ "}
                          {p.rating}
                        </span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>
                          {"("}
                          {p.reviews}
                          {")"}
                        </span>
                      </span>
                      <span style={{ fontSize: "13px", color: "#545454" }}>{p.meta}</span>
                      <span style={{ fontSize: "13px", color: "#333333" }}>{p.blurb}</span>
                    </span>{" "}
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "800" }}>
                        {"LKR "}
                        {p.rate}
                        <span style={{ fontSize: "12px", fontWeight: "500", color: "#545454" }}>/hr</span>
                      </span>
                      <span
                        style={{
                          height: "32px",
                          padding: "0 14px",
                          borderRadius: "16px",
                          background: "#000000",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "13px",
                          fontWeight: "700",
                        }}
                      >
                        View
                      </span>
                    </span>
                  </Link>
                </Fragment>
              ))}
            </div>
          </section>{" "}
          <aside
            aria-label="Map"
            style={{
              flex: "1 1 320px",
              maxWidth: "380px",
              minWidth: "0",
              height: "560px",
              borderRadius: "14px",
              overflow: "hidden",
              position: "relative",
              background: "#F3F3F3",
              border: "1px solid #E2E2E2",
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 380 560"
              preserveAspectRatio="none"
              aria-hidden="true"
              style={{ position: "absolute", inset: "0" }}
            >
              <g stroke="#FFFFFF" strokeWidth="12" fill="none">
                <path d="M-10 120 L400 90"></path>
                <path d="M-10 330 L400 360"></path>
                <path d="M90 -10 L60 580"></path>
                <path d="M270 -10 L300 580"></path>
              </g>
              <g stroke="#FFFFFF" strokeWidth="6" fill="none">
                <path d="M-10 230 L400 220"></path>
                <path d="M180 -10 L190 580"></path>
                <path d="M-10 460 L400 470"></path>
              </g>
              <path d="M330 -10 C 350 200 300 380 360 580" stroke="#CFE0F5" strokeWidth="40" fill="none"></path>
            </svg>{" "}
            <span
              style={{
                position: "absolute",
                left: "150px",
                top: "250px",
                width: "20px",
                height: "20px",
                borderRadius: "10px",
                background: "#276EF1",
                border: "4px solid #FFFFFF",
                boxShadow: "0 0 0 10px rgba(39,110,241,0.18)",
              }}
            ></span>{" "}
            <span
              style={{
                position: "absolute",
                left: "70px",
                top: "150px",
                height: "28px",
                padding: "0 10px",
                borderRadius: "14px",
                background: "#000000",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              1,200
            </span>{" "}
            <span
              style={{
                position: "absolute",
                left: "220px",
                top: "190px",
                height: "28px",
                padding: "0 10px",
                borderRadius: "14px",
                background: "#FFFFFF",
                border: "1px solid #E2E2E2",
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              1,200
            </span>{" "}
            <span
              style={{
                position: "absolute",
                left: "110px",
                top: "380px",
                height: "28px",
                padding: "0 10px",
                borderRadius: "14px",
                background: "#FFFFFF",
                border: "1px solid #E2E2E2",
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              1,000
            </span>{" "}
            <span
              style={{
                position: "absolute",
                left: "230px",
                top: "420px",
                height: "28px",
                padding: "0 10px",
                borderRadius: "14px",
                background: "#FFFFFF",
                border: "1px solid #E2E2E2",
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              950
            </span>{" "}
            <span
              style={{
                position: "absolute",
                left: "16px",
                bottom: "16px",
                right: "16px",
                padding: "12px 12px",
                borderRadius: "12px",
                background: "#FFFFFF",
                fontSize: "12px",
                color: "#333333",
                lineHeight: "1.4",
              }}
            >
              {"Exact homes are hidden. Distances are from Amma's area."}
            </span>
          </aside>
        </div>
      </main>
    </div>
  );
}
