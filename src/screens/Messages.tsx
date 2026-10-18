import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export default function MessagesScreen() {
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
                  2
                </span>
              </Link>
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <Link
                href="/messages"
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  background: "#F6F6F6",
                }}
              >
                <img
                  src="/images/nirmala.png"
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
                <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "700" }}>Nirmala Perera</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>11:05</span>
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
                    Noted. Amma says hello to Ruwan too.
                  </span>
                </span>
              </Link>
              <Link
                href="/messages"
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  background: "transparent",
                }}
              >
                <img
                  src="/images/mala.png"
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
                <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "700" }}>Mala Wickrama</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>Mon</span>
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
                    Yes, I can cover Tue 20 to Thu 22.
                  </span>
                </span>
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
                  1
                </span>
              </Link>
              <Link
                href="/messages"
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  background: "transparent",
                }}
              >
                <img
                  src="/images/shanthi.png"
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
                <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "700" }}>Shanthi Rajapaksha</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>Sep 22</span>
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
                    Thank you for the review, Dilani!
                  </span>
                </span>
              </Link>
              <Link
                href="/messages"
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  padding: "12px 14px",
                  borderRadius: "12px",
                }}
              >
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
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Gloocan Support</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>The first one was only a hold…</span>
                </span>
              </Link>
            </nav>
          </aside>
          <section
            aria-label="Chat with Nirmala"
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
                src="/images/nirmala.png"
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
                <span style={{ fontSize: "15px", fontWeight: "800" }}>Nirmala Perera</span>
                <span style={{ fontSize: "12px", color: "#05663A" }}>Online · with Amma now</span>
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
            <div
              style={{
                flex: "1",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                overflow: "hidden",
                background: "#FFFFFF",
              }}
            >
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
              <span style={{ alignSelf: "center", fontSize: "12px", fontWeight: "600", color: "#545454" }}>Today</span>
              <div
                style={{
                  alignSelf: "flex-end",
                  maxWidth: "420px",
                  padding: "10px 14px",
                  borderRadius: "18px 18px 6px 18px",
                  background: "#000000",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  lineHeight: "1.45",
                }}
              >
                Good morning! The electrician comes at 11, please let him in.
              </div>
              <div
                style={{
                  alignSelf: "flex-start",
                  maxWidth: "420px",
                  padding: "10px 14px",
                  borderRadius: "18px 18px 18px 6px",
                  background: "#EEEEEE",
                  fontSize: "14px",
                  lineHeight: "1.45",
                }}
              >
                {"Noted. I'll stay with Amma while he works."}
              </div>
              <div
                style={{
                  alignSelf: "flex-start",
                  width: "220px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#EEEEEE",
                }}
              >
                <div
                  style={{
                    height: "130px",
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
                <div style={{ padding: "6px 10px", fontSize: "12px", color: "#545454" }}>9:21</div>
              </div>
              <div
                style={{
                  alignSelf: "flex-end",
                  maxWidth: "420px",
                  padding: "10px 14px",
                  borderRadius: "18px 18px 6px 18px",
                  background: "#000000",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  lineHeight: "1.45",
                }}
              >
                She looks happy. Thank you!
              </div>
              <div
                style={{
                  alignSelf: "center",
                  maxWidth: "420px",
                  padding: "8px 12px",
                  borderRadius: "10px",
                  background: "#EAF0FD",
                  color: "#1A4FB5",
                  fontSize: "12px",
                  fontWeight: "600",
                  display: "flex",
                  gap: "6px",
                  alignItems: "center",
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
                  <rect x="5" y="11" width="14" height="9" rx="2"></rect>
                  <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                </svg>
                A phone number was hidden. Keep chatting here so visits stay insured.
              </div>
              <div
                style={{
                  alignSelf: "flex-start",
                  maxWidth: "420px",
                  padding: "10px 14px",
                  borderRadius: "18px 18px 18px 6px",
                  background: "#EEEEEE",
                  fontSize: "14px",
                  lineHeight: "1.45",
                }}
              >
                Noted. Amma says hello to Ruwan too.
              </div>
            </div>
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
                  placeholder="Message Nirmala"
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
                  src="/images/nirmala.png"
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
                <span style={{ fontSize: "16px", fontWeight: "800" }}>Nirmala Perera</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>★ 4.9 · 18 visits with Amma</span>
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
                  Sat 17 Oct
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    9:00 – 12:00
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
                <span style={{ fontWeight: "700", textAlign: "right" }}>Day 4 of 24</span>
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
              View profile
            </Link>
            <Link
              href="/book"
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
              href="/messages"
              style={{ fontSize: "13px", fontWeight: "600", color: "#C11500", textAlign: "center" }}
            >
              Report or block
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
