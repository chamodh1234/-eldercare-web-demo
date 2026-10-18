import type { Metadata } from "next";
import PersonAddedScreen from "@/screens/PersonAdded";

export const metadata: Metadata = { title: "Person added" };

export default function Page() {
  return <PersonAddedScreen />;
}
