import type { Metadata } from "next";
import BlockedScreen from "@/screens/Blocked";

export const metadata: Metadata = { title: "Security & privacy" };

export default function Page() {
  return <BlockedScreen />;
}
