import type { Metadata } from "next";
import RebookScreen from "@/screens/Rebook";

export const metadata: Metadata = { title: "Rebook" };

export default function Page() {
  return <RebookScreen />;
}
