import type { Metadata } from "next";
import CheckoutScreen from "@/screens/Checkout";

export const metadata: Metadata = { title: "Review and pay" };

export default function Page() {
  return <CheckoutScreen />;
}
