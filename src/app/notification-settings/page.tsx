import type { Metadata } from "next";
import NotificationSettingsScreen from "@/screens/NotificationSettings";

export const metadata: Metadata = { title: "Notification settings" };

export default function Page() {
  return <NotificationSettingsScreen />;
}
