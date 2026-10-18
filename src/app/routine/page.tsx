import type { Metadata } from "next";
import RoutineScreen from "@/screens/Routine";

export const metadata: Metadata = { title: "Amma's routine" };

export default function Page() {
  return <RoutineScreen />;
}
