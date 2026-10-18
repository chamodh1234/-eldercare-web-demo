"use client";

import { useRef } from "react";

type Props = {
  value: string;
  onChange: (code: string) => void;
  length?: number;
  label?: string;
};

/** One-time code boxes in the design's style; typing, backspace and paste all work. */
export function CodeInput({ value, onChange, length = 6, label = "Verification code" }: Props) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const digits = Array.from({ length }, (_, i) => value[i] ?? "");
  const focusAt = (i: number) => refs.current[Math.max(0, Math.min(length - 1, i))]?.focus();

  const set = (i: number, d: string) => {
    const next = digits.slice();
    next[i] = d;
    onChange(next.join("").slice(0, length));
  };

  return (
    <div
      role="group"
      aria-label={label}
      style={{ display: "grid", gridTemplateColumns: `repeat(${length}, minmax(0, 1fr))`, gap: "8px" }}
    >
      {digits.map((d, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          aria-label={`Digit ${i + 1}`}
          inputMode="numeric"
          autoComplete={i === 0 ? "one-time-code" : "off"}
          maxLength={1}
          value={d}
          onFocus={(e) => e.target.select()}
          onChange={(e) => {
            const typed = e.target.value.replace(/\D/g, "");
            if (!typed) return set(i, "");
            if (typed.length > 1) {
              // Pasted or autofilled a whole code.
              onChange(typed.slice(0, length));
              return focusAt(typed.length);
            }
            set(i, typed);
            focusAt(i + 1);
          }}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && !d) {
              e.preventDefault();
              set(i - 1, "");
              focusAt(i - 1);
            }
            if (e.key === "ArrowLeft") focusAt(i - 1);
            if (e.key === "ArrowRight") focusAt(i + 1);
          }}
          onPaste={(e) => {
            const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
            if (pasted) {
              e.preventDefault();
              onChange(pasted.slice(0, length));
              focusAt(pasted.length);
            }
          }}
          style={{
            height: "56px",
            minWidth: "0",
            width: "100%",
            borderRadius: "12px",
            border: i === Math.min(value.length, length - 1) ? "2px solid #000000" : "1px solid #E2E2E2",
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "800",
            fontFamily: "var(--font-figtree), sans-serif",
            color: "#000000",
            background: "#FFFFFF",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      ))}
    </div>
  );
}
