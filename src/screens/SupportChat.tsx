import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export default function SupportChatScreen() {
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
        <Link
          href="/help-centre"
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
          Help centre
        </Link>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
          <section
            style={{
              flex: "999 1 560px",
              minWidth: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              height: "700px",
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
              <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>Gloocan Support</span>
                <span style={{ fontSize: "12px", color: "#05663A" }}>Shehani · replies in about 2 min</span>
              </span>
              <Link
                href="/safety-help"
                style={{
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
                Call
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
              }}
            >
              <div
                style={{
                  alignSelf: "flex-start",
                  maxWidth: "460px",
                  padding: "10px 14px",
                  borderRadius: "18px 18px 18px 6px",
                  background: "#EEEEEE",
                  fontSize: "14px",
                  lineHeight: "1.45",
                }}
              >
                {"Hi Dilani, I'm the Gloocan assistant. What do you need help with?"}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span
                  style={{
                    height: "32px",
                    padding: "0 12px",
                    borderRadius: "16px",
                    border: "1px solid #E2E2E2",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Change a visit
                </span>
                <span
                  style={{
                    height: "32px",
                    padding: "0 12px",
                    borderRadius: "16px",
                    border: "1px solid #E2E2E2",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Refund
                </span>
                <span
                  style={{
                    height: "32px",
                    padding: "0 12px",
                    borderRadius: "16px",
                    border: "1px solid #E2E2E2",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Caregiver issue
                </span>
                <span
                  style={{
                    height: "32px",
                    padding: "0 12px",
                    borderRadius: "16px",
                    border: "1px solid #E2E2E2",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Something else
                </span>
              </div>
              <div
                style={{
                  alignSelf: "flex-end",
                  maxWidth: "460px",
                  padding: "10px 14px",
                  borderRadius: "18px 18px 6px 18px",
                  background: "#000000",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  lineHeight: "1.45",
                }}
              >
                I was charged twice for Saturday
              </div>
              <div
                style={{
                  alignSelf: "flex-start",
                  maxWidth: "460px",
                  padding: "10px 14px",
                  borderRadius: "18px 18px 18px 6px",
                  background: "#EEEEEE",
                  fontSize: "14px",
                  lineHeight: "1.45",
                }}
              >
                {"I can see a hold and a payment for the same visit. I'm getting a person to check."}
              </div>
              <span
                style={{
                  alignSelf: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#545454",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <img
                  src="/images/rohini.png"
                  alt=""
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block",
                    flexShrink: "0",
                  }}
                />
                Shehani joined · 10:42
              </span>
              <div
                style={{
                  alignSelf: "flex-start",
                  maxWidth: "460px",
                  padding: "10px 14px",
                  borderRadius: "18px 18px 18px 6px",
                  background: "#EEEEEE",
                  fontSize: "14px",
                  lineHeight: "1.45",
                }}
              >
                {
                  "Hi Dilani, the first one was only a hold. It drops off your card in 3–5 days, so you're charged once. Sorry for the worry!"
                }
              </div>
              <div
                style={{
                  alignSelf: "flex-end",
                  maxWidth: "460px",
                  padding: "10px 14px",
                  borderRadius: "18px 18px 6px 18px",
                  background: "#000000",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  lineHeight: "1.45",
                }}
              >
                Thank you, that makes sense.
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
                  aria-label="Message support"
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
          </section>
          <aside
            style={{
              flex: "1 1 300px",
              maxWidth: "380px",
              minWidth: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "20px",
              padding: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Shared with support</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "14px", fontWeight: "800" }}>Sat 10 Oct · Nirmala</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>LKR 3,960 · paid</span>
              </span>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 16px",
                  fontSize: "14px",
                }}
              >
                <span style={{ color: "#545454" }}>Ticket</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>GL-S-7731</span>
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
                <span style={{ color: "#545454" }}>Opened</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>Today, 10:38</span>
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
                <span style={{ color: "#545454" }}>Status</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>Answered</span>
              </div>
            </div>
            <Link
              href="/help-centre"
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
              Back to help centre
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
