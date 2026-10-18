"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { mutate, useDemo } from "@/lib/store";

export default function SwitchPersonScreen() {
  const demo = useDemo();
  const others = demo.people.filter((p) => p.id !== "amma");
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
            maxWidth: "1360px",
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
              {"Amma's visits"}
            </h1>
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
        <div
          style={{
            position: "absolute",
            top: "58px",
            right: "max(24px, calc((100% - 1360px) / 2 + 24px))",
            width: "360px",
            background: "#FFFFFF",
            border: "1px solid #E2E2E2",
            borderRadius: "16px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#545454",
              padding: "4px 12px",
            }}
          >
            Caring for
          </span>
          <Link
            href="/visits"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 12px",
              borderRadius: "12px",
              background: "#F6F6F6",
            }}
          >
            <img
              src="/images/amma.png"
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
              <span style={{ fontSize: "14px", fontWeight: "700" }}>Amma · Kamala F., 78</span>
              <span style={{ fontSize: "12px", color: "#545454" }}>Next visit Sat 9:00 · Nirmala</span>
            </span>
            <span
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "11px",
                background: "#000000",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
          </Link>
          {others.map((p) => (
            <Link
              key={p.id}
              href="/care-profile"
              onClick={() =>
                mutate((d) => {
                  d.activePerson = p.id;
                })
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "10px 12px",
                borderRadius: "12px",
                background: "transparent",
              }}
            >
              <img
                src={p.avatar}
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
                <span
                  style={{ fontSize: "14px", fontWeight: "700" }}
                >{`${p.call} · ${p.name.split(" ")[0]}, ${p.age}`}</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>{p.note}</span>
              </span>
            </Link>
          ))}
          <div style={{ height: "1px", background: "#E2E2E2", margin: "6px 0" }}></div>
          <Link
            href="/add-person"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
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
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12h14"></path>
            </svg>
            Add someone you care for
          </Link>
          <Link
            href="/account"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              fontSize: "14px",
              fontWeight: "600",
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
              <circle cx="12" cy="8" r="4"></circle>
              <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>
            </svg>
            Your account
          </Link>
        </div>
      </div>
    </div>
  );
}
