"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { addDays, dayLabel, dayNum, dow, shortDate, TODAY } from "@/lib/format";
import { liveTasks } from "@/lib/selectors";
import { mutate, useDemo } from "@/lib/store";

// The weekly booking runs Mon 12 Oct – Sat 7 Nov, Mon–Sat.
const FIRST_MONDAY = "2026-10-12";
const WEEKS = 4;

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { week: 0, day: 3 };
  }
  renderVals() {
    const { demo } = this.props;
    const week = Math.min(Math.max(this.state.week, 0), WEEKS - 1);
    const monday = addDays(FIRST_MONDAY, week * 7);
    const D = Array.from({ length: 6 }, (_, i) => addDays(monday, i));
    const sel = Math.min(this.state.day, 5);
    const dayTasks = (iso) =>
      demo.tasks.filter((t) => t.kind === "day" && t.date === iso).sort((a, b) => a.time.localeCompare(b.time));
    const booking = demo.tasks.filter((t) => t.kind === "booking");
    const routine = demo.tasks.filter((t) => t.kind === "routine");
    const live = liveTasks(demo);
    const perDay = routine.length + booking.length;
    const days = D.map((iso, i) => {
      const on = sel === i;
      const today = iso === TODAY;
      const extra = dayTasks(iso);
      const count = perDay + extra.length;
      return {
        dow: dow(iso),
        num: dayNum(iso),
        pressed: on ? "true" : "false",
        border: on ? "2px solid #000000" : "1px solid #E2E2E2",
        headBg: today ? "#000000" : "#F6F6F6",
        headFg: today ? "#FFFFFF" : "#000000",
        tag: today ? "Today" : "",
        extras: extra.map((e) => ({ time: e.time, title: e.title })),
        hasExtra: extra.length > 0,
        done:
          iso < TODAY
            ? `Done · ${count} of ${count}`
            : today
              ? `${live.done} of ${live.all.length} done`
              : `${count} tasks`,
        doneFg: iso < TODAY ? "#05663A" : "#545454",
        pick: () => this.setState({ day: i }),
      };
    });
    const selIso = D[sel];
    const one = dayTasks(selIso).map((e, i) => {
      const tag = e.seen ? `Seen ${e.seen}` : "Planned";
      return {
        time: e.time,
        title: e.title,
        note: e.note,
        tag,
        tagBg: e.seen ? "#E6F4EC" : "#EEEEEE",
        tagFg: e.seen ? "#05663A" : "#333333",
        sep: i === 0 ? "none" : "1px solid #E2E2E2",
      };
    });
    const last = addDays(monday, 5);
    return {
      days,
      one,
      hasOne: one.length > 0,
      noOne: one.length === 0,
      selTitle: dayLabel(selIso) + (selIso === TODAY ? " · today" : ""),
      range: `${dayNum(monday)} – ${dayNum(last)} ${shortDate(last).split(" ")[1]}`,
      prev: () => this.setState({ week: Math.max(0, week - 1) }),
      next: () => this.setState({ week: Math.min(WEEKS - 1, week + 1) }),
      atStart: week === 0,
      atEnd: week === WEEKS - 1,
      bookingCard: booking[0]?.title.replace(/ from physio$/, ""),
      bookingTime: booking[0] ? `${booking[0].time} · this booking` : "",
      hasBooking: booking.length > 0,
      booking: booking.map((t, i) => ({ ...t, sep: i > 0 })),
      routineShort: routine.map((t) => (t.short ?? t.title).replace(/ reminder$/, "")).join(" · "),
      routineLine: routine.map((t) => `${t.short ?? t.title} ${t.time}`.replace(" reminder", "")).join(" · "),
      addForDay: () =>
        mutate((d) => {
          d.ui.addTask = { w: 2, date: selIso };
        }),
    };
  }
}

export default function CarePlanScreen() {
  const demo = useDemo();
  const v = useLogic(Logic, { props: { demo }, persist: "carePlan" });
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
      <AppHeader active="/care-plan" />
      <main
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "28px 24px 56px",
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img
              src="/images/amma.png"
              alt=""
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                flexShrink: "0",
              }}
            />
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
                {"Amma's care plan"}
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>Nirmala · Mon–Sat 9:00–12:00 · 12 Oct – 7 Nov</span>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                height: "40px",
                borderRadius: "20px",
                background: "#EEEEEE",
                padding: "0 6px",
              }}
            >
              <button
                type="button"
                aria-label="Previous week"
                onClick={v.prev}
                disabled={v.atStart}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  background: "transparent",
                  color: "#000000",
                  padding: "0",
                  opacity: v.atStart ? 0.35 : 1,
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
              </button>
              <span style={{ fontSize: "14px", fontWeight: "700", padding: "0 6px" }}>{v.range}</span>
              <button
                type="button"
                aria-label="Next week"
                onClick={v.next}
                disabled={v.atEnd}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  background: "transparent",
                  color: "#000000",
                  padding: "0",
                  opacity: v.atEnd ? 0.35 : 1,
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
                  <path d="M9 6l6 6-6 6"></path>
                </svg>
              </button>
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
              href="/add-task"
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
              Add task
            </Link>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <section
            aria-label="Week"
            style={{ flex: "999 1 640px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, minmax(104px, 1fr))",
                gap: "8px",
                overflowX: "auto",
                paddingBottom: "2px",
              }}
            >
              {v.days.map((d: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    aria-pressed={d.pressed}
                    onClick={d.pick}
                    style={{
                      border: d.border,
                      borderRadius: "14px",
                      background: "#FFFFFF",
                      padding: "0",
                      textAlign: "left",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      minHeight: "260px",
                      fontFamily: "var(--font-figtree), sans-serif",
                      color: "#000000",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        padding: "10px 12px",
                        background: d.headBg,
                        color: d.headFg,
                      }}
                    >
                      <span style={{ fontSize: "13px", fontWeight: "600" }}>
                        {d.dow} <b style={{ fontSize: "18px", fontWeight: "800" }}>{d.num}</b>
                      </span>
                      <span style={{ fontSize: "11px", fontWeight: "700" }}>{d.tag}</span>
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "10px" }}>
                      {d.hasExtra ? (
                        <>
                          {d.extras.map((e: any, i2: number) => (
                            <Fragment key={i2}>
                              <span
                                style={{
                                  borderRadius: "10px",
                                  background: "#EAF0FD",
                                  padding: "8px",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "2px",
                                }}
                              >
                                <span style={{ fontSize: "11px", fontWeight: "700", color: "#1A4FB5" }}>
                                  {e.time}
                                  {" · this day"}
                                </span>
                                <span style={{ fontSize: "12px", fontWeight: "700", lineHeight: "1.3" }}>
                                  {e.title}
                                </span>
                              </span>
                            </Fragment>
                          ))}
                        </>
                      ) : null}
                      {v.hasBooking ? (
                        <span
                          style={{
                            borderRadius: "10px",
                            background: "#F6F6F6",
                            padding: "8px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2px",
                          }}
                        >
                          <span style={{ fontSize: "11px", fontWeight: "700", color: "#545454" }}>{v.bookingTime}</span>
                          <span style={{ fontSize: "12px", fontWeight: "700" }}>{v.bookingCard}</span>
                        </span>
                      ) : null}
                      <span
                        style={{
                          borderRadius: "10px",
                          border: "1px dashed #CBCBCB",
                          padding: "8px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "2px",
                        }}
                      >
                        <span style={{ fontSize: "11px", fontWeight: "700", color: "#545454" }}>Every visit</span>
                        <span style={{ fontSize: "12px", fontWeight: "600" }}>{v.routineShort}</span>
                      </span>
                    </span>
                    <span
                      style={{
                        marginTop: "auto",
                        padding: "8px 12px",
                        borderTop: "1px solid #E2E2E2",
                        fontSize: "12px",
                        fontWeight: "700",
                        color: d.doneFg,
                      }}
                    >
                      {d.done}
                    </span>
                  </button>
                </Fragment>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "12px", color: "#545454" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#EAF0FD" }}></span>
                Only that day
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "3px",
                    background: "#F6F6F6",
                    border: "1px solid #E2E2E2",
                  }}
                ></span>
                Whole booking
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{ width: "12px", height: "12px", borderRadius: "3px", border: "1px dashed #A6A6A6" }}
                ></span>
                Every visit (routine)
              </span>
            </div>
          </section>
          <aside
            style={{
              flex: "1 1 300px",
              maxWidth: "360px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <div
                style={{ padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <span style={{ fontSize: "16px", fontWeight: "800" }}>{v.selTitle}</span>
                <Link
                  href="/add-task"
                  onClick={v.addForDay}
                  style={{
                    height: "32px",
                    padding: "0 14px",
                    borderRadius: "16px",
                    background: "#EEEEEE",
                    color: "#000000",
                    fontSize: "13px",
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
                  Add
                </Link>
              </div>
              <div style={{ height: "1px", background: "#E2E2E2" }}></div>
              <div
                style={{
                  padding: "8px 16px",
                  background: "#F6F6F6",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
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
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
                </svg>
                Only this day
              </div>
              {v.hasOne ? (
                <>
                  {v.one.map((t: any, i3: number) => (
                    <Fragment key={i3}>
                      <div style={{ display: "flex", gap: "10px", padding: "10px 16px", borderTop: t.sep }}>
                        <span style={{ width: "40px", fontSize: "12px", fontWeight: "700", paddingTop: "2px" }}>
                          {t.time}
                        </span>
                        <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "14px", fontWeight: "700" }}>{t.title}</span>
                          <span style={{ fontSize: "12px", color: "#545454" }}>{t.note}</span>
                        </span>
                        <span
                          style={{
                            height: "22px",
                            padding: "0 8px",
                            borderRadius: "11px",
                            background: t.tagBg,
                            color: t.tagFg,
                            fontSize: "11px",
                            fontWeight: "700",
                            display: "flex",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {t.tag}
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </>
              ) : null}
              {v.noOne ? (
                <>
                  <Link
                    href="/add-task"
                    onClick={v.addForDay}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#545454",
                    }}
                  >
                    Nothing extra · add a task for this day
                  </Link>
                </>
              ) : null}
              <div
                style={{
                  padding: "8px 16px",
                  background: "#F6F6F6",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  borderTop: "1px solid #E2E2E2",
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
                Whole booking
              </div>
              {v.booking.map((t: any) => (
                <Fragment key={t.id}>
                  {t.sep ? <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div> : null}
                  <div style={{ display: "flex", gap: "10px", padding: "10px 16px" }}>
                    <span style={{ width: "40px", fontSize: "12px", fontWeight: "700" }}>{t.time}</span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>{t.title}</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>{t.note}</span>
                    </span>
                  </div>
                </Fragment>
              ))}
              <div
                style={{
                  padding: "8px 16px",
                  background: "#F6F6F6",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  borderTop: "1px solid #E2E2E2",
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
                Every visit · routine
              </div>
              <Link
                href="/routine"
                style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px" }}
              >
                <span style={{ flex: "1", fontSize: "14px", fontWeight: "600" }}>{v.routineLine}</span>
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
                  <path d="M9 6l6 6-6 6"></path>
                </svg>
              </Link>
            </div>
            <div
              style={{
                borderRadius: "14px",
                background: "#EAF0FD",
                color: "#1A4FB5",
                padding: "12px 14px",
                fontSize: "13px",
                fontWeight: "600",
                lineHeight: "1.45",
              }}
            >
              {"Changes reach Nirmala instantly. You see a "}
              <b>Seen</b>
              {" tick when she reads them."}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
