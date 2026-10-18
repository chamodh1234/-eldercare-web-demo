import type { Metadata } from "next";
import IncidentDetailScreen from "@/screens/IncidentDetail";

export const metadata: Metadata = { title: "Incident record" };

export default function Page() {
  return <IncidentDetailScreen />;
}
