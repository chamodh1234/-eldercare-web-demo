import type { Metadata } from "next";
import SafetyHelpScreen from "@/screens/SafetyHelp";

export const metadata: Metadata = { title: "Safety and help" };

export default function Page() {
  return <SafetyHelpScreen />;
}
