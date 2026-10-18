import type { Metadata } from "next";
import RequestNoReplyScreen from "@/screens/RequestNoReply";

export const metadata: Metadata = { title: "No reply yet" };

export default function Page() {
  return <RequestNoReplyScreen />;
}
