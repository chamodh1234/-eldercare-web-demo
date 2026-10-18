import type { Metadata } from "next";
import ReportDetailsScreen from "@/screens/ReportDetails";

export const metadata: Metadata = { title: "Report details" };

export default function Page() {
  return <ReportDetailsScreen />;
}
