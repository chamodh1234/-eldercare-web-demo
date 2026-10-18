import type { Metadata } from "next";
import ServerErrorScreen from "@/screens/ServerError";

export const metadata: Metadata = { title: "Something went wrong" };

export default function Page() {
  return <ServerErrorScreen />;
}
