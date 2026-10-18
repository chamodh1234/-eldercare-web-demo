import type { Metadata } from "next";
import CareDocsScreen from "@/screens/CareDocs";

export const metadata: Metadata = { title: "Amma's care profile" };

export default function Page() {
  return <CareDocsScreen />;
}
