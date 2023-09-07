"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function ImageModal({
  imageIdx,
  setImageModalOpen,
  modalImageGallery,
  videoMode,
}) {
  const [fadeIn, setFadeIn] = useState(false);
  const [currentImgIdx, setCurrentImgIdx] = useState(imageIdx);
  const [imageLoaded, setImageLoaded] = useState(false);
  const iframeRef = useRef(null);
  function nextImage(idx) {
    setImageLoaded(false);
    if (idx >= modalImageGallery.length - 1) {
      return setCurrentImgIdx(0);
    }
    return setCurrentImgIdx((prev) => prev + 1);
  }
  function prevImage(idx) {
    setImageLoaded(false);
    if (idx === 0) {
      return setCurrentImgIdx(modalImageGallery.length - 1);
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
      <div className="slider-navigation absolute z-[0] top-1/2 transform -translate-y-1/2 w-full h-[50%] flex items-center justify-between ">
        <button
          className="text-white p-5 text-3xl md:hidden"
          onClick={() => prevImage(currentImgIdx)}
        >{`<`}</button>
        <button
          className="text-white p-5 text-3xl md:hidden"
          onClick={() => nextImage(currentImgIdx)}
        >{`>`}</button>
      </div>
      <div
        className={`carusel w-[100%] ${
          videoMode ? "max-w-[90%]" : "max-w-[700px]"
        } h-[90%] max-h-[90%] relative flex items-center justify-center `}
      >
        {videoMode ? (
          <iframe
            ref={iframeRef}
            className="w-[90%] h-[100%] md:w-full md:h-[400px] sm:h-[85%]"
            src={`${modalImageGallery[currentImgIdx]?.videoUrl}&autoplay=1`}
            title={modalImageGallery[currentImgIdx]?.videoTitle}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; autoplay"
            allowFullScreen
          ></iframe>
        ) : (
          <Image
            className={`object-contain transition-opacity  ${
              imageLoaded ? "opacity-100" : "opacity-90"
            }`}
            src={modalImageGallery[currentImgIdx]?.imageUrl}
            alt="alt"
            loading="lazy"
            fill={true}
          />
        )}
      </div>
    </div>
  );
}
