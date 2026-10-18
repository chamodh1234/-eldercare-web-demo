"use client";

import Link from "next/link";
import { useState } from "react";
import { AlertIcon, BellIcon, CloseIcon, MenuIcon, PlusIcon } from "./icons";
import styles from "./AppHeader.module.css";

const NAV = [
  { href: "/search", label: "Find care" },
  { href: "/visits", label: "Visits" },
  { href: "/my-jobs", label: "Jobs" },
  { href: "/care-plan", label: "Care plan" },
  { href: "/messages", label: "Messages" },
];

type Props = {
  /** Route of the highlighted main-nav tab. */
  active?: string;
  /** The pill before the bell: add a task (default), the safety help link, or nothing. */
  action?: "addTask" | "help" | "none";
  /** Show the notifications bell (hidden during a live visit). */
  bell?: boolean;
};

export function AppHeader({ active, action = "addTask", bell = true }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.logo}>
          <span className={styles.mark}>g</span>Gloocan
        </Link>
        <nav aria-label="Main" className={styles.nav} data-open={open}>
          {NAV.map((item) => {
            const current = item.href === active;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={current ? `${styles.tab} ${styles.tabActive}` : styles.tab}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        {action === "addTask" && (
          <Link href="/add-task" className={styles.pill} aria-label="Add a task for today">
            <PlusIcon />
            <span className={styles.pillLabel}>Add a task for today</span>
          </Link>
        )}
        {action === "help" && (
          <Link href="/safety-help" className={`${styles.pill} ${styles.pillDanger}`}>
            <AlertIcon />
            Help
          </Link>
        )}
        {bell && (
          <Link href="/notifications" aria-label="Notifications, 2 new" className={styles.bell}>
            <BellIcon />
            <span className={styles.dot}></span>
          </Link>
        )}
        <Link href="/account" aria-label="Your account" className={styles.account}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/dilani.png" alt="" className={styles.avatar} />
          <span className={styles.accountName}>Dilani</span>
        </Link>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
