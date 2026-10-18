"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { toast } from "@/components/Toaster";
import { defaultCardLabel } from "@/lib/actions";
import { fee, lkr, shortDate, TODAY } from "@/lib/format";
import { caregiver } from "@/lib/mock/caregivers";
import { mutate, newId, useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { close: true };
  }
  renderVals() {
    const tg = (k) => {
      const on = this.state[k];
      return {
        pressed: on ? "true" : "false",
        track: on ? "#05944F" : "#CBCBCB",
        align: on ? "flex-end" : "flex-start",
        flip: () => this.setState({ [k]: !on }),
      };
    };
    const { demo } = this.props;
    const cg = caregiver(demo.ui.applicant ?? "mala");
    const week = 6 * 3 * cg.rate;
    const job = demo.jobs.find((j) => j.id === demo.ui.selectedJob) ?? demo.jobs.find((j) => j.status === "Live");
    return {
      close: tg("close"),
      cg,
      title: `Hire ${cg.name}?`,
      rate: `${lkr(cg.rate)} / hr`,
      week: lkr(week),
      fee: lkr(fee(week)),
      total: lkr(week + fee(week)),
      hire: () => {
        mutate((d) => {
          const j = d.jobs.find((x) => x.id === job?.id);
          if (j) Object.assign(j, { status: this.state.close ? "Filled" : "Live", applicants: `Hired ${cg.first}` });
          d.payments.unshift({
            id: newId("p"),
            date: shortDate(TODAY),
            what: "Weekly care · first week",
            who: cg.short,
            method: defaultCardLabel(),
            amount: week + fee(week),
            status: "Held",
          });
        });
        toast(`${cg.first} is hired · first week held`);
      },
    };
  }
}

export default function HireScreen() {
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
      <div style={{ position: "relative", flex: "1", display: "flex", flexDirection: "column" }}>
        <AppHeader active="/my-jobs" />
        <main
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "28px 24px 56px",
            boxSizing: "border-box",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <h1
              style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.025em" }}
            >
              Morning companion for Amma
            </h1>
          </div>
          <div
            style={{ height: "360px", border: "1px solid #E2E2E2", borderRadius: "16px", background: "#F6F6F6" }}
          ></div>
        </main>
        <Link
          href="/applicants"
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
              <span style={{ fontSize: "14px", color: "#545454" }}>
                Mon–Sat · 9:00 – 12:00 · 12 Oct – 7 Nov · 24 visits
              </span>
            </span>
            <Link
              href="/applicants"
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
              <span style={{ fontSize: "13px", color: "#545454" }}>4.9 ★ · verified · 2.4 km</span>
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
              <span style={{ color: "#545454" }}>Rate</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>{v.rate}</span>
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
              <span style={{ color: "#545454" }}>First week (6 visits)</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>{v.week}</span>
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
              <span style={{ color: "#545454" }}>{"Booking & safety fee"}</span>
              <span style={{ fontWeight: "700", textAlign: "right" }}>{v.fee}</span>
            </div>
            <div style={{ height: "1px", background: "#E2E2E2" }}></div>
            <div
              style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", background: "#EAF0FD" }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#1A4FB5" }}>Held now · Visa ·· 4417</span>
              <span style={{ fontSize: "18px", fontWeight: "800" }}>{v.total}</span>
            </div>
          </div>
          <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
            <button
              aria-pressed={v.close.pressed}
              onClick={v.close.flip}
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
                <span style={{ fontSize: "14px", fontWeight: "700" }}>Close the job and tell the others</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>{'They get a kind "position filled" note'}</span>
              </span>
              <span
                style={{
                  width: "40px",
                  height: "24px",
                  borderRadius: "12px",
                  background: v.close.track,
                  padding: "3px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: v.close.align,
                  flexShrink: "0",
                }}
              >
                <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
              </span>
            </button>
          </div>
          <span style={{ fontSize: "12px", color: "#545454" }}>
            {"Amma's routine is added to every visit. You can add tasks in the care plan."}
          </span>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Link
              href="/applicants"
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
              Not yet
            </Link>
            <Link
              href="/weekly-care"
              onClick={v.hire}
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
              {"Hire & pay first week"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
