import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export default function LiveVisitScreen() {
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
      <AppHeader active="/visits" action="help" bell={false} />{" "}
      <main
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "22px 24px 38px",
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <Link
          href="/visits"
          style={{
            alignSelf: "flex-start",
            height: "32px",
            padding: "0 14px 0 10px",
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
            width="18"
            height="18"
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
          All visits
        </Link>{" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", alignItems: "flex-start" }}>
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
            <section
              style={{
                borderRadius: "16px",
                background: "#000000",
                color: "#FFFFFF",
                padding: "18px 22px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
                <img
                  src="/images/nirmala.png"
                  alt=""
                  style={{ width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover" }}
                />{" "}
                <span style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#7BD3A4",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#05944F" }}></span>
                    Live · checked in 9:02 · GPS matched home
                  </span>
                  <h1
                    style={{
                      margin: "0",
                      fontSize: "24px",
                      lineHeight: "1.1",
                      fontWeight: "800",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Nirmala is with Amma
                  </h1>
                </span>{" "}
                <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <span style={{ fontSize: "32px", fontWeight: "800", letterSpacing: "-0.03em", lineHeight: "1" }}>
                    2:04
                  </span>
                  <span style={{ fontSize: "12px", color: "#A6A6A6" }}>of 3 hrs · ends 12:00</span>
                </span>{" "}
                <Link
                  href="/ask-more-time"
                  style={{
                    height: "36px",
                    padding: "0 16px",
                    borderRadius: "18px",
                    background: "#FFFFFF",
                    color: "#000000",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "13px",
                    fontWeight: "700",
                  }}
                >
                  Ask to stay longer
                </Link>
              </div>{" "}
              <div style={{ height: "6px", borderRadius: "3px", background: "#3A3A3A", display: "flex" }}>
                <span style={{ width: "69%", borderRadius: "3px", background: "#FFFFFF" }}></span>
              </div>
            </section>{" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", alignItems: "flex-start" }}>
              <section
                style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h2 style={{ margin: "0", fontSize: "16px", fontWeight: "800" }}>{"Today's tasks"}</h2>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#545454" }}>3 of 5 done</span>
                </div>{" "}
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "14px", overflow: "hidden" }}>
                  <div
                    style={{
                      padding: "10px 14px",
                      background: "#F6F6F6",
                      fontSize: "12px",
                      fontWeight: "700",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#545454",
                    }}
                  >
                    Today only
                  </div>{" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px" }}>
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "9px",
                        border: "2px solid #A6A6A6",
                        boxSizing: "border-box",
                      }}
                    ></span>
                    <span style={{ flex: "1", fontSize: "14px", fontWeight: "600" }}>Let the electrician in</span>
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
                      }}
                    >
                      Seen 6:12
                    </span>
                    <span style={{ fontSize: "12px", color: "#545454", width: "32px", textAlign: "right" }}>11:00</span>
                  </div>{" "}
                  <div
                    style={{
                      padding: "10px 14px",
                      background: "#F6F6F6",
                      fontSize: "12px",
                      fontWeight: "700",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#545454",
                      borderTop: "1px solid #E2E2E2",
                    }}
                  >
                    This booking
                  </div>{" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px" }}>
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "9px",
                        background: "#05944F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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
                    <span
                      style={{
                        flex: "1",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#545454",
                        textDecoration: "line-through",
                      }}
                    >
                      Knee exercises from physio
                    </span>
                    <span style={{ fontSize: "12px", color: "#545454", width: "32px", textAlign: "right" }}>10:30</span>
                  </div>{" "}
                  <div
                    style={{
                      padding: "10px 14px",
                      background: "#F6F6F6",
                      fontSize: "12px",
                      fontWeight: "700",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#545454",
                      borderTop: "1px solid #E2E2E2",
                    }}
                  >
                    Every visit
                  </div>{" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px" }}>
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "9px",
                        background: "#05944F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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
                    <span
                      style={{
                        flex: "1",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#545454",
                        textDecoration: "line-through",
                      }}
                    >
                      Walk in the garden
                    </span>
                    <span style={{ fontSize: "12px", color: "#545454", width: "32px", textAlign: "right" }}>9:00</span>
                  </div>{" "}
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "50px" }}></div>{" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px" }}>
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "9px",
                        background: "#05944F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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
                    <span
                      style={{
                        flex: "1",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#545454",
                        textDecoration: "line-through",
                      }}
                    >
                      Medicine reminder
                    </span>
                    <span style={{ fontSize: "12px", color: "#545454", width: "32px", textAlign: "right" }}>10:00</span>
                  </div>{" "}
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "50px" }}></div>{" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px" }}>
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "9px",
                        border: "2px solid #A6A6A6",
                        boxSizing: "border-box",
                      }}
                    ></span>
                    <span style={{ flex: "1", fontSize: "14px", fontWeight: "600" }}>Help with lunch</span>
                    <span style={{ fontSize: "12px", color: "#545454", width: "32px", textAlign: "right" }}>11:30</span>
                  </div>
                </div>{" "}
                <form style={{ display: "flex", gap: "8px" }}>
                  <label
                    style={{
                      flex: "1",
                      minWidth: "0",
                      height: "38px",
                      borderRadius: "19px",
                      background: "#EEEEEE",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 14px",
                    }}
                  >
                    <input
                      aria-label="Add a task for today"
                      placeholder="Add a task for today"
                      style={{
                        flex: "1",
                        minWidth: "0",
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        font: "500 14px var(--font-figtree), sans-serif",
                        color: "#000000",
                      }}
                    />
                  </label>
                  <button
                    type="button"
                    style={{
                      height: "38px",
                      padding: "0 14px",
                      borderRadius: "19px",
                      border: "none",
                      background: "#000000",
                      color: "#FFFFFF",
                      font: "700 13px var(--font-figtree), sans-serif",
                    }}
                  >
                    Add
                  </button>
                </form>
              </section>{" "}
              <section
                style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <h2 style={{ margin: "0", fontSize: "16px", fontWeight: "800" }}>Updates</h2>{" "}
                <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column" }}>
                  <li style={{ display: "flex", gap: "12px" }}>
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "12px",
                          background: "#EEEEEE",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#000000" }}
                        ></span>
                      </span>
                      <span style={{ flex: "1", width: "2px", background: "#E2E2E2" }}></span>
                    </span>
                    <span
                      style={{ flex: "1", paddingBottom: "16px", display: "flex", flexDirection: "column", gap: "4px" }}
                    >
                      <span style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700" }}>Lunch prep started</span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>11:02</span>
                      </span>
                      <span style={{ fontSize: "13px", color: "#545454" }}>Rice and dhal warming</span>
                    </span>
                  </li>{" "}
                  <li style={{ display: "flex", gap: "12px" }}>
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "12px",
                          background: "#05944F",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
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
                      <span style={{ flex: "1", width: "2px", background: "#E2E2E2" }}></span>
                    </span>
                    <span
                      style={{ flex: "1", paddingBottom: "16px", display: "flex", flexDirection: "column", gap: "4px" }}
                    >
                      <span style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700" }}>Knee exercises done</span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>10:42</span>
                      </span>
                      <span style={{ fontSize: "13px", color: "#545454" }}>10 minutes · no pain</span>
                    </span>
                  </li>{" "}
                  <li style={{ display: "flex", gap: "12px" }}>
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "12px",
                          background: "#05944F",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
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
                      <span style={{ flex: "1", width: "2px", background: "#E2E2E2" }}></span>
                    </span>
                    <span
                      style={{ flex: "1", paddingBottom: "16px", display: "flex", flexDirection: "column", gap: "4px" }}
                    >
                      <span style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700" }}>Medicine reminder</span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>10:04</span>
                      </span>
                      <span style={{ fontSize: "13px", color: "#545454" }}>Amma took her 10 AM tablets</span>
                    </span>
                  </li>{" "}
                  <li style={{ display: "flex", gap: "12px" }}>
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "12px",
                          background: "#EEEEEE",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#000000" }}
                        ></span>
                      </span>
                      <span style={{ flex: "1", width: "2px", background: "#E2E2E2" }}></span>
                    </span>
                    <span
                      style={{ flex: "1", paddingBottom: "16px", display: "flex", flexDirection: "column", gap: "4px" }}
                    >
                      <span style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700" }}>Note from Nirmala</span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>9:40</span>
                      </span>
                      <span style={{ fontSize: "13px", color: "#333333", lineHeight: "1.45" }}>
                        {'"Amma is in a good mood, we talked about her garden."'}
                      </span>
                    </span>
                  </li>{" "}
                  <li style={{ display: "flex", gap: "12px" }}>
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "12px",
                          background: "#05944F",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
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
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700" }}>Checked in</span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>9:02</span>
                      </span>
                      <span style={{ fontSize: "13px", color: "#545454" }}>Visit code 4821 confirmed by Amma</span>
                    </span>
                  </li>
                </ol>{" "}
                <Link
                  href="/visit-report"
                  style={{ alignSelf: "flex-start", fontSize: "13px", fontWeight: "700", textDecoration: "underline" }}
                >
                  See the report after check-out
                </Link>
              </section>
            </div>
          </div>{" "}
          <aside
            aria-label="Chat with Nirmala"
            style={{
              flex: "1 1 320px",
              maxWidth: "400px",
              minWidth: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              height: "760px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 14px",
                borderBottom: "1px solid #E2E2E2",
              }}
            >
              <img
                src="/images/nirmala.png"
                alt=""
                style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover" }}
              />
              <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "14px", fontWeight: "700" }}>Nirmala</span>
                <span style={{ fontSize: "12px", color: "#05663A" }}>Online</span>
              </span>
              <Link
                href="/video-call"
                aria-label="Voice call"
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
                  width="18"
                  height="18"
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
                  width="18"
                  height="18"
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
            </div>{" "}
            <div
              style={{
                flex: "1",
                padding: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                overflow: "hidden",
              }}
            >
              <span style={{ alignSelf: "center", fontSize: "12px", fontWeight: "600", color: "#545454" }}>Today</span>{" "}
              <div
                style={{
                  alignSelf: "flex-end",
                  maxWidth: "260px",
                  padding: "10px 12px",
                  borderRadius: "18px 18px 6px 18px",
                  background: "#000000",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  lineHeight: "1.4",
                }}
              >
                Good morning! The electrician comes at 11, please let him in.
              </div>{" "}
              <div
                style={{
                  alignSelf: "flex-start",
                  maxWidth: "260px",
                  padding: "10px 12px",
                  borderRadius: "18px 18px 18px 6px",
                  background: "#EEEEEE",
                  fontSize: "14px",
                  lineHeight: "1.4",
                }}
              >
                Noted. Amma says hello to Ruwan too.
              </div>{" "}
              <div
                style={{
                  alignSelf: "flex-start",
                  maxWidth: "260px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "#EEEEEE",
                }}
              >
                <div
                  style={{
                    height: "140px",
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
                  Photo · garden walk
                </div>
                <div style={{ padding: "8px 12px", fontSize: "12px", color: "#545454" }}>9:21</div>
              </div>{" "}
              <div
                style={{
                  alignSelf: "flex-end",
                  maxWidth: "260px",
                  padding: "10px 12px",
                  borderRadius: "18px 18px 6px 18px",
                  background: "#000000",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  lineHeight: "1.4",
                }}
              >
                She looks happy. Thank you!
              </div>
            </div>{" "}
            <form style={{ display: "flex", gap: "8px", padding: "12px", borderTop: "1px solid #E2E2E2" }}>
              <label
                style={{
                  flex: "1",
                  minWidth: "0",
                  height: "36px",
                  borderRadius: "18px",
                  background: "#EEEEEE",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 12px",
                }}
              >
                <input
                  aria-label="Message Nirmala"
                  placeholder="Message"
                  style={{
                    flex: "1",
                    minWidth: "0",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    font: "500 14px var(--font-figtree), sans-serif",
                    color: "#000000",
                  }}
                />
              </label>
              <button
                type="button"
                aria-label="Send"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "18px",
                  border: "none",
                  background: "#000000",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="18"
                  height="18"
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
          </aside>
        </div>
      </main>
    </div>
  );
}
