import Link from "next/link";

export default function RecoveryPendingScreen() {
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
      <div style={{ flex: "1", minHeight: "900px", display: "flex", flexWrap: "wrap" }}>
        <section
          style={{
            flex: "0 1 520px",
            background: "#000000",
            color: "#FFFFFF",
            padding: "40px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "18px", fontWeight: "800" }}
          >
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "13px",
                background: "#FFFFFF",
                color: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              g
            </span>
            Gloocan
          </Link>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "420px" }}>
            <h2
              style={{ margin: "0", fontSize: "36px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.03em" }}
            >
              Trusted care for the people you love.
            </h2>
            <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#D6D6D6" }}>
              Verified caregivers, live visit updates from anywhere, and you pay only after the visit.
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
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
              Every caregiver ID and police checked
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
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
              Follow visits live from Colombo or Melbourne
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
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
              Payment held until you approve
            </span>
          </div>
        </section>
        <section
          style={{
            flex: "999 1 480px",
            padding: "48px 32px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "32px",
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
                  <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"></path>
                </svg>
              </span>
              <span
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "32px",
                  background: "#05944F",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "-16px",
                  border: "4px solid #FFFFFF",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12l5 5 9-10"></path>
                </svg>
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#05663A",
                }}
              >
                Recovery requested
              </span>
              <h1
                style={{
                  margin: "0",
                  fontSize: "32px",
                  lineHeight: "1.1",
                  fontWeight: "800",
                  letterSpacing: "-0.025em",
                }}
              >
                {"We're checking it's you"}
              </h1>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#333333" }}>
                {"Usually within a few hours. We'll email d••••.f@gmail.com."}
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
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>Request received</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Today, 9:14 AM · case GL-R-1182</span>
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
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>ID and selfie check</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Our team compares them</span>
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
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#333333" }}>New number linked</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>You log in with it</span>
                </span>
              </li>
            </ol>
            <div
              style={{
                borderRadius: "14px",
                background: "#E6F4EC",
                color: "#05663A",
                padding: "12px 14px",
                fontSize: "13px",
                fontWeight: "600",
                lineHeight: "1.45",
                display: "flex",
                gap: "8px",
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
              <span>Your account is locked while we check, so nobody else can use it.</span>
            </div>
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
                width: "100%",
              }}
            >
              Chat with support
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
