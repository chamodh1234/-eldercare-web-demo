import type { Metadata } from "next";
import ExtendRequestScreen from "@/screens/ExtendRequest";

export const metadata: Metadata = { title: "Extend visit request" };

export default function Page() {
  return <ExtendRequestScreen />;
}
