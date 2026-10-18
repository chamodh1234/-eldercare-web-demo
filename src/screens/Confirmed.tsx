"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { toast } from "@/components/Toaster";
import { downloadFile, visitIcs } from "@/lib/download";
import { lkr } from "@/lib/format";
import { backups, selectedVisit, visitView } from "@/lib/selectors";
import { useDemo } from "@/lib/store";

export default function ConfirmedScreen() {
  const demo = useDemo();
  const { v, cg, day } = visitView(selectedVisit(demo));
  const amount = lkr(v.held ?? v.amount);
  const others = backups(demo, cg.id);
  const addToCalendar = (e: React.MouseEvent) => {
    e.preventDefault();
    downloadFile(
      "gloocan-visit.ics",
      visitIcs(`${v.help} with ${cg.first} for Amma`, v.date, v.start, v.end, "24/3 Kirula Road, Colombo 05"),
      "text/calendar",
    );
    toast("Calendar file downloaded");
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
      <AppHeader action="none" />{" "}
      <main
        style={{
          maxWidth: "1040px",
          margin: "0 auto",
          padding: "44px 24px 50px",
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "38px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "999 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={cg.avatar}
              alt=""
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #FFFFFF",
              }}
            />{" "}
            <span
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "30px",
                background: "#05944F",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "-20px",
                border: "4px solid #FFFFFF",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12l5 5 9-10"></path>
              </svg>
            </span>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#05663A",
              }}
            >
              Request sent
            </span>{" "}
            <h1
              style={{ margin: "0", fontSize: "36px", lineHeight: "1.05", fontWeight: "800", letterSpacing: "-0.03em" }}
            >
              {`We've asked ${cg.first}`}
            </h1>{" "}
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#333333" }}>
              {"She usually replies within 2 hours. We'll message you the moment she accepts."}
            </p>
          </div>{" "}
          <ol
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
            <li style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px" }}>
              <span
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "13px",
                  background: "#05944F",
                  color: "#FFFFFF",
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
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12l5 5 9-10"></path>
                </svg>
              </span>
              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700" }}>{amount} held</span>
                <span
                  style={{ fontSize: "13px", color: "#545454" }}
                >{`${v.card} · ${v.requestedAt.toLowerCase()}`}</span>
              </span>
            </li>{" "}
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 16px",
                borderTop: "1px solid #E2E2E2",
              }}
            >
              <span
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "13px",
                  border: "2px solid #000000",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ width: "10px", height: "10px", borderRadius: "5px", background: "#000000" }}></span>
              </span>
              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700" }}>Waiting for {cg.first}</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>
                  {`If she can't, we'll ask ${others.join(", then ")}`}
                </span>
              </span>
            </li>{" "}
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 16px",
                borderTop: "1px solid #E2E2E2",
              }}
            >
              <span
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "13px",
                  background: "#EEEEEE",
                  color: "#545454",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "800",
                }}
              >
                3
              </span>
              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                  style={{ fontSize: "14px", fontWeight: "700", color: "#333333" }}
                >{`Visit · ${day}, ${v.start}`}</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>Follow it live here or in the app</span>
              </span>
            </li>{" "}
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 16px",
                borderTop: "1px solid #E2E2E2",
              }}
            >
              <span
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "13px",
                  background: "#EEEEEE",
                  color: "#545454",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "800",
                }}
              >
                4
              </span>
              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#333333" }}>
                  You approve · {cg.first} is paid
                </span>
                <span style={{ fontSize: "13px", color: "#545454" }}>Or it auto-approves 24 hrs after check-out</span>
              </span>
            </li>
          </ol>{" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Link
              href="/visits"
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
              Go to my visits
            </Link>{" "}
            <Link
              href="/booking-status"
              style={{
                height: "44px",
                padding: "0 18px",
                borderRadius: "22px",
                background: "#EEEEEE",
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Track this booking
            </Link>{" "}
            <Link
              href="/confirmed"
              onClick={addToCalendar}
              style={{
                height: "44px",
                padding: "0 18px",
                borderRadius: "22px",
                background: "#EEEEEE",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: "600",
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
                aria-hidden="true"
              >
                <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                <path d="M4 10h16M9 3v4M15 3v4"></path>
              </svg>
              Add to calendar
            </Link>
          </div>
        </div>{" "}
        <aside
          style={{
            flex: "1 1 300px",
            maxWidth: "360px",
            minWidth: "0",
            background: "#F6F6F6",
            borderRadius: "16px",
            padding: "18px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <span style={{ display: "flex" }}>
            <img
              src="/images/ruwan.png"
              alt=""
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #F6F6F6",
              }}
            />
            <img
              src="/images/priya.png"
              alt=""
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #F6F6F6",
                marginLeft: "-14px",
              }}
            />
          </span>{" "}
          <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800", letterSpacing: "-0.01em" }}>
            Keep the family in the loop
          </h2>{" "}
          <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.5", color: "#333333" }}>
            {"Ruwan and Priya are in Amma's care circle. They'll see this visit and its live updates too."}
          </p>{" "}
          <Link
            href="/care-circle"
            style={{
              height: "38px",
              borderRadius: "19px",
              background: "#FFFFFF",
              border: "1px solid #E2E2E2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Manage care circle
          </Link>
        </aside>
      </main>
    </div>
  );
}
