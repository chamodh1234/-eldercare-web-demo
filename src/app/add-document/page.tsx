import type { Metadata } from "next";
import AddDocumentScreen from "@/screens/AddDocument";

export const metadata: Metadata = { title: "Add document" };

export default function Page() {
  return <AddDocumentScreen />;
}
