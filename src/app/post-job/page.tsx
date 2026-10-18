import type { Metadata } from "next";
import PostJobScreen from "@/screens/PostJob";

export const metadata: Metadata = { title: "Post a job" };

export default function Page() {
  return <PostJobScreen />;
}
