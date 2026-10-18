import type { Metadata } from "next";
import ReportStatusScreen from "@/screens/ReportStatus";

export const metadata: Metadata = { title: "Report status" };

export default function Page() {
  return <ReportStatusScreen />;
}
