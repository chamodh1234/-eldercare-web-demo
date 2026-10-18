import type { Metadata } from "next";
import SecurityScreen from "@/screens/Security";

export const metadata: Metadata = { title: "Security & privacy" };

export default function Page() {
  return <SecurityScreen />;
}
