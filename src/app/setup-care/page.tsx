import type { Metadata } from "next";
import SetupCareScreen from "@/screens/SetupCare";

export const metadata: Metadata = { title: "Who needs care" };

export default function Page() {
  return <SetupCareScreen />;
}
