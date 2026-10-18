import type { Metadata } from "next";
import VisitsScreen from "@/screens/Visits";

export const metadata: Metadata = { title: "Visits" };

export default function Page() {
  return <VisitsScreen />;
}
