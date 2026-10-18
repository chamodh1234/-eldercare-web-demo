import type { Metadata } from "next";
import MessagesScreen from "@/screens/Messages";

export const metadata: Metadata = { title: "Messages" };

export default function Page() {
  return <MessagesScreen />;
}
