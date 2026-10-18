import type { Metadata } from "next";
import ReviewsScreen from "@/screens/Reviews";

export const metadata: Metadata = { title: "Reviews for Nirmala" };

export default function Page() {
  return <ReviewsScreen />;
}
