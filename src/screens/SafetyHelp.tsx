import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";

export default function SafetyHelpScreen() {
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>
          <AccountNav active="/safety-help" />
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
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
                {"Safety & help"}
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>Who to call, and your reports</span>
            </div>
            <div
              style={{
                borderRadius: "20px",
                background: "#FFEFED",
                padding: "20px",
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "22px",
                  background: "#E11900",
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
                  <path d="M12 3l9 16H3z"></path>
                  <path d="M12 10v4M12 17v.5"></path>
                </svg>
              </span>
              <span style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "18px", fontWeight: "800", color: "#C11500" }}>
                  Is someone in danger right now?
                </span>
                <span style={{ fontSize: "13px", color: "#333333" }}>Call emergency services first, then tell us.</span>
              </span>
              <span style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <Link
                  href="/safety-help"
                  style={{
                    height: "40px",
                    padding: "0 16px",
                    borderRadius: "20px",
                    background: "#E11900",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    fontWeight: "700",
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
                  Police 119
                </Link>
                <Link
                  href="/safety-help"
                  style={{
                    height: "40px",
                    padding: "0 16px",
                    borderRadius: "20px",
                    background: "#FFFFFF",
                    color: "#C11500",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    fontWeight: "700",
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
                  Ambulance 1990
                </Link>
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
              <Link
                href="/safety-help"
                style={{
                  border: "1px solid #E2E2E2",
                  borderRadius: "16px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span
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
                </span>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>Gloocan safety line</span>
                <span style={{ fontSize: "13px", color: "#545454", lineHeight: "1.45" }}>
                  24/7 · +94 11 755 0000 · Sinhala, Tamil, English
                </span>
              </Link>
              <Link
                href="/report-caregiver"
                style={{
                  border: "1px solid #E2E2E2",
                  borderRadius: "16px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span
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
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3l9 16H3z"></path>
                    <path d="M12 10v4M12 17v.5"></path>
                  </svg>
                </span>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>Report a caregiver</span>
                <span style={{ fontSize: "13px", color: "#545454", lineHeight: "1.45" }}>
                  Safety, conduct, theft, payments outside the app
                </span>
              </Link>
              <Link
                href="/dispute"
                style={{
                  border: "1px solid #E2E2E2",
                  borderRadius: "16px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span
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
                    <rect x="3" y="6" width="18" height="13" rx="2"></rect>
                    <path d="M3 10h18M7 15h3"></path>
                  </svg>
                </span>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>Problem with a visit</span>
                <span style={{ fontSize: "13px", color: "#545454", lineHeight: "1.45" }}>
                  Late, left early, tasks missed, wrong charge
                </span>
              </Link>
              <Link
                href="/support-chat"
                style={{
                  border: "1px solid #E2E2E2",
                  borderRadius: "16px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span
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
                    <circle cx="9" cy="8" r="3.5"></circle>
                    <path d="M2.5 20c1-3.5 3.5-5 6.5-5s5.5 1.5 6.5 5"></path>
                    <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 15c2 .7 3.2 2.3 3.5 5"></path>
                  </svg>
                </span>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>Chat with support</span>
                <span style={{ fontSize: "13px", color: "#545454", lineHeight: "1.45" }}>
                  Replies in about 2 minutes, 7 am – 10 pm
                </span>
              </Link>
            </div>
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Your reports</h2>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px" }}>
                <img
                  src="/images/nirmala.png"
                  alt=""
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block",
                    flexShrink: "0",
                  }}
                />
                <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "14px", fontWeight: "800" }}>GL-20418 · Theft or missing items</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Nirmala Perera · sent today 10:42</span>
                </span>
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
                  Under review
                </span>
                <Link
                  href="/report-status"
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
                  Open
                </Link>
              </div>
            </div>
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>How we keep Amma safe</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <div
                style={{ borderRadius: "14px", background: "#F6F6F6", padding: "14px", display: "flex", gap: "10px" }}
              >
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
                <span style={{ fontSize: "13px", lineHeight: "1.45" }}>
                  <b>Checked caregivers</b>
                  <br />
                  NIC, police clearance and certificate
                </span>
              </div>
              <div
                style={{ borderRadius: "14px", background: "#F6F6F6", padding: "14px", display: "flex", gap: "10px" }}
              >
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
                <span style={{ fontSize: "13px", lineHeight: "1.45" }}>
                  <b>Visit codes</b>
                  <br />
                  Amma confirms who is at the door
                </span>
              </div>
              <div
                style={{ borderRadius: "14px", background: "#F6F6F6", padding: "14px", display: "flex", gap: "10px" }}
              >
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
                <span style={{ fontSize: "13px", lineHeight: "1.45" }}>
                  <b>GPS check-in</b>
                  <br />
                  Time-stamped at the home
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
