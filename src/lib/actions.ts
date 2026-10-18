"use client";

import { toast } from "@/components/Toaster";
import { caregivers } from "./mock/caregivers";
import { addDays, dayLabel, durationLabel, endTime, fee, lkr, nowTime, plusMinutes, shortDate, TODAY } from "./format";
import { getState, mutate, newId } from "./store";

/* Store actions shared by several screens. Screen-specific ones live next to the screen's logic. */

export function logOut() {
  mutate((d) => {
    d.session.loggedIn = false;
  });
}

export function logIn() {
  mutate((d) => {
    d.session.loggedIn = true;
  });
}

export function toggleSaved(caregiverId: string) {
  let saved = false;
  mutate((d) => {
    saved = !d.saved.includes(caregiverId);
    d.saved = saved ? [...d.saved, caregiverId] : d.saved.filter((x) => x !== caregiverId);
  });
  toast(saved ? "Saved to your caregivers" : "Removed from saved");
}

export function selectCaregiver(caregiverId: string) {
  mutate((d) => {
    d.selectedCaregiver = caregiverId;
    d.draft.caregiverId = caregiverId;
  });
}

export function selectVisit(visitId: string) {
  mutate((d) => {
    d.selectedVisit = visitId;
  });
}

export function markNoticeRead(id: string) {
  mutate((d) => {
    const n = d.notices.find((x) => x.id === id);
    if (n) n.unread = false;
  });
}

/** Selects (or starts) the chat thread with a caregiver. */
export function openChat(caregiverId: string) {
  mutate((d) => {
    let t = d.threads.find((x) => x.caregiverId === caregiverId);
    if (!t) {
      const c = caregivers.find((x) => x.id === caregiverId);
      if (!c) return;
      t = { id: `th-${c.id}`, name: c.name, avatar: c.avatar, caregiverId: c.id, time: "Now", unread: 0, messages: [] };
      d.threads.unshift(t);
    }
    t.unread = 0;
    d.selectedThread = t.id;
  });
}

/** "Sat 17" + "9:00 AM" from a caregiver's free slots → draft date and start time. */
export function slotToDraft(day: string, time: string) {
  const num = Number(day.split(" ")[1]);
  const date = `2026-10-${String(num).padStart(2, "0")}`;
  const start = time.replace(" AM", "");
  mutate((d) => {
    d.draft.date = date;
    d.draft.start = start;
  });
}

/** Pays the booking draft: creates the visit request, holds the money and notifies. Returns the visit id. */
export function bookDraft(method: string): string {
  const id = newId("v");
  mutate((d) => {
    const dr = d.draft;
    const cg = caregivers.find((c) => c.id === dr.caregiverId) ?? caregivers[0];
    const visits = dr.weekly ? Math.max(1, dr.weekdays.length) : 1;
    const sub = dr.hours * cg.rate;
    const each = sub + fee(sub);
    const total = each * visits - (d.promo?.amount ?? 0);
    d.visits.unshift({
      id,
      ref: `GL-B-${58400 + d.visits.length}`,
      caregiverId: cg.id,
      date: dr.date,
      start: dr.start,
      end: endTime(dr.start, dr.hours),
      hours: dr.hours,
      help: dr.help,
      rate: cg.rate,
      amount: each,
      held: total,
      status: "requested",
      weekly: dr.weekly,
      note: dr.note,
      card: method,
      requestedAt: "Today, " + nowTime(),
    });
    d.payments.unshift({
      id: `p-${id}`,
      date: shortDate(TODAY),
      what: (dr.weekly ? "Weekly care · from " : "Visit · ") + dayLabel(dr.date),
      who: cg.short,
      method,
      amount: total,
      status: "Held",
    });
    d.notices.unshift({
      id: newId("n"),
      cat: "payments",
      icon: "card",
      title: `Request sent to ${cg.first}`,
      body: `${dayLabel(dr.date)} · ${lkr(total)} held on ${method}`,
      time: nowTime(),
      group: "today",
      href: "/booking-status",
      unread: false,
    });
    d.promo = null;
    d.selectedVisit = id;
  });
  return id;
}

export const cardLabel = (c: { brand: string; last4: string }) =>
  `${c.brand === "VISA" ? "Visa" : "Mastercard"} ·· ${c.last4}`;
export const cardShort = (c: { brand: string; last4: string }) =>
  `${c.brand === "VISA" ? "Visa" : "MC"} ·· ${c.last4}`;

/** Moves a visit to a new day and time, and remembers the move for the confirmation screen. */
export function moveVisit(visitId: string, date: string, start: string, message = "") {
  mutate((d) => {
    const v = d.visits.find((x) => x.id === visitId);
    if (!v) return;
    const cg = caregivers.find((c) => c.id === v.caregiverId) ?? caregivers[0];
    d.ui.lastMove = { visitId, from: { date: v.date, start: v.start }, to: { date, start } };
    v.date = date;
    v.start = start;
    v.end = endTime(start, v.hours);
    if (message.trim()) {
      const t = d.threads.find((x) => x.caregiverId === v.caregiverId);
      t?.messages.push({ id: newId("m"), from: "me", text: message.trim(), time: nowTime() });
    }
    d.notices.unshift({
      id: newId("n"),
      cat: "visits",
      icon: "calendar",
      title: `Visit moved to ${dayLabel(date)}`,
      body: `${start} · ${cg.first} is booked`,
      time: nowTime(),
      group: "today",
      href: "/visits",
      unread: false,
    });
  });
}

/** Refund for cancelling a visit: full if more than 24 hours ahead, otherwise half. */
export function cancelRefund(v: { date: string; amount: number; held?: number }) {
  const paid = v.held ?? v.amount;
  const late = v.date <= addDays(TODAY, 1);
  return { paid, fee: late ? Math.round(paid / 2) : 0, refund: late ? paid - Math.round(paid / 2) : paid, late };
}

export function cancelVisit(visitId: string, reason: string) {
  mutate((d) => {
    const v = d.visits.find((x) => x.id === visitId);
    if (!v) return;
    const cg = caregivers.find((c) => c.id === v.caregiverId) ?? caregivers[0];
    const { refund } = cancelRefund(v);
    v.status = "cancelled";
    v.cancelReason = "Cancelled by you · " + reason.toLowerCase();
    d.payments.unshift({
      id: newId("p"),
      date: shortDate(TODAY),
      what: `Visit · ${dayLabel(v.date)} (cancelled)`,
      who: cg.short,
      method: v.card,
      amount: -refund,
      status: "Refunded",
    });
    d.notices.unshift({
      id: newId("n"),
      cat: "payments",
      icon: "card",
      title: "Refund started",
      body: `${lkr(refund)} to ${v.card}`,
      time: nowTime(),
      group: "today",
      href: "/payments",
      unread: false,
    });
  });
}

/** Appends one of your messages to a thread. */
export function sendMessage(threadId: string, text: string) {
  const body = text.trim();
  if (!body) return;
  mutate((d) => {
    const t = d.threads.find((x) => x.id === threadId);
    if (!t) return;
    t.messages.push({ id: newId("m"), from: "me", text: body, time: nowTime() });
    t.time = nowTime();
    d.threads = [t, ...d.threads.filter((x) => x.id !== threadId)];
  });
}

/** Adds a one-day task (today unless a date is given) and tells the caregiver. */
export function addDayTask(title: string, date = TODAY, time = "Any", note = "") {
  const body = title.trim();
  if (!body) return;
  mutate((d) => {
    d.tasks.push({
      id: newId("t"),
      kind: "day",
      date,
      title: body,
      note: note || (date === TODAY ? `Today · from ${d.account.first} ${nowTime()}` : `From ${d.account.first}`),
      time,
    });
  });
}

/** Cost of extra time on a visit, fee included. */
export const extensionCost = (rate: number, mins: number) => {
  const base = Math.round((rate * mins) / 60);
  return { base, fee: fee(base), total: base + fee(base) };
};

/** You asked the caregiver to stay longer; waits for her reply. */
export function requestExtension(mins: number, coverBy?: string) {
  mutate((d) => {
    const v = d.visits.find((x) => x.status === "live");
    if (!v) return;
    d.extension = { hours: mins / 60, status: "waiting", baseEnd: d.extension?.baseEnd ?? v.end, coverBy };
  });
}

/** The extra time is agreed: the visit ends later and the extra is held. */
export function approveExtension(mins: number) {
  mutate((d) => {
    const v = d.visits.find((x) => x.status === "live");
    if (!v) return;
    const cost = extensionCost(v.rate, mins);
    const baseEnd = d.extension?.baseEnd ?? v.end;
    v.end = plusMinutes(baseEnd, mins);
    v.hours = v.hours + mins / 60;
    v.amount += cost.total;
    d.extension = { hours: mins / 60, status: "approved", baseEnd, extra: cost.total };
    d.payments.unshift({
      id: newId("p"),
      date: shortDate(TODAY),
      what: `Extra time · ${durationLabel(mins)}`,
      who: caregivers.find((c) => c.id === v.caregiverId)?.short ?? "",
      method: v.card,
      amount: cost.total,
      status: "Held",
    });
    d.notices = d.notices.map((n) => (n.href === "/extend-request" ? { ...n, unread: false } : n));
  });
}

export function declineExtension() {
  mutate((d) => {
    if (d.extension) d.extension.status = "declined";
    d.notices = d.notices.map((n) => (n.href === "/extend-request" ? { ...n, unread: false } : n));
  });
}

/** You approved a finished visit: the caregiver is paid and your rating is saved. */
export function approveVisit(visitId: string, rating: number, tags: string[]) {
  mutate((d) => {
    const v = d.visits.find((x) => x.id === visitId);
    if (!v) return;
    v.status = "paid";
    v.rating = rating;
    d.ui.lastReview = { visitId, rating, tags };
    const p = d.payments.find((x) => x.what === `Visit · ${dayLabel(v.date)}` && x.status === "Held");
    if (p) p.status = "Paid";
    d.notices = d.notices.map((n) => (n.href === "/visit-report" ? { ...n, unread: false } : n));
  });
}

export function sendTip(visitId: string, amount: number, note: string) {
  mutate((d) => {
    const v = d.visits.find((x) => x.id === visitId);
    d.ui.lastTip = { visitId, amount, note };
    if (!v || !amount) return;
    v.tip = amount;
    const cg = caregivers.find((c) => c.id === v.caregiverId) ?? caregivers[0];
    d.payments.unshift({
      id: newId("p"),
      date: shortDate(TODAY),
      what: `Tip · ${dayLabel(v.date)}`,
      who: cg.short,
      method: v.card,
      amount,
      status: "Paid",
    });
  });
}

/** Opens a dispute on a finished visit; the money stays on hold. */
export function openDispute(visitId: string, reason: string, refund: number, note: string) {
  mutate((d) => {
    d.dispute = { visitId, reason, refund, note, status: "open" };
    const v = d.visits.find((x) => x.id === visitId);
    const t = v && d.threads.find((x) => x.caregiverId === v.caregiverId);
    t?.messages.push({
      id: newId("m"),
      from: "me",
      text: `Problem with the visit on ${v ? dayLabel(v.date) : ""}: ${reason.toLowerCase()}. ${note}`.trim(),
      time: nowTime(),
    });
  });
}

/** Both sides agreed: the refund goes back and the rest is paid out. */
export function resolveDispute() {
  mutate((d) => {
    if (!d.dispute) return;
    d.dispute.status = "resolved";
    const v = d.visits.find((x) => x.id === d.dispute?.visitId);
    if (!v) return;
    v.status = "paid";
    const cg = caregivers.find((c) => c.id === v.caregiverId) ?? caregivers[0];
    const p = d.payments.find((x) => x.what === `Visit · ${dayLabel(v.date)}`);
    if (p) p.status = "Paid";
    if (d.dispute.refund > 0)
      d.payments.unshift({
        id: newId("p"),
        date: shortDate(TODAY),
        what: `Dispute refund · ${dayLabel(v.date)}`,
        who: cg.short,
        method: v.card,
        amount: -d.dispute.refund,
        status: "Refunded",
      });
  });
}

/** Gives a visit to a stand-in caregiver; it waits for their reply at their own rate. */
export function reassignVisit(visitId: string, caregiverId: string) {
  mutate((d) => {
    const v = d.visits.find((x) => x.id === visitId);
    const cg = caregivers.find((c) => c.id === caregiverId);
    if (!v || !cg) return;
    const sub = v.hours * cg.rate;
    v.caregiverId = cg.id;
    v.rate = cg.rate;
    v.amount = sub + fee(sub);
    v.held = v.amount;
    v.status = "requested";
    v.weekly = false;
    v.requestedAt = "Today, " + nowTime();
    d.selectedVisit = v.id;
    d.notices = d.notices.map((n) => (n.href === "/caregiver-cancelled" ? { ...n, unread: false } : n));
  });
}

/** Prepares a booking draft for a caregiver on a given day (used by "Request" shortcuts). */
export function draftFor(caregiverId: string, date: string, start = "9:00", hours = 3) {
  mutate((d) => {
    d.selectedCaregiver = caregiverId;
    Object.assign(d.draft, { caregiverId, date, start, hours, weekly: false, help: "Companionship" });
  });
}

export function defaultCardLabel() {
  const s = getState();
  const c = s.cards.find((x) => x.id === s.defaultCard) ?? s.cards[0];
  return c ? cardShort(c) : "Card from abroad";
}
