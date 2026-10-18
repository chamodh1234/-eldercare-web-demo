"use client";

import Link from "next/link";
import {
  CardIcon,
  DocIcon,
  GlobeIcon,
  HeartIcon,
  LockIcon,
  LogoutIcon,
  PeopleIcon,
  PersonIcon,
  BellIcon,
  ShieldIcon,
} from "./icons";
import { logOut } from "@/lib/actions";
import { useDemo } from "@/lib/store";
import styles from "./AccountNav.module.css";

const ITEMS = [
  { href: "/account", label: "Profile", icon: <PersonIcon /> },
  { href: "/care-profile", label: "Amma's care profile", icon: <HeartIcon /> },
  { href: "/care-circle", label: "Care circle", icon: <PeopleIcon /> },
  { href: "/saved-caregivers", label: "Saved caregivers", icon: <HeartIcon /> },
  { href: "/payment-methods", label: "Payment methods", icon: <CardIcon /> },
  { href: "/payments", label: "Payments & receipts", icon: <DocIcon /> },
  { href: "/notification-settings", label: "Notifications", icon: <BellIcon size={16} /> },
  { href: "/security", label: "Security & privacy", icon: <LockIcon /> },
  { href: "/referral", label: "Invite friends", icon: <PeopleIcon /> },
  { href: "/language", label: "Language", icon: <GlobeIcon /> },
  { href: "/safety-help", label: "Safety & help", icon: <ShieldIcon /> },
  { href: "/help-centre", label: "Help centre", icon: <DocIcon /> },
];

/** The account section's side menu. On phones it becomes a scrolling row. */
export function AccountNav({ active }: { active?: string }) {
  const { account } = useDemo();
  return (
    <aside aria-label="Account" className={styles.aside}>
      <div className={styles.me}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={account.photo ?? "/images/dilani.png"} alt="" className={styles.avatar} />
        <span className={styles.meText}>
          <span className={styles.name}>
            {account.first} {account.last}
          </span>
          <span className={styles.kind}>Family account</span>
        </span>
      </div>
      <nav className={styles.nav}>
        {ITEMS.map((item) => {
          const current = item.href === active;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current ? "page" : undefined}
              className={current ? `${styles.item} ${styles.itemActive}` : styles.item}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
        <Link href="/login" onClick={logOut} className={`${styles.item} ${styles.logout}`}>
          <LogoutIcon />
          Log out
        </Link>
      </nav>
    </aside>
  );
}
