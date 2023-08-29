"use client";

import Link from "next/link";
import { useState } from "react";

export default function nav({
  position,
  top,
  breakpoint,
  breakpointValue,
  display,
}) {
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
      className={`w-nav ${display} justify-between px-8 py-6 overflow-hidden font-secondary ${position} z-10 top-${top} ${breakpointValue}`}
    >
      <div className="text-backgroundColor px-5 py-2">
        <h1 className="text-4xl font-primary">Julius Rene</h1>
        <h3 className="">Actor & Instrumentalist</h3>
      </div>
      <ul
        onMouseLeave={() => {
          setHover(false);
        }}
        className={`flex flex-row justify-end space-x-5 items-center
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
    </nav>
  );
}
