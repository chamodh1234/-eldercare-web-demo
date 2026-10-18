import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export default function HelpCentreScreen() {
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
      <section style={{ background: "#000000", color: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "48px 24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "flex-start",
          }}
        >
          <h1 style={{ margin: "0", fontSize: "36px", fontWeight: "800", letterSpacing: "-0.03em" }}>
            How can we help, Dilani?
          </h1>
          <label
            style={{
              width: "min(640px, 100%)",
              height: "52px",
              borderRadius: "26px",
              background: "#FFFFFF",
              color: "#545454",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "0 18px",
              boxSizing: "border-box",
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
              <circle cx="11" cy="11" r="7"></circle>
              <path d="M20 20l-3.5-3.5"></path>
            </svg>
            <input
              aria-label="Search help"
              placeholder="Search, e.g. refund, visit code, care circle"
              style={{
                flex: "1",
                minWidth: "0",
                border: "none",
                outline: "none",
                background: "transparent",
                font: "500 15px var(--font-figtree), sans-serif",
              }}
            />
          </label>
          <span style={{ fontSize: "13px", color: "#A6A6A6" }}>Answers in English, සිංහල and தமிழ்</span>
        </div>
      </section>
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
        <Link
          href="/dispute"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            border: "1px solid #E2E2E2",
            borderRadius: "16px",
            padding: "14px 16px",
          }}
        >
          <img
            src="/images/nirmala.png"
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
          <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "12px", fontWeight: "700", color: "#545454", letterSpacing: "0.06em" }}>
              YOUR LAST VISIT · SAT 10 OCT
            </span>
            <span style={{ fontSize: "15px", fontWeight: "800" }}>Problem with this visit?</span>
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
        <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Browse topics</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
          <Link
            href="/help-article"
            style={{
              border: "1px solid #E2E2E2",
              borderRadius: "16px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
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
            <span style={{ fontSize: "15px", fontWeight: "800" }}>{"Booking & visits"}</span>
            <span style={{ fontSize: "12px", color: "#545454" }}>12 articles</span>
          </Link>
          <Link
            href="/help-article"
            style={{
              border: "1px solid #E2E2E2",
              borderRadius: "16px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
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
                <rect x="3" y="6" width="18" height="13" rx="2"></rect>
                <path d="M3 10h18M7 15h3"></path>
              </svg>
            </span>
            <span style={{ fontSize: "15px", fontWeight: "800" }}>{"Payments & refunds"}</span>
            <span style={{ fontSize: "12px", color: "#545454" }}>9 articles</span>
          </Link>
          <Link
            href="/help-article"
            style={{
              border: "1px solid #E2E2E2",
              borderRadius: "16px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
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
            </span>
            <span style={{ fontSize: "15px", fontWeight: "800" }}>{"Safety & trust"}</span>
            <span style={{ fontSize: "12px", color: "#545454" }}>7 articles</span>
          </Link>
          <Link
            href="/help-article"
            style={{
              border: "1px solid #E2E2E2",
              borderRadius: "16px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
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
                <circle cx="9" cy="8" r="3.5"></circle>
                <path d="M2.5 20c1-3.5 3.5-5 6.5-5s5.5 1.5 6.5 5"></path>
                <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 15c2 .7 3.2 2.3 3.5 5"></path>
              </svg>
            </span>
            <span style={{ fontSize: "15px", fontWeight: "800" }}>{"Account & family"}</span>
            <span style={{ fontSize: "12px", color: "#545454" }}>8 articles</span>
          </Link>
          <Link
            href="/help-article"
            style={{
              border: "1px solid #E2E2E2",
              borderRadius: "16px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
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
                <path d="M4 12a8 8 0 0 1 14-5.3L20 9"></path>
                <path d="M20 4v5h-5"></path>
                <path d="M20 12a8 8 0 0 1-14 5.3L4 15"></path>
                <path d="M4 20v-5h5"></path>
              </svg>
            </span>
            <span style={{ fontSize: "15px", fontWeight: "800" }}>{"Care plan & tasks"}</span>
            <span style={{ fontSize: "12px", color: "#545454" }}>5 articles</span>
          </Link>
          <Link
            href="/help-article"
            style={{
              border: "1px solid #E2E2E2",
              borderRadius: "16px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
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
            </span>
            <span style={{ fontSize: "15px", fontWeight: "800" }}>For caregivers</span>
            <span style={{ fontSize: "12px", color: "#545454" }}>14 articles</span>
          </Link>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <div style={{ flex: "999 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Popular questions</h2>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <Link
                href="/help-article"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                <span style={{ flex: "1" }}>When is my card charged?</span>
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
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <Link
                href="/help-article"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                <span style={{ flex: "1" }}>How do I cancel or move a visit?</span>
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
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <Link
                href="/help-article"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                <span style={{ flex: "1" }}>{"What if the caregiver doesn't come?"}</span>
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
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <Link
                href="/help-article"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                <span style={{ flex: "1" }}>How are caregivers checked?</span>
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
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
              <Link
                href="/help-article"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                <span style={{ flex: "1" }}>Can my family abroad follow visits?</span>
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
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Still need help?</h2>
            <span style={{ fontSize: "13px", color: "#545454", lineHeight: "1.5" }}>
              Chat 7 am – 10 pm in Sinhala, Tamil or English. Safety line 24/7.
            </span>
            <Link
              href="/support-chat"
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
              Chat with us
            </Link>
            <Link
              href="/safety-help"
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
              Call support
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
