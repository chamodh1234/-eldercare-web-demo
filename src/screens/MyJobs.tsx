import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export default function MyJobsScreen() {
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
      <AppHeader active="/my-jobs" />
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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <h1
              style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.025em" }}
            >
              My jobs
            </h1>
            <span style={{ fontSize: "15px", color: "#545454" }}>
              Post what you need and let verified caregivers apply
            </span>
          </div>
          <Link
            href="/post-job"
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
            Post a job
          </Link>
        </div>
        <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflowX: "auto" }}>
          <div style={{ minWidth: "720px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(220px, 2fr) 1fr 1fr 0.8fr 120px",
                gap: "12px",
                alignItems: "center",
                padding: "14px 16px",
                background: "#F6F6F6",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#545454",
              }}
            >
              <span>Job</span>
              <span>Schedule</span>
              <span>Status</span>
              <span>Applicants</span>
              <span></span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(220px, 2fr) 1fr 1fr 0.8fr 120px",
                gap: "12px",
                alignItems: "center",
                padding: "14px 16px",
                borderTop: "1px solid #E2E2E2",
                fontSize: "13px",
              }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "800" }}>Morning companion for Amma</span>
                <span style={{ color: "#545454" }}>Companionship · LKR 1,200/hr</span>
              </span>
              <span>Mon–Sat 9–12</span>
              <span>
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
                  Live
                </span>
              </span>
              <span style={{ fontWeight: "800" }}>4 new</span>
              <Link
                href="/applicants"
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
                Review
              </Link>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(220px, 2fr) 1fr 1fr 0.8fr 120px",
                gap: "12px",
                alignItems: "center",
                padding: "14px 16px",
                borderTop: "1px solid #E2E2E2",
                fontSize: "13px",
              }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "800" }}>Clinic visit escort</span>
                <span style={{ color: "#545454" }}>Errands · LKR 1,000/hr</span>
              </span>
              <span>Tue 20 Oct, 2–4 PM</span>
              <span>
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
                  Draft
                </span>
              </span>
              <span style={{ fontWeight: "800" }}>—</span>
              <Link
                href="/post-job"
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
                Finish
              </Link>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(220px, 2fr) 1fr 1fr 0.8fr 120px",
                gap: "12px",
                alignItems: "center",
                padding: "14px 16px",
                borderTop: "1px solid #E2E2E2",
                fontSize: "13px",
              }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "800" }}>Weekend overnight care</span>
                <span style={{ color: "#545454" }}>Overnight · LKR 9,000/night</span>
              </span>
              <span>Sat–Sun</span>
              <span>
                <span
                  style={{
                    height: "24px",
                    padding: "0 10px",
                    borderRadius: "12px",
                    background: "#EAF0FD",
                    color: "#1A4FB5",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    fontWeight: "700",
                    whiteSpace: "nowrap",
                  }}
                >
                  Filled
                </span>
              </span>
              <span style={{ fontWeight: "800" }}>Hired Mala</span>
              <Link
                href="/weekly-care"
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
                View
              </Link>
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
          <div
            style={{
              borderRadius: "16px",
              background: "#F6F6F6",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: "800" }}>Usually 4–6 applicants</span>
            <span style={{ fontSize: "13px", color: "#545454", lineHeight: "1.45" }}>
              Most jobs in Colombo get applicants within 6 hours.
            </span>
          </div>
          <div
            style={{
              borderRadius: "16px",
              background: "#F6F6F6",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: "800" }}>Talk before you hire</span>
            <span style={{ fontSize: "13px", color: "#545454", lineHeight: "1.45" }}>
              Message or video call any applicant for free.
            </span>
          </div>
          <div
            style={{
              borderRadius: "16px",
              background: "#F6F6F6",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: "800" }}>Same protection</span>
            <span style={{ fontSize: "13px", color: "#545454", lineHeight: "1.45" }}>
              Payment is held and released visit by visit.
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
