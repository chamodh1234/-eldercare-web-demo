import type { Metadata } from "next";
import AddPersonScreen from "@/screens/AddPerson";

export const metadata: Metadata = { title: "Add person" };

export default function Page() {
  return <AddPersonScreen />;
}
