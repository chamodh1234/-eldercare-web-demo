import type { Metadata } from "next";
import ProfileScreen from "@/screens/Profile";

export const metadata: Metadata = { title: "Nirmala Perera · Caregiver" };

export default function Page() {
  return <ProfileScreen />;
}
