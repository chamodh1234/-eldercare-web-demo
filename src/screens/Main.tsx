"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { useRouter } from "next/navigation";
import { selectCaregiver } from "@/lib/actions";

export default function MainScreen() {
  const router = useRouter();
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
      <section style={{ background: "#000000", color: "#FFFFFF", paddingBottom: "74px" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box", width: "100%" }}
        >
          <SiteHeader />{" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "38px", alignItems: "center", paddingTop: "44px" }}>
            <div style={{ flex: "999 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#A6A6A6",
                }}
              >
                Elder care across Sri Lanka
              </span>{" "}
              <h1
                style={{
                  margin: "0",
                  fontSize: "46px",
                  lineHeight: "1.02",
                  fontWeight: "800",
                  letterSpacing: "-0.035em",
                }}
              >
                Trusted care for the people you love.
              </h1>{" "}
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#D6D6D6", maxWidth: "520px" }}>
                Book verified caregivers for your parents, follow every visit live from anywhere, and pay only after the
                visit is done.
              </p>{" "}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  router.push("/search");
                }}
                style={{
                  background: "#FFFFFF",
                  color: "#000000",
                  borderRadius: "16px",
                  padding: "8px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  maxWidth: "640px",
                }}
              >
                <label
                  style={{
                    flex: "1 1 180px",
                    minWidth: "0",
                    borderRadius: "12px",
                    background: "#F3F3F3",
                    padding: "10px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#545454" }}>Where</span>{" "}
                  <input
                    defaultValue="Colombo 05"
                    aria-label="Area"
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      font: "700 14px var(--font-figtree), sans-serif",
                      color: "#000000",
                      padding: "0",
                    }}
                  />
                </label>{" "}
                <label
                  style={{
                    flex: "1 1 160px",
                    minWidth: "0",
                    borderRadius: "12px",
                    background: "#F3F3F3",
                    padding: "10px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#545454" }}>When</span>{" "}
                  <input
                    defaultValue="Sat, 9:00 AM"
                    aria-label="Date and time"
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      font: "700 14px var(--font-figtree), sans-serif",
                      color: "#000000",
                      padding: "0",
                    }}
                  />
                </label>{" "}
                <Link
                  href="/search"
                  style={{
                    flex: "0 0 auto",
                    height: "48px",
                    padding: "0 22px",
                    borderRadius: "12px",
                    background: "#000000",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7"></circle>
                    <path d="M20 20l-3.5-3.5"></path>
                  </svg>
                  Find a caregiver
                </Link>
              </form>{" "}
              <span style={{ fontSize: "13px", color: "#A6A6A6" }}>
                {"Or "}
                <Link href="/post-job" style={{ color: "#FFFFFF", fontWeight: "700", textDecoration: "underline" }}>
                  post a job
                </Link>
                {" and let caregivers apply"}
              </span>
            </div>{" "}
            <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  background: "#1A1A1A",
                  border: "1px solid #2E2E2E",
                  borderRadius: "20px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <img
                    src="/images/nirmala.png"
                    alt=""
                    style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
                  />{" "}
                  <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        letterSpacing: "0.06em",
                        color: "#7BD3A4",
                        textTransform: "uppercase",
                      }}
                    >
                      Live · checked in 9:02
                    </span>
                    <span style={{ fontSize: "15px", fontWeight: "700" }}>Nirmala is with Amma</span>
                  </span>{" "}
                  <span style={{ fontSize: "20px", fontWeight: "800" }}>2:04</span>
                </div>{" "}
                <div style={{ height: "4px", borderRadius: "2px", background: "#3A3A3A", display: "flex" }}>
                  <span style={{ width: "69%", borderRadius: "2px", background: "#FFFFFF" }}></span>
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #2E2E2E",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ display: "flex", gap: "12px", padding: "12px 12px", alignItems: "center" }}>
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "9px",
                        background: "#05944F",
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
                        stroke="#FFFFFF"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12l5 5 9-10"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1", fontSize: "13px", fontWeight: "600" }}>Medicine reminder · taken</span>
                    <span style={{ fontSize: "12px", color: "#A6A6A6" }}>10:04</span>
                  </div>{" "}
                  <div style={{ height: "1px", background: "#2E2E2E", marginLeft: "48px" }}></div>{" "}
                  <div style={{ display: "flex", gap: "12px", padding: "12px 12px", alignItems: "center" }}>
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "9px",
                        background: "#2B2B2B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#FFFFFF" }}></span>
                    </span>
                    <span style={{ flex: "1", fontSize: "13px", fontWeight: "600" }}>
                      {'"Amma is in a good mood today"'}
                    </span>
                    <span style={{ fontSize: "12px", color: "#A6A6A6" }}>9:40</span>
                  </div>{" "}
                  <div style={{ height: "1px", background: "#2E2E2E", marginLeft: "48px" }}></div>{" "}
                  <div style={{ display: "flex", gap: "12px", padding: "12px 12px", alignItems: "center" }}>
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "9px",
                        background: "#05944F",
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
                        stroke="#FFFFFF"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12l5 5 9-10"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1", fontSize: "13px", fontWeight: "600" }}>Walk in the garden · done</span>
                    <span style={{ fontSize: "12px", color: "#A6A6A6" }}>9:20</span>
                  </div>
                </div>{" "}
                <span style={{ fontSize: "12px", color: "#A6A6A6" }}>Seen by Ruwan in Melbourne · 3 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <section id="safety" style={{ borderBottom: "1px solid #E2E2E2" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "24px",
            boxSizing: "border-box",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "14px 32px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "14px", fontWeight: "700" }}>
            Every caregiver is checked before their first visit
          </span>{" "}
          <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#333333" }}>
            <span
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "10px",
                background: "#E6F4EC",
                color: "#05663A",
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
            NIC matched in person
          </span>{" "}
          <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#333333" }}>
            <span
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "10px",
                background: "#E6F4EC",
                color: "#05663A",
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
            Police clearance
          </span>{" "}
          <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#333333" }}>
            <span
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "10px",
                background: "#E6F4EC",
                color: "#05663A",
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
            Caregiving certificate
          </span>{" "}
          <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#333333" }}>
            <span
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "10px",
                background: "#E6F4EC",
                color: "#05663A",
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
            Reviewed by real families
          </span>
        </div>
      </section>{" "}
      <section id="how">
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "74px 24px",
            boxSizing: "border-box",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "640px" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "600",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#545454",
              }}
            >
              How it works
            </span>{" "}
            <h2
              style={{ margin: "0", fontSize: "32px", lineHeight: "1.08", fontWeight: "800", letterSpacing: "-0.03em" }}
            >
              Book in minutes. Stay close from anywhere.
            </h2>
          </div>{" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
            <div
              style={{
                border: "1px solid #E2E2E2",
                borderRadius: "16px",
                padding: "22px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "16px",
                  background: "#000000",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  fontWeight: "800",
                }}
              >
                1
              </span>{" "}
              <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "800", letterSpacing: "-0.01em" }}>
                Choose a verified caregiver
              </h3>{" "}
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.5", color: "#545454" }}>
                Filter by area, language, skills and price. See checks and real reviews before you book.
              </p>
            </div>{" "}
            <div
              style={{
                border: "1px solid #E2E2E2",
                borderRadius: "16px",
                padding: "22px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "16px",
                  background: "#000000",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  fontWeight: "800",
                }}
              >
                2
              </span>{" "}
              <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "800", letterSpacing: "-0.01em" }}>
                Set the tasks for each day
              </h3>{" "}
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.5", color: "#545454" }}>
                {"Your parent's routine is shared with every visit. Add today's tasks any time, even at 6 AM."}
              </p>
            </div>{" "}
            <div
              style={{
                border: "1px solid #E2E2E2",
                borderRadius: "16px",
                padding: "22px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "16px",
                  background: "#000000",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  fontWeight: "800",
                }}
              >
                3
              </span>{" "}
              <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "800", letterSpacing: "-0.01em" }}>
                Follow live, then approve
              </h3>{" "}
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.5", color: "#545454" }}>
                See check-in, tasks and notes as they happen. The caregiver is paid only after you approve.
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
      <section style={{ background: "#F6F6F6" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "74px 24px",
            boxSizing: "border-box",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "14px",
            }}
          >
            <h2
              style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.03em" }}
            >
              Caregivers near Colombo 05
            </h2>{" "}
            <Link
              href="/search"
              style={{
                height: "38px",
                padding: "0 18px",
                borderRadius: "19px",
                background: "#FFFFFF",
                border: "1px solid #E2E2E2",
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              See all 48
            </Link>
          </div>{" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
            <Link
              href="/profile"
              onClick={() => selectCaregiver("nirmala")}
              style={{
                background: "#FFFFFF",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <img
                src="/images/nirmala.png"
                alt=""
                style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover" }}
              />{" "}
              <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "16px", fontWeight: "800" }}>Nirmala Perera</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>8 yrs · Sinhala, English · 4.9 ★ (86)</span>
              </span>{" "}
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    height: "22px",
                    padding: "0 10px",
                    borderRadius: "11px",
                    background: "#E6F4EC",
                    color: "#05663A",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  Verified
                </span>
                <span style={{ fontSize: "14px", fontWeight: "800" }}>LKR 1,200/hr</span>
              </span>
            </Link>{" "}
            <Link
              href="/profile"
              onClick={() => selectCaregiver("mala")}
              style={{
                background: "#FFFFFF",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <img
                src="/images/mala.png"
                alt=""
                style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover" }}
              />{" "}
              <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "16px", fontWeight: "800" }}>Mala Wickrama</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>6 yrs · Sinhala, Tamil · 4.9 ★ (52)</span>
              </span>{" "}
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    height: "22px",
                    padding: "0 10px",
                    borderRadius: "11px",
                    background: "#E6F4EC",
                    color: "#05663A",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  Verified
                </span>
                <span style={{ fontSize: "14px", fontWeight: "800" }}>LKR 1,200/hr</span>
              </span>
            </Link>{" "}
            <Link
              href="/profile"
              onClick={() => selectCaregiver("shanthi")}
              style={{
                background: "#FFFFFF",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <img
                src="/images/shanthi.png"
                alt=""
                style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover" }}
              />{" "}
              <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "16px", fontWeight: "800" }}>Shanthi Rajapaksha</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>5 yrs · Sinhala · 4.8 ★ (31)</span>
              </span>{" "}
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    height: "22px",
                    padding: "0 10px",
                    borderRadius: "11px",
                    background: "#E6F4EC",
                    color: "#05663A",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  Verified
                </span>
                <span style={{ fontSize: "14px", fontWeight: "800" }}>LKR 1,000/hr</span>
              </span>
            </Link>{" "}
            <Link
              href="/profile"
              onClick={() => selectCaregiver("priya")}
              style={{
                background: "#FFFFFF",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <img
                src="/images/priya.png"
                alt=""
                style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover" }}
              />{" "}
              <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "16px", fontWeight: "800" }}>Priya Senanayake</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>3 yrs · English, Tamil · 4.6 ★ (12)</span>
              </span>{" "}
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    height: "22px",
                    padding: "0 10px",
                    borderRadius: "11px",
                    background: "#E6F4EC",
                    color: "#05663A",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  Verified
                </span>
                <span style={{ fontSize: "14px", fontWeight: "800" }}>LKR 950/hr</span>
              </span>
            </Link>
          </div>
        </div>
      </section>{" "}
      <section id="pricing">
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "74px 24px",
            boxSizing: "border-box",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "38px",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "999 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "600",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#545454",
              }}
            >
              Pay after the visit
            </span>{" "}
            <h2
              style={{ margin: "0", fontSize: "32px", lineHeight: "1.08", fontWeight: "800", letterSpacing: "-0.03em" }}
            >
              Your money is held safely until you say the visit happened.
            </h2>{" "}
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#545454" }}>
              Caregivers set their own hourly rate. You pay that plus a 10% booking and safety fee. Cancel free up to 24
              hours before.
            </p>{" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", paddingTop: "8px" }}>
              <Link
                href="/search"
                style={{
                  height: "44px",
                  padding: "0 22px",
                  borderRadius: "22px",
                  background: "#000000",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Find a caregiver
              </Link>{" "}
              <Link
                href="/#how"
                style={{
                  height: "44px",
                  padding: "0 22px",
                  borderRadius: "22px",
                  background: "#EEEEEE",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                How payment works
              </Link>
            </div>
          </div>{" "}
          <div
            style={{
              flex: "1 1 360px",
              minWidth: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 18px", fontSize: "14px" }}>
              <span style={{ color: "#545454" }}>3 hrs × LKR 1,200</span>
              <span style={{ fontWeight: "700" }}>LKR 3,600</span>
            </div>{" "}
            <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "22px" }}></div>{" "}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 18px", fontSize: "14px" }}>
              <span style={{ color: "#545454" }}>{"Booking & safety fee"}</span>
              <span style={{ fontWeight: "700" }}>LKR 360</span>
            </div>{" "}
            <div style={{ height: "1px", background: "#E2E2E2" }}></div>{" "}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 18px",
                background: "#EAF0FD",
              }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#1A4FB5" }}>Held in escrow</span>
                <span style={{ fontSize: "12px", color: "#333333" }}>Released after you approve</span>
              </span>
              <span style={{ fontSize: "20px", fontWeight: "800" }}>LKR 3,960</span>
            </div>
          </div>
        </div>
      </section>{" "}
      <section id="join" style={{ padding: "0 24px 74px" }}>
        <div
          style={{
            maxWidth: "1136px",
            margin: "0 auto",
            background: "#000000",
            color: "#FFFFFF",
            borderRadius: "24px",
            padding: "44px",
            boxSizing: "border-box",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h2
              style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.03em" }}
            >
              Are you a caregiver?
            </h2>{" "}
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#D6D6D6" }}>
              Set your own rate and hours. Get paid every Friday. Free to join.
            </p>
          </div>{" "}
          <Link
            href="/#join"
            style={{
              height: "44px",
              padding: "0 22px",
              borderRadius: "22px",
              background: "#FFFFFF",
              color: "#000000",
              display: "flex",
              alignItems: "center",
              fontSize: "15px",
              fontWeight: "700",
            }}
          >
            Join as a caregiver
          </Link>
        </div>
      </section>{" "}
      <footer style={{ marginTop: "auto", borderTop: "1px solid #E2E2E2" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "32px 24px",
            boxSizing: "border-box",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "14px 24px",
            alignItems: "center",
            fontSize: "13px",
            color: "#545454",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "15px",
              fontWeight: "800",
              color: "#000000",
            }}
          >
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
                fontSize: "13px",
              }}
            >
              g
            </span>
            Gloocan
          </span>{" "}
          <span style={{ flex: "1" }}>© 2026 Gloocan Technologies (Pvt) Ltd · Colombo</span>{" "}
          <Link href="/#safety">Safety</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/help-centre">Help</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/language">සිංහල · தமிழ்</Link>
        </div>
      </footer>
    </div>
  );
}
