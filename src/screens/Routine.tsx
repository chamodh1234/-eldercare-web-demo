"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { Fragment, useState } from "react";
import { toast } from "@/components/Toaster";
import type { Task } from "@/lib/mock/seed";
import { mutate, useDemo } from "@/lib/store";

export default function RoutineScreen() {
  const demo = useDemo();
  const routine = demo.tasks.filter((t) => t.kind === "routine");
  // Unsaved changes (removals and new order) until "Save routine".
  const [order, setOrder] = useState<string[] | null>(null);
  const [drag, setDrag] = useState<string | null>(null);
  const ids = order ?? routine.map((t) => t.id);
  const rows = ids.map((id) => routine.find((t) => t.id === id)).filter((t): t is Task => !!t);
  const moveOver = (overId: string) => {
    if (!drag || drag === overId) return;
    const next = ids.filter((x) => x !== drag);
    next.splice(next.indexOf(overId) + (ids.indexOf(drag) < ids.indexOf(overId) ? 1 : 0), 0, drag);
    setOrder(next);
  };
  const edit = (t: Task | null) =>
    mutate((d) => {
      d.ui.addTask = t
        ? { w: 0, editId: t.id, title: t.title, time: t.time, note: t.note }
        : { w: 0, title: "", time: "", note: "" };
    });
  const save = () => {
    mutate((d) => {
      const others = d.tasks.filter((t) => t.kind !== "routine");
      const kept = ids.map((id) => d.tasks.find((t) => t.id === id)).filter((t): t is Task => !!t);
      d.tasks = [...kept, ...others];
    });
    setOrder(null);
    toast("Routine saved · every caregiver sees it");
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
      <AppHeader active="/care-plan" />
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
        <Link
          href="/care-plan"
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
          Care plan
        </Link>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>
          <section
            style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}
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
                {"Amma's routine"}
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                General tasks for every visit, whoever you book. Drag to reorder.
              </span>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              {rows.map((t, i) => (
                <Fragment key={t.id}>
                  {i > 0 ? <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "0px" }}></div> : null}
                  <div
                    draggable
                    onDragStart={() => setDrag(t.id)}
                    onDragOver={(e) => {
                      e.preventDefault();
                      moveOver(t.id);
                    }}
                    onDragEnd={() => setDrag(null)}
                    style={{
                      opacity: drag === t.id ? 0.5 : 1,
                      cursor: "grab",
                      display: "grid",
                      gridTemplateColumns: "24px 70px 1fr auto",
                      gap: "12px",
                      alignItems: "center",
                      padding: "12px 16px",
                    }}
                  >
                    <span style={{ color: "#A6A6A6", display: "flex" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <circle cx="9" cy="6" r="1.6"></circle>
                        <circle cx="15" cy="6" r="1.6"></circle>
                        <circle cx="9" cy="12" r="1.6"></circle>
                        <circle cx="15" cy="12" r="1.6"></circle>
                        <circle cx="9" cy="18" r="1.6"></circle>
                        <circle cx="15" cy="18" r="1.6"></circle>
                      </svg>
                    </span>
                    <span
                      style={{
                        height: "32px",
                        borderRadius: "8px",
                        background: "#F6F6F6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "13px",
                        fontWeight: "700",
                      }}
                    >
                      {t.time}
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>{t.title}</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>{t.note}</span>
                    </span>
                    <span style={{ display: "flex", gap: "4px" }}>
                      <Link
                        href="/add-task"
                        aria-label={`Edit ${t.title}`}
                        onClick={() => edit(t)}
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
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M4 20h4L19 9l-4-4L4 16z"></path>
                        </svg>
                      </Link>
                      <button
                        type="button"
                        aria-label={`Remove ${t.title}`}
                        onClick={() => setOrder(ids.filter((x) => x !== t.id))}
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "16px",
                          background: "#EEEEEE",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "none",
                          color: "#000000",
                          padding: "0",
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"></path>
                        </svg>
                      </button>
                    </span>
                  </div>
                </Fragment>
              ))}
              {rows.length === 0 ? (
                <div style={{ padding: "16px", fontSize: "14px", color: "#545454" }}>No routine tasks yet.</div>
              ) : null}
              <div style={{ height: "1px", background: "#E2E2E2" }}></div>
              <Link
                href="/add-task"
                onClick={() => edit(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 16px",
                  fontSize: "14px",
                  fontWeight: "700",
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
                Add a routine task
              </Link>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link
                href="/care-plan"
                onClick={save}
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
                Save routine
              </Link>
              <Link
                href="/care-plan"
                onClick={() => setOrder(null)}
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
            </div>
          </section>
          <aside
            style={{ flex: "1 1 280px", maxWidth: "360px", display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Three kinds of tasks</h2>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <div style={{ display: "flex", gap: "12px", padding: "12px 16px" }}>
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "16px",
                    background: "#EEEEEE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
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
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Every visit</span>
                  <span style={{ fontSize: "13px", color: "#545454", lineHeight: "1.4" }}>
                    {"Amma's routine. Every caregiver sees it on every booking."}
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", padding: "12px 16px" }}>
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "16px",
                    background: "#EEEEEE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                    <path d="M4 10h16M9 3v4M15 3v4"></path>
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Whole booking</span>
                  <span style={{ fontSize: "13px", color: "#545454", lineHeight: "1.4" }}>
                    Only while one booking runs, e.g. 2 weeks of knee exercises.
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", padding: "12px 16px" }}>
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "16px",
                    background: "#EEEEEE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
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
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>One day</span>
                  <span style={{ fontSize: "13px", color: "#545454", lineHeight: "1.4" }}>
                    A single date, like a clinic visit, or today at 6 AM.
                  </span>
                </span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
