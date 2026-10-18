import type { Metadata } from "next";
import PauseCareScreen from "@/screens/PauseCare";

export const metadata: Metadata = { title: "Pause weekly care" };

export default function Page() {
  return <PauseCareScreen />;
}
