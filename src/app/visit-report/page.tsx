import type { Metadata } from "next";
import VisitReportScreen from "@/screens/VisitReport";

export const metadata: Metadata = { title: "Visit report" };

export default function Page() {
  return <VisitReportScreen />;
}
