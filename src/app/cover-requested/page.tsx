import type { Metadata } from "next";
import CoverRequestedScreen from "@/screens/CoverRequested";

export const metadata: Metadata = { title: "Cover requested" };

export default function Page() {
  return <CoverRequestedScreen />;
}
