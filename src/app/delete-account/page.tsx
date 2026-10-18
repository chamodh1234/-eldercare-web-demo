import type { Metadata } from "next";
import DeleteAccountScreen from "@/screens/DeleteAccount";

export const metadata: Metadata = { title: "Security & privacy" };

export default function Page() {
  return <DeleteAccountScreen />;
}
