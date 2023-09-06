"use client";

import "./globals.css";
import Footer from "./Components/Footer";
import { useState } from "react";
import TopNavbar from "./Components/TopNavbar";
import SideNavbar from "./Components/SideNavbar";
import useMediaQuery from "./utils/useMediaQueries";
import Nav from "./Components/Nav.js";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [englishVersion, setEnglishVersion] = useState(false);
  return (
    <html lang="en">
      <body
        className={`relative ${
          sidebarOpen ? "overflow-y-hidden" : "overflow-y-scroll"
        }`}
        suppressHydrationWarning={true}
      >
        {/* <SideNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="bg-backgroundColor p-10 relative flex min-h-screen h-4/5 flex-col items-center justify-between sm:p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
