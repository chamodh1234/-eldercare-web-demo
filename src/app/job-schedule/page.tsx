import type { Metadata } from "next";
import JobScheduleScreen from "@/screens/JobSchedule";

export const metadata: Metadata = { title: "Job schedule and budget" };

export default function Page() {
  return <JobScheduleScreen />;
}
