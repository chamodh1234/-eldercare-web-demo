import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export default function ExtendRequestScreen() {
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
              Nirmala is with Amma
            </h1>
            <span style={{ fontSize: "15px", color: "#545454" }}>Live · checked in 9:02 · 2:36 of 3 hrs</span>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <div
              style={{
                flex: "3",
                height: "460px",
                border: "1px solid #E2E2E2",
                borderRadius: "16px",
                background: "#F6F6F6",
              }}
            ></div>
            <div
              style={{
                flex: "2",
                height: "300px",
                border: "1px solid #E2E2E2",
                borderRadius: "16px",
                background: "#F6F6F6",
              }}
            ></div>
          </div>
        </main>
        <Link
          href="/live-visit"
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
            width: "min(540px, calc(100% - 32px))",
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
            <img
              src="/images/nirmala.png"
              alt=""
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                flexShrink: "0",
              }}
            />
            <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                Request · 11:38 AM
              </span>
              <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                Nirmala asks to stay 1 more hour
              </span>
            </span>
            <Link
              href="/live-visit"
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
          <span style={{ fontSize: "15px", color: "#333333", lineHeight: "1.5", maxWidth: "620px" }}>
            {"\"Amma's doctor call is running late. I'd like to stay so she's not alone.\""}
          </span>
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
              <span style={{ color: "#545454" }}>Visit would end</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>
                1:00 PM
                <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                  Instead of 12:00 PM
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
              <span style={{ color: "#545454" }}>1 hr × LKR 1,200</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>LKR 1,200</span>
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
              <span style={{ color: "#545454" }}>{"Booking & safety fee"}</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>LKR 120</span>
            </div>
            <div style={{ height: "1px", background: "#E2E2E2" }}></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                background: "#EAF0FD",
              }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#1A4FB5" }}>Added to your hold</span>
                <span style={{ fontSize: "12px", color: "#333333" }}>Paid to Nirmala after you approve the visit</span>
              </span>
              <span style={{ fontSize: "18px", fontWeight: "800", whiteSpace: "nowrap" }}>LKR 1,320</span>
            </div>
          </div>
          <span style={{ fontSize: "12px", color: "#545454" }}>
            No reply by 12:00 PM means no · the visit ends on time.
          </span>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Link
              href="/messages"
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
              Message
            </Link>
            <Link
              href="/live-visit"
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
              Decline
            </Link>
            <Link
              href="/visit-extended"
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
              Approve · LKR 1,320
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
