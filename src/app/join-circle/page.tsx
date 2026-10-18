import type { Metadata } from "next";
import JoinCircleScreen from "@/screens/JoinCircle";

export const metadata: Metadata = { title: "Join care circle" };

export default function Page() {
  return <JoinCircleScreen />;
}
