import type { Metadata } from "next";
import RequestDeclinedScreen from "@/screens/RequestDeclined";

export const metadata: Metadata = { title: "Request declined" };

export default function Page() {
  return <RequestDeclinedScreen />;
}
