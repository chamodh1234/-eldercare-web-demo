import type { Metadata } from "next";
import DownloadDataScreen from "@/screens/DownloadData";

export const metadata: Metadata = { title: "Security & privacy" };

export default function Page() {
  return <DownloadDataScreen />;
}
