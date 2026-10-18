import type { Metadata } from "next";
import ApplicantsScreen from "@/screens/Applicants";

export const metadata: Metadata = { title: "Job applicants" };

export default function Page() {
  return <ApplicantsScreen />;
}
