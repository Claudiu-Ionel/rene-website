"use client";
// react components:
import { useState } from "react";
import Image from "next/image";
// Website components:
import Experience from "../Components/Experience";
export default function PageCV() {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <div className="w-full bg-white px-8 py-6 h-fit flex flex-col sm:px-4 min-h-screen grow">
      <div className="w-full bg-white px-8 py-6 h-[128px] md:hidden"></div>
      <article className="w-full bg-white flex lg:flex-col lg:items-center items-start justify-evenly">
        <Image
          src="/CVinfo/juliusreneleoactor10.jpg"
          width="500"
          height="400"
          className="object-contain"
          alt="Julius Rene Leo - black and white picture"
        />
        {/* Autobiography text section: */}
        <div className="w-[45%] lg:w-[90%] mb-10 font-secondary">
          <Experience />
        </div>
      </article>
    </div>
  );
}
