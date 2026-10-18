import type { Metadata } from "next";
import VisitExtendedScreen from "@/screens/VisitExtended";

export const metadata: Metadata = { title: "Visit extended" };

export default function Page() {
  return <VisitExtendedScreen />;
}
