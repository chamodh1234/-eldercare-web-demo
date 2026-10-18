import type { Metadata } from "next";
import HireScreen from "@/screens/Hire";

export const metadata: Metadata = { title: "Hire applicant" };

export default function Page() {
  return <HireScreen />;
}
