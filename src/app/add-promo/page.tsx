import type { Metadata } from "next";
import AddPromoScreen from "@/screens/AddPromo";

export const metadata: Metadata = { title: "Add promo code" };

export default function Page() {
  return <AddPromoScreen />;
}
