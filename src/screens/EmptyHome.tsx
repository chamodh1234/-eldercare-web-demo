import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export default function EmptyHomeScreen() {
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
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span style={{ fontSize: "14px", color: "#545454" }}>Welcome, Dilani</span>
          <h1 style={{ margin: "0", fontSize: "30px", fontWeight: "800", letterSpacing: "-0.025em" }}>
            {"Let's get Amma's care ready"}
          </h1>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#545454" }}>
              <span>Setup</span>
              <span>1 of 4</span>
            </div>
            <div style={{ height: "6px", borderRadius: "3px", background: "#E2E2E2" }}>
              <div style={{ width: "25%", height: "6px", borderRadius: "3px", background: "#000000" }}></div>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
                <span
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "11px",
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
                <span
                  style={{
                    flex: "1",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#545454",
                    textDecoration: "line-through",
                  }}
                >
                  Add who you care for
                </span>
              </a>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <Link
                href="/care-profile"
                style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "11px",
                    border: "2px solid #A6A6A6",
                    boxSizing: "border-box",
                  }}
                ></span>
                <span
                  style={{ flex: "1", fontSize: "14px", fontWeight: "700", color: "#000000", textDecoration: "none" }}
                >
                  {"Fill in Amma's care needs"}
                </span>
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
                  <path d="M9 6l6 6-6 6"></path>
                </svg>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <Link href="/invite" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
                <span
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "11px",
                    border: "2px solid #A6A6A6",
                    boxSizing: "border-box",
                  }}
                ></span>
                <span
                  style={{ flex: "1", fontSize: "14px", fontWeight: "700", color: "#000000", textDecoration: "none" }}
                >
                  Invite family to help
                </span>
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
                  <path d="M9 6l6 6-6 6"></path>
                </svg>
              </Link>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <Link
                href="/payment-methods"
                style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}
              >
                <span
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "11px",
                    border: "2px solid #A6A6A6",
                    boxSizing: "border-box",
                  }}
                ></span>
                <span
                  style={{ flex: "1", fontSize: "14px", fontWeight: "700", color: "#000000", textDecoration: "none" }}
                >
                  Add a payment method
                </span>
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
                  <path d="M9 6l6 6-6 6"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div
            style={{
              flex: "1 1 380px",
              borderRadius: "20px",
              background: "#F6F6F6",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", color: "#545454" }}>
              NO VISITS YET
            </span>
            <span style={{ fontSize: "20px", fontWeight: "800" }}>Your first visit shows here</span>
            <span style={{ fontSize: "14px", color: "#333333", lineHeight: "1.5" }}>
              24 verified caregivers near Colombo 05 are free this week.
            </span>
            <div style={{ display: "flex", gap: "10px", marginTop: "6px" }}>
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
                Find a caregiver
              </Link>
              <Link
                href="/post-job"
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
                Post a job
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
