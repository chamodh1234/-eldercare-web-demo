import type { Metadata } from "next";
import RecoverAccountScreen from "@/screens/RecoverAccount";

export const metadata: Metadata = { title: "Recover account" };

export default function Page() {
  return <RecoverAccountScreen />;
}
