import type { Metadata } from "next";
import BookingStatusScreen from "@/screens/BookingStatus";

export const metadata: Metadata = { title: "Booking status" };

export default function Page() {
  return <BookingStatusScreen />;
}
