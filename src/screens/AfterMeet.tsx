"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { toast } from "@/components/Toaster";
import { draftFor, selectCaregiver } from "@/lib/actions";
import { mutate } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { o: 0 };
  }
  renderVals() {
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
    return {
      opts: radio("o", [
        ["Hire Mala", "Mon–Sat · 9:00 – 12:00 · pay week 1"],
        ["Book a paid trial visit first", "Sat 17 Oct · 3 hrs · LKR 3,960"],
        ["Not the right fit", "She's told kindly · no reason needed"],
      ]),
      cta: ["Hire Mala", "Book trial visit", "Tell Mala"][this.state.o],
      href: ["/hire", "/book", "/applicants"][this.state.o],
      go: [
        () =>
          mutate((d) => {
            d.ui.applicant = "mala";
          }),
        () => draftFor("mala", "2026-10-17"),
        () => {
          mutate((d) => {
            d.rejected.push("mala");
          });
          toast('Mala gets a kind "not this time" note');
        },
      ][this.state.o],
    };
  }
}

export default function AfterMeetScreen() {
  const v = useLogic(Logic);
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src="/images/mala.png"
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
                  Call ended · 7:16 PM
                </span>
                <span style={{ fontSize: "14px", color: "#333333" }}>16 min with Mala</span>
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
                How did it go?
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                Mala is holding these mornings for you until tomorrow 7 PM.
              </span>
            </div>
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
            <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Private note · only you see it</span>
              <textarea
                rows={2}
                style={{
                  border: "1px solid #E2E2E2",
                  outline: "none",
                  resize: "none",
                  borderRadius: "12px",
                  padding: "10px 12px",
                  font: "500 14px var(--font-figtree), sans-serif",
                  lineHeight: "1.45",
                }}
                defaultValue="Warm, calm. Amma liked her."
              />
            </label>
            <div>
              <Link
                href={v.href}
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
                }}
              >
                {v.cta}
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
                src="/images/mala.png"
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
                <span style={{ fontSize: "15px", fontWeight: "800" }}>Mala Wickrama</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>4.9 ★ · 6 yrs · 2.4 km · asks LKR 1,200/hr</span>
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
                Verified
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
                <span style={{ color: "#545454" }}>Job</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  Morning companion
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    Mon–Sat · 9:00 – 12:00
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
                <span style={{ color: "#545454" }}>Holding for you</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>Until tomorrow 7 PM</span>
              </div>
            </div>
            <Link
              href="/profile"
              onClick={() => selectCaregiver("mala")}
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
              Full profile
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
