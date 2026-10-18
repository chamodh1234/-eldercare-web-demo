import type { Metadata } from "next";
import ChangePhoneScreen from "@/screens/ChangePhone";

export const metadata: Metadata = { title: "Change mobile number" };

export default function Page() {
  return <ChangePhoneScreen />;
}
