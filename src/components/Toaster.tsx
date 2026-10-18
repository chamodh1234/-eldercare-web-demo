"use client";

import { useSyncExternalStore } from "react";
import styles from "./Toaster.module.css";

let message: { id: number; text: string } | null = null;
let timer: ReturnType<typeof setTimeout> | undefined;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

/** Shows a short confirmation at the bottom of the screen. */
export function toast(text: string) {
  message = { id: Date.now(), text };
  clearTimeout(timer);
  timer = setTimeout(() => {
    message = null;
    emit();
  }, 2600);
  emit();
}

export function Toaster() {
  const current = useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => message,
    () => null,
  );
  return (
    <div className={styles.region} role="status" aria-live="polite">
      {current && (
        <div key={current.id} className={styles.toast}>
          {current.text}
        </div>
      )}
    </div>
  );
}
