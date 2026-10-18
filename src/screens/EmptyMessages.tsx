import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export default function EmptyMessagesScreen() {
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
            style={{ flex: "1 1 280px", maxWidth: "320px", display: "flex", flexDirection: "column", gap: "12px" }}
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
                aria-label="Search"
                placeholder="Search"
                style={{
                  flex: "1",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  font: "500 14px var(--font-figtree), sans-serif",
                }}
              />
            </label>
            <div
              style={{
                borderRadius: "14px",
                background: "#F6F6F6",
                padding: "20px",
                fontSize: "13px",
                color: "#545454",
                textAlign: "center",
              }}
            >
              No chats yet
            </div>
          </aside>
          <section
            style={{
              flex: "999 1 460px",
              minWidth: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "16px",
              height: "640px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                maxWidth: "520px",
                margin: "40px auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "14px",
              }}
            >
              <span
                style={{
                  width: "88px",
                  height: "88px",
                  borderRadius: "44px",
                  background: "#EEEEEE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="32"
                  height="32"
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
              </span>
              <h1 style={{ margin: "0", fontSize: "28px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                No messages yet
              </h1>
              <span style={{ fontSize: "15px", color: "#333333", lineHeight: "1.5" }}>
                Chats with caregivers show here after you book or post a job. Numbers always stay private.
              </span>
              <div
                style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "6px" }}
              >
                <Link
                  href="/search"
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
                  Find a caregiver
                </Link>
                <Link
                  href="/support-chat"
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
                  Message Gloocan support
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
