"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "@/components/Toaster";
import { mutate, useDemo } from "@/lib/store";

export default function LoginScreen() {
  const demo = useDemo();
  const router = useRouter();
  const [phone, setPhone] = useState<string>(demo.ui.loginPhone ?? "77 512 4120");
  const next = (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault();
    if (phone.replace(/\D/g, "").length < 9) return toast("Enter your mobile number");
    mutate((d) => {
      d.ui.loginPhone = phone.trim();
    });
    router.push("/otp");
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
      <div style={{ flex: "1", minHeight: "900px", display: "flex", flexWrap: "wrap" }}>
        <section
          style={{
            flex: "0 1 520px",
            background: "#000000",
            color: "#FFFFFF",
            padding: "40px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "18px", fontWeight: "800" }}
          >
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "13px",
                background: "#FFFFFF",
                color: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              g
            </span>
            Gloocan
          </Link>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "420px" }}>
            <h2
              style={{ margin: "0", fontSize: "36px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.03em" }}
            >
              Trusted care for the people you love.
            </h2>
            <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#D6D6D6" }}>
              Verified caregivers, live visit updates from anywhere, and you pay only after the visit.
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
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
              Every caregiver ID and police checked
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
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
              Follow visits live from Colombo or Melbourne
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6D6D6" }}>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
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
              Payment held until you approve
            </span>
          </div>
        </section>
        <section
          style={{
            flex: "999 1 480px",
            padding: "48px 32px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "20px" }}>
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
                Log in
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>{"We'll text you a 6-digit code"}</span>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Mobile number</span>
              <span style={{ display: "flex", gap: "8px" }}>
                <span
                  style={{
                    height: "48px",
                    padding: "0 12px",
                    border: "1px solid #E2E2E2",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  {"LK +94 "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && next(e)}
                  style={{
                    flex: "1",
                    minWidth: "0",
                    height: "48px",
                    border: "1px solid #E2E2E2",
                    borderRadius: "12px",
                    padding: "0 14px",
                    font: "600 15px var(--font-figtree), sans-serif",
                  }}
                />
              </span>
            </label>
            <Link
              href="/otp"
              onClick={next}
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
                width: "100%",
              }}
            >
              Continue
            </Link>
            <span style={{ fontSize: "13px", color: "#545454" }}>
              Living abroad? Pick your country code, any number works.
            </span>
            <div style={{ height: "1px", background: "#E2E2E2" }}></div>
            <span style={{ fontSize: "14px" }}>
              {"New to Gloocan? "}
              <Link href="/signup-role" style={{ fontWeight: "800", textDecoration: "underline" }}>
                Create an account
              </Link>
            </span>
            <span style={{ fontSize: "14px", color: "#545454" }}>
              {"Lost your phone or number? "}
              <Link
                href="/recover-account"
                style={{ color: "#000000", fontWeight: "800", textDecoration: "underline" }}
              >
                Recover account
              </Link>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
