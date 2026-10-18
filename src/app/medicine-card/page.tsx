import type { Metadata } from "next";
import MedicineCardScreen from "@/screens/MedicineCard";

export const metadata: Metadata = { title: "Amma's care profile" };

export default function Page() {
  return <MedicineCardScreen />;
}
