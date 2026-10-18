import type { Metadata } from "next";
import CareCircleScreen from "@/screens/CareCircle";

export const metadata: Metadata = { title: "Care circle" };

export default function Page() {
  return <CareCircleScreen />;
}
