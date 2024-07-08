"use client";

import {
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
  BookOpenIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  {
    name: "Journal",
    href: "/journal",
    icon: DocumentDuplicateIcon,
  },
  { name: "Account", href: "/account", icon: CreditCardIcon },
  {
    name: "General Ledger",
    href: "/general-ledger",
    icon: BookOpenIcon,
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <li>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-lg p-3 mb-2 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3",
              pathname === link.href
                ? "bg-primary hover:bg-opacity-100"
                : "hover:bg-primary hover:bg-opacity-50"
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </li>
  );
};

export default Menu;
