"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { selectCaregiver } from "@/lib/actions";
import { caregiver, reviewerPhoto } from "@/lib/mock/caregivers";
import { useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { f: 0, more: false };
  }
  renderVals() {
    const { demo } = this.props;
    const cg = caregiver(demo.selectedCaregiver);
    const F = ["All", "Memory care", "Mobility", "Meals", "With photos"];
    const fil = F.map((f, i) => {
      const on = this.state.f === i;
      return {
        label: f,
        pressed: on ? "true" : "false",
        bg: on ? "#000000" : "#EEEEEE",
        fg: on ? "#FFFFFF" : "#000000",
        flip: () => this.setState({ f: i, more: false }),
      };
    });
    const tag = F[this.state.f];
    const matching = cg.reviewList.filter((r) => this.state.f === 0 || (this.state.f !== 4 && r.tag === tag));
    const shown = this.state.more ? matching : matching.slice(0, 4);
    return {
      fil,
      cg,
      reviews: shown.map((r) => ({
        ...r,
        photo: reviewerPhoto(r.by),
        meta: `${r.when} · verified visit`,
        starsText: "★".repeat(r.stars),
      })),
      none: shown.length === 0,
      canMore: matching.length > shown.length,
      showMore: () => this.setState({ more: true }),
      rating: cg.rating.toFixed(1),
      counts: `${cg.reviews} reviews · ${cg.visits} visits`,
    };
  }
}

export default function ReviewsScreen() {
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
      <AppHeader active="/search" />
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
          href="/profile"
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
          {`${v.cg.first}'s profile`}
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
            src={v.cg.avatar}
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
              style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.025em" }}
            >
              Reviews for {v.cg.first}
            </h1>
            <span style={{ fontSize: "15px", color: "#545454" }}>Only families who booked a visit can review</span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "flex-start" }}>
          <aside
            style={{
              flex: "1 1 280px",
              maxWidth: "340px",
              minWidth: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "20px",
              padding: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "48px", fontWeight: "800", letterSpacing: "-0.03em", lineHeight: "1" }}>
                {v.rating}
              </span>
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "14px", fontWeight: "800" }}>★★★★★</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>{v.counts}</span>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px" }}>
              <span style={{ width: "10px" }}>5</span>
              <span style={{ flex: "1", height: "6px", borderRadius: "3px", background: "#E2E2E2", display: "flex" }}>
                <span style={{ width: "92%", borderRadius: "3px", background: "#000000" }}></span>
              </span>
              <span style={{ width: "24px", color: "#545454", textAlign: "right" }}>79</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px" }}>
              <span style={{ width: "10px" }}>4</span>
              <span style={{ flex: "1", height: "6px", borderRadius: "3px", background: "#E2E2E2", display: "flex" }}>
                <span style={{ width: "6%", borderRadius: "3px", background: "#000000" }}></span>
              </span>
              <span style={{ width: "24px", color: "#545454", textAlign: "right" }}>5</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px" }}>
              <span style={{ width: "10px" }}>3</span>
              <span style={{ flex: "1", height: "6px", borderRadius: "3px", background: "#E2E2E2", display: "flex" }}>
                <span style={{ width: "2%", borderRadius: "3px", background: "#000000" }}></span>
              </span>
              <span style={{ width: "24px", color: "#545454", textAlign: "right" }}>2</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px" }}>
              <span style={{ width: "10px" }}>2</span>
              <span style={{ flex: "1", height: "6px", borderRadius: "3px", background: "#E2E2E2", display: "flex" }}>
                <span style={{ width: "0%", borderRadius: "3px", background: "#000000" }}></span>
              </span>
              <span style={{ width: "24px", color: "#545454", textAlign: "right" }}>0</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px" }}>
              <span style={{ width: "10px" }}>1</span>
              <span style={{ flex: "1", height: "6px", borderRadius: "3px", background: "#E2E2E2", display: "flex" }}>
                <span style={{ width: "0%", borderRadius: "3px", background: "#000000" }}></span>
              </span>
              <span style={{ width: "24px", color: "#545454", textAlign: "right" }}>0</span>
            </div>
            <div style={{ height: "1px", background: "#E2E2E2" }}></div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#545454",
              }}
            >
              Families mention
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
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
                Patient · 64
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
                On time · 58
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
                Kept me updated · 41
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
                Kind · 37
              </span>
            </div>
            <Link
              href="/book"
              onClick={() => selectCaregiver(v.cg.id)}
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
              Book {v.cg.first}
            </Link>
          </aside>
          <section
            style={{ flex: "999 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {v.fil.map((c: any, i1: number) => (
                  <Fragment key={i1}>
                    <button
                      aria-pressed={c.pressed}
                      onClick={c.flip}
                      style={{
                        height: "32px",
                        padding: "0 12px",
                        borderRadius: "16px",
                        border: "none",
                        background: c.bg,
                        color: c.fg,
                        font: "600 13px var(--font-figtree), sans-serif",
                      }}
                    >
                      {c.label}
                    </button>
                  </Fragment>
                ))}
              </div>
              <span style={{ fontSize: "13px", color: "#545454" }}>Most recent first</span>
            </div>
            {v.none ? (
              <div
                style={{
                  border: "1px solid #E2E2E2",
                  borderRadius: "16px",
                  padding: "24px 18px",
                  fontSize: "14px",
                  color: "#545454",
                }}
              >
                No reviews here yet.
              </div>
            ) : null}
            {v.reviews.map((r: any, i: number) => (
              <div
                key={i}
                style={{
                  border: "1px solid #E2E2E2",
                  borderRadius: "16px",
                  padding: "16px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img
                    src={r.photo}
                    alt=""
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                      flexShrink: "0",
                    }}
                  />
                  <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "14px", fontWeight: "800" }}>{r.by}</span>
                    <span style={{ fontSize: "12px", color: "#545454" }}>{r.meta}</span>
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: "800" }}>{r.starsText}</span>
                </div>
                <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#333333" }}>{r.text}</span>
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
                    {r.tag}
                  </span>
                </span>
              </div>
            ))}
            {v.canMore ? (
              <button
                type="button"
                onClick={v.showMore}
                style={{
                  border: "none",
                  fontFamily: "var(--font-figtree), sans-serif",
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
                  alignSelf: "flex-start",
                }}
              >
                Show more reviews
              </button>
            ) : null}
          </section>
        </div>
      </main>
    </div>
  );
}
