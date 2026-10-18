import type { Metadata } from "next";
import DeleteScheduledScreen from "@/screens/DeleteScheduled";

export const metadata: Metadata = { title: "Delete scheduled" };

export default function Page() {
  return <DeleteScheduledScreen />;
}
