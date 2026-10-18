import type { Metadata } from "next";
import CaregiverCancelledScreen from "@/screens/CaregiverCancelled";

export const metadata: Metadata = { title: "Caregiver cancelled" };

export default function Page() {
  return <CaregiverCancelledScreen />;
}
