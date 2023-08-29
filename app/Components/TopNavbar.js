"use client";

import { useState } from "react";

export default function nav({}) {
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
      className={`hidden md:flex justify-between px-10 overflow-hidden font-secondary relative z-10 top-0 `}
    >
      <div className="px-5 py-2">
        <h1 className="text-2xl font-primary">Julius Rene</h1>
      </div>
      <button>
        <div className="w-5 h-[2px] bg-[#222] mb-2"></div>
        <div className="w-5 h-[2px] bg-[#222]"></div>
      </button>
    </nav>
  );
}
