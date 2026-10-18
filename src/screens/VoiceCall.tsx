"use client";

import Link from "next/link";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { mute: false, spk: true };
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
    const b = (k) => {
      const t = tg(k);
      return { ...t, bg: this.state[k] ? "#FFFFFF" : "#2B2B2B", fg: this.state[k] ? "#000000" : "#FFFFFF" };
    };
    return { mute: b("mute"), spk: b("spk") };
  }
}

export default function VoiceCallScreen() {
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
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            padding: "24px",
          }}
        >
          <span
            style={{
              borderRadius: "50%",
              padding: "14px",
              background: "rgba(255,255,255,0.04)",
              boxShadow: "0 0 0 18px rgba(255,255,255,0.03)",
            }}
          >
            <img
              src="/images/nirmala.png"
              alt=""
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                flexShrink: "0",
              }}
            />
          </span>
          <span style={{ fontSize: "26px", fontWeight: "800", letterSpacing: "-0.02em", marginTop: "8px" }}>
            Nirmala Perera
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontWeight: "700",
              color: "#7BD3A4",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#05944F" }}></span>
            Voice call · 04:12
          </span>
          <span style={{ fontSize: "13px", color: "#A6A6A6" }}>With Amma now · Colombo 05</span>
          <div
            style={{
              display: "flex",
              gap: "12px",
              padding: "10px",
              borderRadius: "36px",
              background: "rgba(255,255,255,0.06)",
              marginTop: "28px",
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
                background: v.mute.bg,
                color: v.mute.fg,
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
              aria-label="Speaker"
              aria-pressed={v.spk.pressed}
              onClick={v.spk.flip}
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "26px",
                border: "none",
                background: v.spk.bg,
                color: v.spk.fg,
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
                <path d="M4 9v6h4l5 4V5L8 9z"></path>
                <path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"></path>
              </svg>
            </button>
            <Link
              href="/video-call"
              aria-label="Switch to video"
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
            </Link>
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
          <div style={{ display: "flex", gap: "32px", fontSize: "12px", color: "#A6A6A6" }}>
            <span>Mute</span>
            <span>Speaker</span>
            <span>Video</span>
            <span style={{ width: "52px", textAlign: "center" }}>End</span>
          </div>
        </div>
        <div style={{ padding: "0 24px 24px", display: "flex", justifyContent: "center" }}>
          <Link
            href="/live-visit"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "16px",
              background: "#1E1E1E",
              minWidth: "360px",
            }}
          >
            <span
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "18px",
                background: "#1F3D2B",
                color: "#7BD3A4",
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
                <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                <path d="M4 10h16M9 3v4M15 3v4"></path>
              </svg>
            </span>
            <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "14px", fontWeight: "700" }}>Visit in progress · 3 of 6 tasks done</span>
              <span style={{ fontSize: "12px", color: "#A6A6A6" }}>Open the live visit while you talk</span>
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
    </div>
  );
}
