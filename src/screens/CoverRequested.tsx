"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { openChat, selectCaregiver } from "@/lib/actions";
import { dayLabel } from "@/lib/format";
import { caregiver } from "@/lib/mock/caregivers";
import { useDemo } from "@/lib/store";

export default function CoverRequestedScreen() {
  const demo = useDemo();
  const who = caregiver(demo.weekly.coverBy || "mala");
  const days = demo.weekly.cover.length ? demo.weekly.cover : ["2026-10-20", "2026-10-21", "2026-10-22"];
  const sorted = [...days].sort();
  const span =
    sorted.length > 1
      ? `${dayLabel(sorted[0]).replace(/ \w+$/, "")} – ${dayLabel(sorted[sorted.length - 1])}`
      : dayLabel(sorted[0]);
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/images/nirmala.png"
                alt=""
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                }}
              />
              <span style={{ marginLeft: "-16px", border: "4px solid #FFFFFF", borderRadius: "50%", display: "flex" }}>
                <img
                  src={who.avatar}
                  alt=""
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block",
                    flexShrink: "0",
                  }}
                />
              </span>
            </div>
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
                {`We've asked ${who.first}`}
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                She usually replies within an hour. Nirmala is back Fri 23 Oct.
              </span>
            </div>
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
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}>Request sent</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Today, 12:14 PM</span>
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
                  <span
                    style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}
                  >{`${who.first} accepts`}</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>{"We'll tell you right away"}</span>
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
                  <span
                    style={{ fontSize: "14px", fontWeight: "700", color: "#333333" }}
                  >{`${who.first} visits Amma`}</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>{`${span} · 9:00 – 12:00`}</span>
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
                  4
                </span>
                <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#333333" }}>Nirmala is back</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Fri 23 Oct</span>
                </span>
              </li>
            </ol>
            <div
              style={{
                borderRadius: "14px",
                background: "#EAF0FD",
                color: "#1A4FB5",
                padding: "12px 14px",
                fontSize: "13px",
                fontWeight: "600",
                lineHeight: "1.45",
                display: "flex",
                gap: "8px",
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
                <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"></path>
              </svg>
              <span>{`If ${who.first} can't, we'll suggest ${who.id === "priya" ? "Mala" : "Priya"}. You're never charged for days with nobody booked.`}</span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link
                href="/messages"
                onClick={() => openChat(who.id)}
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
                {`Message ${who.first}`}
              </Link>
              <Link
                href="/weekly-care"
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
                Back to weekly care
              </Link>
            </div>
          </div>
          <aside
            style={{
              flex: "1 1 300px",
              maxWidth: "380px",
              minWidth: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "20px",
              padding: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src={who.avatar}
                alt=""
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                }}
              />
              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>{who.name}</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>4.9 ★ · cared for Amma before</span>
              </span>
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
                Verified
              </span>
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
                <span style={{ color: "#545454" }}>Days</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  {span}
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    {`${sorted.length} visit${sorted.length === 1 ? "" : "s"} · 9:00 – 12:00`}
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
                <span style={{ color: "#545454" }}>Price</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  Same
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    LKR 3,960 a visit
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
                <span style={{ color: "#545454" }}>Care plan</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>Shared</span>
              </div>
            </div>
            <Link
              href="/profile"
              onClick={() => selectCaregiver(who.id)}
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
              {"View Mala's profile"}
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
