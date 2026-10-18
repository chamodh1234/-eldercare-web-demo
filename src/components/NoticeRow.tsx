"use client";

import Link from "next/link";
import { markNoticeRead } from "@/lib/actions";
import type { Notice } from "@/lib/mock/seed";

const ICONS: Record<Notice["icon"], { width: string; shapes: React.ReactNode }> = {
  alert: {
    width: "2.4",
    shapes: (
      <>
        <path d="M12 3l9 16H3z"></path>
        <path d="M12 10v4M12 17v.5"></path>
      </>
    ),
  },
  calendar: {
    width: "2",
    shapes: (
      <>
        <rect x="4" y="5" width="16" height="16" rx="2"></rect>
        <path d="M4 10h16M9 3v4M15 3v4"></path>
      </>
    ),
  },
  phone: {
    width: "2",
    shapes: (
      <path d="M5 4h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"></path>
    ),
  },
  check: { width: "3.5", shapes: <path d="M5 12l5 5 9-10"></path> },
  doc: {
    width: "2",
    shapes: (
      <>
        <path d="M6 3h8l4 4v14H6z"></path>
        <path d="M14 3v4h4M9 12h6M9 16h6"></path>
      </>
    ),
  },
  card: {
    width: "2",
    shapes: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2"></rect>
        <path d="M3 10h18M7 15h3"></path>
      </>
    ),
  },
  people: {
    width: "2",
    shapes: (
      <>
        <circle cx="9" cy="8" r="3.5"></circle>
        <path d="M2.5 20c1-3.5 3.5-5 6.5-5s5.5 1.5 6.5 5"></path>
        <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 15c2 .7 3.2 2.3 3.5 5"></path>
      </>
    ),
  },
  shield: { width: "2", shapes: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"></path> },
};

const RED = ["#FFEFED", "#C11500"];
const BLUE = ["#EAF0FD", "#1A4FB5"];
const GREEN = ["#E6F4EC", "#05663A"];
const GREY = ["#EEEEEE", "#000000"];

/** Icon colours as in the design: urgent items red, unread visit updates blue, good news green. */
function tone(n: Notice) {
  if (n.icon === "alert") return RED;
  if (n.icon === "check" || n.icon === "card") return GREEN;
  if (!n.unread) return GREY;
  if (n.icon === "phone") return RED;
  if (n.icon === "calendar") return BLUE;
  return GREY;
}

export function NoticeRow({ n }: { n: Notice }) {
  const [bg, fg] = tone(n);
  const icon = ICONS[n.icon];
  return (
    <Link
      href={n.href}
      onClick={() => markNoticeRead(n.id)}
      style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}
    >
      <span
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "18px",
          background: bg,
          color: fg,
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
          strokeWidth={icon.width}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icon.shapes}
        </svg>
      </span>
      <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
        <span style={{ fontSize: "14px", fontWeight: n.unread ? "800" : "600" }}>{n.title}</span>
        <span style={{ fontSize: "13px", color: "#545454" }}>{n.body}</span>
      </span>
      <span style={{ fontSize: "12px", color: "#545454", whiteSpace: "nowrap" }}>{n.time}</span>
      {n.unread ? (
        <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#276EF1" }}></span>
      ) : (
        <span style={{ width: "8px" }}></span>
      )}
    </Link>
  );
}
