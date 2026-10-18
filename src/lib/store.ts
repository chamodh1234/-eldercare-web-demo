"use client";

import { useSyncExternalStore } from "react";
import { seed, type DemoState } from "./mock/seed";

/*
 * Front-end only demo store. Everything the screens share (visits, tasks,
 * cards, messages, settings...) lives here, seeded from src/lib/mock and
 * saved to localStorage so a flow carries across pages and reloads.
 */

const KEY = "gloocan-demo-v1";

let state: DemoState | null = null;
const listeners = new Set<() => void>();

function load(): DemoState {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) return { ...seed, ...JSON.parse(raw) };
  } catch {
    // Storage blocked or corrupt: fall back to the seed data.
  }
  return seed;
}

function save(s: DemoState) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    // Private mode or full storage: keep working in memory.
  }
}

export function getState(): DemoState {
  if (!state) state = typeof window === "undefined" ? seed : load();
  return state;
}

/** Applies a change to a copy of the state, then saves and re-renders. */
export function mutate(change: (draft: DemoState) => void) {
  const draft = structuredClone(getState());
  change(draft);
  state = draft;
  save(draft);
  listeners.forEach((l) => l());
}

export function resetDemo() {
  state = structuredClone(seed);
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    // Nothing stored.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** The whole demo state. Server render and hydration use the seed. */
export function useDemo(): DemoState {
  return useSyncExternalStore(subscribe, getState, () => seed);
}

let nextId = 0;
export const newId = (prefix: string) => `${prefix}-${Date.now().toString(36)}-${(nextId++).toString(36)}`;
