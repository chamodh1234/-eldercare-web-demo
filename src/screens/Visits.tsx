"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { tab: 0, sel: 0 };
  }
  renderVals() {
    const N = "/images/nirmala.png",
      M = "/images/mala.png",
      S = "/images/shanthi.png";
    const G = ["#E6F4EC", "#05663A"],
      B = ["#EAF0FD", "#1A4FB5"],
      Gy = ["#EEEEEE", "#333333"];
    const data = [
      [
        {
          k: "live",
          when: "Today · Thu 15 Oct",
          time: "9:00 – 12:00",
          who: "Nirmala Perera",
          av: N,
          amount: "LKR 3,960",
          tag: "Live now",
          t: G,
        },
        {
          k: "up",
          when: "Sat 17 Oct",
          time: "9:00 – 12:00",
          who: "Nirmala Perera",
          av: N,
          amount: "LKR 3,960",
          tag: "Confirmed",
          t: G,
        },
        {
          k: "up",
          when: "Tue 20 Oct",
          time: "2:00 – 4:00 PM",
          who: "Mala Wickrama",
          av: M,
          amount: "LKR 2,640",
          tag: "Covering Nirmala",
          t: B,
        },
        {
          k: "up",
          when: "Sat 24 Oct",
          time: "9:00 – 12:00 · weekly",
          who: "Nirmala Perera",
          av: N,
          amount: "LKR 3,960",
          tag: "Confirmed",
          t: G,
        },
      ],
      [
        {
          k: "past",
          when: "Sat 10 Oct",
          time: "9:02 – 12:04",
          who: "Nirmala Perera",
          av: N,
          amount: "LKR 3,960",
          tag: "Paid",
          t: Gy,
        },
        {
          k: "past",
          when: "Sat 3 Oct",
          time: "9:00 – 12:01",
          who: "Nirmala Perera",
          av: N,
          amount: "LKR 3,960",
          tag: "Paid",
          t: Gy,
        },
        {
          k: "past",
          when: "Mon 21 Sep",
          time: "2:00 – 4:00 PM",
          who: "Shanthi Rajapaksha",
          av: S,
          amount: "LKR 2,200",
          tag: "Paid",
          t: Gy,
        },
      ],
      [
        {
          k: "past",
          when: "Thu 1 Oct",
          time: "Cancelled by you",
          who: "Mala Wickrama",
          av: M,
          amount: "LKR 2,640",
          tag: "Refunded",
          t: Gy,
        },
      ],
    ];
    const list = data[this.state.tab];
    const si = Math.min(this.state.sel, list.length - 1);
    const rows = list.map((r, i) => ({
      ...r,
      tagBg: r.t[0],
      tagFg: r.t[1],
      pressed: i === si ? "true" : "false",
      bg: i === si ? "#F6F6F6" : "#FFFFFF",
      pick: () => this.setState({ sel: i }),
    }));
    const names = ["Upcoming", "Past", "Cancelled"];
    const tabs = names.map((l, i) => {
      const on = this.state.tab === i;
      return {
        label: l,
        sel: on ? "true" : "false",
        bg: on ? "#000000" : "transparent",
        fg: on ? "#FFFFFF" : "#000000",
        weight: on ? "700" : "600",
        pick: () => this.setState({ tab: i, sel: 0 }),
      };
    });
    const sel = list[si];
    return { tabs, rows, sel, isLive: sel.k === "live", isPast: sel.k === "past", isUpcoming: sel.k === "up" };
  }
}

export default function VisitsScreen() {
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
      <AppHeader active="/visits" />{" "}
      <main
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "24px 24px 50px",
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/images/amma.png"
              alt=""
              style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover" }}
            />
            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "#545454" }}>Caring for</span>
              <h1
                style={{
                  margin: "0",
                  fontSize: "28px",
                  lineHeight: "1.05",
                  fontWeight: "800",
                  letterSpacing: "-0.03em",
                }}
              >
                {"Amma's visits"}
              </h1>
            </span>
          </div>{" "}
          <div
            role="tablist"
            style={{
              height: "38px",
              borderRadius: "19px",
              background: "#EEEEEE",
              padding: "4px",
              boxSizing: "border-box",
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "4px",
              flex: "0 1 360px",
            }}
          >
            {v.tabs.map((t: any, i1: number) => (
              <Fragment key={i1}>
                <button
                  role="tab"
                  aria-selected={t.sel}
                  onClick={t.pick}
                  style={{
                    border: "none",
                    borderRadius: "14px",
                    background: t.bg,
                    color: t.fg,
                    font: `${t.weight} 13px var(--font-figtree), sans-serif`,
                  }}
                >
                  {t.label}
                </button>
              </Fragment>
            ))}
          </div>
        </div>{" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <section
            aria-label="Visit list"
            style={{
              flex: "999 1 520px",
              minWidth: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "14px",
              overflowX: "auto",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 2fr 1fr 1fr",
                minWidth: "560px",
                gap: "14px",
                padding: "12px 16px",
                background: "#F6F6F6",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#545454",
              }}
            >
              <span>When</span>
              <span>Caregiver</span>
              <span>Amount</span>
              <span>Status</span>
            </div>{" "}
            {v.rows.map((r: any, i2: number) => (
              <Fragment key={i2}>
                <button
                  onClick={r.pick}
                  aria-pressed={r.pressed}
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "2fr 2fr 1fr 1fr",
                    minWidth: "560px",
                    gap: "14px",
                    alignItems: "center",
                    padding: "14px 16px",
                    border: "none",
                    borderTop: "1px solid #E2E2E2",
                    background: r.bg,
                    color: "#000000",
                    textAlign: "left",
                    fontFamily: "var(--font-figtree), sans-serif",
                  }}
                >
                  <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "700" }}>{r.when}</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>{r.time}</span>
                  </span>{" "}
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "0" }}>
                    <img
                      src={r.av}
                      alt=""
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        flexShrink: "0",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {r.who}
                    </span>
                  </span>{" "}
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>{r.amount}</span>{" "}
                  <span
                    style={{
                      justifySelf: "start",
                      height: "22px",
                      padding: "0 10px",
                      borderRadius: "11px",
                      background: r.tagBg,
                      color: r.tagFg,
                      display: "flex",
                      alignItems: "center",
                      fontSize: "12px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {r.tag}
                  </span>
                </button>
              </Fragment>
            ))}
          </section>{" "}
          <aside
            aria-label="Selected visit"
            style={{
              flex: "1 1 340px",
              maxWidth: "420px",
              minWidth: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "16px",
              padding: "18px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src={v.sel.av}
                alt=""
                style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
              />
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "16px", fontWeight: "800" }}>{v.sel.when}</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>
                  {v.sel.who}
                  {" · "}
                  {v.sel.time}
                </span>
              </span>
            </div>{" "}
            {v.isLive ? (
              <>
                <div
                  style={{
                    borderRadius: "12px",
                    background: "#E6F4EC",
                    padding: "14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#05663A",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#05944F" }}></span>
                    Live · checked in 9:02
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>3 of 5 tasks done</span>
                  <div style={{ height: "6px", borderRadius: "3px", background: "#C9E6D5", display: "flex" }}>
                    <span style={{ width: "60%", borderRadius: "3px", background: "#05944F" }}></span>
                  </div>
                </div>{" "}
                <Link
                  href="/live-visit"
                  style={{
                    height: "40px",
                    borderRadius: "20px",
                    background: "#000000",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  Follow live
                </Link>{" "}
                <Link
                  href="/on-the-way"
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    textAlign: "center",
                    textDecoration: "underline",
                    marginTop: "-6px",
                  }}
                >
                  {"See her route & visit code"}
                </Link>
              </>
            ) : null}{" "}
            {v.isPast ? (
              <>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "12px", overflow: "hidden" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", padding: "12px 14px", fontSize: "14px" }}
                  >
                    <span style={{ color: "#545454" }}>Paid</span>
                    <span style={{ fontWeight: "700" }}>{v.sel.amount}</span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", padding: "12px 14px", fontSize: "14px" }}
                  >
                    <span style={{ color: "#545454" }}>Your rating</span>
                    <span style={{ fontWeight: "700" }}>★★★★★</span>
                  </div>
                </div>{" "}
                <Link
                  href="/visit-report"
                  style={{
                    height: "40px",
                    borderRadius: "20px",
                    background: "#000000",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  {"Visit report & receipt"}
                </Link>{" "}
                <Link
                  href="/rebook"
                  style={{
                    height: "38px",
                    borderRadius: "19px",
                    background: "#EEEEEE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginTop: "-6px",
                  }}
                >
                  Book again
                </Link>
              </>
            ) : null}{" "}
            {v.isUpcoming ? (
              <>
                <div
                  style={{
                    borderRadius: "12px",
                    background: "#EAF0FD",
                    color: "#1A4FB5",
                    padding: "12px 14px",
                    fontSize: "13px",
                    fontWeight: "600",
                    lineHeight: "1.45",
                  }}
                >
                  {v.sel.amount}
                  {" held in escrow · free to change until 24 hrs before"}
                </div>{" "}
                <Link
                  href="/care-plan"
                  style={{
                    height: "40px",
                    borderRadius: "20px",
                    background: "#000000",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  {"Care plan & tasks"}
                </Link>{" "}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "8px",
                    marginTop: "-6px",
                  }}
                >
                  <Link
                    href="/reschedule"
                    style={{
                      height: "38px",
                      borderRadius: "19px",
                      background: "#EEEEEE",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Reschedule
                  </Link>
                  <Link
                    href="/cancel-booking"
                    style={{
                      height: "38px",
                      borderRadius: "19px",
                      background: "#EEEEEE",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Cancel
                  </Link>
                </div>{" "}
                <Link
                  href="/weekly-care"
                  style={{ fontSize: "13px", fontWeight: "700", textAlign: "center", textDecoration: "underline" }}
                >
                  Manage weekly care
                </Link>{" "}
                <Link
                  href="/booking-status"
                  style={{ fontSize: "13px", fontWeight: "700", textAlign: "center", textDecoration: "underline" }}
                >
                  Booking status
                </Link>
              </>
            ) : null}
          </aside>
        </div>
      </main>
    </div>
  );
}
