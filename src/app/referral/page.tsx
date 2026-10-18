import type { Metadata } from "next";
import ReferralScreen from "@/screens/Referral";

export const metadata: Metadata = { title: "Invite friends" };

export default function Page() {
  return <ReferralScreen />;
}
