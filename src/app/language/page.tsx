import type { Metadata } from "next";
import LanguageScreen from "@/screens/Language";

export const metadata: Metadata = { title: "Language" };

export default function Page() {
  return <LanguageScreen />;
}
