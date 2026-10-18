import type { Metadata } from "next";
import TipSentScreen from "@/screens/TipSent";

export const metadata: Metadata = { title: "Tip sent" };

export default function Page() {
  return <TipSentScreen />;
}
