import type { Metadata } from "next";
import RecoveryPendingScreen from "@/screens/RecoveryPending";

export const metadata: Metadata = { title: "Recovery pending" };

export default function Page() {
  return <RecoveryPendingScreen />;
}
