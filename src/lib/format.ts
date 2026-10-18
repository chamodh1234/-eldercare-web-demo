// Formatting helpers for mock data. The demo's "today" is Thu 15 Oct 2026.

export const TODAY = "2026-10-15";

const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const parse = (iso: string) => new Date(iso + "T00:00:00Z");

/** "Sat 17 Oct" */
export const dayLabel = (iso: string) => {
  const d = parse(iso);
  return `${DOW[d.getUTCDay()]} ${d.getUTCDate()} ${MON[d.getUTCMonth()]}`;
};

/** "17 Oct" */
export const shortDate = (iso: string) => {
  const d = parse(iso);
  return `${d.getUTCDate()} ${MON[d.getUTCMonth()]}`;
};

export const dow = (iso: string) => DOW[parse(iso).getUTCDay()];
export const dayNum = (iso: string) => parse(iso).getUTCDate();

export const addDays = (iso: string, n: number) => {
  const d = parse(iso);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
};

/** "LKR 3,960" */
export const lkr = (n: number) => (n < 0 ? "− " : "") + "LKR " + Math.abs(n).toLocaleString("en-US");

/** Booking & safety fee on top of the caregiver's rate. */
export const fee = (sub: number) => Math.round(sub * 0.1);

/** "9:00" + 3 hours → "12:00"; "2:00 PM" + 2 → "4:00 PM". */
export const endTime = (start: string, hours: number) => {
  const pm = /PM/.test(start);
  const [h, m] = start.replace(/\s*(AM|PM)/, "").split(":").map(Number);
  let end = (pm && h < 12 ? h + 12 : h) + hours;
  if (end > 24) end -= 24;
  const mm = String(m || 0).padStart(2, "0");
  if (pm || end > 12) return `${end > 12 ? end - 12 : end}:${mm} PM`;
  return `${end}:${mm}`;
};

export const nowTime = () => {
  const d = new Date();
  return `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;
};

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
/** "Saturday" */
export const weekday = (iso: string) => DAY_NAMES[parse(iso).getUTCDay()];

/** "12:00" + 60 → "1:00 PM"; "12:00" + 30 → "12:30 PM". Morning times stay without AM, as in the design. */
export const plusMinutes = (t: string, mins: number) => {
  const pm = /PM/.test(t);
  const [h, m] = t.replace(/\s*(AM|PM)/, "").split(":").map(Number);
  const total = (pm && h < 12 ? h + 12 : h) * 60 + (m || 0) + mins;
  const hh = Math.floor(total / 60) % 24;
  const mm = String(total % 60).padStart(2, "0");
  if (hh >= 12) return `${hh > 12 ? hh - 12 : hh}:${mm} PM`;
  return `${hh}:${mm}`;
};

/** "30 min", "1 hour", "2 hours" */
export const durationLabel = (mins: number) =>
  mins < 60 ? `${mins} min` : mins === 60 ? "1 hour" : `${mins / 60} hours`;
