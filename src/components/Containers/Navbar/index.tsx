"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

export const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Pages",
      url: "/pages",
    },
    {
      name: "Portfolio",
      url: "/portfolio",
    },
    {
      name: "Services",
      url: "/services",
    },
  ];

  return (
    <header className="flex px-4 items-center justify-between skew w-4/5 shadow-xl m-auto h-16">
      <div className="flex flex-col text-primary text-2xl font-bold">
        Tomodati <span className="text-black text-sm">Fitness Center</span>
      </div>
      <div className="skew-x-12 h-full">
        <ul className="flex items-center gap-4 h-full">
          {navLinks.map(({ name, url }) => (
            <li
              key={name}
              className={cn(
                "h-full relative flex flex-col items-center justify-center",
                pathname === url && "active-nav"
              )}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
