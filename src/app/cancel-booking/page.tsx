import type { Metadata } from "next";
import CancelBookingScreen from "@/screens/CancelBooking";

export const metadata: Metadata = { title: "Cancel visit" };

export default function Page() {
  return <CancelBookingScreen />;
}
