import type { Metadata } from "next";
import NotificationsScreen from "@/screens/Notifications";

export const metadata: Metadata = { title: "Notifications" };

export default function Page() {
  return <NotificationsScreen />;
}
