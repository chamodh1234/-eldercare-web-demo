// Mock help centre articles. "card-charged" is the one the design draws in full.

export type Article = {
  id: string;
  topic: string;
  title: string;
  intro: string;
  sections: { h: string; p: string }[];
};

export const articles: Article[] = [
  {
    id: "card-charged",
    topic: "Payments & refunds",
    title: "When is my card charged?",
    intro: "",
    sections: [],
  },
  {
    id: "refunds",
    topic: "Payments & refunds",
    title: "How refunds work",
    intro: "Refunds go back to the card you paid with. Most banks show them within 3–5 working days.",
    sections: [
      {
        h: "Cancelling a visit",
        p: "More than 24 hours before: full refund. Within 24 hours: half back. After the caregiver arrives: no refund.",
      },
      {
        h: "If a refund is late",
        p: "Give your bank the reference (ARN) on the refund page. It lets them find the money quickly.",
      },
    ],
  },
  {
    id: "problem-visit",
    topic: "Booking & visits",
    title: "Problem with a visit",
    intro:
      "If a visit didn't go as booked, tell us from the visit report before you approve it. The money stays on hold until it's sorted.",
    sections: [
      {
        h: "What happens next",
        p: "The caregiver has 48 hours to reply with an offer. If you can't agree, Gloocan decides.",
      },
      {
        h: "Safety first",
        p: "If anyone was hurt or felt unsafe, make a safety report instead. A person reviews it within 24 hours.",
      },
    ],
  },
  {
    id: "cancel-move",
    topic: "Booking & visits",
    title: "How do I cancel or move a visit?",
    intro: "Open the visit in Visits and choose Reschedule or Cancel. Your tasks move with the visit.",
    sections: [
      {
        h: "Moving a visit",
        p: "Pick a new day and time the caregiver is free. She confirms, and nothing extra is charged.",
      },
      { h: "Cancelling", p: "Free up to 24 hours before. After that you get half back." },
    ],
  },
  {
    id: "payment-methods",
    topic: "Payments & refunds",
    title: "Payment methods",
    intro: "You can save Visa and Mastercard cards, and pay from abroad with any international card.",
    sections: [
      { h: "Your default card", p: "New bookings use your default card. Change it any time in Payment methods." },
      { h: "Bank transfer", p: "For 4 or more visits you can pay by bank transfer with a reference number." },
    ],
  },
  {
    id: "no-show",
    topic: "Safety & trust",
    title: "What if the caregiver doesn't come?",
    intro: "If the caregiver hasn't checked in 15 minutes after the start, we call her and tell you right away.",
    sections: [
      {
        h: "A stand-in",
        p: "We suggest saved caregivers who are free. You can book one in two taps, at the same price or less.",
      },
      { h: "Your money", p: "You're never charged for a visit that didn't happen." },
    ],
  },
  {
    id: "checks",
    topic: "Safety & trust",
    title: "How are caregivers checked?",
    intro: "Every caregiver is checked before their first visit.",
    sections: [
      {
        h: "The checks",
        p: "NIC matched in person, police clearance, a caregiving certificate and reviews from real families.",
      },
      { h: "Ongoing", p: "We re-check police clearance every year and act on every safety report." },
    ],
  },
  {
    id: "abroad",
    topic: "Account & family",
    title: "Can my family abroad follow visits?",
    intro: "Yes. Invite them to the care circle. They sign in with their own phone, wherever they live.",
    sections: [
      { h: "What they see", p: "Check-ins, tasks, notes and photos as they happen, in their own time zone." },
      { h: "Book & pay", p: "Switch on Book & pay for someone and they can book with their own card." },
    ],
  },
];

/** Topic tiles in the help centre open the first article of that topic. */
export const topicArticle: Record<string, string> = {
  "Booking & visits": "cancel-move",
  "Payments & refunds": "card-charged",
  "Safety & trust": "checks",
  "Account & family": "abroad",
  "Care plan & tasks": "cancel-move",
  "For caregivers": "checks",
};

export const article = (id?: string) => articles.find((a) => a.id === id) ?? articles[0];
