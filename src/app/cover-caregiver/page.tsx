import type { Metadata } from "next";
import CoverCaregiverScreen from "@/screens/CoverCaregiver";

export const metadata: Metadata = { title: "Cover for caregiver" };

export default function Page() {
  return <CoverCaregiverScreen />;
}
