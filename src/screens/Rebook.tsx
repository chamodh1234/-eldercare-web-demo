"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { useRouter } from "next/navigation";
import { bookDraft, cardShort, selectCaregiver, slotToDraft } from "@/lib/actions";
import { fee, lkr } from "@/lib/format";
import { caregiver } from "@/lib/mock/caregivers";
import { backups } from "@/lib/selectors";
import { mutate, useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { s: 0, backup: true };
  }
  renderVals() {
    const { demo, router } = this.props;
    const cg = caregiver(demo.selectedCaregiver);
    const tg = (k) => {
      const on = this.state[k];
      return {
        pressed: on ? "true" : "false",
        track: on ? "#05944F" : "#CBCBCB",
        align: on ? "flex-end" : "flex-start",
        flip: () => this.setState({ [k]: !on }),
      };
    };
    const L = cg.slots;
    const slots = L.map((s, i) => {
      const on = this.state.s === i;
      return {
        day: s[0],
        time: s[1],
        pressed: on ? "true" : "false",
        bg: on ? "#000000" : "#EEEEEE",
        fg: on ? "#FFFFFF" : "#000000",
        pick: () => this.setState({ s: i }),
      };
    });
    const slot = L[Math.min(this.state.s, L.length - 1)];
    const card = demo.cards.find((c) => c.id === demo.defaultCard) ?? demo.cards[0];
    const method = card ? cardShort(card) : "Card from abroad";
    const sub = 3 * cg.rate;
    const total = lkr(sub + fee(sub));
    const others = backups(demo, cg.id);
    return {
      cg,
      slots,
      backup: tg("backup"),
      when: slot[0] + " Oct · " + slot[1],
      method: " · " + method,
      title: `Book ${cg.first} again`,
      free: `${cg.first} is free`,
      backupNote: `${others.join(", then ")} · same price or less`,
      cta: `Book · ${total}`,
      book: (e) => {
        e.preventDefault();
        selectCaregiver(cg.id);
        slotToDraft(slot[0], slot[1]);
        mutate((d) => {
          d.draft.help = "Companionship";
          d.draft.hours = 3;
          d.draft.weekly = false;
          d.promo = null;
        });
        bookDraft(method);
        router.push("/confirmed");
      },
    };
  }
}

export default function RebookScreen() {
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
      <div style={{ position: "relative", flex: "1", display: "flex", flexDirection: "column" }}>
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
            <AccountNav active="/saved-caregivers" />
            <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
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
                  Saved caregivers
                </h1>
              </div>
              <div
                style={{ height: "300px", border: "1px solid #E2E2E2", borderRadius: "16px", background: "#F6F6F6" }}
              ></div>
            </div>
          </div>
        </main>
        <Link
          href="/saved-caregivers"
          aria-label="Close"
          style={{ position: "absolute", inset: "0", background: "rgba(0,0,0,0.45)" }}
        ></Link>
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "absolute",
            left: "50%",
            top: "64px",
            transform: "translateX(-50%)",
            width: "min(520px, calc(100% - 32px))",
            background: "#FFFFFF",
            borderRadius: "20px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>{v.title}</span>
              <span style={{ fontSize: "14px", color: "#545454" }}>Same as last time · you can change anything</span>
            </span>
            <Link
              href="/saved-caregivers"
              aria-label="Close"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "16px",
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
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18"></path>
              </svg>
            </Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src={v.cg.avatar}
              alt=""
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                flexShrink: "0",
              }}
            />
            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "16px", fontWeight: "800" }}>{v.cg.name}</span>
              <span style={{ fontSize: "13px", color: "#545454" }}>★ 4.9 · 18 visits with Amma</span>
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
              <span style={{ color: "#545454" }}>Help</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>Companionship</span>
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
              <span style={{ color: "#545454" }}>Length</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>3 hrs</span>
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
              <span style={{ fontWeight: "700", textAlign: "right" }}>
                {"Amma's routine"}
                <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                  4 tasks · add more after booking
                </span>
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600" }}>{v.free}</span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "6px" }}>
              {v.slots.map((s: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    aria-pressed={s.pressed}
                    onClick={s.pick}
                    style={{
                      height: "52px",
                      borderRadius: "12px",
                      border: "none",
                      background: s.bg,
                      color: s.fg,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1px",
                      fontFamily: "var(--font-figtree), sans-serif",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "800" }}>{s.day}</span>
                    <span style={{ fontSize: "11px", fontWeight: "600", opacity: ".8" }}>{s.time}</span>
                  </button>
                </Fragment>
              ))}
            </div>
          </div>
          <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
            <button
              aria-pressed={v.backup.pressed}
              onClick={v.backup.flip}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                border: "none",
                background: "transparent",
                color: "#000000",
                textAlign: "left",
                fontFamily: "var(--font-figtree), sans-serif",
              }}
            >
              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700" }}>
                  {"If she can't, ask my other saved caregivers"}
                </span>
                <span style={{ fontSize: "13px", color: "#545454" }}>{v.backupNote}</span>
              </span>
              <span
                style={{
                  width: "40px",
                  height: "24px",
                  borderRadius: "12px",
                  background: v.backup.track,
                  padding: "3px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: v.backup.align,
                  flexShrink: "0",
                }}
              >
                <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
              </span>
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "12px", color: "#545454" }}>
              {v.when}
              {v.method}
            </span>
            <Link
              href="/confirmed"
              onClick={v.book}
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
          </div>
        </div>
      </div>
    </div>
  );
}
