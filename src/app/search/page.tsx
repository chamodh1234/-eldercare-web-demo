import type { Metadata } from "next";
import SearchScreen from "@/screens/Search";

export const metadata: Metadata = { title: "Find a caregiver" };

export default function Page() {
  return <SearchScreen />;
}
