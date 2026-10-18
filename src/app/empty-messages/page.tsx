import type { Metadata } from "next";
import EmptyMessagesScreen from "@/screens/EmptyMessages";

export const metadata: Metadata = { title: "No messages" };

export default function Page() {
  return <EmptyMessagesScreen />;
}
