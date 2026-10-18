"use client";

import { useEffect, useRef } from "react";
import type { Message } from "@/lib/mock/seed";

type Props = {
  messages: Message[];
  /** The full Messages page uses wider bubbles and a centred note; side panels use the compact style. */
  full?: boolean;
  day?: string;
  /** Rendered above the day label, e.g. the live-visit chip. */
  header?: React.ReactNode;
  style?: React.CSSProperties;
};

/** Chat bubbles in the design's style, scrolled to the newest message. */
export function ChatLog({ messages, full = false, day = "Today", header, style }: Props) {
  const end = useRef<HTMLDivElement>(null);
  useEffect(() => {
    end.current?.scrollIntoView({ block: "nearest" });
  }, [messages.length]);

  const bubble = full ? "420px" : "260px";
  const pad = full ? "10px 14px" : "10px 12px";
  const line = full ? "1.45" : "1.4";

  return (
    <div
      style={{
        flex: "1",
        padding: full ? "16px" : "14px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        overflowY: "auto",
        background: "#FFFFFF",
        ...style,
      }}
    >
      {header}
      <span style={{ alignSelf: "center", fontSize: "12px", fontWeight: "600", color: "#545454" }}>{day}</span>
      {messages.map((m) =>
        m.photo ? (
          <div
            key={m.id}
            style={{
              alignSelf: m.from === "me" ? "flex-end" : "flex-start",
              width: full ? "220px" : "100%",
              maxWidth: bubble,
              borderRadius: full ? "16px" : "12px",
              overflow: "hidden",
              background: "#EEEEEE",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                height: full ? "130px" : "140px",
                background: "linear-gradient(135deg, #C9D9C0, #8FAF86)",
                display: "flex",
                alignItems: "flex-end",
                padding: "10px",
                boxSizing: "border-box",
                fontSize: "12px",
                fontWeight: "700",
                color: "#1A2E14",
              }}
            >
              {m.text}
            </div>
            <div style={{ padding: full ? "6px 10px" : "8px 12px", fontSize: "12px", color: "#545454" }}>{m.time}</div>
          </div>
        ) : m.from === "note" ? (
          <div
            key={m.id}
            style={{
              alignSelf: "center",
              maxWidth: bubble,
              padding: "8px 12px",
              borderRadius: "10px",
              background: "#EAF0FD",
              color: "#1A4FB5",
              fontSize: "12px",
              fontWeight: "600",
              display: "flex",
              gap: "6px",
              alignItems: "center",
              flexShrink: 0,
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
              style={{ flexShrink: 0 }}
            >
              <rect x="5" y="11" width="14" height="9" rx="2"></rect>
              <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
            </svg>
            {m.text}
          </div>
        ) : (
          <div
            key={m.id}
            style={{
              alignSelf: m.from === "me" ? "flex-end" : "flex-start",
              maxWidth: bubble,
              padding: pad,
              borderRadius: m.from === "me" ? "18px 18px 6px 18px" : "18px 18px 18px 6px",
              background: m.from === "me" ? "#000000" : "#EEEEEE",
              color: m.from === "me" ? "#FFFFFF" : "#000000",
              fontSize: "14px",
              lineHeight: line,
              whiteSpace: "pre-wrap",
              overflowWrap: "anywhere",
              flexShrink: 0,
            }}
          >
            {m.text}
          </div>
        ),
      )}
      <div ref={end}></div>
    </div>
  );
}
