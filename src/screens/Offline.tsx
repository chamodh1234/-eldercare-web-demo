import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export default function OfflineScreen() {
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
      <div
        style={{
          background: "#000000",
          color: "#FFFFFF",
          padding: "10px 24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          fontSize: "13px",
          fontWeight: "600",
        }}
      >
        {"You're offline · showing what's saved on this device "}
        <Link
          href="/offline"
          style={{
            height: "30px",
            padding: "0 12px",
            borderRadius: "15px",
            background: "#FFFFFF",
            color: "#000000",
            display: "inline-flex",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          Try again
        </Link>
      </div>
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
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"></path>
              <path d="M3 3l18 18"></path>
            </svg>
          </span>
          <h1 style={{ margin: "0", fontSize: "28px", fontWeight: "800", letterSpacing: "-0.02em" }}>
            {"You're offline"}
          </h1>
          <span style={{ fontSize: "15px", color: "#333333", lineHeight: "1.5" }}>
            {"You can still see Amma's next visit and care plan. Changes send when you're back."}
          </span>
          <div
            style={{
              width: "100%",
              border: "1px solid #E2E2E2",
              borderRadius: "16px",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textAlign: "left",
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
            <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "15px", fontWeight: "700" }}>Sat 17 Oct, 9:00 AM · Nirmala</span>
              <span style={{ fontSize: "12px", color: "#545454" }}>Saved on this device · updated 8:12 AM</span>
            </span>
          </div>
          <span style={{ fontSize: "13px", color: "#545454" }}>Emergency? Call 1990 · works without internet</span>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "6px" }}>
            <Link
              href="/offline"
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
              Try again
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
