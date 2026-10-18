"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { openChat, selectCaregiver, slotToDraft, toggleSaved } from "@/lib/actions";
import { lkr } from "@/lib/format";
import { caregiver, langAbbr, reviewerPhoto } from "@/lib/mock/caregivers";
import { useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { slot: 0 };
  }
  renderVals() {
    const { demo } = this.props;
    const cg = caregiver(demo.selectedCaregiver);
    const slots = cg.slots.map((s, i) => {
      const on = this.state.slot === i;
      return {
        day: s[0],
        time: s[1],
        pressed: on ? "true" : "false",
        bg: on ? "#000000" : "#EEEEEE",
        fg: on ? "#FFFFFF" : "#000000",
        pick: () => this.setState({ slot: i }),
      };
    });
    const saved = demo.saved.includes(cg.id);
    const chosen = cg.slots[Math.min(this.state.slot, cg.slots.length - 1)];
    return {
      cg,
      slots,
      sub: `Caregiver · Colombo 05 · ★ ${cg.rating.toFixed(1)} · ${cg.reviews} reviews · ${cg.visits} visits`,
      caredFor: cg.visitsWithAmma > 0,
      caredLabel: `Cared for Amma · ${cg.visitsWithAmma} visits`,
      years: `${cg.years} yrs`,
      langs: langAbbr(cg.languages),
      rate: lkr(cg.rate),
      reviewsTitle: `Reviews · ★ ${cg.rating.toFixed(1)}`,
      allReviews: `See all ${cg.reviews} reviews`,
      reviews: cg.reviewList.slice(0, 2).map((r) => ({
        ...r,
        photo: reviewerPhoto(r.by),
        meta: `${r.when} · verified visit`,
        starsText: "★".repeat(r.stars),
      })),
      hasReviews: cg.reviewList.length > 0,
      saved: saved ? "true" : "false",
      savedLabel: saved ? "Saved caregiver" : "Save caregiver",
      savedFill: saved ? "currentColor" : "none",
      flipSaved: () => toggleSaved(cg.id),
      book: () => {
        selectCaregiver(cg.id);
        if (chosen) slotToDraft(chosen[0], chosen[1]);
      },
      message: () => openChat(cg.id),
      messageLabel: `Message ${cg.first}`,
      bookLabel: `Book ${cg.first}`,
    };
  }
}

export default function ProfileScreen() {
  const demo = useDemo();
  const v = useLogic(Logic, { props: { demo } });
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
      <AppHeader active="/search" action="none" />{" "}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 24px 50px",
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <Link
          href="/search"
          style={{
            alignSelf: "flex-start",
            height: "32px",
            padding: "0 14px 0 10px",
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
            width="18"
            height="18"
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
          48 caregivers
        </Link>{" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "18px" }}>
              <span style={{ position: "relative" }}>
                <img
                  src={v.cg.avatar}
                  alt={v.cg.name}
                  style={{ width: "88px", height: "88px", borderRadius: "50%", objectFit: "cover", display: "block" }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "2px",
                    bottom: "2px",
                    width: "28px",
                    height: "28px",
                    borderRadius: "14px",
                    background: "#05944F",
                    border: "4px solid #FFFFFF",
                    boxSizing: "border-box",
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
                    stroke="#FFFFFF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12l5 5 9-10"></path>
                  </svg>
                </span>
              </span>{" "}
              <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <h1
                  style={{
                    margin: "0",
                    fontSize: "32px",
                    lineHeight: "1.05",
                    fontWeight: "800",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {v.cg.name}
                </h1>{" "}
                <span style={{ fontSize: "15px", color: "#545454" }}>{v.sub}</span>{" "}
                <span style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "6px" }}>
                  <span
                    style={{
                      height: "24px",
                      padding: "0 12px",
                      borderRadius: "12px",
                      background: "#E6F4EC",
                      color: "#05663A",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    Fully verified
                  </span>
                  {v.caredFor ? (
                    <span
                      style={{
                        height: "24px",
                        padding: "0 12px",
                        borderRadius: "12px",
                        background: "#EEEEEE",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      {v.caredLabel}
                    </span>
                  ) : null}
                </span>
              </div>
            </div>{" "}
            <div
              style={{
                border: "1px solid #E2E2E2",
                borderRadius: "14px",
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              }}
            >
              <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "18px", fontWeight: "800" }}>{v.years}</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>Experience</span>
              </div>{" "}
              <div
                style={{
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  borderLeft: "1px solid #E2E2E2",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "800" }}>{v.langs}</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>Languages</span>
              </div>{" "}
              <div
                style={{
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  borderLeft: "1px solid #E2E2E2",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "800" }}>{v.cg.onTime}</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>On time</span>
              </div>{" "}
              <div
                style={{
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  borderLeft: "1px solid #E2E2E2",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "800" }}>{v.cg.rebook}</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>Families rebook</span>
              </div>
            </div>{" "}
            <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>About</h2>{" "}
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#333333", maxWidth: "680px" }}>
                {v.cg.about}
              </p>{" "}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {v.cg.skills.map((s: string) => (
                  <span
                    key={s}
                    style={{
                      height: "30px",
                      padding: "0 12px",
                      borderRadius: "15px",
                      background: "#EEEEEE",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </section>{" "}
            <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Checks</h2>
                <Link href="/#safety" style={{ fontSize: "13px", fontWeight: "600", textDecoration: "underline" }}>
                  How we check
                </Link>
              </div>{" "}
              <div
                style={{
                  border: "1px solid #E2E2E2",
                  borderRadius: "14px",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                }}
              >
                <div style={{ display: "flex", gap: "12px", padding: "14px 16px" }}>
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "14px",
                      background: "#E6F4EC",
                      color: "#05663A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: "0",
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
                  <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "700" }}>Identity (NIC)</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>Matched in person · Aug 2026</span>
                  </span>
                </div>{" "}
                <div style={{ display: "flex", gap: "12px", padding: "14px 16px", borderLeft: "1px solid #E2E2E2" }}>
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "14px",
                      background: "#E6F4EC",
                      color: "#05663A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: "0",
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
                  <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "700" }}>Police clearance</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>Checked 12 Aug 2026</span>
                  </span>
                </div>{" "}
                <div style={{ display: "flex", gap: "12px", padding: "14px 16px", borderLeft: "1px solid #E2E2E2" }}>
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "14px",
                      background: "#E6F4EC",
                      color: "#05663A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: "0",
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
                  <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "700" }}>NVQ Level 4</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>Confirmed with issuer</span>
                  </span>
                </div>
              </div>
            </section>{" "}
            <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>{v.reviewsTitle}</h2>
                <Link href="/reviews" style={{ fontSize: "13px", fontWeight: "700", textDecoration: "underline" }}>
                  {v.allReviews}
                </Link>
              </div>{" "}
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px" }}
              >
                {v.reviews.map((r: any) => (
                  <div
                    key={r.by}
                    style={{
                      border: "1px solid #E2E2E2",
                      borderRadius: "14px",
                      padding: "14px 16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img
                        src={r.photo}
                        alt=""
                        style={{ width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover" }}
                      />
                      <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700" }}>{r.by}</span>
                        <span style={{ fontSize: "12px", color: "#545454" }}>{r.meta}</span>
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: "700" }}>{r.starsText}</span>
                    </span>
                    <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#333333" }}>{r.text}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>{" "}
          <aside
            aria-label={v.bookLabel}
            style={{
              flex: "1 1 320px",
              maxWidth: "400px",
              minWidth: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "16px",
              padding: "18px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                {v.rate}
                <span style={{ fontSize: "14px", fontWeight: "500", color: "#545454" }}>{" /hr"}</span>
              </span>
              <button
                type="button"
                aria-label={v.savedLabel}
                aria-pressed={v.saved}
                onClick={v.flipSaved}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "18px",
                  border: "none",
                  background: "#EEEEEE",
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={v.savedFill}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10z"></path>
                </svg>
              </button>
            </div>{" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#545454",
                }}
              >
                Next free times
              </span>{" "}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "8px" }}>
                {v.slots.map((s: any, i1: number) => (
                  <Fragment key={i1}>
                    <button
                      aria-pressed={s.pressed}
                      onClick={s.pick}
                      style={{
                        height: "44px",
                        borderRadius: "12px",
                        border: "none",
                        background: s.bg,
                        color: s.fg,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2px",
                        fontFamily: "var(--font-figtree), sans-serif",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: "800" }}>{s.day}</span>
                      <span style={{ fontSize: "12px", fontWeight: "600", opacity: ".8" }}>{s.time}</span>
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>{" "}
            <Link
              href="/book"
              onClick={v.book}
              style={{
                height: "44px",
                borderRadius: "22px",
                background: "#000000",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              Book a visit
            </Link>{" "}
            <Link
              href="/messages"
              onClick={v.message}
              style={{
                height: "38px",
                borderRadius: "19px",
                background: "#EEEEEE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: "600",
                marginTop: "-6px",
              }}
            >
              {v.messageLabel}
            </Link>{" "}
            <div
              style={{
                borderRadius: "12px",
                background: "#EAF0FD",
                color: "#1A4FB5",
                padding: "12px 12px",
                fontSize: "13px",
                fontWeight: "600",
                lineHeight: "1.45",
              }}
            >
              You pay after the visit. Free to cancel up to 24 hours before.
            </div>{" "}
            <Link
              href="/report-caregiver"
              style={{ fontSize: "12px", color: "#545454", textAlign: "center", textDecoration: "underline" }}
            >
              Report this profile
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
