"use client";

import "./globals.css";
import Footer from "./Components/Footer";
import { useState } from "react";
import TopNavbar from "./Components/TopNavbar";
import SideNavbar from "./Components/SideNavbar";
import Nav from "./Components/Nav";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body
        className={`relative ${
          sidebarOpen ? "overflow-y-hidden" : "overflow-y-scroll"
        }`}
      >
        <SideNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <TopNavbar setSidebarOpen={setSidebarOpen} />

        <main className="bg-backgroundColor p-10 relative flex min-h-screen h-4/5 flex-col items-center justify-between">
          <Nav
            position="relative"
            top="30"
            breakpoint="md"
            breakpointValue="md:hidden"
            display="flex"
          />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
