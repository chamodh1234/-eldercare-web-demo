import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export default function OnTheWayScreen() {
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
      <AppHeader active="/visits" />
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
        <Link
          href="/visits"
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
          All visits
        </Link>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <h1
            style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.025em" }}
          >
            Nirmala is on the way
          </h1>
          <span style={{ fontSize: "15px", color: "#545454" }}>
            {"Arriving about 8:58 AM · today's visit 9:00 – 12:00"}
          </span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <div
            style={{
              flex: "999 1 560px",
              minWidth: "0",
              height: "560px",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              background: "#F3F3F3",
              border: "1px solid #E2E2E2",
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 560"
              preserveAspectRatio="none"
              aria-hidden="true"
              style={{ position: "absolute", inset: "0" }}
            >
              <g stroke="#FFFFFF" strokeWidth="16" fill="none">
                <path d="M-10 120 L820 90"></path>
                <path d="M-10 380 L820 410"></path>
                <path d="M160 -10 L130 580"></path>
                <path d="M560 -10 L590 580"></path>
              </g>
              <g stroke="#FFFFFF" strokeWidth="8" fill="none">
                <path d="M-10 250 L820 240"></path>
                <path d="M360 -10 L370 580"></path>
              </g>
              <path
                d="M140 470 L150 252 L365 246 L575 240 L585 120"
                stroke="#000000"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <circle cx="140" cy="470" r="10" fill="#276EF1" stroke="#FFFFFF" strokeWidth="4"></circle>
            </svg>
            <span
              style={{
                position: "absolute",
                left: "calc(73% - 18px)",
                top: "82px",
                width: "36px",
                height: "36px",
                borderRadius: "18px",
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
                <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
            </span>
            <span
              style={{
                position: "absolute",
                left: "16px",
                bottom: "16px",
                height: "32px",
                padding: "0 12px",
                borderRadius: "16px",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: "700",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              Nirmala · tuk-tuk · 1.4 km away
            </span>
          </div>
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src="/images/nirmala.png"
                alt=""
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                }}
              />
              <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "16px", fontWeight: "800" }}>Nirmala Perera</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>Verified · 4.9 ★</span>
              </span>
              <Link
                href="/messages"
                aria-label="Message"
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
                  <path d="M5 5h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 3V6a1 1 0 0 1 1-1z"></path>
                </svg>
              </Link>
              <Link
                href="/video-call"
                aria-label="Call"
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
            </div>
            <div
              style={{
                borderRadius: "16px",
                background: "#000000",
                color: "#FFFFFF",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", color: "#A6A6A6" }}>
                VISIT CODE
              </span>
              <span style={{ fontSize: "36px", fontWeight: "800", letterSpacing: "0.15em" }}>4821</span>
              <span style={{ fontSize: "12px", color: "#D6D6D6" }}>
                Amma asks for this at the door. Shared with her by SMS.
              </span>
            </div>
            <ol
              style={{
                listStyle: "none",
                margin: "0",
                padding: "0",
                border: "1px solid #E2E2E2",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <li style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
                <span
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "12px",
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
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>Left home</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>8:41</span>
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  borderTop: "1px solid #E2E2E2",
                }}
              >
                <span
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "12px",
                    border: "2px solid #000000",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
                  }}
                >
                  <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#000000" }}></span>
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>Arriving</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>About 8:58</span>
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  borderTop: "1px solid #E2E2E2",
                }}
              >
                <span
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "12px",
                    background: "#EEEEEE",
                    color: "#545454",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: "800",
                    flexShrink: "0",
                  }}
                >
                  3
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#333333" }}>Check in</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>GPS + visit code</span>
                </span>
              </li>
            </ol>
            <Link
              href="/safety-help"
              style={{
                height: "40px",
                padding: "0 18px",
                borderRadius: "20px",
                background: "#FFEFED",
                color: "#C11500",
                fontSize: "14px",
                fontWeight: "700",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxSizing: "border-box",
                whiteSpace: "nowrap",
              }}
            >
              {"Something's wrong"}
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
