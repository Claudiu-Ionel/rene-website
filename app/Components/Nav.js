"use client";

import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import HamburgerMenu from "./HamburgerMenu";
import useMediaQuery from "../utils/useMediaQueries";
import { AppContext } from "../layout";

export default function Nav({ setSidebarOpen, sidebarOpen }) {
  const { englishVersion, setEnglishVersion } = useContext(AppContext);
  const [detailsOpen, setDetailsOpen] = useState(false);
  console.log(englishVersion);
  const breakPoint = useMediaQuery(768);
  // Nav links for EN and DA languages:
  const linksDa = [
    { name: "Galleri", href: "/Gallery" },
    { name: "Showreel", href: "/Showreel" },
    { name: "Kontakt", href: "/Contact" },
    { name: "CV og Info", href: "/PageCV" },
  ];
  const linksEn = [
    { name: "Gallery", href: "/Gallery" },
    { name: "Showreel", href: "/Showreel" },
    { name: "Contact", href: "/Contact" },
    { name: "CV and Info", href: "/PageCV" },
  ];

  const linksToRender = !englishVersion ? linksDa : linksEn;

  const [hover, setHover] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  function resetNavUi(e) {
    e.preventDefault();
    setSidebarOpen(false);
    setDetailsOpen(false);
  }

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
        className={`hidden md:flex justify-between px-10 font-secondary relative z-10 top-0 sm:px-6 `}
      >
        <div className="px-5 py-2 flex flex-col justify-center sm:px-0 sm:py-0">
          <h1 className="text-2xl font-primary md:text-xl sm:text-xl">
            <Link onClick={(e) => resetNavUi(e)} href="/">
              Julius Rene Leo
            </Link>
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
          {linksToRender.map((link, idx) => {
            if (idx === 0) {
              return (
                <li key={link.name} className="flex align-middle relative">
                  <details
                    onClick={() => {
                      setDetailsOpen(!detailsOpen);
                    }}
                    className="cursor-pointer"
                    open={detailsOpen}
                  >
                    <summary>{link.name}</summary>
                    <div className="flex flex-col space-y-2 absolute left-[140%] top-[0] box-shadow">
                      <Link onClick={(e) => resetNavUi(e)} href="/Gallery">
                        Portfolios
                      </Link>
                      <Link onClick={(e) => resetNavUi(e)} href="/Gallery">
                        Headshots
                      </Link>
                    </div>
                  </details>
                </li>
              );
            }
            return (
              <li key={link.name} className="flex align-middle">
                <Link onClick={() => resetNavUi()} href={link.href}>
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li className="flex align-middle">
            <button onClick={() => setEnglishVersion(!englishVersion)}>
              {!englishVersion ? "English" : "Dansk"}
            </button>
          </li>
          <li className="absolute w-fit top-[100%] left-1/2 transform -translate-x-1/2 ">
            test
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
        <div className="px-5 py-2">
          <h1 className="text-3xl font-primary sm:text-xl">
            <Link href="/">Julius Rene Leo</Link>
          </h1>
          <h3>
            {englishVersion
              ? "Actor & Instrumentalist"
              : "Skuespiller og instrumentalist"}
          </h3>
        </div>
        <ul
          onMouseLeave={() => {
            setHover(false);
          }}
          className={`flex flex-row justify-end space-x-5 items-center
        ${!hover ? "opacity-100" : ""}`}
        >
          {linksToRender.map((link, idx) => {
            if (idx === 0) {
              return (
                <li key={link.name} className="flex align-middle relative">
                  <details className="cursor-pointer">
                    <summary>{link.name}</summary>
                    <div className="flex flex-col space-y-2 absolute top-[30px] box-shadow">
                      <Link
                        onClick={() => setSidebarOpen(false)}
                        href="/Gallery"
                      >
                        Portfolios
                      </Link>
                      <Link
                        onClick={() => setSidebarOpen(false)}
                        href="/Gallery"
                      >
                        Headshots
                      </Link>
                    </div>
                  </details>
                </li>
              );
            }
            return (
              <li key={link.name} className="flex align-middle">
                <Link
                  onClick={() => setSidebarOpen(false)}
                  href={link.href}
                  className={`${hoverEffect(link)} transition duration-200`}
                  onMouseEnter={() => {
                    setHover(true);
                    setHoveredLink(link.name);
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li className="flex align-middle">
            <button onClick={() => setEnglishVersion(!englishVersion)}>
              {!englishVersion ? "English" : "Dansk"}
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}
