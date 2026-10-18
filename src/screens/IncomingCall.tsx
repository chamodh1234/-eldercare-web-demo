"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { msg: true };
  }
  renderVals() {
    return { msg: this.state.msg, showMsg: () => this.setState({ msg: !this.state.msg }) };
  }
}

export default function IncomingCallScreen() {
  const v = useLogic(Logic);
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
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <h1
              style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.025em" }}
            >
              Visits
            </h1>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ width: "120px", height: "36px", borderRadius: "18px", background: "#F6F6F6" }}></div>
            <div style={{ width: "120px", height: "36px", borderRadius: "18px", background: "#F6F6F6" }}></div>
            <div style={{ width: "120px", height: "36px", borderRadius: "18px", background: "#F6F6F6" }}></div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            <div style={{ flex: "2 1 520px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ width: "100%", height: "160px", borderRadius: "16px", background: "#F6F6F6" }}></div>
              <div style={{ width: "100%", height: "96px", borderRadius: "16px", background: "#F6F6F6" }}></div>
              <div style={{ width: "100%", height: "96px", borderRadius: "16px", background: "#F6F6F6" }}></div>
            </div>
            <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ width: "100%", height: "220px", borderRadius: "16px", background: "#F6F6F6" }}></div>
              <div style={{ width: "100%", height: "120px", borderRadius: "16px", background: "#F6F6F6" }}></div>
            </div>
          </div>
        </main>
        <div
          role="alertdialog"
          aria-label="Incoming call from Nirmala Perera"
          style={{
            position: "absolute",
            right: "24px",
            bottom: "24px",
            width: "360px",
            borderRadius: "20px",
            background: "#121212",
            color: "#FFFFFF",
            padding: "18px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              fontWeight: "700",
              color: "#A6A6A6",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#FFFFFF" }}></span>
            In-app voice call
            <span style={{ flex: "1" }}></span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="5" y="11" width="14" height="9" rx="2"></rect>
              <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
            </svg>
            Number hidden
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img
              src="/images/nirmala.png"
              alt=""
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                flexShrink: "0",
                boxShadow: "0 0 0 6px rgba(255,255,255,0.08)",
              }}
            />
            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ fontSize: "18px", fontWeight: "800" }}>Nirmala Perera</span>
              <span style={{ fontSize: "13px", color: "#D6D6D6" }}>With Amma now · visit 9:00 – 12:00</span>
              <span
                style={{
                  alignSelf: "flex-start",
                  height: "20px",
                  padding: "0 8px",
                  borderRadius: "10px",
                  background: "#1F3D2B",
                  color: "#7BD3A4",
                  fontSize: "11px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Verified caregiver
              </span>
            </span>
          </div>
          {v.msg ? (
            <>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <Link
                  href="/messages"
                  style={{
                    height: "32px",
                    padding: "0 12px",
                    borderRadius: "16px",
                    background: "#2B2B2B",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Can I call you back in 5 min?
                </Link>
                <Link
                  href="/messages"
                  style={{
                    height: "32px",
                    padding: "0 12px",
                    borderRadius: "16px",
                    background: "#2B2B2B",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  In a meeting, please message
                </Link>
                <Link
                  href="/messages"
                  style={{
                    height: "32px",
                    padding: "0 12px",
                    borderRadius: "16px",
                    background: "#2B2B2B",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Is Amma okay?
                </Link>
              </div>
            </>
          ) : null}
          <div style={{ display: "flex", gap: "8px" }}>
            <Link
              href="/visits"
              style={{
                flex: "1",
                height: "40px",
                borderRadius: "20px",
                background: "#E11900",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              Decline
            </Link>
            <button
              onClick={v.showMsg}
              aria-label="Reply with a message"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "20px",
                border: "none",
                background: "#2B2B2B",
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
                <path d="M12 19V5M5 12l7-7 7 7"></path>
              </svg>
            </button>
            <Link
              href="/voice-call"
              style={{
                flex: "1",
                height: "40px",
                borderRadius: "20px",
                background: "#FFFFFF",
                color: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
              Accept
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
