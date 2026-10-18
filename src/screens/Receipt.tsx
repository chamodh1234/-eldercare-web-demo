import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export default function ReceiptScreen() {
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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
            maxWidth: "720px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <Link
            href="/payments"
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
            Payments
          </Link>
          <span style={{ display: "flex", gap: "8px" }}>
            <Link
              href="/receipt"
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
                <path d="M7 9V3h10v6"></path>
                <rect x="4" y="9" width="16" height="8" rx="2"></rect>
                <path d="M7 14h10v7H7z"></path>
              </svg>
              Print
            </Link>
            <Link
              href="/receipt"
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
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path>
              </svg>
              Download PDF
            </Link>
          </span>
        </div>
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            width: "100%",
            border: "1px solid #E2E2E2",
            borderRadius: "20px",
            padding: "40px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            background: "#FFFFFF",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "20px", fontWeight: "800" }}>
              <span
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "15px",
                  background: "#000000",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                }}
              >
                g
              </span>
              Gloocan
            </span>
            <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px" }}>
              <span style={{ fontSize: "22px", fontWeight: "800" }}>Receipt</span>
              <span style={{ fontSize: "13px", color: "#545454" }}>GL-B-58210 · 12 Oct 2026</span>
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              fontSize: "13px",
              lineHeight: "1.6",
            }}
          >
            <div>
              <span style={{ fontWeight: "700", display: "block" }}>Billed to</span>
              Dilani Fernando
              <br />
              Colombo 05, Sri Lanka
              <br />
              dilani.f@example.com
            </div>
            <div>
              <span style={{ fontWeight: "700", display: "block" }}>Visit</span>
              Sat 10 Oct 2026 · 9:02 – 12:04
              <br />
              Companionship for Kamala Fernando
              <br />
              Caregiver: Nirmala Perera (GL-C-2210)
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderTop: "1px solid #E2E2E2",
                fontSize: "14px",
              }}
            >
              <span>3 hrs × LKR 1,200</span>
              <span>LKR 3,600</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderTop: "1px solid #E2E2E2",
                fontSize: "14px",
              }}
            >
              <span>{"Booking & safety fee (10%)"}</span>
              <span>LKR 360</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderTop: "1px solid #E2E2E2",
                fontSize: "14px",
                fontWeight: "800",
              }}
            >
              <span>Total paid</span>
              <span>LKR 3,960</span>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
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
              Paid
            </span>
            <span style={{ fontSize: "13px", color: "#545454" }}>
              Visa ·· 4417 · held 5 Oct · released after approval 12 Oct
            </span>
          </div>
          <span
            style={{
              fontSize: "11px",
              color: "#545454",
              lineHeight: "1.6",
              borderTop: "1px solid #E2E2E2",
              paddingTop: "16px",
            }}
          >
            Gloocan Technologies (Pvt) Ltd · Colombo, Sri Lanka · Gloocan collects payment on behalf of the caregiver.
            Questions: help in the app.
          </span>
        </div>
      </main>
    </div>
  );
}
