"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./nav-link.module.css";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();
  const isActive = path.startsWith(href);

  return (
    <Link
      href={href}
      className={`${classes.link} ${isActive ? classes.active : ""}`}
    >
      {children}
    </Link>
  );
}
