"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { useRef, useState } from "react";
import { ChatLog } from "@/components/ChatLog";
import { selectCaregiver, sendMessage } from "@/lib/actions";
import { dayLabel } from "@/lib/format";
import { caregiver } from "@/lib/mock/caregivers";
import { mutate, useDemo } from "@/lib/store";
import { useComposer } from "@/lib/useComposer";

function selectThread(id: string) {
  mutate((d) => {
    d.selectedThread = id;
    const t = d.threads.find((x) => x.id === id);
    if (t) t.unread = 0;
  });
}

export default function MessagesScreen() {
  const demo = useDemo();
  const [q, setQ] = useState("");
  const file = useRef<HTMLInputElement>(null);
  const needle = q.trim().toLowerCase();
  const list = demo.threads.filter(
    (t) => !needle || [t.name, ...t.messages.map((m) => m.text)].some((x) => x.toLowerCase().includes(needle)),
  );
  const thread = demo.threads.find((t) => t.id === demo.selectedThread) ?? demo.threads[0];
  const cg = thread?.caregiverId ? caregiver(thread.caregiverId) : null;
  const live = !!cg && demo.visits.some((v) => v.status === "live" && v.caregiverId === cg.id);
  const next = cg
    ? demo.visits
        .filter((v) => v.caregiverId === cg.id && ["requested", "confirmed", "covering"].includes(v.status))
        .sort((a, b) => a.date.localeCompare(b.date))[0]
    : undefined;
  const requests = Object.values(demo.requests).filter((r) => r === "new").length;
  const composer = useComposer((text) => thread && sendMessage(thread.id, text));
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
      <AppHeader active="/messages" />
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
          <aside
            aria-label="Conversations"
            style={{
              flex: "1 1 280px",
              maxWidth: "320px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
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
                Messages
              </h1>
            </div>
            <label
              style={{
                height: "40px",
                borderRadius: "20px",
                background: "#EEEEEE",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "0 14px",
                color: "#545454",
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
                <circle cx="11" cy="11" r="7"></circle>
                <path d="M20 20l-3.5-3.5"></path>
              </svg>
              <input
                aria-label="Search messages"
                placeholder="Search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                style={{
                  flex: "1",
                  minWidth: "0",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  font: "500 14px var(--font-figtree), sans-serif",
                }}
              />
            </label>
            <div
              role="tablist"
              style={{
                height: "40px",
                borderRadius: "20px",
                background: "#EEEEEE",
                padding: "4px",
                boxSizing: "border-box",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4px",
              }}
            >
              <Link
                href="/messages"
                role="tab"
                aria-selected="true"
                style={{
                  borderRadius: "16px",
                  background: "#000000",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Chats
              </Link>
              <Link
                href="/chat-requests"
                role="tab"
                aria-selected="false"
                style={{
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                {"Requests "}
                <span
                  style={{
                    minWidth: "18px",
                    height: "18px",
                    borderRadius: "9px",
                    background: "#276EF1",
                    color: "#FFFFFF",
                    fontSize: "11px",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {requests}
                </span>
              </Link>
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {list.map((t) => {
                const on = t.id === thread?.id;
                const last = t.messages[t.messages.length - 1];
                return (
                  <button
                    key={t.id}
                    type="button"
                    aria-current={on ? "true" : undefined}
                    onClick={() => selectThread(t.id)}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      background: on ? "#F6F6F6" : "transparent",
                      border: "none",
                      width: "100%",
                      textAlign: "left",
                      color: "#000000",
                      fontFamily: "var(--font-figtree), sans-serif",
                    }}
                  >
                    {t.avatar ? (
                      <img
                        src={t.avatar}
                        alt=""
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          display: "block",
                          flexShrink: "0",
                        }}
                      />
                    ) : (
                      <span
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "20px",
                          background: "#000000",
                          color: "#FFFFFF",
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
                          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"></path>
                        </svg>
                      </span>
                    )}
                    <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700" }}>{t.name}</span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>{t.time}</span>
                      </span>
                      <span
                        style={{
                          fontSize: "13px",
                          color: "#545454",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {last?.text ?? "No messages yet"}
                      </span>
                    </span>
                    {t.unread > 0 ? (
                      <span
                        style={{
                          minWidth: "18px",
                          height: "18px",
                          borderRadius: "9px",
                          background: "#276EF1",
                          color: "#FFFFFF",
                          fontSize: "11px",
                          fontWeight: "700",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {t.unread}
                      </span>
                    ) : null}
                  </button>
                );
              })}
              {list.length === 0 ? (
                <span style={{ padding: "12px 14px", fontSize: "13px", color: "#545454" }}>No chats match.</span>
              ) : null}
            </nav>
          </aside>
          <section
            aria-label={`Chat with ${thread?.name ?? ""}`}
            style={{
              flex: "999 1 460px",
              minWidth: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              height: "720px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                borderBottom: "1px solid #E2E2E2",
              }}
            >
              <img
                src={thread?.avatar ?? "/images/dilani.png"}
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                }}
              />
              <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>{thread?.name}</span>
                <span style={{ fontSize: "12px", color: live ? "#05663A" : "#545454" }}>
                  {live
                    ? "Online · with Amma now"
                    : cg
                      ? "Usually replies within an hour"
                      : "Replies in about 2 minutes"}
                </span>
              </span>
              <Link
                href="/voice-call"
                aria-label="Voice call"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "18px",
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
                  <path d="M5 4h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"></path>
                </svg>
              </Link>
              <Link
                href="/video-call"
                aria-label="Video call"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "18px",
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
                  <rect x="3" y="6" width="13" height="12" rx="2"></rect>
                  <path d="M16 10.5l5-3v9l-5-3z"></path>
                </svg>
              </Link>
            </div>
            <ChatLog
              full
              messages={thread?.messages ?? []}
              header={
                live ? (
                  <Link
                    href="/live-visit"
                    style={{
                      alignSelf: "center",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      border: "1px solid #E2E2E2",
                      borderRadius: "12px",
                      padding: "8px 12px",
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
                    <span style={{ fontSize: "13px", fontWeight: "700" }}>Today · 9:00 – 12:00 · Companionship</span>
                    <span
                      style={{
                        height: "24px",
                        padding: "0 10px",
                        borderRadius: "12px",
                        background: "#E6F4EC",
                        color: "#05663A",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12px",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Live
                    </span>
                  </Link>
                ) : null
              }
            />
            <form
              onSubmit={composer.submit}
              style={{ display: "flex", gap: "8px", padding: "12px", borderTop: "1px solid #E2E2E2" }}
            >
              <input
                ref={file}
                type="file"
                hidden
                onChange={(e) => {
                  const name = e.target.files?.[0]?.name;
                  if (name && thread) sendMessage(thread.id, `Attachment · ${name}`);
                  e.target.value = "";
                }}
              />
              <button
                type="button"
                aria-label="Attach"
                onClick={() => file.current?.click()}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "20px",
                  border: "none",
                  background: "#EEEEEE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000000",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 11.5l-8 8a5 5 0 0 1-7-7l8.5-8.5a3.5 3.5 0 0 1 5 5L10 17.5a2 2 0 0 1-3-3l7.5-7.5"></path>
                </svg>
              </button>
              <label
                style={{
                  flex: "1",
                  minWidth: "0",
                  height: "40px",
                  borderRadius: "20px",
                  background: "#EEEEEE",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 14px",
                }}
              >
                <input
                  aria-label="Message"
                  placeholder={`Message ${thread?.name.split(" ")[0] ?? ""}`}
                  value={composer.value}
                  onChange={composer.onChange}
                  style={{
                    flex: "1",
                    minWidth: "0",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    font: "500 14px var(--font-figtree), sans-serif",
                  }}
                />
              </label>
              <button
                type="submit"
                aria-label="Send"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "20px",
                  border: "none",
                  background: "#000000",
                  color: "#FFFFFF",
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
                  <path d="M12 19V5M5 12l7-7 7 7"></path>
                </svg>
              </button>
            </form>
          </section>
          {cg ? (
            <aside
              style={{
                flex: "1 1 260px",
                maxWidth: "300px",
                minWidth: "0",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                <div
                  style={{
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={cg?.avatar}
                    alt=""
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                      flexShrink: "0",
                    }}
                  />
                  <span style={{ fontSize: "16px", fontWeight: "800" }}>{cg?.name}</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>
                    {`★ ${cg?.rating.toFixed(1)} · ${cg?.visitsWithAmma} visits with Amma`}
                  </span>
                  <span
                    style={{
                      height: "24px",
                      padding: "0 10px",
                      borderRadius: "12px",
                      background: "#E6F4EC",
                      color: "#05663A",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Verified
                  </span>
                </div>
                <div style={{ height: "1px", background: "#E2E2E2" }}></div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "12px 16px",
                    fontSize: "14px",
                  }}
                >
                  <span style={{ color: "#545454" }}>Next visit</span>
                  <span style={{ fontWeight: "700", textAlign: "right" }}>
                    {next ? dayLabel(next.date) : "None booked"}
                    <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                      {next ? `${next.start} – ${next.end}` : ""}
                    </span>
                  </span>
                </div>
                <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "12px 16px",
                    fontSize: "14px",
                  }}
                >
                  <span style={{ color: "#545454" }}>Weekly care</span>
                  <span style={{ fontWeight: "700", textAlign: "right" }}>
                    {cg?.id === "nirmala" ? "Day 4 of 24" : "Not on weekly care"}
                  </span>
                </div>
              </div>
              <Link
                href="/profile"
                onClick={() => cg && selectCaregiver(cg.id)}
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
                View profile
              </Link>
              <Link
                href="/book"
                onClick={() => cg && selectCaregiver(cg.id)}
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
                  marginTop: "-6px",
                }}
              >
                Book again
              </Link>
              <Link
                href="/report-caregiver"
                onClick={() => cg && selectCaregiver(cg.id)}
                style={{ fontSize: "13px", fontWeight: "600", color: "#C11500", textAlign: "center" }}
              >
                Report or block
              </Link>
            </aside>
          ) : null}
        </div>
      </main>
    </div>
  );
}
