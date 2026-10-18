import type { Metadata } from "next";
import HelpArticleScreen from "@/screens/HelpArticle";

export const metadata: Metadata = { title: "Help article" };

export default function Page() {
  return <HelpArticleScreen />;
}
