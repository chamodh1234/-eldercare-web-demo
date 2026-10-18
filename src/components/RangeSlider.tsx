"use client";

import styles from "./RangeSlider.module.css";

type Props = {
  min: number;
  max: number;
  step: number;
  low: number;
  high: number;
  onChange: (low: number, high: number) => void;
  label: string;
};

/** Two-handle range slider drawn like the design's price filter. */
export function RangeSlider({ min, max, step, low, high, onChange, label }: Props) {
  const pct = (n: number) => ((n - min) / (max - min)) * 100;
  return (
    <div className={styles.track}>
      <span className={styles.fill} style={{ left: `${pct(low)}%`, right: `${100 - pct(high)}%` }}></span>
      <span className={styles.thumb} style={{ left: `calc(${pct(low)}% - 10px)` }}></span>
      <span className={styles.thumb} style={{ left: `calc(${pct(high)}% - 10px)` }}></span>
      <input
        type="range"
        aria-label={`Lowest ${label}`}
        min={min}
        max={max}
        step={step}
        value={low}
        onChange={(e) => onChange(Math.min(Number(e.target.value), high - step), high)}
        className={styles.input}
      />
      <input
        type="range"
        aria-label={`Highest ${label}`}
        min={min}
        max={max}
        step={step}
        value={high}
        onChange={(e) => onChange(low, Math.max(Number(e.target.value), low + step))}
        className={styles.input}
      />
    </div>
  );
}
