import type { Metadata } from "next";
import BookScreen from "@/screens/Book";

export const metadata: Metadata = { title: "Book Nirmala" };

export default function Page() {
  return <BookScreen />;
}
