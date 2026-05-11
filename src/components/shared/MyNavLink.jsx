"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyNavLink = ({ href, children, className }) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;
  return (
    <>
      <Link
        href={href}
        className={`py-2   ${isActive ? "text-blue-600 border-b-2 border-blue-600  " : "text-gray-600"} ${className}`}
      >
        {children}
      </Link>
    </>
  );
};

export default MyNavLink;
