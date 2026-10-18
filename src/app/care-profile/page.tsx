import type { Metadata } from "next";
import CareProfileScreen from "@/screens/CareProfile";

export const metadata: Metadata = { title: "Amma's care profile" };

export default function Page() {
  return <CareProfileScreen />;
}
