"use client";
import { useState } from "react";
import Experience from "../Components/Experience";
import { experienceTimeline } from "../data/data";
export default function PageCV() {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <div className="w-full bg-white px-8 py-6 h-fit flex flex-col sm:px-4 min-h-screen grow">
      <div className="w-full bg-white px-8 py-6 h-[128px] md:hidden"></div>
      <article className="w-full bg-white flex flex-col items-center">
        {/* Autobiography text section: */}
        <div className="w-[60%] lg:w-[90%] mb-10 font-secondary">
          <Experience />
        </div>

        {/* The projects timeline: */}
      </article>
    </div>
  );
}
