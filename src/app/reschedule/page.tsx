import type { Metadata } from "next";
import RescheduleScreen from "@/screens/Reschedule";

export const metadata: Metadata = { title: "Reschedule visit" };

export default function Page() {
  return <RescheduleScreen />;
}
