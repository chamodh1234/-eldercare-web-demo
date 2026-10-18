import type { Metadata } from "next";
import DisputeScreen from "@/screens/Dispute";

export const metadata: Metadata = { title: "Problem with a visit" };

export default function Page() {
  return <DisputeScreen />;
}
