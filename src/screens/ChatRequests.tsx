"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { s: 0, done: [null, null] };
  }
  renderVals() {
    const R = [
      {
        av: "/images/rohini.png",
        name: "Rohini Fernando",
        first: "Rohini",
        meta: "4.9 ★ · verified · 2.4 km",
        time: "10:12",
        job: "Morning companion for Amma",
        jobSub: "Your job · Mon–Sat 9–12 · LKR 1,200/hr",
        msgs: [
          {
            t: "Hello Dilani, I saw your job for Amma. I have experience with knee recovery after surgery.",
            time: "10:12",
          },
          { t: "Can I ask a few questions about her routine before I apply?", time: "10:12" },
        ],
        yrs: "6 yrs",
        langs: "Sinhala, Tamil",
        visits: "96 visits",
        rating: "4.9 ★ (52)",
      },
      {
        av: "/images/priya.png",
        name: "Priya Senanayake",
        first: "Priya",
        meta: "4.6 ★ · verified · 3.8 km",
        time: "Mon",
        job: "Clinic visit escort",
        jobSub: "Your job · Tue 20 Oct · 2–4 PM",
        msgs: [{ t: "Hi! I can also drive Amma to her clinic on Tuesday if that helps.", time: "Mon 4:20 PM" }],
        yrs: "3 yrs",
        langs: "English, Tamil",
        visits: "31 visits",
        rating: "4.6 ★ (12)",
      },
    ];
    const st = this.state;
    const list = R.map((r, i) => {
      const on = st.s === i;
      const done = st.done[i];
      return {
        ...r,
        pressed: on ? "true" : "false",
        bg: on ? "#F6F6F6" : "transparent",
        preview: r.msgs[r.msgs.length - 1].t,
        status: done === "a" ? "Accepted" : done === "d" ? "Declined" : "New",
        sBg: done === "a" ? "#E6F4EC" : done === "d" ? "#EEEEEE" : "#EAF0FD",
        sFg: done === "a" ? "#05663A" : done === "d" ? "#545454" : "#1A4FB5",
        pick: () => this.setState({ s: i }),
      };
    });
    const sel = R[st.s];
    const d = st.done[st.s];
    const setDone = (v) => () => {
      const nd = st.done.slice();
      nd[st.s] = v;
      this.setState({ done: nd });
    };
    return {
      list,
      sel,
      msgs: sel.msgs,
      pending: !d,
      accepted: d === "a",
      declined: d === "d",
      accept: setDone("a"),
      decline: setDone("d"),
      undo: setDone(null),
      count: st.done.filter((x) => !x).length,
    };
  }
}

export default function ChatRequestsScreen() {
  const v = useLogic(Logic);
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
            aria-label="Chat requests"
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
                aria-selected="false"
                style={{
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Chats
              </Link>
              <Link
                href="/chat-requests"
                role="tab"
                aria-selected="true"
                style={{
                  borderRadius: "16px",
                  background: "#000000",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  fontSize: "13px",
                  fontWeight: "700",
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
                  {v.count}
                </span>
              </Link>
            </div>
            <span style={{ fontSize: "12px", color: "#545454", lineHeight: "1.45", padding: "0 4px" }}>
              New caregivers who want to message you. Nothing is shared until you accept.
            </span>
            <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {v.list.map((r: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    aria-pressed={r.pressed}
                    onClick={r.pick}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "none",
                      background: r.bg,
                      color: "#000000",
                      textAlign: "left",
                      fontFamily: "var(--font-figtree), sans-serif",
                    }}
                  >
                    <img
                      src={r.av}
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        flexShrink: "0",
                      }}
                    />
                    <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700" }}>{r.name}</span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>{r.time}</span>
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
                        {r.preview}
                      </span>
                      <span
                        style={{
                          alignSelf: "flex-start",
                          height: "20px",
                          padding: "0 8px",
                          borderRadius: "10px",
                          background: r.sBg,
                          color: r.sFg,
                          fontSize: "11px",
                          fontWeight: "700",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {r.status}
                      </span>
                    </span>
                  </button>
                </Fragment>
              ))}
            </nav>
          </aside>
          <section
            aria-label="Request"
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
                src={v.sel.av}
                alt=""
                style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
              />
              <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>{v.sel.name}</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>{v.sel.meta}</span>
              </span>
              {v.accepted ? (
                <>
                  <Link
                    href="/video-call"
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
                </>
              ) : null}
              {v.pending ? (
                <>
                  <span
                    style={{
                      height: "24px",
                      padding: "0 10px",
                      borderRadius: "12px",
                      background: "#EAF0FD",
                      color: "#1A4FB5",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Request
                  </span>
                </>
              ) : null}
            </div>
            <div
              style={{
                flex: "1",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                overflow: "hidden",
              }}
            >
              <Link
                href="/applicants"
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
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4M9 12h6M9 16h6"></path>
                </svg>
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "13px", fontWeight: "700" }}>{v.sel.job}</span>
                  <span style={{ fontSize: "11px", color: "#545454" }}>{v.sel.jobSub}</span>
                </span>
              </Link>
              <span style={{ alignSelf: "center", fontSize: "12px", fontWeight: "600", color: "#545454" }}>
                {v.sel.first}
                {" sent a request"}
              </span>
              {v.msgs.map((m: any, i2: number) => (
                <Fragment key={i2}>
                  <div
                    style={{
                      alignSelf: "flex-start",
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                      maxWidth: "440px",
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 14px",
                        borderRadius: "18px 18px 18px 6px",
                        background: "#EEEEEE",
                        fontSize: "14px",
                        lineHeight: "1.45",
                      }}
                    >
                      {m.t}
                    </div>
                    <span style={{ fontSize: "11px", color: "#545454", paddingLeft: "6px" }}>{m.time}</span>
                  </div>
                </Fragment>
              ))}
              {v.accepted ? (
                <>
                  <span
                    style={{
                      alignSelf: "center",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#05663A",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "9px",
                        background: "#05944F",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12l5 5 9-10"></path>
                      </svg>
                    </span>
                    {"You accepted · "}
                    {v.sel.first}
                    {" can now chat with you"}
                  </span>
                  <div
                    style={{
                      alignSelf: "flex-end",
                      maxWidth: "440px",
                      padding: "10px 14px",
                      borderRadius: "18px 18px 6px 18px",
                      background: "#000000",
                      color: "#FFFFFF",
                      fontSize: "14px",
                      lineHeight: "1.45",
                    }}
                  >
                    {"Hi "}
                    {v.sel.first}
                    {", thanks! Happy to answer. What would you like to know?"}
                  </div>
                </>
              ) : null}
              {v.declined ? (
                <>
                  <span style={{ alignSelf: "center", fontSize: "12px", fontWeight: "600", color: "#545454" }}>
                    {"You declined. "}
                    {v.sel.first}
                    {' gets a polite "not right now". '}
                    <button
                      onClick={v.undo}
                      style={{
                        border: "none",
                        background: "transparent",
                        padding: "0",
                        font: "700 12px var(--font-figtree), sans-serif",
                        color: "#000000",
                        textDecoration: "underline",
                      }}
                    >
                      Undo
                    </button>
                  </span>
                </>
              ) : null}
            </div>
            {v.pending ? (
              <>
                <div
                  style={{
                    borderTop: "1px solid #E2E2E2",
                    padding: "14px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    background: "#F6F6F6",
                  }}
                >
                  <span
                    style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#333333" }}
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
                      <rect x="5" y="11" width="14" height="9" rx="2"></rect>
                      <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                    </svg>
                    Accept to reply. Your number and address stay hidden either way.
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    <button
                      onClick={v.accept}
                      style={{
                        height: "40px",
                        padding: "0 20px",
                        borderRadius: "20px",
                        border: "none",
                        background: "#000000",
                        color: "#FFFFFF",
                        font: "700 14px var(--font-figtree), sans-serif",
                      }}
                    >
                      {"Accept & reply"}
                    </button>
                    <button
                      onClick={v.decline}
                      style={{
                        height: "40px",
                        padding: "0 18px",
                        borderRadius: "20px",
                        border: "none",
                        background: "#EEEEEE",
                        color: "#000000",
                        font: "600 14px var(--font-figtree), sans-serif",
                      }}
                    >
                      Decline
                    </button>
                    <Link
                      href="/report-caregiver"
                      style={{
                        height: "40px",
                        padding: "0 12px",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "13px",
                        fontWeight: "700",
                        color: "#C11500",
                      }}
                    >
                      Report
                    </Link>
                  </div>
                </div>
              </>
            ) : null}
            {v.accepted ? (
              <>
                <form style={{ display: "flex", gap: "8px", padding: "12px", borderTop: "1px solid #E2E2E2" }}>
                  <button
                    type="button"
                    aria-label="Attach"
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
                      placeholder="Message"
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
                    type="button"
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
              </>
            ) : null}
            {v.declined ? (
              <>
                <div
                  style={{
                    borderTop: "1px solid #E2E2E2",
                    padding: "14px 16px",
                    fontSize: "13px",
                    color: "#545454",
                    background: "#F6F6F6",
                  }}
                >
                  This request is closed.
                </div>
              </>
            ) : null}
          </section>
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
                  src={v.sel.av}
                  alt=""
                  style={{ width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover" }}
                />
                <span style={{ fontSize: "16px", fontWeight: "800" }}>{v.sel.name}</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>{v.sel.rating}</span>
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
                  Fully verified
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
                <span style={{ color: "#545454" }}>Experience</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{v.sel.yrs}</span>
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
                <span style={{ color: "#545454" }}>Speaks</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{v.sel.langs}</span>
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
                <span style={{ color: "#545454" }}>On Gloocan</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{v.sel.visits}</span>
              </div>
            </div>
            <Link
              href="/profile"
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
              View full profile
            </Link>
            <Link
              href="/applicants"
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
              See job applicants
            </Link>
            <Link
              href="/report-caregiver"
              style={{ alignSelf: "center", fontSize: "13px", fontWeight: "700", color: "#C11500" }}
            >
              Report or block
            </Link>
            <div
              style={{
                borderRadius: "14px",
                background: "#F6F6F6",
                padding: "12px 14px",
                fontSize: "12px",
                lineHeight: "1.5",
                color: "#333333",
              }}
            >
              Never pay or share bank details in chat. Payments only through Gloocan are protected.
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
