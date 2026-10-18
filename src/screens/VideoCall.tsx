"use client";

import Link from "next/link";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { mute: false, cam: true };
  }
  renderVals() {
    const tg = (k) => {
      const on = this.state[k];
      return {
        pressed: on ? "true" : "false",
        track: on ? "#05944F" : "#CBCBCB",
        align: on ? "flex-end" : "flex-start",
        flip: () => this.setState({ [k]: !on }),
      };
    };
    return { mute: tg("mute"), cam: tg("cam") };
  }
}

export default function VideoCallScreen() {
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
      <div
        style={{
          flex: "1",
          minHeight: "900px",
          background: "#121212",
          color: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 24px" }}>
          <Link
            href="/messages"
            style={{
              height: "36px",
              padding: "0 14px 0 8px",
              borderRadius: "18px",
              background: "#2B2B2B",
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
            Back to chat
          </Link>
          <span style={{ flex: "1" }}></span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: "700",
              color: "#7BD3A4",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#05944F" }}></span>
            Video call · 04:12
          </span>
          <span style={{ fontSize: "12px", color: "#A6A6A6", display: "flex", alignItems: "center", gap: "6px" }}>
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
            Calls stay in the app · numbers private
          </span>
        </div>
        <div style={{ flex: "1", padding: "0 24px 24px", display: "flex" }}>
          <div
            style={{
              flex: "1",
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              background: "linear-gradient(160deg, #3B4A3A 0%, #1E2A1E 60%, #121212 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "640px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <img
                src="/images/amma.png"
                alt=""
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                  border: "4px solid rgba(255,255,255,0.15)",
                }}
              />
              <span style={{ fontSize: "22px", fontWeight: "800" }}>Amma</span>
              <span style={{ fontSize: "14px", color: "#D6D6D6" }}>{"on Nirmala's phone · Colombo 05"}</span>
            </div>
            <div
              style={{
                position: "absolute",
                right: "20px",
                top: "20px",
                width: "220px",
                height: "140px",
                borderRadius: "14px",
                overflow: "hidden",
                background: "#2B2B2B",
                border: "2px solid rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/dilani.png"
                alt=""
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                }}
              />
              <span style={{ position: "absolute", left: "10px", bottom: "8px", fontSize: "12px", fontWeight: "700" }}>
                You · Dilani
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: "24px",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "12px",
                padding: "10px",
                borderRadius: "36px",
                background: "rgba(0,0,0,0.55)",
              }}
            >
              <button
                aria-label="Mute"
                aria-pressed={v.mute.pressed}
                onClick={v.mute.flip}
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "26px",
                  border: "none",
                  background: "#2B2B2B",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="9" y="3" width="6" height="11" rx="3"></rect>
                  <path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path>
                </svg>
              </button>
              <button
                aria-label="Camera"
                aria-pressed={v.cam.pressed}
                onClick={v.cam.flip}
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "26px",
                  border: "none",
                  background: "#2B2B2B",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="6" width="13" height="12" rx="2"></rect>
                  <path d="M16 10.5l5-3v9l-5-3z"></path>
                </svg>
              </button>
              <Link
                href="/messages"
                aria-label="End call"
                style={{
                  width: "72px",
                  height: "52px",
                  borderRadius: "26px",
                  background: "#E11900",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 15c5-5 13-5 18 0l-2.5 2.5-3-1.5v-2.5a10 10 0 0 0-7 0V16l-3 1.5z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
