"use client";

import Link from "next/link";
import { Fragment } from "react";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { help: 0, day: 2, time: 1, hours: 3, repeat: false, wdays: ["M", "W", "F", "Sa"] };
  }
  renderVals() {
    const H = [
      ["Companionship", "Company, walks, meals"],
      ["Personal care", "Bathing, dressing, toilet"],
      ["Memory care", "Dementia-trained caregivers"],
    ];
    const helps = H.map((h, i) => {
      const on = this.state.help === i;
      return {
        title: h[0],
        note: h[1],
        pressed: on ? "true" : "false",
        border: on ? "#000000" : "#E2E2E2",
        pick: () => this.setState({ help: i }),
      };
    });
    const D = [
      ["Thu", 15],
      ["Fri", 16],
      ["Sat", 17],
      ["Sun", 18],
      ["Mon", 19],
      ["Tue", 20],
      ["Wed", 21],
    ];
    const days = D.map((d, i) => {
      const on = this.state.day === i;
      return {
        dow: d[0],
        num: d[1],
        pressed: on ? "true" : "false",
        bg: on ? "#000000" : "#EEEEEE",
        fg: on ? "#FFFFFF" : "#000000",
        pick: () => this.setState({ day: i }),
      };
    });
    const T = ["8:00", "9:00", "10:00", "2:00 PM"];
    const times = T.map((t, i) => {
      const on = this.state.time === i;
      return {
        label: t,
        pressed: on ? "true" : "false",
        bg: on ? "#000000" : "#EEEEEE",
        fg: on ? "#FFFFFF" : "#000000",
        pick: () => this.setState({ time: i }),
      };
    });
    const W = ["M", "T", "W", "Th", "F", "Sa", "Su"];
    const wdays = W.map((w) => {
      const on = this.state.wdays.includes(w);
      return {
        label: w,
        pressed: on ? "true" : "false",
        bg: on ? "#000000" : "#EEEEEE",
        fg: on ? "#FFFFFF" : "#000000",
        flip: () => this.setState({ wdays: on ? this.state.wdays.filter((x) => x !== w) : [...this.state.wdays, w] }),
      };
    });
    const h = this.state.hours;
    const fmt = (n) => "LKR " + n.toLocaleString("en-US");
    const visits = this.state.repeat ? this.state.wdays.length : 1;
    const sub = h * 1200,
      fee = Math.round(sub * 0.1);
    const r = this.state.repeat;
    return {
      helps,
      days,
      times,
      wdays,
      hours: h,
      less: () => this.setState({ hours: Math.max(2, h - 1) }),
      more: () => this.setState({ hours: Math.min(8, h + 1) }),
      repeat: {
        pressed: r ? "true" : "false",
        track: r ? "#05944F" : "#CBCBCB",
        align: r ? "flex-end" : "flex-start",
        flip: () => this.setState({ repeat: !r }),
      },
      repeatOn: r,
      when:
        (r ? "Weekly from " : "") + D[this.state.day][0] + " " + D[this.state.day][1] + " Oct · " + T[this.state.time],
      sub: fmt(sub),
      fee: fmt(fee),
      totalLabel: r ? "Per week (" + visits + " visits)" : "Total",
      total: fmt((sub + fee) * visits),
    };
  }
}

export default function BookScreen() {
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
      <header style={{ borderBottom: "1px solid #E2E2E2" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "14px 24px",
            boxSizing: "border-box",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "12px 18px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "18px",
              fontWeight: "800",
              letterSpacing: "-0.02em",
            }}
          >
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "13px",
                background: "#000000",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              g
            </span>
            Gloocan
          </Link>{" "}
          <ol
            aria-label="Booking steps"
            style={{
              listStyle: "none",
              margin: "0 auto",
              padding: "0",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            <li
              style={{
                height: "30px",
                padding: "0 12px",
                borderRadius: "15px",
                background: "#000000",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>1</span>
              {"Visit & tasks"}
            </li>{" "}
            <li
              style={{
                height: "30px",
                padding: "0 12px",
                borderRadius: "15px",
                background: "#EEEEEE",
                color: "#545454",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>2</span>
              {"Review & pay"}
            </li>
          </ol>{" "}
          <Link
            href="/profile"
            aria-label="Close booking"
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
              strokeWidth="2.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18"></path>
            </svg>
          </Link>
        </div>
      </header>{" "}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 24px 50px",
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "38px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
          <h1
            style={{ margin: "0", fontSize: "32px", lineHeight: "1.05", fontWeight: "800", letterSpacing: "-0.03em" }}
          >
            Book Nirmala for Amma
          </h1>{" "}
          <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h2
              style={{
                margin: "0",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#545454",
              }}
            >
              Help needed
            </h2>{" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
              {v.helps.map((h: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    aria-pressed={h.pressed}
                    onClick={h.pick}
                    style={{
                      border: `2px solid ${h.border}`,
                      background: "#FFFFFF",
                      color: "#000000",
                      borderRadius: "12px",
                      padding: "14px 14px",
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      fontFamily: "var(--font-figtree), sans-serif",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "800" }}>{h.title}</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>{h.note}</span>
                  </button>
                </Fragment>
              ))}
            </div>
          </section>{" "}
          <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h2
              style={{
                margin: "0",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#545454",
              }}
            >
              Day · October
            </h2>{" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: "8px" }}>
              {v.days.map((d: any, i2: number) => (
                <Fragment key={i2}>
                  <button
                    aria-pressed={d.pressed}
                    onClick={d.pick}
                    style={{
                      height: "56px",
                      borderRadius: "12px",
                      border: "none",
                      background: d.bg,
                      color: d.fg,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "2px",
                      fontFamily: "var(--font-figtree), sans-serif",
                    }}
                  >
                    <span style={{ fontSize: "12px", fontWeight: "600", opacity: ".8" }}>{d.dow}</span>
                    <span style={{ fontSize: "18px", fontWeight: "800" }}>{d.num}</span>
                  </button>
                </Fragment>
              ))}
            </div>
          </section>{" "}
          <section style={{ display: "flex", flexWrap: "wrap", gap: "18px" }}>
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <h2
                style={{
                  margin: "0",
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                Start time · her free slots
              </h2>{" "}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "8px" }}>
                {v.times.map((t: any, i3: number) => (
                  <Fragment key={i3}>
                    <button
                      aria-pressed={t.pressed}
                      onClick={t.pick}
                      style={{
                        height: "38px",
                        borderRadius: "19px",
                        border: "none",
                        background: t.bg,
                        color: t.fg,
                        font: "700 14px var(--font-figtree), sans-serif",
                      }}
                    >
                      {t.label}
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>{" "}
            <div style={{ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <h2
                style={{
                  margin: "0",
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                How long
              </h2>{" "}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", height: "38px" }}>
                <button
                  aria-label="Fewer hours"
                  onClick={v.less}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "19px",
                    border: "none",
                    background: "#EEEEEE",
                    color: "#000000",
                    font: "600 18px var(--font-figtree), sans-serif",
                  }}
                >
                  −
                </button>{" "}
                <span style={{ flex: "1", textAlign: "center", fontSize: "15px", fontWeight: "800" }}>
                  {v.hours}
                  {" hrs"}
                </span>{" "}
                <button
                  aria-label="More hours"
                  onClick={v.more}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "19px",
                    border: "none",
                    background: "#EEEEEE",
                    color: "#000000",
                    font: "600 18px var(--font-figtree), sans-serif",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </section>{" "}
          <section style={{ border: "1px solid #E2E2E2", borderRadius: "14px", overflow: "hidden" }}>
            <button
              aria-pressed={v.repeat.pressed}
              onClick={v.repeat.flip}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 16px",
                border: "none",
                background: "transparent",
                color: "#000000",
                textAlign: "left",
                fontFamily: "var(--font-figtree), sans-serif",
              }}
            >
              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700" }}>Repeat every week</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>Same time with Nirmala · paid week by week</span>
              </span>
              <span
                style={{
                  width: "40px",
                  height: "26px",
                  borderRadius: "13px",
                  background: v.repeat.track,
                  padding: "3px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: v.repeat.align,
                }}
              >
                <span style={{ width: "20px", height: "20px", borderRadius: "10px", background: "#FFFFFF" }}></span>
              </span>
            </button>{" "}
            {v.repeatOn ? (
              <>
                <div
                  style={{
                    borderTop: "1px solid #E2E2E2",
                    padding: "14px 16px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#545454", marginRight: "8px" }}>
                    Days
                  </span>
                  {v.wdays.map((w: any, i4: number) => (
                    <Fragment key={i4}>
                      <button
                        aria-pressed={w.pressed}
                        onClick={w.flip}
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "18px",
                          border: "none",
                          background: w.bg,
                          color: w.fg,
                          font: "700 13px var(--font-figtree), sans-serif",
                        }}
                      >
                        {w.label}
                      </button>
                    </Fragment>
                  ))}
                  <span style={{ fontSize: "13px", color: "#545454", marginLeft: "8px" }}>for 4 weeks</span>
                </div>
              </>
            ) : null}
          </section>{" "}
          <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>What should Nirmala do?</h2>{" "}
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "14px", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px" }}>
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "14px",
                    background: "#E6F4EC",
                    color: "#05663A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
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
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>{"Amma's routine is included"}</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>
                    Walk 9:00 · tea 9:30 · medicine reminder 10:00 · lunch 11:30
                  </span>
                </span>
                <Link href="/routine" style={{ fontSize: "13px", fontWeight: "700", textDecoration: "underline" }}>
                  Edit
                </Link>
              </div>{" "}
              <div style={{ height: "1px", background: "#E2E2E2" }}></div>{" "}
              <label style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "14px 16px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700" }}>Anything extra for this visit?</span>
                <textarea
                  rows={2}
                  style={{
                    border: "none",
                    outline: "none",
                    resize: "none",
                    borderRadius: "10px",
                    background: "#F3F3F3",
                    color: "#000000",
                    padding: "12px 12px",
                    font: "500 14px var(--font-figtree), sans-serif",
                    lineHeight: "1.45",
                  }}
                  defaultValue="Aunty Rani visits at 10. Please make tea for two."
                />
              </label>
            </div>
          </section>
        </div>{" "}
        <aside
          aria-label="Summary"
          style={{
            flex: "1 1 320px",
            maxWidth: "400px",
            minWidth: "0",
            border: "1px solid #E2E2E2",
            borderRadius: "16px",
            padding: "18px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/images/nirmala.png"
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
            />
            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "15px", fontWeight: "800" }}>Nirmala Perera</span>
              <span style={{ fontSize: "12px", color: "#545454" }}>★ 4.9 · verified</span>
            </span>
          </div>{" "}
          <div style={{ border: "1px solid #E2E2E2", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 14px", fontSize: "14px" }}>
              <span style={{ color: "#545454" }}>When</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>{v.when}</span>
            </div>{" "}
            <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>{" "}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 14px", fontSize: "14px" }}>
              <span style={{ color: "#545454" }}>For</span>
              <span style={{ fontWeight: "700" }}>Amma · Colombo 05</span>
            </div>{" "}
            <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>{" "}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 14px", fontSize: "14px" }}>
              <span style={{ color: "#545454" }}>
                {v.hours}
                {" hrs × LKR 1,200"}
              </span>
              <span style={{ fontWeight: "700" }}>{v.sub}</span>
            </div>{" "}
            <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>{" "}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 14px", fontSize: "14px" }}>
              <span style={{ color: "#545454" }}>{"Booking & safety fee"}</span>
              <span style={{ fontWeight: "700" }}>{v.fee}</span>
            </div>{" "}
            <div style={{ height: "1px", background: "#E2E2E2" }}></div>{" "}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px" }}>
              <span style={{ fontSize: "14px", fontWeight: "700" }}>{v.totalLabel}</span>
              <span style={{ fontSize: "20px", fontWeight: "800" }}>{v.total}</span>
            </div>
          </div>{" "}
          <Link
            href="/checkout"
            style={{
              height: "44px",
              borderRadius: "22px",
              background: "#000000",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "15px",
              fontWeight: "700",
            }}
          >
            Continue
          </Link>{" "}
          <span style={{ fontSize: "12px", color: "#545454", textAlign: "center", marginTop: "-6px" }}>
            Nothing is charged until Nirmala accepts
          </span>
        </aside>
      </main>
    </div>
  );
}
