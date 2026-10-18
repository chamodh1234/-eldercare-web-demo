import type { Metadata } from "next";
import MoreTimeWaitingScreen from "@/screens/MoreTimeWaiting";

export const metadata: Metadata = { title: "Waiting for reply" };

export default function Page() {
  return <MoreTimeWaitingScreen />;
}
