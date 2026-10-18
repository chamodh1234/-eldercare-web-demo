import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";

export default function ChangePhoneScreen() {
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
      <div style={{ position: "relative", flex: "1", display: "flex", flexDirection: "column" }}>
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
            <AccountNav active="/security" />
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
                  Security
                </h1>
                <span style={{ fontSize: "15px", color: "#545454" }}>{"Keep Amma's care details safe"}</span>
              </div>
              <div
                style={{ height: "420px", border: "1px solid #E2E2E2", borderRadius: "16px", background: "#F6F6F6" }}
              ></div>
            </div>
          </div>
        </main>
        <Link
          href="/security"
          aria-label="Close"
          style={{ position: "absolute", inset: "0", background: "rgba(0,0,0,0.45)" }}
        ></Link>
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "absolute",
            left: "50%",
            top: "64px",
            transform: "translateX(-50%)",
            width: "min(520px, calc(100% - 32px))",
            background: "#FFFFFF",
            borderRadius: "20px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                Change mobile number
              </span>
              <span style={{ fontSize: "14px", color: "#545454" }}>
                {"We'll check both numbers so nobody else can move your account."}
              </span>
            </span>
            <Link
              href="/security"
              aria-label="Close"
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
                <path d="M6 6l12 12M18 6L6 18"></path>
              </svg>
            </Link>
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
              <span style={{ color: "#545454" }}>Current</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>
                +94 77 ••• 4120
                <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                  Code sent here first
                </span>
              </span>
            </div>
          </div>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
            <span style={{ fontSize: "13px", fontWeight: "600" }}>New number</span>
            <input
              defaultValue="+94 71 238 5590"
              style={{
                height: "44px",
                border: "1px solid #E2E2E2",
                outline: "none",
                borderRadius: "12px",
                background: "#FFFFFF",
                color: "#000000",
                padding: "0 12px",
                font: "500 14px var(--font-figtree), sans-serif",
                boxSizing: "border-box",
                width: "100%",
              }}
            />
          </label>
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
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>
                  Code to your current number
                </span>
                <span style={{ fontSize: "12px", color: "#545454" }}>{"Proves it's you"}</span>
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
                2
              </span>
              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#333333" }}>Code to the new number</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>Proves you have it</span>
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
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#333333" }}>Number changed</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>Caregivers still never see it</span>
              </span>
            </li>
          </ol>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Link
              href="/security"
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
              Cancel
            </Link>
            <Link
              href="/verify-phone"
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
              Send codes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
