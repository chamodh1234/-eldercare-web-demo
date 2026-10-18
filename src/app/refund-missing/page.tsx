import type { Metadata } from "next";
import RefundMissingScreen from "@/screens/RefundMissing";

export const metadata: Metadata = { title: "Refund not arrived" };

export default function Page() {
  return <RefundMissingScreen />;
}
