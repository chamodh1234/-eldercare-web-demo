"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { useRouter } from "next/navigation";
import { sendTip } from "@/lib/actions";
import { lkr } from "@/lib/format";
import { reportVisit, visitView } from "@/lib/selectors";
import { useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { t: 2, note: "Thank you for being so patient with Amma." };
  }
  renderVals() {
    const { demo, router } = this.props;
    const { v: visit, cg, day, time, sub, fee } = visitView(reportVisit(demo));
    const pick1 = (key, labels) =>
      labels.map((l, i) => {
        const on = this.state[key] === i;
        return {
          label: l,
          sel: on ? "true" : "false",
          bg: on ? "#000000" : "#EEEEEE",
          fg: on ? "#FFFFFF" : "#000000",
          pick: () => this.setState({ [key]: i }),
        };
      });
    const T = [0, 200, 500, 1000];
    const a = T[this.state.t];
    const stars = `${visit.rating ?? 5} ★`;
    return {
      tips: pick1("t", ["No tip", "LKR 200", "LKR 500", "LKR 1,000"]),
      amt: lkr(a),
      some: a > 0,
      cta: a ? "Send " + lkr(a) + " tip" : "Done",
      head: `${day} · ${stars} for ${cg.first}`,
      title: `Add a tip for ${cg.first}?`,
      gets: `${cg.first} gets`,
      noteLabel: `Note to ${cg.first} · optional`,
      note: this.state.note,
      setNote: (e) => this.setState({ note: e.target.value }),
      card: `${day} · ${time} · with Amma`,
      stars,
      paidTo: `Paid to ${cg.first}`,
      sub,
      fee,
      send: (e) => {
        e.preventDefault();
        sendTip(visit.id, a, this.state.note);
        router.push(a ? "/tip-sent" : "/visits");
      },
    };
  }
}

export default function AddTipScreen() {
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
                  Thanks for approving
                </span>
                <span style={{ fontSize: "14px", color: "#333333" }}>{v.head}</span>
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
                {v.title}
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                Optional. 100% goes to her, Gloocan takes nothing.
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {v.tips.map((t: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    aria-pressed={t.sel}
                    onClick={t.pick}
                    style={{
                      height: "36px",
                      padding: "0 16px",
                      borderRadius: "18px",
                      border: "none",
                      background: t.bg,
                      color: t.fg,
                      font: "700 13px var(--font-figtree), sans-serif",
                    }}
                  >
                    {t.label}
                  </button>
                </Fragment>
              ))}
            </div>
            {v.some ? (
              <>
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
                    <span style={{ color: "#545454" }}>Tip</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>
                      {v.amt}
                      <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                        Charged now to Visa ·· 4417
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
                    <span style={{ color: "#545454" }}>{v.gets}</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>
                      {v.amt}
                      <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                        In her Friday payout
                      </span>
                    </span>
                  </div>
                </div>
              </>
            ) : null}
            <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>{v.noteLabel}</span>
              <textarea
                rows={3}
                style={{
                  border: "1px solid #E2E2E2",
                  outline: "none",
                  resize: "none",
                  borderRadius: "12px",
                  padding: "10px 12px",
                  font: "500 14px var(--font-figtree), sans-serif",
                  lineHeight: "1.45",
                }}
                value={v.note}
                onChange={v.setNote}
              />
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <Link
                href="/tip-sent"
                onClick={v.send}
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
                href="/visits"
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
                Skip
              </Link>
            </div>
            <span style={{ fontSize: "12px", color: "#545454" }}>Tips never change her rating or your price.</span>
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
                <span style={{ fontSize: "15px", fontWeight: "800" }}>Visit approved</span>
                <span style={{ fontSize: "12px", color: "#545454" }}>{v.card}</span>
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
                Paid
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
                <span style={{ color: "#545454" }}>Your rating</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{v.stars}</span>
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
                <span style={{ color: "#545454" }}>{v.paidTo}</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{v.sub}</span>
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
                <span style={{ color: "#545454" }}>Fee</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>{v.fee}</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
