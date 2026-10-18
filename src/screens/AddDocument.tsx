"use client";

import Link from "next/link";
import { Fragment, useRef } from "react";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { useRouter } from "next/navigation";
import { toast } from "@/components/Toaster";
import { mutate, newId } from "@/lib/store";

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = {
      k: 0,
      see: true,
      remind: true,
      name: "Prescription · Dr. Gunasekara",
      until: "12 Jan 2027",
      files: ["prescription.jpg"],
    };
  }
  renderVals() {
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
    const tg = (k) => {
      const on = this.state[k];
      return {
        pressed: on ? "true" : "false",
        track: on ? "#05944F" : "#CBCBCB",
        align: on ? "flex-end" : "flex-start",
        flip: () => this.setState({ [k]: !on }),
      };
    };
    const KINDS = ["Prescription", "Doctor's note", "Lab report", "Other"];
    const ABBR = ["Rx", "Note", "Lab", "Doc"];
    const { router } = this.props;
    const st = this.state;
    return {
      kinds: pick1("k", KINDS),
      see: tg("see"),
      remind: tg("remind"),
      name: { value: st.name, onChange: (e) => this.setState({ name: e.target.value }) },
      until: { value: st.until, onChange: (e) => this.setState({ until: e.target.value }) },
      file: st.files[0] ?? "No file yet",
      more:
        st.files.length > 1
          ? `${st.files.length - 1} more page${st.files.length > 2 ? "s" : ""} added`
          : "Drop more pages here",
      addFiles: (list) => this.setState({ files: [...st.files, ...Array.from(list).map((f: any) => f.name)] }),
      save: (e) => {
        e.preventDefault();
        if (!st.name.trim()) return toast("Give the document a name");
        mutate((d) => {
          d.docs.unshift({
            id: newId("d"),
            kind: KINDS[st.k],
            abbr: ABBR[st.k],
            title: st.name.trim(),
            sub: `Added today${st.until.trim() ? " · valid till " + st.until.trim() : ""}`,
            caregivers: st.see,
          });
        });
        toast(st.remind && st.until.trim() ? "Saved · we'll remind you a week before it runs out" : "Document saved");
        router.push("/care-docs");
      },
    };
  }
}

export default function AddDocumentScreen() {
  const router = useRouter();
  const files = useRef<HTMLInputElement>(null);
  const v = useLogic(Logic, { props: { router } });
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
            <AccountNav active="/care-profile" />
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
                  {"Amma's documents"}
                </h1>
              </div>
              <div
                style={{ height: "420px", border: "1px solid #E2E2E2", borderRadius: "16px", background: "#F6F6F6" }}
              ></div>
            </div>
          </div>
        </main>
        <Link
          href="/care-docs"
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
            width: "min(600px, calc(100% - 32px))",
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
              <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>Add a document</span>
              <span style={{ fontSize: "14px", color: "#545454" }}>
                {"Upload or drop a file · stays private to Amma's care"}
              </span>
            </span>
            <Link
              href="/care-docs"
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
          <div style={{ display: "flex", gap: "14px" }}>
            <div
              style={{
                width: "150px",
                height: "120px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #EDE7DA, #CFC6B4)",
                display: "flex",
                alignItems: "flex-end",
                padding: "8px 10px",
                boxSizing: "border-box",
                fontSize: "11px",
                fontWeight: "700",
                color: "#3A3226",
              }}
            >
              {v.file}
            </div>
            <input
              ref={files}
              type="file"
              multiple
              hidden
              onChange={(e) => {
                if (e.target.files?.length) v.addFiles(e.target.files);
                e.target.value = "";
              }}
            />
            <button
              type="button"
              onClick={() => files.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files.length) v.addFiles(e.dataTransfer.files);
              }}
              style={{
                background: "#FFFFFF",
                fontFamily: "var(--font-figtree), sans-serif",
                flex: "1",
                border: "1.5px dashed #A6A6A6",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
                fontSize: "13px",
                color: "#545454",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path>
              </svg>
              {v.more}
            </button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {v.kinds.map((t: any, i1: number) => (
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
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "12px" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Name</span>
              <input
                {...v.name}
                style={{
                  height: "44px",
                  border: "1px solid #E2E2E2",
                  outline: "none",
                  borderRadius: "12px",
                  background: "#FFFFFF",
                  color: "#000000",
                  padding: "0 12px",
                  font: "500 14px var(--font-figtree), sans-serif",
                  boxSizing: "border-box",
                  width: "100%",
                }}
              />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>Valid till</span>
              <input
                {...v.until}
                style={{
                  height: "44px",
                  border: "1px solid #E2E2E2",
                  outline: "none",
                  borderRadius: "12px",
                  background: "#FFFFFF",
                  color: "#000000",
                  padding: "0 12px",
                  font: "500 14px var(--font-figtree), sans-serif",
                  boxSizing: "border-box",
                  width: "100%",
                }}
              />
            </label>
          </div>
          <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
            <button
              aria-pressed={v.see.pressed}
              onClick={v.see.flip}
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
                <span style={{ fontSize: "14px", fontWeight: "700" }}>Caregivers can see it</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>{"Only on visit days · can't download"}</span>
              </span>
              <span
                style={{
                  width: "40px",
                  height: "24px",
                  borderRadius: "12px",
                  background: v.see.track,
                  padding: "3px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: v.see.align,
                  flexShrink: "0",
                }}
              >
                <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
              </span>
            </button>
            <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "16px" }}></div>
            <button
              aria-pressed={v.remind.pressed}
              onClick={v.remind.flip}
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
                <span style={{ fontSize: "14px", fontWeight: "700" }}>Remind me to renew</span>
                <span style={{ fontSize: "13px", color: "#545454" }}>1 week before it runs out</span>
              </span>
              <span
                style={{
                  width: "40px",
                  height: "24px",
                  borderRadius: "12px",
                  background: v.remind.track,
                  padding: "3px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: v.remind.align,
                  flexShrink: "0",
                }}
              >
                <span style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}></span>
              </span>
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Link
              href="/care-docs"
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
              Cancel
            </Link>
            <Link
              href="/care-docs"
              onClick={v.save}
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
              Save document
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
