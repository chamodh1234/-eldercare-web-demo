"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { AccountNav } from "@/components/AccountNav";
import { useRef, useState } from "react";
import { toast } from "@/components/Toaster";
import { readAvatar } from "@/lib/image";
import { mutate, useDemo } from "@/lib/store";

type Form = { name: string; email: string; area: string; timezone: string };

export default function AccountScreen() {
  const demo = useDemo();
  const { account } = demo;
  const saved: Form = {
    name: `${account.first} ${account.last}`,
    email: account.email,
    area: account.area,
    timezone: account.timezone,
  };
  // Unsaved edits; null means the form shows what's saved.
  const [draft, setDraft] = useState<Form | null>(null);
  const form = draft ?? saved;
  const field = (k: keyof Form) => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setDraft({ ...form, [k]: e.target.value }),
  });
  const photo = useRef<HTMLInputElement>(null);
  const visits = demo.visits.filter((v) => v.status !== "cancelled").length;
  const save = (e: React.MouseEvent) => {
    e.preventDefault();
    const [first, ...rest] = form.name.trim().split(/\s+/);
    if (!first) return toast("Please enter your name");
    mutate((d) => {
      Object.assign(d.account, {
        first,
        last: rest.join(" "),
        email: form.email,
        area: form.area,
        timezone: form.timezone,
      });
    });
    setDraft(null);
    toast("Profile saved");
  };
  const pickPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    try {
      const url = await readAvatar(file);
      mutate((d) => {
        d.account.photo = url;
      });
      toast("Photo updated");
    } catch {
      toast("That file isn't an image");
    }
  };
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
          <AccountNav active="/account" />
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
                Profile
              </h1>
              <span style={{ fontSize: "15px", color: "#545454" }}>How families, caregivers and our team see you</span>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px", padding: "18px" }}>
                <img
                  src={account.photo ?? "/images/dilani.png"}
                  alt=""
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block",
                    flexShrink: "0",
                  }}
                />
                <span style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "800" }}>{`${account.first} ${account.last}`}</span>
                  <span
                    style={{ fontSize: "13px", color: "#545454" }}
                  >{`Member since Aug 2026 · ${visits} visits booked`}</span>
                </span>
                <Link
                  href="/account"
                  onClick={(e) => {
                    e.preventDefault();
                    photo.current?.click();
                  }}
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
                  Change photo
                </Link>
                <input ref={photo} type="file" accept="image/*" hidden onChange={pickPhoto} />
              </div>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Your details</h2>
                <div
                  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}
                >
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600" }}>Full name</span>
                    <input
                      {...field("name")}
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
                    <span style={{ fontSize: "13px", fontWeight: "600" }}>Mobile</span>
                    <input
                      value={`${account.phone} · verified`}
                      readOnly
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
                    <span style={{ fontSize: "13px", fontWeight: "600" }}>Email</span>
                    <input
                      type="email"
                      {...field("email")}
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
                    <span style={{ fontSize: "13px", fontWeight: "600" }}>Home area</span>
                    <input
                      {...field("area")}
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
                <div
                  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}
                >
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600" }}>Language</span>
                    <input
                      value={account.language}
                      readOnly
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
                    <span style={{ fontSize: "13px", fontWeight: "600" }}>Time zone</span>
                    <input
                      {...field("timezone")}
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
                <div style={{ display: "flex", gap: "10px" }}>
                  <Link
                    href="/account"
                    onClick={save}
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
                    Save changes
                  </Link>
                  <Link
                    href="/account"
                    onClick={(e) => {
                      e.preventDefault();
                      setDraft(null);
                    }}
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
                </div>
              </div>
            </div>
            <div style={{ border: "1px solid #E2E2E2", borderRadius: "16px", overflow: "hidden" }}>
              <div style={{ padding: "18px", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                <span style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "800" }}>Delete account</span>
                  <span style={{ fontSize: "13px", color: "#545454" }}>
                    {"You can't delete while a booking is active or payment is held."}
                  </span>
                </span>
                <Link
                  href="/delete-account"
                  style={{
                    height: "40px",
                    padding: "0 18px",
                    borderRadius: "20px",
                    background: "#FFEFED",
                    color: "#C11500",
                    fontSize: "14px",
                    fontWeight: "700",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxSizing: "border-box",
                    whiteSpace: "nowrap",
                  }}
                >
                  Delete account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
