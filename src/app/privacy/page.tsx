import type { Metadata } from "next";
import PrivacyScreen from "@/screens/Privacy";

export const metadata: Metadata = { title: "Security & privacy" };

export default function Page() {
  return <PrivacyScreen />;
}
