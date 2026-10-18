import type { Metadata } from "next";
import AskMoreTimeScreen from "@/screens/AskMoreTime";

export const metadata: Metadata = { title: "Ask to stay longer" };

export default function Page() {
  return <AskMoreTimeScreen />;
}
