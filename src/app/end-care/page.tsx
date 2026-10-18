import type { Metadata } from "next";
import EndCareScreen from "@/screens/EndCare";

export const metadata: Metadata = { title: "End weekly care" };

export default function Page() {
  return <EndCareScreen />;
}
