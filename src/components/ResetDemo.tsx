"use client";

import { resetDemo } from "@/lib/store";
import { toast } from "./Toaster";

/** Puts every screen's mock data back to how the design starts. */
export function ResetDemo() {
  return (
    <button
      type="button"
      onClick={() => {
        resetDemo();
        toast("Demo data reset");
      }}
      style={{
        height: "40px",
        padding: "0 18px",
        borderRadius: "20px",
        border: "none",
        background: "#EEEEEE",
        color: "#000000",
        font: "600 14px var(--font-figtree), sans-serif",
      }}
    >
      Reset demo data
    </button>
  );
}
