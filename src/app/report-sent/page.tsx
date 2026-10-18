import type { Metadata } from "next";
import ReportSentScreen from "@/screens/ReportSent";

export const metadata: Metadata = { title: "Report sent" };

export default function Page() {
  return <ReportSentScreen />;
}
