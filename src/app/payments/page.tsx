import type { Metadata } from "next";
import PaymentsScreen from "@/screens/Payments";

export const metadata: Metadata = { title: "Payments and receipts" };

export default function Page() {
  return <PaymentsScreen />;
}
