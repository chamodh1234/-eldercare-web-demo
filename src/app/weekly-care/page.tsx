import type { Metadata } from "next";
import WeeklyCareScreen from "@/screens/WeeklyCare";

export const metadata: Metadata = { title: "Weekly care" };

export default function Page() {
  return <WeeklyCareScreen />;
}
