// Derived views of the demo store used by several screens.

import { dayLabel, durationLabel, endTime, fee, lkr, plusMinutes, TODAY } from "./format";
import { caregiver } from "./mock/caregivers";
import type { DemoState, Visit } from "./mock/seed";

/** Totals and labels for the visit being booked. */
export function draftSummary(s: DemoState) {
  const d = s.draft;
  const cg = caregiver(d.caregiverId);
  const visits = d.weekly ? Math.max(1, d.weekdays.length) : 1;
  const sub = d.hours * cg.rate * visits;
  const total = sub + fee(sub) - (s.promo?.amount ?? 0);
  return {
    cg,
    when: (d.weekly ? "Weekly from " : "") + dayLabel(d.date),
    time: `${d.start} – ${endTime(d.start, d.hours)}`,
    total: lkr(total),
  };
}

export const visitById = (s: DemoState, id: string): Visit =>
  s.visits.find((v) => v.id === id) ?? s.visits.find((v) => v.status !== "cancelled") ?? s.visits[0];

/** The visit a screen is about: the selected one. */
export const selectedVisit = (s: DemoState) => visitById(s, s.selectedVisit);

/** The visit happening now, if any. */
export const liveVisit = (s: DemoState) => s.visits.find((v) => v.status === "live");

/** Display fields for a visit. */
export function visitView(v: Visit) {
  const cg = caregiver(v.caregiverId);
  return {
    v,
    cg,
    day: dayLabel(v.date),
    time: `${v.start} – ${v.end}`,
    amount: lkr(v.amount),
    sub: lkr(v.hours * v.rate),
    fee: lkr(v.amount - v.hours * v.rate),
    hoursLine: `${v.hours} hrs × ${lkr(v.rate)}`,
    tasks: v.note.trim() ? "Routine + 1 extra" : "Routine",
  };
}

/** Other saved caregivers to fall back on, e.g. "Shanthi, then Mala". */
export function backups(s: DemoState, exceptId: string) {
  const ids = [...s.saved, "shanthi", "mala"].filter((id, i, a) => id !== exceptId && a.indexOf(id) === i);
  return ids.slice(0, 2).map((id) => caregiver(id).first);
}

/** Tasks for today's live visit: today's one-offs, the booking's timed tasks and the routine. */
export function liveTasks(s: DemoState) {
  const today = s.tasks.filter((t) => t.kind === "day" && t.date === TODAY);
  const booking = s.tasks.filter((t) => t.kind === "booking" && t.time !== "Any");
  const routine = s.tasks.filter((t) => t.kind === "routine");
  const all = [...today, ...booking, ...routine];
  const done = all.filter((t) => s.doneToday.includes(t.id)).length;
  return { today, booking, routine, all, done, label: `${done} of ${all.length} tasks done` };
}

export const UPCOMING = ["live", "requested", "confirmed", "covering"];
export const PAST = ["toApprove", "paid"];

export const statusTag: Record<string, [string, string, string]> = {
  live: ["Live now", "#E6F4EC", "#05663A"],
  requested: ["Waiting", "#EAF0FD", "#1A4FB5"],
  confirmed: ["Confirmed", "#E6F4EC", "#05663A"],
  covering: ["Covering Nirmala", "#EAF0FD", "#1A4FB5"],
  toApprove: ["To approve", "#EAF0FD", "#1A4FB5"],
  paid: ["Paid", "#EEEEEE", "#333333"],
  cancelled: ["Refunded", "#EEEEEE", "#333333"],
};

/** The live visit's extra-time request, with times and costs worked out. */
export function extensionView(s: DemoState, fallbackMins = 60) {
  const visit = liveVisit(s) ?? visitById(s, "v-1015");
  const ext = s.extension;
  const mins = Math.round((ext?.hours ?? fallbackMins / 60) * 60);
  const baseEnd = ext?.baseEnd ?? visit.end;
  const base = Math.round((visit.rate * mins) / 60);
  const extra = base + fee(base);
  const approved = ext?.status === "approved";
  return {
    visit,
    mins,
    baseEnd,
    until: plusMinutes(baseEnd, mins),
    dur: durationLabel(mins),
    extra: lkr(extra),
    was: lkr(approved ? visit.amount - extra : visit.amount),
    now: lkr(approved ? visit.amount : visit.amount + extra),
    hours: approved ? visit.hours : visit.hours + mins / 60,
  };
}

/** The finished visit a report or tip screen is about. */
export const reportVisit = (s: DemoState) => {
  const sel = visitById(s, s.selectedVisit);
  return PAST.includes(sel.status) ? sel : visitById(s, "v-1010");
};
