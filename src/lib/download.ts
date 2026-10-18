// Browser downloads for the demo (calendar files, statements, data exports).

export function downloadFile(name: string, content: string, type = "text/plain") {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const to24 = (t: string) => {
  const pm = /PM/.test(t);
  const [h, m] = t
    .replace(/\s*(AM|PM)/, "")
    .split(":")
    .map(Number);
  const hh = pm && h < 12 ? h + 12 : h;
  return `${String(hh).padStart(2, "0")}${String(m || 0).padStart(2, "0")}00`;
};

/** An .ics calendar entry for a visit. */
export function visitIcs(title: string, date: string, start: string, end: string, where: string) {
  const day = date.replace(/-/g, "");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Gloocan//Demo//EN",
    "BEGIN:VEVENT",
    `UID:${day}-${to24(start)}@gloocan.demo`,
    `DTSTART:${day}T${to24(start)}`,
    `DTEND:${day}T${to24(end)}`,
    `SUMMARY:${title}`,
    `LOCATION:${where}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/** Copies text and confirms; falls back to a hidden textarea where the Clipboard API is blocked. */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    el.remove();
    return ok;
  }
}
