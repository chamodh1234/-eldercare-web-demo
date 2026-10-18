// Mock caregiver catalog. Content comes from the design's screens.

export type Review = { by: string; when: string; text: string; tag: string; stars: number };

export type Caregiver = {
  id: string;
  name: string;
  first: string;
  short: string;
  avatar: string;
  rating: number;
  reviews: number;
  visits: number;
  years: number;
  languages: string[];
  km: number;
  rate: number;
  blurb: string;
  about: string;
  skills: string[];
  helps: string[];
  verified: boolean;
  visitsWithAmma: number;
  onTime: string;
  rebook: string;
  free: string;
  slots: [string, string][];
  reviewList: Review[];
};

export const caregivers: Caregiver[] = [
  {
    id: "nirmala",
    name: "Nirmala Perera",
    first: "Nirmala",
    short: "Nirmala P.",
    avatar: "/images/nirmala.png",
    rating: 4.9,
    reviews: 86,
    visits: 142,
    years: 8,
    languages: ["Sinhala", "English"],
    km: 1.4,
    rate: 1200,
    blurb: "Patient and calm. Dementia and mobility support.",
    about:
      "Patient and calm. Eight years caring for elders, including people living with dementia. I help with walks, meals, medicine reminders and gentle company. I love gardening and cooking.",
    skills: ["Companionship", "Memory care", "Mobility support", "Meal prep"],
    helps: ["Companionship", "Personal care", "Memory care"],
    verified: true,
    visitsWithAmma: 18,
    onTime: "98%",
    rebook: "68%",
    free: "Free Sat 9:00",
    slots: [
      ["Sat 17", "9:00 AM"],
      ["Mon 19", "9:00 AM"],
      ["Tue 20", "2:00 PM"],
      ["Sat 24", "9:00 AM"],
    ],
    reviewList: [
      {
        by: "Ruwani S.",
        when: "2 weeks ago",
        text: "Patient with my father who has dementia. Always on time and sends lovely notes after every visit.",
        tag: "Memory care",
        stars: 5,
      },
      {
        by: "Dilani F.",
        when: "3 Oct",
        text: "Very patient with Amma and kept us updated all morning. Ruwan in Melbourne loved the photos.",
        tag: "Companionship",
        stars: 5,
      },
      {
        by: "Rohini P.",
        when: "Sep",
        text: "Kind and careful. Cooked exactly how Thaththa likes it and left the kitchen spotless.",
        tag: "Meals",
        stars: 5,
      },
      {
        by: "Kumari J.",
        when: "Aug",
        text: "Helped my mother walk again after her fall. Gentle but firm with the exercises.",
        tag: "Mobility",
        stars: 5,
      },
      {
        by: "Sunil W.",
        when: "Aug",
        text: "Came early on a rainy day and stayed calm when Appa got confused. We felt safe leaving them together.",
        tag: "Memory care",
        stars: 5,
      },
      {
        by: "Anoma D.",
        when: "Jul",
        text: "Made rice and curry just the way my aunt likes it and wrote down everything she ate.",
        tag: "Meals",
        stars: 4,
      },
      {
        by: "Lakshmi R.",
        when: "Jul",
        text: "Sent us a photo from the garden walk. Small thing, but it meant a lot from abroad.",
        tag: "Companionship",
        stars: 5,
      },
      {
        by: "Mahesh K.",
        when: "Jun",
        text: "Helped Amma with her exercises after the hip operation. Never rushed her.",
        tag: "Mobility",
        stars: 5,
      },
    ],
  },
  {
    id: "mala",
    name: "Mala Wickrama",
    first: "Mala",
    short: "Mala W.",
    avatar: "/images/mala.png",
    rating: 4.9,
    reviews: 52,
    visits: 96,
    years: 6,
    languages: ["Sinhala", "Tamil"],
    km: 2.4,
    rate: 1200,
    blurb: "Former hospital aide. Good with post-surgery recovery.",
    about:
      "Six years as a hospital aide before home care. I help with recovery after surgery, gentle exercises, bathing and meals, and I keep families updated through the day.",
    skills: ["Personal care", "Post-surgery", "Mobility support", "Companionship"],
    helps: ["Companionship", "Personal care", "Overnight"],
    verified: true,
    visitsWithAmma: 0,
    onTime: "97%",
    rebook: "61%",
    free: "Free Mon & Tue",
    slots: [
      ["Mon 19", "9:00 AM"],
      ["Tue 20", "2:00 PM"],
      ["Wed 21", "9:00 AM"],
      ["Thu 22", "9:00 AM"],
    ],
    reviewList: [
      {
        by: "Nadeesha P.",
        when: "1 week ago",
        text: "Looked after my mother after her knee surgery. Calm, clean and very organised with the medicines.",
        tag: "Personal care",
        stars: 5,
      },
      {
        by: "Ashan K.",
        when: "Sep",
        text: "Stayed overnight twice when we travelled. Thaththa liked her stories.",
        tag: "Companionship",
        stars: 5,
      },
      {
        by: "Priyanthi M.",
        when: "Aug",
        text: "Knew exactly how to help with the exercises the physio gave us.",
        tag: "Mobility",
        stars: 5,
      },
    ],
  },
  {
    id: "shanthi",
    name: "Shanthi Rajapaksha",
    first: "Shanthi",
    short: "Shanthi R.",
    avatar: "/images/shanthi.png",
    rating: 4.8,
    reviews: 31,
    visits: 58,
    years: 5,
    languages: ["Sinhala"],
    km: 3.1,
    rate: 1000,
    blurb: "Cooks traditional meals. Calm with early memory loss.",
    about:
      "I cook traditional meals and keep a calm, simple routine for people with early memory loss. Five years with families in Colombo and Dehiwala.",
    skills: ["Companionship", "Memory care", "Meal prep", "Errands"],
    helps: ["Companionship", "Memory care", "Errands"],
    verified: true,
    visitsWithAmma: 3,
    onTime: "95%",
    rebook: "58%",
    free: "Busy this week",
    slots: [
      ["Sat 17", "9:00 AM"],
      ["Sun 18", "10:00 AM"],
      ["Wed 21", "2:00 PM"],
      ["Sat 24", "2:00 PM"],
    ],
    reviewList: [
      {
        by: "Dilani F.",
        when: "Sep",
        text: "Amma loved her kiribath. Quiet and kind, exactly what we needed.",
        tag: "Meals",
        stars: 5,
      },
      {
        by: "Roshan T.",
        when: "Aug",
        text: "Patient with my grandmother's questions, even when she asked the same thing ten times.",
        tag: "Memory care",
        stars: 5,
      },
    ],
  },
  {
    id: "priya",
    name: "Priya Senanayake",
    first: "Priya",
    short: "Priya S.",
    avatar: "/images/priya.png",
    rating: 4.6,
    reviews: 12,
    visits: 21,
    years: 3,
    languages: ["English", "Tamil"],
    km: 3.8,
    rate: 950,
    blurb: "Companion and errands. Drives to clinic visits.",
    about:
      "I help with shopping, pharmacy runs and clinic visits, and I'm happy to just sit and talk. I have my own car for appointments.",
    skills: ["Companionship", "Errands", "Clinic visits"],
    helps: ["Companionship", "Errands"],
    verified: true,
    visitsWithAmma: 1,
    onTime: "96%",
    rebook: "44%",
    free: "Free tomorrow",
    slots: [
      ["Fri 16", "9:00 AM"],
      ["Sat 17", "2:00 PM"],
      ["Mon 19", "10:00 AM"],
      ["Tue 20", "9:00 AM"],
    ],
    reviewList: [
      {
        by: "Kamal D.",
        when: "Sep",
        text: "Took my father to his clinic and waited with him the whole time. Very reliable.",
        tag: "Errands",
        stars: 5,
      },
      {
        by: "Dilani F.",
        when: "Sep",
        text: "Friendly and on time. Amma enjoyed the chat.",
        tag: "Companionship",
        stars: 4,
      },
    ],
  },
  {
    id: "rohini",
    name: "Rohini Fernando",
    first: "Rohini",
    short: "Rohini F.",
    avatar: "/images/rohini.png",
    rating: 4.9,
    reviews: 52,
    visits: 74,
    years: 6,
    languages: ["Sinhala", "Tamil"],
    km: 2.4,
    rate: 1150,
    blurb: "Morning companion. Experienced with knee recovery.",
    about: "Morning companion with experience helping elders recover after knee surgery.",
    skills: ["Companionship", "Mobility support"],
    helps: ["Companionship"],
    verified: true,
    visitsWithAmma: 0,
    onTime: "96%",
    rebook: "52%",
    free: "Free mornings",
    slots: [
      ["Mon 19", "9:00 AM"],
      ["Tue 20", "9:00 AM"],
    ],
    reviewList: [],
  },
];

export const caregiver = (id: string): Caregiver => caregivers.find((c) => c.id === id) ?? caregivers[0];

/** Caregivers shown in search (Rohini only appears through chat requests). */
export const searchable = caregivers.filter((c) => c.id !== "rohini");

const reviewerPhotos: Record<string, string> = {
  "Ruwani S.": "/images/ruwani.png",
  "Rohini P.": "/images/rohini.png",
  "Dilani F.": "/images/dilani.png",
  "Kumari J.": "/images/amma.png",
  "Sunil W.": "/images/sunil.png",
};
export const reviewerPhoto = (name: string) => reviewerPhotos[name] ?? "/images/amma.png";

const LANG_ABBR: Record<string, string> = { Sinhala: "Si", English: "En", Tamil: "Ta" };
export const langAbbr = (langs: string[]) => langs.map((l) => LANG_ABBR[l] ?? l).join(" · ");
