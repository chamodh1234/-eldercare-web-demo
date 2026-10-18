import type { Metadata } from "next";
import DisputeOpenScreen from "@/screens/DisputeOpen";

export const metadata: Metadata = { title: "Visit dispute" };

export default function Page() {
  return <DisputeOpenScreen />;
}
