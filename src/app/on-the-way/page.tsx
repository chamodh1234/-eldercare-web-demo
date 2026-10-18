import type { Metadata } from "next";
import OnTheWayScreen from "@/screens/OnTheWay";

export const metadata: Metadata = { title: "Caregiver on the way" };

export default function Page() {
  return <OnTheWayScreen />;
}
