import type { Metadata } from "next";
import SignupDetailsScreen from "@/screens/SignupDetails";

export const metadata: Metadata = { title: "Your details" };

export default function Page() {
  return <SignupDetailsScreen />;
}
