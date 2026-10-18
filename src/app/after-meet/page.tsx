import type { Metadata } from "next";
import AfterMeetScreen from "@/screens/AfterMeet";

export const metadata: Metadata = { title: "After meeting" };

export default function Page() {
  return <AfterMeetScreen />;
}
