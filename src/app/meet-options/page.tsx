import type { Metadata } from "next";
import MeetOptionsScreen from "@/screens/MeetOptions";

export const metadata: Metadata = { title: "Meet first" };

export default function Page() {
  return <MeetOptionsScreen />;
}
