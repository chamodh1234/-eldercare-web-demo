import type { Metadata } from "next";
import InviteScreen from "@/screens/Invite";

export const metadata: Metadata = { title: "Invite family" };

export default function Page() {
  return <InviteScreen />;
}
