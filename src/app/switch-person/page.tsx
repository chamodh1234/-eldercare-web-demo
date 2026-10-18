import type { Metadata } from "next";
import SwitchPersonScreen from "@/screens/SwitchPerson";

export const metadata: Metadata = { title: "Switch person" };

export default function Page() {
  return <SwitchPersonScreen />;
}
