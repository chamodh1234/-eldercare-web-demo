import type { Metadata } from "next";
import SavedCaregiversScreen from "@/screens/SavedCaregivers";

export const metadata: Metadata = { title: "Saved caregivers" };

export default function Page() {
  return <SavedCaregiversScreen />;
}
