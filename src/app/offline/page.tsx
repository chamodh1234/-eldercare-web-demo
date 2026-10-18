import type { Metadata } from "next";
import OfflineScreen from "@/screens/Offline";

export const metadata: Metadata = { title: "Offline" };

export default function Page() {
  return <OfflineScreen />;
}
