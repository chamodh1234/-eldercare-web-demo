import type { Metadata } from "next";
import CantStayLongerScreen from "@/screens/CantStayLonger";

export const metadata: Metadata = { title: "Caregiver can't stay" };

export default function Page() {
  return <CantStayLongerScreen />;
}
