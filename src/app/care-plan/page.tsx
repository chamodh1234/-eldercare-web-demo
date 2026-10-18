import type { Metadata } from "next";
import CarePlanScreen from "@/screens/CarePlan";

export const metadata: Metadata = { title: "Amma's care plan" };

export default function Page() {
  return <CarePlanScreen />;
}
