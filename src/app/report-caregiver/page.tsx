import type { Metadata } from "next";
import ReportCaregiverScreen from "@/screens/ReportCaregiver";

export const metadata: Metadata = { title: "Report a caregiver" };

export default function Page() {
  return <ReportCaregiverScreen />;
}
