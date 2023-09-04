"use client";
import { galleryImages } from "../data/data";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageModal({ imageIdx, setImageModalOpen }) {
  const [fadeIn, setFadeIn] = useState(false);
  const [currentImgIdx, setCurrentImgIdx] = useState(imageIdx);
  const [imageLoaded, setImageLoaded] = useState(false);
  console.log(imageLoaded);
  function nextImage(idx) {
    setImageLoaded(false);
    if (idx >= galleryImages.length - 1) {
      return setCurrentImgIdx(0);
    }
    return setCurrentImgIdx((prev) => prev + 1);
  }
  function prevImage(idx) {
    setImageLoaded(false);
    if (idx === 0) {
      return setCurrentImgIdx(galleryImages.length - 1);
    }
    return setCurrentImgIdx((prev) => prev - 1);
  }

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 100);
  }, [currentImgIdx]);

  return (
    <div
      className={`modal fixed inset-0 bg-[#000]/95 flex justify-center items-center z-[1000] opacity-0 transition-opacity ${
        fadeIn ? "visible opacity-100" : "opacity-50"
      }`}
    >
      {/* Close Button */}
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
      <div className="slider-navigation absolute z-[1001] top-1/2 transform -translate-y-1/2 w-full h-[50%] flex items-center justify-between ">
        <button
          className="text-white p-5 text-3xl md:hidden"
          onClick={() => prevImage(currentImgIdx)}
        >{`<`}</button>
        <button
          className="text-white p-5 text-3xl md:hidden"
          onClick={() => nextImage(currentImgIdx)}
        >{`>`}</button>
      </div>
      <div className="carusel w-[100%] max-w-[700px] h-[90%] max-h-[90%] relative">
        <Image
          className={`object-contain transition-opacity  ${
            imageLoaded ? "opacity-100" : "opacity-50"
          }`}
          src={galleryImages[currentImgIdx]?.imageUrl}
          alt="alt"
          loading="lazy"
          fill={true}
        />
      </div>
    </div>
  );
}
