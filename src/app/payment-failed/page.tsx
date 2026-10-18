import type { Metadata } from "next";
import PaymentFailedScreen from "@/screens/PaymentFailed";

export const metadata: Metadata = { title: "Payment declined" };

export default function Page() {
  return <PaymentFailedScreen />;
}
