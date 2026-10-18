import Link from "next/link";

export default function JoinCircleScreen() {
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
      <header style={{ borderBottom: "1px solid #E2E2E2" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "14px 24px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "18px",
              fontWeight: "800",
              letterSpacing: "-0.02em",
            }}
          >
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "13px",
                background: "#000000",
                color: "#FFFFFF",
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
          <span style={{ flex: "1" }}></span>
          <span
            style={{
              height: "32px",
              padding: "0 12px",
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="8.5"></circle>
              <path d="M3.5 12h17M12 3.5c2.5 2.5 3.5 5.5 3.5 8.5s-1 6-3.5 8.5c-2.5-2.5-3.5-5.5-3.5-8.5s1-6 3.5-8.5z"></path>
            </svg>
            English
          </span>
        </div>
      </header>
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center", paddingTop: "32px" }}>
          <div style={{ flex: "999 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex" }}>
              <img
                src="/images/dilani.png"
                alt=""
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                  border: "4px solid #FFFFFF",
                }}
              />
              <img
                src="/images/amma.png"
                alt=""
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                  border: "4px solid #FFFFFF",
                  marginLeft: "-16px",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                Invitation from Dilani Fernando
              </span>
              <h1
                style={{
                  margin: "0",
                  fontSize: "40px",
                  lineHeight: "1.08",
                  fontWeight: "800",
                  letterSpacing: "-0.03em",
                }}
              >
                {"Join Amma's care circle"}
              </h1>
              <span style={{ fontSize: "16px", lineHeight: "1.55", color: "#333333", maxWidth: "560px" }}>
                {
                  "Hi Ruwan, follow Amma's care from Melbourne. You'll see when her caregiver arrives, what happened each day, and you can add tasks."
                }
              </span>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", padding: "12px 16px" }}>
                <span
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "11px",
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
                <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>{"See visits & live updates"}</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>Check-ins, notes, photos, visit reports</span>
                </span>
              </div>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "50px" }}></div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", padding: "12px 16px" }}>
                <span
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "11px",
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
                <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Message caregivers</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>In the app · numbers stay private</span>
                </span>
              </div>
              <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "50px" }}></div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", padding: "12px 16px" }}>
                <span
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "11px",
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
                <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Add tasks for Amma</span>
                  <span style={{ fontSize: "12px", color: "#545454" }}>For today or any day of a booking</span>
                </span>
              </div>
            </div>
            <span style={{ fontSize: "12px", color: "#545454" }}>
              {'Dilani pays for bookings. You can\'t be charged unless she turns on "Book & pay" for you.'}
            </span>
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
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Sign in to join</h2>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Your mobile</span>
              <span style={{ display: "flex", gap: "6px" }}>
                <span
                  style={{
                    height: "44px",
                    padding: "0 10px",
                    border: "1px solid #E2E2E2",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  AU +61
                </span>
                <input
                  defaultValue="412 555 018"
                  style={{
                    flex: "1",
                    minWidth: "0",
                    height: "44px",
                    border: "1px solid #E2E2E2",
                    borderRadius: "12px",
                    padding: "0 12px",
                    font: "500 14px var(--font-figtree), sans-serif",
                  }}
                />
              </span>
            </label>
            <Link
              href="/otp"
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
              Join with a code
            </Link>
            <span style={{ fontSize: "12px", color: "#545454", textAlign: "center" }}>
              {"Invite expires in 7 days · "}
              <Link href="/" style={{ color: "#000000", fontWeight: "700", textDecoration: "underline" }}>
                not you?
              </Link>
            </span>
          </aside>
        </div>
      </main>
    </div>
  );
}
