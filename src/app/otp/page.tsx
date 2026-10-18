import type { Metadata } from "next";
import OtpScreen from "@/screens/Otp";

export const metadata: Metadata = { title: "Enter code" };

export default function Page() {
  return <OtpScreen />;
}
