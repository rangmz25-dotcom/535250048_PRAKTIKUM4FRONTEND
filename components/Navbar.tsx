"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/Navbar.module.css";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">UNTAR Tech</Link>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link 
              href="/" 
              className={pathname === "/" ? styles.active : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={pathname === "/about" ? styles.active : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              className={pathname.startsWith("/services") ? styles.active : ""}
            >
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};