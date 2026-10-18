import type { Metadata } from "next";
import DisputeResolvedScreen from "@/screens/DisputeResolved";

export const metadata: Metadata = { title: "Dispute resolved" };

export default function Page() {
  return <DisputeResolvedScreen />;
}
