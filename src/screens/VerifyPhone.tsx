"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CodeInput } from "@/components/CodeInput";
import { toast } from "@/components/Toaster";
import { mutate, useDemo } from "@/lib/store";

export default function VerifyPhoneScreen() {
  const demo = useDemo();
  const router = useRouter();
  const [code, setCode] = useState("4827");
  const next = demo.ui.newPhone ?? "+94 71 238 5590";
  const verify = (e: React.MouseEvent) => {
    e.preventDefault();
    if (code.length < 6) return toast("Enter all 6 digits");
    mutate((d) => {
      d.account.phone = next;
      delete d.ui.newPhone;
    });
    toast("Mobile number changed");
    router.push("/security");
  };
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
                {`Enter the code sent to ${next}`}
              </span>
              <span style={{ fontSize: "14px", color: "#545454" }}>Step 2 of 2 · current number verified</span>
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
          <CodeInput value={code} onChange={setCode} />
          <span style={{ fontSize: "13px", color: "#545454" }}>
            {"Didn't get it? "}
            <b style={{ color: "#000000" }}>Resend in 0:42</b>
          </span>
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
              <path d="M5 4h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"></path>
            </svg>
            <span>After this, you log in with the new number. Your old number gets a text so you know it changed.</span>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Link
              href="/change-phone"
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
              Back
            </Link>
            <Link
              href="/security"
              onClick={verify}
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
              {"Verify & change number"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
