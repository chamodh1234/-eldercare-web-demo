import type { Metadata } from "next";
import ConfirmedScreen from "@/screens/Confirmed";

export const metadata: Metadata = { title: "Booking request sent" };

export default function Page() {
  return <ConfirmedScreen />;
}
