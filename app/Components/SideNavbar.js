"use client";

import Link from "next/link";
import { useState } from "react";

export default function SideNavbar({ sidebarOpen, setSidebarOpen }) {
  const links = [
    { name: "Gallery", href: "/Gallery" },
    { name: "Showreel", href: "/Showreel" },
    { name: "Contact", href: "/Contact" },
  ];
  const [hover, setHover] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  // hover effect for links
  function hoverEffect(link) {
    if (!hover) {
      return "opacity-100";
    }
    return hoveredLink === link.name && hover ? "" : "opacity-30";
  }

  return (
    <nav
      className={`${sidebarOpen ? "w-full p-9" : "w-0 p-0"}
      h-screen flex justify-start bg-white  overflow-hidden font-secondary absolute z-40 transition-[width] duration-200 `}
    >
      <ul
        onMouseLeave={() => {
          setHover(false);
        }}
        className={`flex flex-col space-y-3
        ${sidebarOpen ? "visible" : "hidden"}
        ${!hover ? "opacity-100" : ""}`}
      >
        {links.map((link) => {
          return (
            <li key={link.name} className="flex align-middle">
              <Link
                className={`${hoverEffect(link)} transition duration-200`}
                onMouseEnter={() => {
                  setHover(true);
                  setHoveredLink(link.name);
                }}
                onMouseLeave={() => {
                  setHoveredLink(null);
                }}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => setSidebarOpen(false)}
        className={`p-6 h-fit absolute right-0 top-0 transition-all
        ${sidebarOpen ? "visible" : "hidden"}
      `}
      >
        X
      </button>
    </nav>
  );
}
