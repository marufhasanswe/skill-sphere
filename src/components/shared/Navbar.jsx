"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import MyNavLink from "./MyNavLink";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = (
    <>
      <li>
        <MyNavLink href={"/"}>Home</MyNavLink>
      </li>
      <li>
        <MyNavLink href={"/courses"}>Courses</MyNavLink>
      </li>
      <li>
        <MyNavLink href={"/my-profile"}>My Profile</MyNavLink>
      </li>
    </>
  );

  return (
    <div className="border-b border-separator shadow">
      <nav className="sticky top-0 z-40  bg-light backdrop-blur-lg container mx-auto">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <div>
              <Image
                className=""
                width={200}
                height={100}
                alt="SkillSphere logo"
                src={"/nav-logo.png"}
              ></Image>
            </div>
          </div>
          <ul className="hidden items-center gap-4 md:flex">{links}</ul>
          <div className="flex items-center gap-1   ">
            <Button variant="tertiary">Sign In</Button>
            <Button>Sign In</Button>
          </div>
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">{links}</ul>
          </div>
        )}
      </nav>
    </div>
  );
}
