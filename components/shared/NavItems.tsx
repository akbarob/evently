"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavItems() {
  const pathname = usePathname();
  return (
    <ul className=" flex md:flex-between w-full item-start flex-col  md:flex-row">
      {headerLinks.map((link) => {
        const isactive = link.route === pathname;
        return (
          <li
            key={link.route}
            className={`${
              isactive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap `}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
