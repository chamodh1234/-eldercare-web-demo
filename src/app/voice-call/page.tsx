import type { Metadata } from "next";
import VoiceCallScreen from "@/screens/VoiceCall";

export const metadata: Metadata = { title: "Voice call" };

export default function Page() {
  return <VoiceCallScreen />;
}
