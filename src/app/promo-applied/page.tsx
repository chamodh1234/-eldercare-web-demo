import type { Metadata } from "next";
import PromoAppliedScreen from "@/screens/PromoApplied";

export const metadata: Metadata = { title: "Promo applied" };

export default function Page() {
  return <PromoAppliedScreen />;
}
