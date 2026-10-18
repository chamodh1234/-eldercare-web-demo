import type { Metadata } from "next";
import Link from "next/link";
import { screens } from "@/lib/screens";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "All screens" };

export default function ScreensPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>All screens</h1>
      <p className={styles.lead}>Every screen in the design, in canvas order. Many are states inside a flow.</p>
      <ol className={styles.list}>
        {screens.map((s) => (
          <li key={s.href}>
            <Link href={s.href} className={styles.item}>
              <span className={styles.id}>{s.id}</span>
              <span className={styles.name}>{s.title}</span>
              <span className={styles.href}>{s.href}</span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
