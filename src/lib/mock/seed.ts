// Initial demo data. Values match what the design shows on each screen.
/* eslint-disable @typescript-eslint/no-explicit-any */

export type VisitStatus = "requested" | "confirmed" | "covering" | "live" | "toApprove" | "paid" | "cancelled";

export type Visit = {
  id: string;
  ref: string;
  caregiverId: string;
  date: string;
  start: string;
  end: string;
  hours: number;
  help: string;
  rate: number;
  amount: number;
  /** Total held at checkout (after promo, all weekly visits). */
  held?: number;
  status: VisitStatus;
  weekly: boolean;
  note: string;
  card: string;
  requestedAt: string;
  rating?: number;
  tip?: number;
  cancelReason?: string;
};

export type TaskKind = "day" | "booking" | "routine";
export type Task = {
  id: string;
  kind: TaskKind;
  title: string;
  note: string;
  time: string;
  date?: string;
  from?: string;
  /** Short name for summaries, e.g. "walk 9:00 · tea 9:30". */
  short?: string;
  seen?: string;
  done?: boolean;
};

export type Notice = {
  id: string;
  cat: "visits" | "payments" | "safety";
  icon: "alert" | "calendar" | "phone" | "check" | "doc" | "card" | "people" | "shield";
  title: string;
  body: string;
  time: string;
  group: "today" | "week";
  href: string;
  unread: boolean;
};

export type Message = { id: string; from: "me" | "them" | "note"; text: string; time: string; photo?: string };
export type Thread = {
  id: string;
  name: string;
  avatar: string | null;
  caregiverId?: string;
  time: string;
  unread: number;
  messages: Message[];
};

export type Card = { id: string; brand: "VISA" | "MC"; last4: string; expiry: string; bank: string; name: string };

export type Payment = {
  id: string;
  date: string;
  what: string;
  who: string;
  method: string;
  amount: number;
  status: "Paid" | "Held" | "Refunded";
};

export type Member = {
  id: string;
  name: string;
  avatar: string | null;
  role: string;
  place: string;
  status: "owner" | "active" | "invited";
  perms: { see: boolean; msg: boolean; tasks: boolean; pay: boolean };
};

export type Doc = { id: string; kind: string; abbr: string; title: string; sub: string; caregivers: boolean };

export type Job = {
  id: string;
  title: string;
  help: string;
  rate: string;
  schedule: string;
  status: "Live" | "Draft" | "Filled" | "Closed";
  applicants: string;
};

export type Person = { id: string; call: string; name: string; age: number; note: string; avatar: string };

export type Report = { id: string; ref: string; reason: string; caregiverId: string; sent: string; status: string };

const day = (date: string, title: string, note: string, time: string, extra: Partial<Task> = {}): Task => ({
  id: `t-${date}-${time}`,
  kind: "day",
  date,
  title,
  note,
  time,
  ...extra,
});

export const seed = {
  version: 1,
  session: { loggedIn: true },
  account: {
    first: "Dilani",
    last: "Fernando",
    phone: "+94 77 512 4120",
    email: "dilani.f@example.com",
    area: "Colombo 05",
    language: "English",
    timezone: "Colombo (GMT+5:30)",
    photo: null as string | null,
  },
  people: [
    { id: "amma", call: "Amma", name: "Kamala Fernando", age: 78, note: "Next visit Sat 9:00 · Nirmala", avatar: "/images/amma.png" },
  ] as Person[],
  activePerson: "amma",

  saved: ["nirmala", "shanthi"],
  blocked: [{ id: "rohini", when: "2 Oct", from: "from chat requests" }],
  selectedCaregiver: "nirmala",
  selectedVisit: "v-1015",

  /** The visit being booked, filled in on Book and paid on Checkout. */
  draft: {
    caregiverId: "nirmala",
    help: "Companionship",
    date: "2026-10-17",
    start: "9:00",
    hours: 3,
    weekly: false,
    weekdays: ["M", "W", "F", "Sa"],
    note: "Aunty Rani visits at 10. Please make tea for two.",
  },
  promo: null as null | { code: string; amount: number },
  checkoutCard: "c-visa",

  visits: [
    {
      id: "v-1015",
      ref: "GL-B-58344",
      caregiverId: "nirmala",
      date: "2026-10-15",
      start: "9:00",
      end: "12:00",
      hours: 3,
      help: "Companionship",
      rate: 1200,
      amount: 3960,
      status: "live",
      weekly: true,
      note: "",
      card: "Visa ·· 4417",
      requestedAt: "Mon 12 Oct, 3:40 PM",
    },
    {
      id: "v-1017",
      ref: "GL-B-58344",
      caregiverId: "nirmala",
      date: "2026-10-17",
      start: "9:00",
      end: "12:00",
      hours: 3,
      help: "Companionship",
      rate: 1200,
      amount: 3960,
      status: "confirmed",
      weekly: true,
      note: "Aunty Rani visits at 10. Please make tea for two.",
      card: "Visa ·· 4417",
      requestedAt: "Mon 12 Oct, 3:40 PM",
    },
    {
      id: "v-1020",
      ref: "GL-B-58371",
      caregiverId: "mala",
      date: "2026-10-20",
      start: "2:00 PM",
      end: "4:00 PM",
      hours: 2,
      help: "Companionship",
      rate: 1200,
      amount: 2640,
      status: "covering",
      weekly: false,
      note: "",
      card: "Visa ·· 4417",
      requestedAt: "Wed 14 Oct, 12:14 PM",
    },
    {
      id: "v-1024",
      ref: "GL-B-58344",
      caregiverId: "nirmala",
      date: "2026-10-24",
      start: "9:00",
      end: "12:00",
      hours: 3,
      help: "Companionship",
      rate: 1200,
      amount: 3960,
      status: "confirmed",
      weekly: true,
      note: "",
      card: "Visa ·· 4417",
      requestedAt: "Mon 12 Oct, 3:40 PM",
    },
    {
      id: "v-1010",
      ref: "GL-B-58210",
      caregiverId: "nirmala",
      date: "2026-10-10",
      start: "9:02",
      end: "12:04",
      hours: 3,
      help: "Companionship",
      rate: 1200,
      amount: 3960,
      status: "toApprove",
      weekly: false,
      note: "",
      card: "Visa ·· 4417",
      requestedAt: "Mon 5 Oct, 9:10 AM",
    },
    {
      id: "v-1003",
      ref: "GL-B-58102",
      caregiverId: "nirmala",
      date: "2026-10-03",
      start: "9:00",
      end: "12:01",
      hours: 3,
      help: "Companionship",
      rate: 1200,
      amount: 3960,
      status: "paid",
      weekly: false,
      note: "",
      card: "Visa ·· 4417",
      requestedAt: "Mon 28 Sep, 8:30 AM",
      rating: 5,
    },
    {
      id: "v-0921",
      ref: "GL-B-57870",
      caregiverId: "shanthi",
      date: "2026-09-21",
      start: "2:00 PM",
      end: "4:00 PM",
      hours: 2,
      help: "Companionship",
      rate: 1000,
      amount: 2200,
      status: "paid",
      weekly: false,
      note: "",
      card: "MC ·· 9012",
      requestedAt: "Thu 17 Sep, 6:20 PM",
      rating: 5,
    },
    {
      id: "v-1001",
      ref: "GL-B-58050",
      caregiverId: "mala",
      date: "2026-10-01",
      start: "2:00 PM",
      end: "4:00 PM",
      hours: 2,
      help: "Companionship",
      rate: 1200,
      amount: 2640,
      status: "cancelled",
      weekly: false,
      note: "",
      card: "Visa ·· 4417",
      requestedAt: "Fri 25 Sep, 7:45 PM",
      cancelReason: "Cancelled by you",
    },
  ] as Visit[],

  tasks: [
    { id: "r-walk", short: "walk", kind: "routine", title: "Short walk in the garden", note: "Hold her left arm on the steps", time: "9:00" },
    { id: "r-tea", short: "tea", kind: "routine", title: "Tea and a light snack", note: "No sugar in her tea", time: "9:30" },
    {
      id: "r-med",
      short: "medicine reminder",
      kind: "routine",
      title: "Medicine reminder",
      note: "Blue box on the shelf · remind & log only",
      time: "10:00",
    },
    { id: "r-lunch", short: "lunch", kind: "routine", title: "Help with lunch", note: "Rice and dhal are in the fridge", time: "11:30" },
    { id: "b-knee", kind: "booking", title: "Knee exercises from physio", note: "Until 7 Nov · sheet on the fridge", time: "10:30" },
    { id: "b-bandage", kind: "booking", title: "Check knee bandage is dry", note: "Call Dilani if wet or red", time: "Any" },
    day("2026-10-15", "Let the electrician in", "Today · from Dilani 6:05", "11:00", { seen: "6:12" }),
    day("2026-10-16", "Physio comes · stay with Amma", "Added by Ruwan", "9:30"),
    day("2026-10-17", "Aunty Rani visits · tea for two", "Use the good cups", "10:00"),
  ] as Task[],
  /** Task ids ticked off during today's live visit. */
  doneToday: ["r-walk", "r-med", "b-knee"],

  notices: [
    {
      id: "n1",
      cat: "safety",
      icon: "alert",
      title: "Incident: Amma had a fall",
      body: "Nirmala reported it · needs a doctor today",
      time: "10:44",
      group: "today",
      href: "/incident-alert",
      unread: true,
    },
    {
      id: "n2",
      cat: "visits",
      icon: "calendar",
      title: "Nirmala asks to stay 1 more hour",
      body: "Approve by 12:00 · LKR 1,320",
      time: "11:38",
      group: "today",
      href: "/extend-request",
      unread: true,
    },
    {
      id: "n3",
      cat: "visits",
      icon: "alert",
      title: "Nirmala can't make Sat 17 Oct",
      body: "Pick a stand-in or get a full refund",
      time: "10:15",
      group: "today",
      href: "/caregiver-cancelled",
      unread: true,
    },
    {
      id: "n4",
      cat: "visits",
      icon: "calendar",
      title: "Nirmala checked in with Amma",
      body: "Visit code 4821 confirmed · 9:02",
      time: "9:02",
      group: "today",
      href: "/live-visit",
      unread: true,
    },
    {
      id: "n5",
      cat: "visits",
      icon: "phone",
      title: "Missed call from Nirmala",
      body: "In-app call · tap to see it again",
      time: "10:40",
      group: "today",
      href: "/incoming-call",
      unread: true,
    },
    {
      id: "n6",
      cat: "visits",
      icon: "phone",
      title: "Nirmala is on the way",
      body: "Arriving about 8:58 · code 4821",
      time: "8:41",
      group: "today",
      href: "/on-the-way",
      unread: false,
    },
    {
      id: "n7",
      cat: "visits",
      icon: "check",
      title: "Nirmala saw your task for today",
      body: '"Let the electrician in" · seen 6:12',
      time: "6:12",
      group: "today",
      href: "/care-plan",
      unread: true,
    },
    {
      id: "n8",
      cat: "safety",
      icon: "shield",
      title: "Safety team replied",
      body: "Report GL-20418 · 1 new message",
      time: "11:20",
      group: "today",
      href: "/report-status",
      unread: false,
    },
    {
      id: "n9",
      cat: "visits",
      icon: "calendar",
      title: "Nirmala suggested a new time",
      body: "Sun 18 · 2:00 PM instead of 10:00",
      time: "Fri",
      group: "week",
      href: "/time-offer",
      unread: false,
    },
    {
      id: "n10",
      cat: "visits",
      icon: "check",
      title: "Nirmala accepted Sat 17 Oct",
      body: "9:00 – 12:00 · LKR 3,960 held",
      time: "Mon",
      group: "week",
      href: "/booking-status",
      unread: false,
    },
    {
      id: "n11",
      cat: "payments",
      icon: "doc",
      title: "Visit report ready to approve",
      body: "Sat 10 Oct · LKR 3,600 to release",
      time: "Sat",
      group: "week",
      href: "/visit-report",
      unread: false,
    },
    {
      id: "n12",
      cat: "payments",
      icon: "card",
      title: "Refund sent",
      body: "LKR 2,640 to Visa ·· 4417",
      time: "Thu",
      group: "week",
      href: "/refund-detail",
      unread: false,
    },
    {
      id: "n13",
      cat: "visits",
      icon: "people",
      title: "Ruwan joined Amma's care circle",
      body: "He can see visits and add tasks",
      time: "Tue",
      group: "week",
      href: "/care-circle",
      unread: false,
    },
  ] as Notice[],

  threads: [
    {
      id: "th-nirmala",
      name: "Nirmala Perera",
      avatar: "/images/nirmala.png",
      caregiverId: "nirmala",
      time: "11:05",
      unread: 0,
      messages: [
        { id: "m1", from: "me", text: "Good morning! The electrician comes at 11, please let him in.", time: "7:10" },
        { id: "m2", from: "them", text: "Noted. I'll stay with Amma while he works.", time: "7:25" },
        { id: "m3", from: "them", text: "Photo · garden walk", time: "9:21", photo: "garden" },
        { id: "m4", from: "me", text: "She looks happy. Thank you!", time: "9:30" },
        {
          id: "m5",
          from: "note",
          text: "A phone number was hidden. Keep chatting here so visits stay insured.",
          time: "10:58",
        },
        { id: "m6", from: "them", text: "Noted. Amma says hello to Ruwan too.", time: "11:05" },
      ],
    },
    {
      id: "th-mala",
      name: "Mala Wickrama",
      avatar: "/images/mala.png",
      caregiverId: "mala",
      time: "Mon",
      unread: 1,
      messages: [
        { id: "m1", from: "me", text: "Hi Mala, could you cover Nirmala's visits next week?", time: "Mon 9:40" },
        { id: "m2", from: "them", text: "Yes, I can cover Tue 20 to Thu 22.", time: "Mon 10:02" },
      ],
    },
    {
      id: "th-shanthi",
      name: "Shanthi Rajapaksha",
      avatar: "/images/shanthi.png",
      caregiverId: "shanthi",
      time: "Sep 22",
      unread: 0,
      messages: [
        { id: "m1", from: "me", text: "Thank you for Monday, Amma loved the kiribath.", time: "Sep 22" },
        { id: "m2", from: "them", text: "Thank you for the review, Dilani!", time: "Sep 22" },
      ],
    },
    {
      id: "th-support",
      name: "Gloocan Support",
      avatar: null,
      time: "Today",
      unread: 0,
      messages: [
        { id: "m1", from: "me", text: "I was charged twice for Saturday", time: "10:38" },
        {
          id: "m2",
          from: "them",
          text: "Hi Dilani, the first one was only a hold. It drops off your card in 3–5 days, so you're charged once. Sorry for the worry!",
          time: "10:44",
        },
      ],
    },
  ] as Thread[],
  selectedThread: "th-nirmala",
  /** Chat requests from caregivers who aren't booked yet. */
  requests: { rohini: "new", priya: "new" } as Record<string, "new" | "accepted" | "declined">,
  supportChat: [] as Message[],
  liveChat: [] as Message[],
  safetyChat: [] as Message[],

  cards: [
    { id: "c-visa", brand: "VISA", last4: "4417", expiry: "08/28", bank: "Commercial Bank", name: "Dilani Fernando" },
    { id: "c-mc", brand: "MC", last4: "9012", expiry: "01/27", bank: "Sampath Bank", name: "Dilani Fernando" },
  ] as Card[],
  defaultCard: "c-visa",

  payments: [
    {
      id: "p-week",
      date: "15 Oct",
      what: "Weekly care · week 12–17 Oct",
      who: "Nirmala P.",
      method: "Visa ·· 4417",
      amount: 23760,
      status: "Held",
    },
    {
      id: "p-1010",
      date: "10 Oct",
      what: "Visit · Sat 10 Oct",
      who: "Nirmala P.",
      method: "Visa ·· 4417",
      amount: 3960,
      status: "Held",
    },
    {
      id: "p-1003",
      date: "3 Oct",
      what: "Visit · Sat 3 Oct",
      who: "Nirmala P.",
      method: "Visa ·· 4417",
      amount: 3960,
      status: "Paid",
    },
    {
      id: "p-1001",
      date: "1 Oct",
      what: "Visit · Thu 1 Oct (cancelled)",
      who: "Mala W.",
      method: "Visa ·· 4417",
      amount: -2640,
      status: "Refunded",
    },
    {
      id: "p-0921",
      date: "21 Sep",
      what: "Visit · Mon 21 Sep",
      who: "Shanthi R.",
      method: "MC ·· 9012",
      amount: 2200,
      status: "Paid",
    },
  ] as Payment[],
  selectedPayment: "p-1003",

  circle: [
    {
      id: "me",
      name: "Dilani (you)",
      avatar: "/images/dilani.png",
      role: "Daughter",
      place: "Colombo",
      status: "owner",
      perms: { see: true, msg: true, tasks: true, pay: true },
    },
    {
      id: "ruwan",
      name: "Ruwan Fernando",
      avatar: "/images/ruwan.png",
      role: "Son",
      place: "Melbourne",
      status: "active",
      perms: { see: true, msg: true, tasks: true, pay: false },
    },
    {
      id: "priyaf",
      name: "Priya F.",
      avatar: "/images/priya.png",
      role: "Granddaughter",
      place: "invited 2 days ago",
      status: "invited",
      perms: { see: true, msg: false, tasks: false, pay: false },
    },
  ] as Member[],
  activity: [
    { who: "Ruwan", what: 'added a task for Fri 16: "Physio comes 9:30"', when: "Tue", avatar: "/images/ruwan.png" },
    { who: "Ruwan", what: "viewed the visit report for Sat 10 Oct", when: "Sun", avatar: "/images/ruwan.png" },
    { who: "You", what: "invited Priya F.", when: "Thu", avatar: "/images/dilani.png" },
  ],

  docs: [
    {
      id: "d1",
      kind: "Prescription",
      abbr: "Rx",
      title: "Prescription · Dr. Gunasekara",
      sub: "12 Oct · valid till 12 Jan",
      caregivers: true,
    },
    {
      id: "d2",
      kind: "Doctor's note",
      abbr: "Note",
      title: "Knee surgery discharge note",
      sub: "Nawaloka Hospital · 28 Sep",
      caregivers: true,
    },
    { id: "d3", kind: "Lab report", abbr: "Lab", title: "Blood report", sub: "5 Oct · sugar & cholesterol", caregivers: false },
    { id: "d4", kind: "Other", abbr: "Plan", title: "Physio exercise sheet", sub: "2 Oct · 6 exercises", caregivers: true },
  ] as Doc[],

  jobs: [
    {
      id: "j1",
      title: "Morning companion for Amma",
      help: "Companionship",
      rate: "LKR 1,200/hr",
      schedule: "Mon–Sat 9–12",
      status: "Live",
      applicants: "4 new",
    },
    {
      id: "j2",
      title: "Clinic visit escort",
      help: "Errands",
      rate: "LKR 1,000/hr",
      schedule: "Tue 20 Oct, 2–4 PM",
      status: "Draft",
      applicants: "—",
    },
    {
      id: "j3",
      title: "Weekend overnight care",
      help: "Overnight",
      rate: "LKR 9,000/night",
      schedule: "Sat–Sun",
      status: "Filled",
      applicants: "Hired Mala",
    },
  ] as Job[],
  /** Applicants marked "Not a fit" on the live job. */
  rejected: [] as string[],

  weekly: {
    status: "active" as "active" | "paused" | "ended",
    skipped: [] as string[],
    paused: [] as string[],
    cover: [] as string[],
    coverBy: "mala",
  },

  reports: [
    {
      id: "r1",
      ref: "GL-20418",
      reason: "Theft or missing items",
      caregiverId: "nirmala",
      sent: "today 10:42",
      status: "Under review",
    },
  ] as Report[],
  dispute: null as null | { visitId: string; reason: string; refund: number; note: string; status: "open" | "resolved" },
  incidentSeen: false,
  extension: null as null | {
    hours: number;
    status: "waiting" | "approved" | "declined";
    baseEnd: string;
    extra?: number;
    coverBy?: string;
  },
  devices: ["this", "samsung", "ipad"],
  /** Per-screen UI state (toggles, choices) kept across pages. */
  ui: {} as Record<string, any>,
};

export type DemoState = typeof seed;
