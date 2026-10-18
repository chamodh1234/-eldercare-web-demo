import type { Metadata } from "next";
import MeetBookedScreen from "@/screens/MeetBooked";

export const metadata: Metadata = { title: "Meeting booked" };

export default function Page() {
  return <MeetBookedScreen />;
}
