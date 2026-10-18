import type { Metadata } from "next";
import AddTipScreen from "@/screens/AddTip";

export const metadata: Metadata = { title: "Add a tip" };

export default function Page() {
  return <AddTipScreen />;
}
