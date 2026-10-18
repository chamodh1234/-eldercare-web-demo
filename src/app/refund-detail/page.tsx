import type { Metadata } from "next";
import RefundDetailScreen from "@/screens/RefundDetail";

export const metadata: Metadata = { title: "Refund detail" };

export default function Page() {
  return <RefundDetailScreen />;
}
