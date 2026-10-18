"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { useRouter } from "next/navigation";
import { mutate } from "@/lib/store";

const CODES: Record<string, { amount: number; note: string }> = {
  WELCOME500: { amount: 500, note: "LKR 500 off your first booking · new families only" },
  FRIEND1000: { amount: 1000, note: "LKR 1,000 off · from a friend's invite" },
};
const EXPIRED: Record<string, string> = { GLOOCAN50: "This code ended on 30 Sep. Try another one." };

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { code: "WELCOME500", tried: false };
  }
  renderVals() {
    const { router } = this.props;
    const code = this.state.code.trim().toUpperCase();
    const good = CODES[code];
    const error =
      EXPIRED[code] ?? (this.state.tried && !good ? "We don't recognise this code. Check it and try again." : "");
    return {
      bad: !!error,
      ok: !!good,
      error,
      note: good?.note ?? "",
      code: this.state.code,
      setCode: (e) => this.setState({ code: e.target.value, tried: false }),
      ring: error ? "#C11500" : "#000000",
      flip: () => this.setState({ code: code === "GLOOCAN50" ? "WELCOME500" : "GLOOCAN50", tried: false }),
      apply: (e) => {
        e.preventDefault();
        if (!good) return this.setState({ tried: true });
        mutate((d) => {
          d.promo = { code, amount: good.amount };
        });
        router.push("/promo-applied");
      },
    };
  }
}

export default function AddPromoScreen() {
  const router = useRouter();
  const v = useLogic(Logic, { props: { router } });
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
        <AppHeader active="/search" />
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
              Review and pay
            </h1>
          </div>
          <div style={{ display: "flex", gap: "32px" }}>
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
                height: "380px",
                border: "1px solid #E2E2E2",
                borderRadius: "16px",
                background: "#F6F6F6",
              }}
            ></div>
          </div>
        </main>
        <Link
          href="/checkout"
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
            width: "min(480px, calc(100% - 32px))",
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
                Promo or referral code
              </span>
            </span>
            <Link
              href="/checkout"
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
          <div
            style={{
              height: "52px",
              borderRadius: "12px",
              border: `2px solid ${v.ring}`,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "0 14px",
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
              <path d="M3 12V4h8l10 10-8 8z"></path>
              <circle cx="7.5" cy="8.5" r="1.5"></circle>
            </svg>
            <input
              aria-label="Promo or referral code"
              value={v.code}
              onChange={v.setCode}
              autoCapitalize="characters"
              style={{
                flex: "1",
                minWidth: "0",
                border: "none",
                outline: "none",
                background: "transparent",
                color: "#000000",
                font: "800 17px var(--font-figtree), sans-serif",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            />
          </div>
          {v.bad ? (
            <>
              <span style={{ marginTop: "-8px", fontSize: "13px", color: "#C11500" }}>{v.error}</span>
            </>
          ) : null}
          {v.ok ? (
            <>
              <span style={{ marginTop: "-8px", fontSize: "13px", color: "#05663A", fontWeight: "600" }}>{v.note}</span>
            </>
          ) : null}
          <button
            onClick={v.flip}
            style={{
              alignSelf: "flex-start",
              border: "none",
              background: "none",
              padding: "0",
              color: "#545454",
              font: "600 12px var(--font-figtree), sans-serif",
              textDecoration: "underline",
            }}
          >
            Preview: expired code
          </button>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <Link href="/referral" style={{ fontSize: "13px", color: "#545454", textDecoration: "underline" }}>
              Invite a friend · you both get LKR 1,000
            </Link>
            <span style={{ display: "flex", gap: "10px" }}>
              <Link
                href="/checkout"
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
                Cancel
              </Link>
              <Link
                href="/promo-applied"
                onClick={v.apply}
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
                Apply code
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
