import type { Metadata } from "next";
import VideoCallScreen from "@/screens/VideoCall";

export const metadata: Metadata = { title: "Video call" };

export default function Page() {
  return <VideoCallScreen />;
}
