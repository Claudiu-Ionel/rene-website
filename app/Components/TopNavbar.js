"use client";

import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
export default function nav({ sidebarOpen, setSidebarOpen }) {
  const links = [
    { name: "Gallery", href: "/Gallery" },
    { name: "Showreel", href: "/Showreel" },
    { name: "Contact", href: "/Contact" },
  ];
  return (
    <nav
      className={`hidden md:flex justify-between px-10 font-secondary relative z-10 top-0 `}
    >
      <div className="px-5 py-2">
        <h1 className="text-2xl font-primary">Julius Rene</h1>
      </div>
      <HamburgerMenu
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <ul
        className={`menu-items bg-white flex flex-col items-start list-none p-9 m-0 w-full h-screen  absolute top-[100%] left-0  origin-left transition-all duration-300 
        ${sidebarOpen ? "opacity-100 scale-x-100" : " opacity-0 scale-x-0"}`}
      >
        {links.map((link) => {
          return (
            <li key={link.name} className="flex align-middle">
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
        <li className="flex align-middle">
          <button>English</button>
        </li>
      </ul>
    </nav>
  );
}
