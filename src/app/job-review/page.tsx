import type { Metadata } from "next";
import JobReviewScreen from "@/screens/JobReview";

export const metadata: Metadata = { title: "Review and publish job" };

export default function Page() {
  return <JobReviewScreen />;
}
