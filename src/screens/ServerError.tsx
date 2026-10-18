import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export default function ServerErrorScreen() {
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
              <path d="M12 3l9 16H3z"></path>
              <path d="M12 10v4M12 17v.5"></path>
            </svg>
          </span>
          <h1 style={{ margin: "0", fontSize: "28px", fontWeight: "800", letterSpacing: "-0.02em" }}>
            Something went wrong on our side
          </h1>
          <span style={{ fontSize: "15px", color: "#333333", lineHeight: "1.5" }}>
            Your booking and payment are safe. Nothing was charged twice.
          </span>
          <span style={{ fontSize: "12px", color: "#545454" }}>Error ref · GL-5021 · 10:42 AM</span>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "6px" }}>
            <Link
              href="/server-error"
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
              Chat with support
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
