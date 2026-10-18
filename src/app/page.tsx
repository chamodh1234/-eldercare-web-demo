import type { Metadata } from "next";
import MainScreen from "@/screens/Main";

export const metadata: Metadata = { title: { absolute: "Gloocan · Trusted elder care" } };

export default function Page() {
  return <MainScreen />;
}
