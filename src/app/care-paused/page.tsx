import type { Metadata } from "next";
import CarePausedScreen from "@/screens/CarePaused";

export const metadata: Metadata = { title: "Weekly care paused" };

export default function Page() {
  return <CarePausedScreen />;
}
