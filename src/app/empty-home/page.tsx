import type { Metadata } from "next";
import EmptyHomeScreen from "@/screens/EmptyHome";

export const metadata: Metadata = { title: "New user home" };

export default function Page() {
  return <EmptyHomeScreen />;
}
