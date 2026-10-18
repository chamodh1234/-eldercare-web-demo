import type { Metadata } from "next";
import MyJobsScreen from "@/screens/MyJobs";

export const metadata: Metadata = { title: "My jobs" };

export default function Page() {
  return <MyJobsScreen />;
}
