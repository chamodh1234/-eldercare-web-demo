import type { Metadata } from "next";
import TimeOfferScreen from "@/screens/TimeOffer";

export const metadata: Metadata = { title: "New time suggested" };

export default function Page() {
  return <TimeOfferScreen />;
}
