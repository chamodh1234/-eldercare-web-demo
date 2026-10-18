"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import styles from "./SiteHeader.module.css";

const NAV = [
  { href: "/#how", label: "How it works" },
  { href: "/#safety", label: "Safety" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#join", label: "Become a caregiver" },
];

/** Header of the public landing page, drawn on the black hero. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span className={styles.mark}>g</span>Gloocan
      </Link>
      <nav aria-label="Main" className={styles.nav} data-open={open}>
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className={styles.link} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href="/login" className={styles.login}>
        Log in
      </Link>
      <Link href="/search" className={styles.cta}>
        Find care
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
    </header>
  );
}
