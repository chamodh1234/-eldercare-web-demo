import type { Metadata } from "next";
import HelpCentreScreen from "@/screens/HelpCentre";

export const metadata: Metadata = { title: "Help centre" };

export default function Page() {
  return <HelpCentreScreen />;
}
