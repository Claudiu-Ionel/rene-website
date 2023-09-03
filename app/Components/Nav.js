"use client";

import Link from "next/link";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import useMediaQuery from "../utils/useMediaQueries";
export default function nav({ setSidebarOpen, sidebarOpen }) {
  const breakPoint = useMediaQuery(768);
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

  if (breakPoint) {
    // nav bar for screens with (max-width: 768px)
    return (
      <nav
        className={`hidden md:flex justify-between px-10 font-secondary relative z-10 top-0 `}
      >
        <div className="px-5 py-2 flex flex-col justify-center">
          <h1 className="text-2xl font-primary">
            <Link href="/">Julius Rene</Link>
          </h1>
        </div>
        <HamburgerMenu
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
        />

        <ul
          className={`menu-items bg-white flex flex-col items-start list-none p-9 m-0 w-full h-screen  absolute top-[100%] left-0  origin-left transition-all duration-300 
        ${
          sidebarOpen ? "opacity-100 scale-x-100" : " opacity-0 scale-x-0"
        } space-y-5`}
        >
          {links.map((link) => {
            return (
              <li key={link.name} className="flex align-middle">
                <Link onClick={() => setSidebarOpen(false)} href={link.href}>
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li className="flex align-middle">
            <button>English</button>
          </li>
        </ul>
      </nav>
    );
  } else {
    // nav bar for desktop
    return (
      <nav
        className={`w-nav flex justify-between px-8 py-6 font-secondary absolute z-10 top-[40px] left-[40px]`}
      >
        <div className="text-backgroundColor px-5 py-2">
          <h1 className="text-4xl font-primary">
            <Link href="/">Julius Rene</Link>
          </h1>
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
          <button>English</button>
        </ul>
      </nav>
    );
  }
}
