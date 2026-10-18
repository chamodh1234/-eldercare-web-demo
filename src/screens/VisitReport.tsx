"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { approveVisit, selectVisit } from "@/lib/actions";
import { reportVisit, visitView } from "@/lib/selectors";
import { useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { rating: 5, tags: ["Patient", "Kept me updated"] };
  }
  renderVals() {
    const { demo } = this.props;
    const { v: visit, cg, day, time, sub } = visitView(reportVisit(demo));
    const rating = visit.rating ?? this.state.rating;
    const stars = [1, 2, 3, 4, 5].map((n) => ({
      label: n + " star" + (n > 1 ? "s" : ""),
      checked: rating === n ? "true" : "false",
      color: n <= rating ? "#000000" : "#CBCBCB",
      pick: () => this.setState({ rating: n }),
    }));
    const T = ["On time", "Patient", "Kept me updated", "Followed tasks", "Kind to Amma"];
    const tags = T.map((l) => {
      const on = this.state.tags.includes(l);
      return {
        label: l,
        pressed: on ? "true" : "false",
        bg: on ? "#000000" : "#EEEEEE",
        fg: on ? "#FFFFFF" : "#000000",
        flip: () => this.setState({ tags: on ? this.state.tags.filter((x) => x !== l) : [...this.state.tags, l] }),
      };
    });
    const paid = visit.status === "paid";
    return {
      stars,
      tags,
      finished: `Visit finished · ${visit.end}${/PM/.test(visit.end) ? "" : " PM"}`,
      line: `${day} · ${cg.name} · ${visit.help}`,
      time,
      cg,
      release: paid ? `Paid to ${cg.first}` : `Release to ${cg.first}`,
      sub,
      approveLabel: paid ? "Approved · add a tip" : "Approve & release",
      approve: () => {
        if (!paid) approveVisit(visit.id, rating, this.state.tags);
        selectVisit(visit.id);
      },
    };
  }
}

export default function VisitReportScreen() {
  const demo = useDemo();
  const v = useLogic(Logic, { props: { demo } });
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
      <AppHeader active="/visits" action="none" />{" "}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "22px 24px 50px",
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <Link
          href="/visits"
          style={{
            alignSelf: "flex-start",
            height: "32px",
            padding: "0 14px 0 10px",
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
            width="18"
            height="18"
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
          All visits
        </Link>{" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#05663A",
                }}
              >
                {v.finished}
              </span>{" "}
              <h1
                style={{
                  margin: "0",
                  fontSize: "32px",
                  lineHeight: "1.05",
                  fontWeight: "800",
                  letterSpacing: "-0.03em",
                }}
              >
                {"Amma's visit report"}
              </h1>{" "}
              <span style={{ fontSize: "15px", color: "#545454" }}>{v.line}</span>
            </div>{" "}
            <div
              style={{
                border: "1px solid #E2E2E2",
                borderRadius: "14px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              }}
            >
              <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "12px", color: "#545454" }}>Time</span>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>{v.time}</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>GPS matched home</span>
              </div>{" "}
              <div
                style={{
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  borderLeft: "1px solid #E2E2E2",
                }}
              >
                <span style={{ fontSize: "12px", color: "#545454" }}>Tasks</span>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>5 of 5 done</span>
              </div>{" "}
              <div
                style={{
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  borderLeft: "1px solid #E2E2E2",
                }}
              >
                <span style={{ fontSize: "12px", color: "#545454" }}>Mood</span>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>Happy, chatty</span>
              </div>{" "}
              <div
                style={{
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  borderLeft: "1px solid #E2E2E2",
                }}
              >
                <span style={{ fontSize: "12px", color: "#545454" }}>Meals · medicine</span>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>Full lunch · taken</span>
              </div>
            </div>{" "}
            <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "16px", fontWeight: "800" }}>Tasks</h2>{" "}
              <div
                style={{
                  border: "1px solid #E2E2E2",
                  borderRadius: "14px",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px" }}>
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "9px",
                      background: "#05944F",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12l5 5 9-10"></path>
                    </svg>
                  </span>
                  <span style={{ flex: "1", fontSize: "14px", fontWeight: "600" }}>Walk in the garden</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>9:20</span>
                </div>{" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px" }}>
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "9px",
                      background: "#05944F",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12l5 5 9-10"></path>
                    </svg>
                  </span>
                  <span style={{ flex: "1", fontSize: "14px", fontWeight: "600" }}>Tea, no sugar</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>9:35</span>
                </div>{" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px" }}>
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "9px",
                      background: "#05944F",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12l5 5 9-10"></path>
                    </svg>
                  </span>
                  <span style={{ flex: "1", fontSize: "14px", fontWeight: "600" }}>Medicine reminder</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>10:04</span>
                </div>{" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px" }}>
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "9px",
                      background: "#05944F",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12l5 5 9-10"></path>
                    </svg>
                  </span>
                  <span style={{ flex: "1", fontSize: "14px", fontWeight: "600" }}>Help with lunch</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>11:40</span>
                </div>{" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px" }}>
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "9px",
                      background: "#05944F",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12l5 5 9-10"></path>
                    </svg>
                  </span>
                  <span style={{ flex: "1", fontSize: "14px", fontWeight: "600" }}>{"Tidy room & bedsheets"}</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>11:55</span>
                </div>
              </div>
            </section>{" "}
            <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "16px", fontWeight: "800" }}>Note from {v.cg.first}</h2>{" "}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  background: "#F6F6F6",
                  borderRadius: "14px",
                  padding: "14px 16px",
                }}
              >
                <img
                  src="/images/nirmala.png"
                  alt=""
                  style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover" }}
                />
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#333333" }}>
                  Amma was a bit tired after the walk but fine after tea. We ran out of rice, please add it to the
                  shopping list.
                </p>
              </div>
            </section>
          </div>{" "}
          <aside
            aria-label="Approve visit"
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
            <h2 style={{ margin: "0", fontSize: "20px", fontWeight: "800", letterSpacing: "-0.02em" }}>
              How was the visit?
            </h2>{" "}
            <div role="radiogroup" aria-label="Rating" style={{ display: "flex", gap: "6px" }}>
              {v.stars.map((s: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    role="radio"
                    aria-checked={s.checked}
                    aria-label={s.label}
                    onClick={s.pick}
                    style={{
                      width: "38px",
                      height: "38px",
                      border: "none",
                      padding: "0",
                      background: "transparent",
                      color: s.color,
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"></path>
                    </svg>
                  </button>
                </Fragment>
              ))}
            </div>{" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {v.tags.map((t: any, i2: number) => (
                <Fragment key={i2}>
                  <button
                    aria-pressed={t.pressed}
                    onClick={t.flip}
                    style={{
                      height: "30px",
                      padding: "0 12px",
                      borderRadius: "15px",
                      border: "none",
                      background: t.bg,
                      color: t.fg,
                      font: "600 12px var(--font-figtree), sans-serif",
                    }}
                  >
                    {t.label}
                  </button>
                </Fragment>
              ))}
            </div>{" "}
            <div
              style={{
                borderRadius: "12px",
                background: "#EAF0FD",
                padding: "12px 14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#1A4FB5" }}>{v.release}</span>
              <span style={{ fontSize: "18px", fontWeight: "800" }}>{v.sub}</span>
            </div>{" "}
            <Link
              href="/add-tip"
              onClick={v.approve}
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
              {v.approveLabel}
            </Link>{" "}
            <Link
              href="/dispute"
              style={{
                height: "38px",
                borderRadius: "19px",
                background: "#FFEFED",
                color: "#C11500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: "700",
                marginTop: "-6px",
              }}
            >
              Report a problem
            </Link>{" "}
            <span style={{ fontSize: "12px", color: "#545454", textAlign: "center" }}>
              Auto-approves 24 hrs after check-out · receipt saved in Visits
            </span>
          </aside>
        </div>
      </main>
    </div>
  );
}
