"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageModal({ imageModalOpen, setImageModalOpen }) {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`modal fixed inset-0 bg-[#000]/95 flex justify-center items-center z-[1000] opacity-0 transition-opacity ${
        fadeIn ? "visible opacity-100" : "opacity-50"
      }`}
    >
      <button
        onClick={() => {
          setFadeIn(false);

          setTimeout(() => {
            setImageModalOpen(false);
          }, 100);
        }}
        className={`p-6 h-fit absolute right-0 top-0 transition-all text-white z-[1001]
      `}
      >
        X
      </button>
      <div className="carusel w-[100%] max-w-[700px] h-[90%] max-h-[90%] relative">
        <Image
          className="object-contain"
          src="/Julius.jpg"
          alt="alt"
          loading="lazy"
          fill={true}
        />
      </div>
    </div>
  );
}
