"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { NoticeRow } from "@/components/NoticeRow";
import { toast } from "@/components/Toaster";
import { mutate, useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { tab: 0, push: true, email: true, wa: true, sms: false };
  }
  renderVals() {
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
    const tg = (k) => {
      const on = this.state[k];
      return {
        pressed: on ? "true" : "false",
        track: on ? "#05944F" : "#CBCBCB",
        align: on ? "flex-end" : "flex-start",
        flip: () => this.setState({ [k]: !on }),
      };
    };
    return {
      tab: this.state.tab,
      tabs: seg("tab", ["All", "Visits", "Payments", "Safety"]),
      push: tg("push"),
      email: tg("email"),
      wa: tg("wa"),
      sms: tg("sms"),
    };
  }
}

export default function NotificationsScreen() {
  const demo = useDemo();
  const v = useLogic(Logic, { persist: "notifications" });
  const cat = ["all", "visits", "payments", "safety"][v.tab];
  const shown = demo.notices.filter((n) => cat === "all" || n.cat === cat);
  const groups = { today: shown.filter((n) => n.group === "today"), week: shown.filter((n) => n.group === "week") };
  const markAllRead = () => {
    mutate((d) => {
      d.notices = d.notices.map((n) => ({ ...n, unread: false }));
    });
    toast("All caught up");
  };
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
          <section
            style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}
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
                  Notifications
                </h1>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                <div
                  role="tablist"
                  style={{
                    height: "40px",
                    borderRadius: "20px",
                    background: "#EEEEEE",
                    padding: "4px",
                    boxSizing: "border-box",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                    gap: "4px",
                    minWidth: "340px",
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
                <button
                  type="button"
                  onClick={markAllRead}
                  style={{
                    border: "none",
                    fontFamily: "var(--font-figtree), sans-serif",
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
                  Mark all read
                </button>
              </div>
            </div>
            {groups.today.length ? (
              <>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#545454",
                  }}
                >
                  Today
                </span>
                <div
                  style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden", marginTop: "-8px" }}
                >
                  {groups.today.map((n, i) => (
                    <Fragment key={n.id}>
                      {i > 0 ? <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div> : null}
                      <NoticeRow n={n} />
                    </Fragment>
                  ))}
                </div>
              </>
            ) : null}
            {groups.week.length ? (
              <>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#545454",
                  }}
                >
                  This week
                </span>
                <div
                  style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden", marginTop: "-8px" }}
                >
                  {groups.week.map((n, i) => (
                    <Fragment key={n.id}>
                      {i > 0 ? <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "66px" }}></div> : null}
                      <NoticeRow n={n} />
                    </Fragment>
                  ))}
                </div>
              </>
            ) : null}
            {groups.today.length + groups.week.length === 0 ? (
              <div
                style={{
                  border: "1px solid #E2E2E2",
                  borderRadius: "16px",
                  padding: "24px 16px",
                  fontSize: "14px",
                  color: "#545454",
                }}
              >
                Nothing here yet.
              </div>
            ) : null}
          </section>
          <aside
            style={{ flex: "1 1 280px", maxWidth: "340px", display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>How we reach you</h2>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <button
                aria-pressed={v.push.pressed}
                onClick={v.push.flip}
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
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Push on my phone</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Check-ins, tasks seen, messages</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.push.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.push.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <button
                aria-pressed={v.email.pressed}
                onClick={v.email.flip}
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
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Email</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Receipts and weekly summary</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.email.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.email.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <button
                aria-pressed={v.wa.pressed}
                onClick={v.wa.flip}
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
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>WhatsApp</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>Only safety and payment alerts</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.wa.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.wa.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <button
                aria-pressed={v.sms.pressed}
                onClick={v.sms.flip}
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
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>SMS</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>If the app is offline</span>
                </span>
                <span
                  style={{
                    width: "40px",
                    height: "24px",
                    borderRadius: "12px",
                    background: v.sms.track,
                    padding: "3px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: v.sms.align,
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
                </span>
              </button>
            </div>
            <span style={{ fontSize: "12px", color: "#545454", lineHeight: "1.5" }}>
              {"Safety alerts are always on, for everyone in Amma's care circle."}
            </span>
            <Link
              href="/notification-settings"
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
              All notification settings
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
