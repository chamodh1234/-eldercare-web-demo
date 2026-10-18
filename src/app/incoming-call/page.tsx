import type { Metadata } from "next";
import IncomingCallScreen from "@/screens/IncomingCall";

export const metadata: Metadata = { title: "Incoming call" };

export default function Page() {
  return <IncomingCallScreen />;
}
