"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { useRouter } from "next/navigation";
import { toast } from "@/components/Toaster";
import { cancelVisit, openChat } from "@/lib/actions";
import { selectedVisit } from "@/lib/selectors";
import { useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { o: 1 };
  }
  renderVals() {
    const { demo, router } = this.props;
    const radio = (key, list) =>
      list.map((r, i) => {
        const on = this.state[key] === i;
        return {
          title: r[0],
          note: r[1] || "",
          checked: on ? "true" : "false",
          sep: i === 0 ? "none" : "1px solid #E2E2E2",
          bg: on ? "#F6F6F6" : "#FFFFFF",
          ring: on ? "2px solid #000000" : "2px solid #A6A6A6",
          dot: on ? "#000000" : "transparent",
          pick: () => this.setState({ [key]: i }),
        };
      });
    const visit = selectedVisit(demo);
    const go = [
      () => {
        toast("We'll keep waiting until 8 PM");
        router.push("/visits");
      },
      () => {
        toast("Sent to Shanthi, Mala and Priya");
        router.push("/request-declined");
      },
      () => {
        cancelVisit(visit.id, "No reply");
        toast("Request cancelled · hold released");
        router.push("/visits");
      },
    ];
    return {
      opts: radio("o", [
        ["Keep waiting until 8 PM", "Your hold stays · released if she doesn't reply"],
        ["Ask 3 similar caregivers now", "Shanthi, Mala and Priya are free · first to accept gets it"],
        ["Cancel the request", "Hold released right away"],
      ]),
      cta: ["Keep waiting", "Send to 3 caregivers", "Cancel request"][this.state.o],
      go: (e) => {
        e.preventDefault();
        go[this.state.o]();
      },
    };
  }
}

export default function RequestNoReplyScreen() {
  const demo = useDemo();
  const router = useRouter();
  const v = useLogic(Logic, { props: { demo, router } });
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
      <AppHeader active="/visits" />
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
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
            <Link
              href="/visits"
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
              All visits
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src="/images/nirmala.png"
                alt=""
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                }}
              />
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#545454",
                  }}
                >
                  No reply yet
                </span>
                <span style={{ fontSize: "14px", color: "#333333" }}>Sat 17 Oct · 9:00 – 12:00</span>
              </span>
            </div>
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
                {"Nirmala hasn't replied"}
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                {"She usually replies in 2 hours. It's been 3 hrs 10 min."}
              </span>
            </div>
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
                <span style={{ color: "#545454" }}>Sent</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>Mon 12 Oct, 3:40 PM</span>
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
                <span style={{ color: "#545454" }}>Request ends</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  Tonight, 8:00 PM
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    Then it closes on its own
                  </span>
                </span>
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
                <span style={{ color: "#545454" }}>Payment</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  LKR 3,960 held
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    Not charged
                  </span>
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>What would you like to do?</h2>
              <div
                role="radiogroup"
                style={{
                  border: "1px solid #E2E2E2",
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {v.opts.map((r: any, i1: number) => (
                  <Fragment key={i1}>
                    <button
                      role="radio"
                      aria-checked={r.checked}
                      onClick={r.pick}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "12px 16px",
                        border: "none",
                        borderTop: r.sep,
                        background: r.bg,
                        color: "#000000",
                        textAlign: "left",
                        fontFamily: "var(--font-figtree), sans-serif",
                      }}
                    >
                      <span
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "9px",
                          boxSizing: "border-box",
                          border: r.ring,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: "0",
                        }}
                      >
                        <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: r.dot }}></span>
                      </span>
                      <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700" }}>{r.title}</span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>{r.note}</span>
                      </span>
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <Link
                href="/request-declined"
                onClick={v.go}
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
                {v.cta}
              </Link>
              <Link
                href="/messages"
                onClick={() => openChat("nirmala")}
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
                Message Nirmala
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src="/images/nirmala.png"
                alt=""
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: "0",
                }}
              />
              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "15px", fontWeight: "800" }}>Companionship for Amma</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>Booking GL-B-58344</span>
              </span>
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
                Waiting
              </span>
            </div>
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
                <span style={{ color: "#545454" }}>When</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  Sat 17 Oct
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    9:00 – 12:00
                  </span>
                </span>
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
                <span style={{ color: "#545454" }}>Caregiver</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>Nirmala Perera</span>
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
                <span style={{ color: "#545454" }}>Tasks</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>Routine + 1 extra</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
