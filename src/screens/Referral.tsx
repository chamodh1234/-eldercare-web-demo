import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";

export default function ReferralScreen() {
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
          <AccountNav active="/referral" />
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
                Give LKR 1,000, get LKR 1,000
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                When a friend books their first visit, you both get credit.
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
              <div style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div
                  style={{
                    borderRadius: "16px",
                    border: "1.5px dashed #A6A6A6",
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "12px", color: "#545454" }}>Your code</span>
                    <span style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "0.08em" }}>DILANI1000</span>
                  </span>
                  <Link
                    href="/referral"
                    style={{
                      height: "32px",
                      padding: "0 14px",
                      borderRadius: "16px",
                      background: "#EEEEEE",
                      color: "#000000",
                      fontSize: "13px",
                      fontWeight: "600",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      boxSizing: "border-box",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Copy
                  </Link>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Link
                    href="/referral"
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
                    Share on WhatsApp
                  </Link>
                  <Link
                    href="/referral"
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
                    Copy link
                  </Link>
                </div>
                <span style={{ fontSize: "12px", color: "#545454" }}>
                  Up to 10 friends a year · credit lasts 6 months
                </span>
              </div>
              <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      background: "#E6F4EC",
                    }}
                  >
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#05663A" }}>Your credit</span>
                      <span style={{ fontSize: "12px", color: "#333333" }}>
                        Used automatically on your next booking
                      </span>
                    </span>
                    <span style={{ fontSize: "18px", fontWeight: "800", whiteSpace: "nowrap" }}>LKR 1,000</span>
                  </div>
                </div>
                <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Friends you invited</h2>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>Nadeesha P.</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>Booked 9 Oct</span>
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
                      You got LKR 1,000
                    </span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>Ashan K.</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>Signed up · no booking yet</span>
                    </span>
                    <span
                      style={{
                        height: "24px",
                        padding: "0 10px",
                        borderRadius: "12px",
                        background: "#EEEEEE",
                        color: "#333333",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12px",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Pending
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
