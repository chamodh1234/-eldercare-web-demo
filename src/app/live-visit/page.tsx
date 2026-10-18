import type { Metadata } from "next";
import LiveVisitScreen from "@/screens/LiveVisit";

export const metadata: Metadata = { title: "Live visit" };

export default function Page() {
  return <LiveVisitScreen />;
}
