import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";

export default function MedicineCardScreen() {
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
          <AccountNav active="/care-profile" />
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link
              href="/care-docs"
              style={{
                alignSelf: "flex-start",
                height: "32px",
                padding: "0 14px 0 8px",
                borderRadius: "16px",
                background: "#EEEEEE",
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
              Documents
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <img
                src="/images/amma.png"
                alt=""
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                }}
              />
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
                  {"Amma's medicine card"}
                </h1>
                <span style={{ fontSize: "15px", color: "#545454" }}>From prescription · 12 Oct</span>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
              <div style={{ flex: "2 1 360px" }}>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
                    <span
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "18px",
                        background: "#EEEEEE",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)"></rect>
                        <path d="M9.5 9.5l5 5"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>Blue tablet · metformin 500</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>After breakfast · with food</span>
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "800" }}>9:30</span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
                    <span
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "18px",
                        background: "#EEEEEE",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)"></rect>
                        <path d="M9.5 9.5l5 5"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>White tablet · 1/2</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>After lunch · new from 12 Oct</span>
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "800" }}>12:30</span>
                  </div>
                  <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}>
                    <span
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "18px",
                        background: "#EEEEEE",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)"></rect>
                        <path d="M9.5 9.5l5 5"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700" }}>Knee gel</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>Thin layer, left knee</span>
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "800" }}>As needed</span>
                  </div>
                </div>
              </div>
              <div style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "12px" }}>
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
                    <span style={{ color: "#545454" }}>Allergies</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>Penicillin</span>
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
                    <span style={{ color: "#545454" }}>Doctor</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>
                      Dr. S. Gunasekara
                      <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                        +94 11 ••• 8890
                      </span>
                    </span>
                  </div>
                </div>
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
                  <span>Caregivers remind and log only. They never give injections or change doses.</span>
                </div>
                <Link
                  href="/add-document"
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
                  Update from a new prescription
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
