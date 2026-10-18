import type { Metadata } from "next";
import RescheduleConfirmedScreen from "@/screens/RescheduleConfirmed";

export const metadata: Metadata = { title: "Rescheduled" };

export default function Page() {
  return <RescheduleConfirmedScreen />;
}
