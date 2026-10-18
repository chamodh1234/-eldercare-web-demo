import type { Metadata } from "next";
import ChatRequestsScreen from "@/screens/ChatRequests";

export const metadata: Metadata = { title: "Chat requests" };

export default function Page() {
  return <ChatRequestsScreen />;
}
