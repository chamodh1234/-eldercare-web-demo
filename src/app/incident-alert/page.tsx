import type { Metadata } from "next";
import IncidentAlertScreen from "@/screens/IncidentAlert";

export const metadata: Metadata = { title: "Incident alert" };

export default function Page() {
  return <IncidentAlertScreen />;
}
