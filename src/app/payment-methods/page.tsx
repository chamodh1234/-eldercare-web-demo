import type { Metadata } from "next";
import PaymentMethodsScreen from "@/screens/PaymentMethods";

export const metadata: Metadata = { title: "Payment methods" };

export default function Page() {
  return <PaymentMethodsScreen />;
}
