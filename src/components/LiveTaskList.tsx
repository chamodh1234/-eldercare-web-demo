"use client";

import { Fragment } from "react";
import type { Task } from "@/lib/mock/seed";

type Props = {
  groups: { label: string; tasks: Task[] }[];
  done: string[];
};

const groupHead = (first: boolean): React.CSSProperties => ({
  padding: "10px 14px",
  background: "#F6F6F6",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#545454",
  borderTop: first ? undefined : "1px solid #E2E2E2",
});

/** Today's tasks during a live visit, grouped as in the design. Ticks come from the caregiver. */
export function LiveTaskList({ groups, done }: Props) {
  const shown = groups.filter((g) => g.tasks.length > 0);
  return (
    <div style={{ border: "1px solid #E2E2E2", borderRadius: "14px", overflow: "hidden" }}>
      {shown.map((g, gi) => (
        <Fragment key={g.label}>
          <div style={groupHead(gi === 0)}>{g.label}</div>
          {g.tasks.map((t, i) => {
            const isDone = done.includes(t.id);
            return (
              <Fragment key={t.id}>
                {i > 0 && <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "50px" }}></div>}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px" }}>
                  {isDone ? (
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "9px",
                        background: "#05944F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
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
                  ) : (
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "9px",
                        border: "2px solid #A6A6A6",
                        boxSizing: "border-box",
                        flexShrink: 0,
                      }}
                    ></span>
                  )}
                  <span
                    style={{
                      flex: "1",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: isDone ? "#545454" : undefined,
                      textDecoration: isDone ? "line-through" : undefined,
                    }}
                  >
                    {t.title}
                  </span>
                  {t.seen && (
                    <span
                      style={{
                        height: "18px",
                        padding: "0 8px",
                        borderRadius: "9px",
                        background: "#E6F4EC",
                        color: "#05663A",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "11px",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Seen {t.seen}
                    </span>
                  )}
                  <span style={{ fontSize: "12px", color: "#545454", width: "32px", textAlign: "right" }}>
                    {t.time}
                  </span>
                </div>
              </Fragment>
            );
          })}
        </Fragment>
      ))}
    </div>
  );
}
