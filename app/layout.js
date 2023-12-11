"use client";

import "./globals.css";
import Footer from "./Components/Footer";
import { useState, createContext } from "react";
import TopNavbar from "./Components/TopNavbar";
import SideNavbar from "./Components/SideNavbar";
import useMediaQuery from "./utils/useMediaQueries";
import Nav from "./Components/Nav.js";

export const AppContext = createContext({});

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [englishVersion, setEnglishVersion] = useState(false);

  return (
    <html lang="en">
      <title>Julius René Leo: professional actor</title>
      <meta name="keywords" content="actor, skuespiller" />
      <meta name="description" content="Julius René Leo's personal webpage" />
      <meta name="author" content="Julius René Leo" />

      <body
        className={`relative ${
          sidebarOpen ? "overflow-y-hidden" : "overflow-y-scroll"
        }`}
        suppressHydrationWarning={true}
      >
        <AppContext.Provider value={{ englishVersion, setEnglishVersion }}>
          <Nav
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            setEnglishVersion={setEnglishVersion}
          />
          <main className="bg-backgroundColor p-10 relative flex min-h-screen h-4/5 flex-col items-center justify-between sm:p-6">
            {children}
          </main>
        </AppContext.Provider>
        <Footer />
      </body>
    </html>
  );
}
