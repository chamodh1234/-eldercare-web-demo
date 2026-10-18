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

const KINDS = ["Companionship", "Personal care", "Memory care", "Overnight / live-in"];
const LENGTHS = ["2 weeks", "4 weeks", "Ongoing"];
const RATES = [1000, 1200, 1400];
const WEEK = ["M", "T", "W", "Th", "F", "Sa", "Su"];
const WEEK_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/** "Mon–Sat" for consecutive days, else "Mon, Wed, Fri". */
const dayRange = (days: string[]) => {
  const idx = WEEK.map((w, i) => (days.includes(w) ? i : -1)).filter((i) => i >= 0);
  if (!idx.length) return "No days";
  const consecutive = idx.every((d, i) => i === 0 || d === idx[i - 1] + 1);
  return consecutive && idx.length > 2
    ? `${WEEK_NAMES[idx[0]]}–${WEEK_NAMES[idx[idx.length - 1]]}`
    : idx.map((i) => WEEK_NAMES[i]).join(", ");
};

/** The job being posted, from the Post a job and Schedule steps (design defaults until changed). */
export function jobDraft(s: DemoState) {
  const p = {
    k: 0,
    needs: ["Walking support", "Medicine reminders"],
    langs: ["Sinhala"],
    title: "Morning companion for Amma, 3 hrs, Mon–Sat",
    desc: "Amma is 78 and recovering from a knee injury. We need someone patient for mornings: a short walk, tea, knee exercises and lunch.",
    ...s.ui.postJob,
  };
  const sc = {
    days: ["M", "T", "W", "Th", "F", "Sa"],
    l: 1,
    r: 1,
    start: "Mon 12 Oct",
    from: "9:00 AM",
    to: "12:00 PM",
    ...s.ui.jobSchedule,
  };
  const rate = RATES[sc.r];
  const days = dayRange(sc.days);
  const short = (t: string) => t.replace(/:00/, "").replace(/\s*(AM|PM)/, "");
  return {
    ...p,
    ...sc,
    kind: KINDS[p.k],
    length: LENGTHS[sc.l],
    rate,
    rateLabel: `${lkr(rate)} / hr`,
    weekly: lkr(Math.round(sc.days.length * 3 * rate * 1.1)),
    when: `${days} · ${sc.from.replace(" AM", "")} – ${sc.to.replace(" PM", "").replace("12:00", "12:00")}`,
    schedule: `${days} ${short(sc.from)}–${short(sc.to)}`,
    tags: [KINDS[p.k], ...p.needs, ...p.langs],
  };
}
