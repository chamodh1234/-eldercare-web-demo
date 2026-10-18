import type { Metadata } from "next";
import AccountScreen from "@/screens/Account";

export const metadata: Metadata = { title: "Account" };

export default function Page() {
  return <AccountScreen />;
}
