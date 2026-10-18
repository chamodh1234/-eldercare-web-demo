import type { Metadata } from "next";
import CareEndedScreen from "@/screens/CareEnded";

export const metadata: Metadata = { title: "Weekly care ended" };

export default function Page() {
  return <CareEndedScreen />;
}
