"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { useRouter } from "next/navigation";
import { toast } from "@/components/Toaster";
import { addDays, dayLabel, dayNum, dow, TODAY } from "@/lib/format";
import type { TaskKind } from "@/lib/mock/seed";
import { mutate, newId } from "@/lib/store";

const BLANK = { title: "", time: "", note: "" };

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { w: 2, date: TODAY, notify: true, editId: null, ...BLANK };
  }
  renderVals() {
    const { router } = this.props;
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
    // The next visit days: today, then the booking's Mon–Sat days.
    const D = [0, 1, 2, 4, 5, 6].map((n) => addDays(TODAY, n));
    if (!D.includes(this.state.date)) D.push(this.state.date);
    const days = D.map((iso, i) => {
      const on = this.state.date === iso;
      return {
        dow: i === 0 ? "Today" : dow(iso),
        num: dayNum(iso),
        pressed: on ? "true" : "false",
        bg: on ? "#000000" : "#EEEEEE",
        fg: on ? "#FFFFFF" : "#000000",
        pick: () => this.setState({ date: iso }),
      };
    });
    const W = ["Every visit", "Whole booking", "One day"];
    const today = this.state.date === TODAY;
    const hints = [
      "Added to Amma's routine for every caregiver",
      "Every visit with Nirmala until 7 Nov",
      today ? "Today only · Nirmala gets a notification now" : "Only on " + dayLabel(this.state.date),
    ];
    const field = (k) => ({ value: this.state[k], onChange: (e) => this.setState({ [k]: e.target.value }) });
    return {
      when: seg("w", W),
      days,
      oneDay: this.state.w === 2,
      hint: hints[this.state.w],
      notify: tg("notify"),
      title: field("title"),
      time: field("time"),
      note: field("note"),
      cancel: () => this.setState({ ...BLANK, w: 2, date: TODAY, editId: null }),
      add: (e) => {
        e.preventDefault();
        const title = this.state.title.trim();
        if (!title) return toast("Write what Nirmala should do first");
        const kind = (["routine", "booking", "day"] as TaskKind[])[this.state.w];
        const time = this.state.time.trim() || "Any";
        mutate((d) => {
          const existing = d.tasks.find((t) => t.id === this.state.editId);
          if (existing) {
            Object.assign(existing, { kind, title, time, note: this.state.note.trim() });
            delete d.ui.addTask;
            return;
          }
          d.tasks.push({
            id: newId("t"),
            kind,
            title,
            note: this.state.note.trim() || (kind === "day" ? `From ${d.account.first}` : ""),
            time,
            ...(kind === "day" ? { date: this.state.date } : {}),
          });
          delete d.ui.addTask;
        });
        const done = this.state.editId ? "Task updated" : "Task added";
        toast(this.state.notify ? `${done} · Nirmala has been told` : done);
        router.push(this.state.editId ? "/routine" : "/care-plan");
      },
    };
  }
}

export default function AddTaskScreen() {
  const router = useRouter();
  const v = useLogic(Logic, { props: { router }, persist: "addTask" });
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
      <div style={{ position: "relative", flex: "1", display: "flex", flexDirection: "column" }}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <h1
              style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.025em" }}
            >
              {"Amma's care plan"}
            </h1>
            <span style={{ fontSize: "15px", color: "#545454" }}>Nirmala · Mon–Sat 9:00–12:00 · 12 Oct – 7 Nov</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "8px" }}>
            <div
              style={{ height: "300px", border: "1px solid #E2E2E2", borderRadius: "14px", background: "#F6F6F6" }}
            ></div>
            <div
              style={{ height: "300px", border: "1px solid #E2E2E2", borderRadius: "14px", background: "#F6F6F6" }}
            ></div>
            <div
              style={{ height: "300px", border: "1px solid #E2E2E2", borderRadius: "14px", background: "#F6F6F6" }}
            ></div>
            <div
              style={{ height: "300px", border: "1px solid #E2E2E2", borderRadius: "14px", background: "#F6F6F6" }}
            ></div>
            <div
              style={{ height: "300px", border: "1px solid #E2E2E2", borderRadius: "14px", background: "#F6F6F6" }}
            ></div>
            <div
              style={{ height: "300px", border: "1px solid #E2E2E2", borderRadius: "14px", background: "#F6F6F6" }}
            ></div>
          </div>
        </main>
        <Link
          href="/care-plan"
          aria-label="Close"
          style={{ position: "absolute", inset: "0", background: "rgba(0,0,0,0.45)" }}
        ></Link>
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "absolute",
            left: "50%",
            top: "64px",
            transform: "translateX(-50%)",
            width: "min(560px, calc(100% - 32px))",
            background: "#FFFFFF",
            borderRadius: "20px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>Add a task</span>
              <span style={{ fontSize: "14px", color: "#545454" }}>
                For Amma · Nirmala will see it on her task list
              </span>
            </span>
            <Link
              href="/care-plan"
              aria-label="Close"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "16px",
                background: "#EEEEEE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
                <path d="M6 6l12 12M18 6L6 18"></path>
              </svg>
            </Link>
          </div>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
            <span style={{ fontSize: "13px", fontWeight: "600" }}>Task</span>
            <input
              placeholder="e.g. Let the electrician in and stay nearby"
              {...v.title}
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
            <span style={{ fontSize: "13px", fontWeight: "600" }}>When</span>
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
              }}
            >
              {v.when.map((t: any, i1: number) => (
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
            {v.oneDay ? (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "6px" }}>
                  {v.days.map((d: any, i2: number) => (
                    <Fragment key={i2}>
                      <button
                        aria-pressed={d.pressed}
                        onClick={d.pick}
                        style={{
                          height: "48px",
                          borderRadius: "12px",
                          border: "none",
                          background: d.bg,
                          color: d.fg,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "1px",
                          fontFamily: "var(--font-figtree), sans-serif",
                        }}
                      >
                        <span style={{ fontSize: "11px", fontWeight: "600", opacity: ".8" }}>{d.dow}</span>
                        <span style={{ fontSize: "15px", fontWeight: "800" }}>{d.num}</span>
                      </button>
                    </Fragment>
                  ))}
                </div>
              </>
            ) : null}
            <span style={{ fontSize: "12px", color: "#545454" }}>{v.hint}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "12px" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Time</span>
              <input
                placeholder="11:00"
                {...v.time}
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
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Note for Nirmala · optional</span>
              <input
                placeholder="e.g. His name is Saman, he has an ID card"
                {...v.note}
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
          <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
            <button
              aria-pressed={v.notify.pressed}
              onClick={v.notify.flip}
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
                <span style={{ fontSize: "14px", fontWeight: "700" }}>Notify Nirmala now</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>Push notification · she taps Seen</span>
              </span>
              <span
                style={{
                  width: "40px",
                  height: "24px",
                  borderRadius: "12px",
                  background: v.notify.track,
                  padding: "3px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: v.notify.align,
                  flexShrink: "0",
                }}
              >
                <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
              </span>
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Link
              href="/care-plan"
              onClick={v.cancel}
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
              Cancel
            </Link>
            <Link
              href="/care-plan"
              onClick={v.add}
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
              Add task
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
