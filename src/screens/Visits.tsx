"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { selectCaregiver, selectVisit } from "@/lib/actions";
import { dayLabel, lkr, TODAY } from "@/lib/format";
import { caregiver } from "@/lib/mock/caregivers";
import { liveTasks, PAST, statusTag, UPCOMING } from "@/lib/selectors";
import { useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { tab: 0 };
  }
  renderVals() {
    const { demo } = this.props;
    const groups = [
      demo.visits.filter((x) => UPCOMING.includes(x.status)).sort((a, b) => a.date.localeCompare(b.date)),
      demo.visits.filter((x) => PAST.includes(x.status)).sort((a, b) => b.date.localeCompare(a.date)),
      demo.visits.filter((x) => x.status === "cancelled").sort((a, b) => b.date.localeCompare(a.date)),
    ];
    const list = groups[this.state.tab];
    const selId = list.some((x) => x.id === demo.selectedVisit) ? demo.selectedVisit : list[0]?.id;
    const view = (x) => {
      const cg = caregiver(x.caregiverId);
      const tag = statusTag[x.status];
      return {
        id: x.id,
        k: x.status === "live" ? "live" : PAST.includes(x.status) || x.status === "cancelled" ? "past" : "up",
        when: (x.date === TODAY ? "Today · " : "") + dayLabel(x.date),
        time:
          x.status === "cancelled"
            ? x.cancelReason || "Cancelled"
            : `${x.start} – ${x.end}` + (x.weekly && x.status === "confirmed" ? " · weekly" : ""),
        who: cg.name,
        av: cg.avatar,
        amount: lkr(x.amount),
        tag: tag[0],
        tagBg: tag[1],
        tagFg: tag[2],
        weekly: x.weekly,
        toApprove: x.status === "toApprove",
        paidLabel: x.status === "toApprove" ? "To release" : x.status === "cancelled" ? "Refunded" : "Paid",
        rating: x.rating ? "★".repeat(x.rating) : "Not rated yet",
      };
    };
    const rows = list.map((x) => ({
      ...view(x),
      pressed: x.id === selId ? "true" : "false",
      bg: x.id === selId ? "#F6F6F6" : "#FFFFFF",
      pick: () => selectVisit(x.id),
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
        pick: () => {
          this.setState({ tab: i });
          if (groups[i][0]) selectVisit(groups[i][0].id);
        },
      };
    });
    const selVisit = list.find((x) => x.id === selId);
    const sel = selVisit ? view(selVisit) : null;
    return {
      tabs,
      rows,
      sel: sel ?? { av: "/images/amma.png", when: "", who: "", time: "", amount: "" },
      empty: !sel,
      isLive: sel?.k === "live",
      isPast: sel?.k === "past",
      isUpcoming: sel?.k === "up",
      liveDone: liveTasks(demo).label,
      rebook: () => selVisit && selectCaregiver(selVisit.caregiverId),
    };
  }
}

export default function VisitsScreen() {
  const demo = useDemo();
  const v = useLogic(Logic, { props: { demo }, persist: "visits" });
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
            {v.empty ? (
              <div style={{ padding: "28px 16px", fontSize: "14px", color: "#545454", textAlign: "center" }}>
                No visits here yet.
              </div>
            ) : null}
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
          {v.empty ? null : (
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
                    <span style={{ fontSize: "14px", fontWeight: "700" }}>{v.liveDone}</span>
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
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "12px 14px",
                        fontSize: "14px",
                      }}
                    >
                      <span style={{ color: "#545454" }}>{v.sel.paidLabel}</span>
                      <span style={{ fontWeight: "700" }}>{v.sel.amount}</span>
                    </div>
                    <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "12px 14px",
                        fontSize: "14px",
                      }}
                    >
                      <span style={{ color: "#545454" }}>Your rating</span>
                      <span style={{ fontWeight: "700" }}>{v.sel.rating}</span>
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
                    onClick={v.rebook}
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
                  {v.sel.weekly ? (
                    <Link
                      href="/weekly-care"
                      style={{ fontSize: "13px", fontWeight: "700", textAlign: "center", textDecoration: "underline" }}
                    >
                      Manage weekly care
                    </Link>
                  ) : null}{" "}
                  <Link
                    href="/booking-status"
                    style={{ fontSize: "13px", fontWeight: "700", textAlign: "center", textDecoration: "underline" }}
                  >
                    Booking status
                  </Link>
                </>
              ) : null}
            </aside>
          )}
        </div>
      </main>
    </div>
  );
}
