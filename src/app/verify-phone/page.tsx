import type { Metadata } from "next";
import VerifyPhoneScreen from "@/screens/VerifyPhone";

export const metadata: Metadata = { title: "Verify new number" };

export default function Page() {
  return <VerifyPhoneScreen />;
}
