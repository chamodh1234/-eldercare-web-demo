import type { Metadata } from "next";
import SupportChatScreen from "@/screens/SupportChat";

export const metadata: Metadata = { title: "Support chat" };

export default function Page() {
  return <SupportChatScreen />;
}
