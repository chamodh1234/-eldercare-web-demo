import type { Metadata } from "next";
import NoResultsScreen from "@/screens/NoResults";

export const metadata: Metadata = { title: "No results" };

export default function Page() {
  return <NoResultsScreen />;
}
