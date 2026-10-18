"use client";

import Link from "next/link";
import { Fragment } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { toast } from "@/components/Toaster";
import { openChat, selectCaregiver } from "@/lib/actions";
import { mutate, useDemo } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { s: 1 };
  }
  renderVals() {
    const A = [
      {
        av: "/images/nirmala.png",
        id: "nirmala",
        name: "Nirmala Perera",
        meta: "4.9 ★ · 8 yrs · 1.4 km",
        rate: "1,200",
        note: "I cared for a lady after knee surgery last year. I can do every morning.",
        tag: "Saved",
        badge: "Cared for Amma",
      },
      {
        av: "/images/mala.png",
        id: "mala",
        name: "Mala Wickrama",
        meta: "4.9 ★ · 6 yrs · 2.4 km",
        rate: "1,200",
        note: "Former hospital aide, used to physio exercises. Free Mon–Sat.",
        tag: "",
        badge: "Post-surgery",
      },
      {
        av: "/images/priya.png",
        id: "priya",
        name: "Priya Senanayake",
        meta: "4.6 ★ · 3 yrs · 3.8 km",
        rate: "1,100",
        note: "Happy to help. I can also drive Amma to the clinic.",
        tag: "",
        badge: "Drives",
      },
      {
        av: "/images/shanthi.png",
        id: "shanthi",
        name: "Shanthi Rajapaksha",
        meta: "4.8 ★ · 5 yrs · 3.1 km",
        rate: "1,000",
        note: "Mornings Mon, Wed, Fri only.",
        tag: "Saved",
        badge: "3 days only",
      },
    ];
    const { demo } = this.props;
    const shown = A.filter((a) => !demo.rejected.includes(a.id));
    const si = Math.min(this.state.s, Math.max(0, shown.length - 1));
    const list = shown.map((a, i) => {
      const on = si === i;
      return {
        ...a,
        pressed: on ? "true" : "false",
        bg: on ? "#F6F6F6" : "#FFFFFF",
        sep: i === 0 ? "none" : "1px solid #E2E2E2",
        hasTag: !!a.tag,
        pick: () => this.setState({ s: i }),
      };
    });
    const sel = shown[si] ?? A[0];
    const job =
      demo.jobs.find((j) => j.id === demo.ui.selectedJob) ?? demo.jobs.find((j) => j.status === "Live") ?? demo.jobs[0];
    const pick = () =>
      mutate((d) => {
        d.ui.applicant = sel.id;
      });
    return {
      list,
      sel,
      none: shown.length === 0,
      count: `${shown.length} applicant${shown.length === 1 ? "" : "s"}`,
      title: job.title,
      pick,
      notFit: (e) => {
        e.preventDefault();
        mutate((d) => {
          d.rejected.push(sel.id);
        });
        toast(`${sel.name.split(" ")[0]} gets a kind "not this time" note`);
      },
      close: () => {
        mutate((d) => {
          const j = d.jobs.find((x) => x.id === job.id);
          if (j) Object.assign(j, { status: "Closed", applicants: "—" });
        });
        toast("Job closed · applicants have been told");
      },
      message: () => openChat(sel.id),
      profile: () => selectCaregiver(sel.id),
    };
  }
}

export default function ApplicantsScreen() {
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
        <Link
          href="/my-jobs"
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
          My jobs
        </Link>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <h1
              style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.025em" }}
            >
              {v.title}
            </h1>
            <span style={{ fontSize: "15px", color: "#545454" }}>
              Mon–Sat · 9:00 – 12:00 · from Mon 12 Oct · LKR 1,200/hr
            </span>
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
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
              Live · closes Sun 6 PM
            </span>
            <Link
              href="/post-job"
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
              Edit job
            </Link>
            <Link
              href="/my-jobs"
              onClick={v.close}
              style={{
                height: "40px",
                padding: "0 18px",
                borderRadius: "20px",
                background: "#FFFFFF",
                border: "1px solid #E2E2E2",
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
              Close job
            </Link>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <aside
            style={{
              flex: "1 1 320px",
              maxWidth: "380px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>{v.count}</h2>
              <span style={{ fontSize: "12px", color: "#545454" }}>Sorted by best match</span>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              {v.list.map((a: any, i1: number) => (
                <Fragment key={i1}>
                  <button
                    aria-pressed={a.pressed}
                    onClick={a.pick}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 14px",
                      border: "none",
                      borderTop: a.sep,
                      background: a.bg,
                      color: "#000000",
                      textAlign: "left",
                      fontFamily: "var(--font-figtree), sans-serif",
                    }}
                  >
                    <img
                      src={a.av}
                      alt=""
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        flexShrink: "0",
                      }}
                    />
                    <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "800" }}>{a.name}</span>
                      <span style={{ fontSize: "12px", color: "#545454" }}>{a.meta}</span>
                    </span>
                    {a.hasTag ? (
                      <>
                        <span
                          style={{
                            height: "22px",
                            padding: "0 8px",
                            borderRadius: "11px",
                            background: "#EEEEEE",
                            fontSize: "11px",
                            fontWeight: "700",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {a.tag}
                        </span>
                      </>
                    ) : null}
                    <span style={{ fontSize: "14px", fontWeight: "800" }}>{a.rate}</span>
                  </button>
                </Fragment>
              ))}
            </div>
          </aside>
          <section
            style={{
              flex: "999 1 460px",
              minWidth: "0",
              border: "1px solid #E2E2E2",
              borderRadius: "20px",
              padding: "24px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
              <img
                src={v.sel.av}
                alt=""
                style={{ width: "72px", height: "72px", borderRadius: "50%", objectFit: "cover" }}
              />
              <span style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-0.02em" }}>{v.sel.name}</span>
                <span style={{ fontSize: "14px", color: "#545454" }}>{v.sel.meta}</span>
                <span style={{ display: "flex", gap: "6px" }}>
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
                  <span
                    style={{
                      height: "24px",
                      padding: "0 10px",
                      borderRadius: "12px",
                      background: "#EEEEEE",
                      fontSize: "12px",
                      fontWeight: "700",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    {v.sel.badge}
                  </span>
                </span>
              </span>
              <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <span style={{ fontSize: "22px", fontWeight: "800" }}>
                  {"LKR "}
                  {v.sel.rate}
                </span>
                <span style={{ fontSize: "12px", color: "#545454" }}>per hour asked</span>
              </span>
            </div>
            <div
              style={{
                borderRadius: "14px",
                background: "#F6F6F6",
                padding: "14px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#545454" }}>THEIR MESSAGE</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5" }}>
                {'"'}
                {v.sel.note}
                {'"'}
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
                <span style={{ color: "#545454" }}>Checks</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  ID · police · certificate
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                    All verified
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
                <span style={{ color: "#545454" }}>Availability</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>Mon–Sat mornings</span>
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
                <span style={{ color: "#545454" }}>Languages</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>Sinhala, English</span>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <Link
                href="/hire"
                onClick={v.pick}
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
                Hire
              </Link>
              <Link
                href="/meet-options"
                onClick={v.pick}
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
                  <rect x="3" y="6" width="13" height="12" rx="2"></rect>
                  <path d="M16 10.5l5-3v9l-5-3z"></path>
                </svg>
                Meet first
              </Link>
              <Link
                href="/messages"
                onClick={v.message}
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
                Message
              </Link>
              <Link
                href="/profile"
                onClick={v.profile}
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
              <Link
                href="/applicants"
                onClick={v.notFit}
                style={{
                  height: "40px",
                  padding: "0 18px",
                  borderRadius: "20px",
                  background: "#FFFFFF",
                  border: "1px solid #E2E2E2",
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
                Not a fit
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
