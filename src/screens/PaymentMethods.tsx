"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { DCLogic, useLogic, type DCProps } from "@/lib/logic";
import { Fragment } from "react";
import { toast } from "@/components/Toaster";
import { cardLabel } from "@/lib/actions";
import { mutate, newId, useDemo } from "@/lib/store";

const BLANK = { name: "", number: "", expiry: "", cvc: "", def: false };

class Logic extends DCLogic {
  constructor(props: DCProps) {
    super(props);
    this.state = { ...BLANK };
  }
  renderVals() {
    const { demo } = this.props;
    const st = this.state;
    const tg = (k) => {
      const on = st[k];
      return {
        pressed: on ? "true" : "false",
        track: on ? "#05944F" : "#CBCBCB",
        align: on ? "flex-end" : "flex-start",
        flip: () => this.setState({ [k]: !on }),
      };
    };
    const field = (k, format = (x) => x) => ({
      value: st[k],
      onChange: (e) => this.setState({ [k]: format(e.target.value) }),
    });
    const groups = (x) =>
      x
        .replace(/\D/g, "")
        .slice(0, 16)
        .replace(/(\d{4})(?=\d)/g, "$1 ");
    const expiry = (x) => {
      const d = x.replace(/\D/g, "").slice(0, 4);
      return d.length > 2 ? `${d.slice(0, 2)} / ${d.slice(2)}` : d;
    };
    const cards = demo.cards.map((c, i) => ({
      ...c,
      title: cardLabel(c),
      note: `Expires ${c.expiry} · ${c.bank}`,
      logoBg: c.brand === "VISA" ? "#1A1F71" : "#333333",
      isDefault: c.id === demo.defaultCard,
      sep: i > 0,
      makeDefault: () => {
        mutate((d) => {
          d.defaultCard = c.id;
          d.checkoutCard = c.id;
        });
        toast(`${cardLabel(c)} is now your default`);
      },
      remove: () => {
        if (demo.cards.length === 1) return toast("Add another card before removing this one");
        mutate((d) => {
          d.cards = d.cards.filter((x) => x.id !== c.id);
          if (d.defaultCard === c.id) d.defaultCard = d.cards[0].id;
          if (d.checkoutCard === c.id) d.checkoutCard = d.defaultCard;
        });
        toast(`${cardLabel(c)} removed`);
      },
    }));
    return {
      def: tg("def"),
      cards,
      name: field("name"),
      number: field("number", groups),
      expiry: field("expiry", expiry),
      cvc: field("cvc", (x) => x.replace(/\D/g, "").slice(0, 4)),
      add: (e) => {
        e.preventDefault();
        const digits = st.number.replace(/\D/g, "");
        const [mm, yy] = st.expiry.split(" / ").map(Number);
        if (!st.name.trim()) return toast("Add the name on the card");
        if (digits.length !== 16) return toast("Card number should be 16 digits");
        if (!mm || mm > 12 || !yy) return toast("Expiry should look like 08 / 28");
        if (st.cvc.length < 3) return toast("CVC is the 3 digits on the back");
        const id = newId("c");
        const brand = digits.startsWith("5") ? "MC" : "VISA";
        mutate((d) => {
          d.cards.push({
            id,
            brand,
            last4: digits.slice(-4),
            expiry: `${String(mm).padStart(2, "0")}/${String(yy).padStart(2, "0")}`,
            bank: "New card",
            name: st.name.trim(),
          });
          if (st.def || d.cards.length === 1) d.defaultCard = id;
          d.checkoutCard = id;
        });
        this.setState({ ...BLANK });
        toast(`${brand === "VISA" ? "Visa" : "Mastercard"} ·· ${digits.slice(-4)} added`);
      },
    };
  }
}

export default function PaymentMethodsScreen() {
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
          <AccountNav active="/payment-methods" />
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
                Payment methods
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>
                Used to hold payment until you approve each visit
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
              <div
                style={{ flex: "999 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  {v.cards.map((c: any) => (
                    <Fragment key={c.id}>
                      {c.sep ? <div style={{ height: "1px", background: "#E2E2E2", marginLeft: "78px" }}></div> : null}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "14px",
                          padding: "14px 16px",
                        }}
                      >
                        <span
                          style={{
                            width: "48px",
                            height: "32px",
                            borderRadius: "6px",
                            background: c.logoBg,
                            color: "#FFFFFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "11px",
                            fontWeight: "800",
                          }}
                        >
                          {c.brand}
                        </span>
                        <span style={{ flex: "1 1 140px", display: "flex", flexDirection: "column" }}>
                          <span style={{ fontSize: "14px", fontWeight: "700" }}>{c.title}</span>
                          <span style={{ fontSize: "12px", color: "#545454" }}>{c.note}</span>
                        </span>
                        {c.isDefault ? (
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
                            Default
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={c.makeDefault}
                            style={{
                              height: "32px",
                              padding: "0 14px",
                              borderRadius: "16px",
                              background: "#EEEEEE",
                              color: "#000000",
                              fontSize: "13px",
                              fontWeight: "600",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              boxSizing: "border-box",
                              whiteSpace: "nowrap",
                              border: "none",
                              fontFamily: "var(--font-figtree), sans-serif",
                            }}
                          >
                            Make default
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={c.remove}
                          style={{
                            height: "32px",
                            padding: "0 14px",
                            borderRadius: "16px",
                            background: "#EEEEEE",
                            color: "#000000",
                            fontSize: "13px",
                            fontWeight: "600",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            boxSizing: "border-box",
                            whiteSpace: "nowrap",
                            border: "none",
                            fontFamily: "var(--font-figtree), sans-serif",
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800", marginTop: "8px" }}>
                  Other ways to pay
                </h2>
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
                    <span style={{ color: "#545454" }}>Bank transfer</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>
                      For 4+ visits
                      <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                        Pay by reference number · 1 working day
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
                    <span style={{ color: "#545454" }}>Pay from abroad</span>
                    <span style={{ fontWeight: "700", textAlign: "right" }}>
                      AUD · GBP · USD
                      <span style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#545454" }}>
                        Any international card · we show the LKR amount
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ flex: "1 1 300px", minWidth: "0" }}>
                <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
                  <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Add a card</h2>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                      <span style={{ fontSize: "13px", fontWeight: "600" }}>Name on card</span>
                      <input
                        placeholder="Name as on the card"
                        autoComplete="cc-name"
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
                      <span style={{ fontSize: "13px", fontWeight: "600" }}>Card number</span>
                      <input
                        placeholder="•••• •••• •••• ••••"
                        inputMode="numeric"
                        autoComplete="cc-number"
                        {...v.number}
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
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                        <span style={{ fontSize: "13px", fontWeight: "600" }}>Expiry</span>
                        <input
                          placeholder="MM / YY"
                          inputMode="numeric"
                          autoComplete="cc-exp"
                          {...v.expiry}
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
                        <span style={{ fontSize: "13px", fontWeight: "600" }}>CVC</span>
                        <input
                          placeholder="•••"
                          inputMode="numeric"
                          autoComplete="cc-csc"
                          {...v.cvc}
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
                    <div style={{ border: "1px solid #E2E2E2", borderRadius: "12px" }}>
                      <button
                        aria-pressed={v.def.pressed}
                        onClick={v.def.flip}
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
                          <span style={{ fontSize: "14px", fontWeight: "700" }}>Make this my default</span>
                        </span>
                        <span
                          style={{
                            width: "40px",
                            height: "24px",
                            borderRadius: "12px",
                            background: v.def.track,
                            padding: "3px",
                            boxSizing: "border-box",
                            display: "flex",
                            justifyContent: v.def.align,
                            flexShrink: "0",
                          }}
                        >
                          <span
                            style={{ width: "18px", height: "18px", borderRadius: "9px", background: "#FFFFFF" }}
                          ></span>
                        </span>
                      </button>
                    </div>
                    <Link
                      href="/payment-methods"
                      onClick={v.add}
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
                      Add card
                    </Link>
                    <span
                      style={{ display: "flex", gap: "6px", alignItems: "center", fontSize: "12px", color: "#545454" }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="5" y="11" width="14" height="9" rx="2"></rect>
                        <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                      </svg>
                      Card details go straight to our payment partner.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
