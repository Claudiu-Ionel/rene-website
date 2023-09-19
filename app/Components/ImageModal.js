"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./imageModal.css";
import useMediaQuery from "../utils/useMediaQueries";
export default function ImageModal({
  imageIdx,
  setImageModalOpen,
  modalImageGallery,
  videoMode,
}) {
  const [opacities, setOpacities] = useState([]);
  const [positions, setPositions] = useState([]);
  const [currentImgIdx, setCurrentImgIdx] = useState(imageIdx);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: modalImageGallery.length,
    loop: true,
    dragSpeed: 1,
    initial: imageIdx,
    breakpoints: {
      "(max-width: 820px)": {
        drag: true,
      },
      "(min-width: 821px)": {
        drag: false,
        detailsChanged(s) {
          const new_opacities = s.track.details.slides.map(
            (slide) => slide.portion
          );
          setOpacities(new_opacities);
        },
      },
    },
    created() {
      setLoaded(true);
    },
  });
  console.log(instanceRef);
  const [fadeIn, setFadeIn] = useState(false);
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
          onClick={(e) => {
            videoMode ? prevImage(currentImgIdx) : "";
            e.stopPropagation() || instanceRef.current?.prev();
          }}
        >{`<`}</button>
        <button
          className="text-white p-5 text-3xl md:hidden"
          onClick={(e) => {
            videoMode ? nextImage(currentImgIdx) : "";
            e.stopPropagation() || instanceRef.current?.next();
          }}
        >{`>`}</button>
      </div>
      <div
        className={`w-[100%] ${
          videoMode ? "max-w-[90%]" : "max-w-[700px]"
        } h-[90%] max-h-[90%] relative flex items-center justify-center overflow-hidden  `}
      >
        {videoMode && (
          <iframe
            ref={iframeRef}
            className="w-[90%] h-[100%] md:w-full md:h-[400px] sm:h-[85%]"
            src={`${modalImageGallery[currentImgIdx]?.videoUrl}&autoplay=1`}
            title={modalImageGallery[currentImgIdx]?.videoTitle}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; autoplay"
            allowFullScreen
          ></iframe>
        )}

        {!videoMode && !useMediaQuery(820) && (
          <div ref={sliderRef} className={`h-[90%] w-[90%] fader relative`}>
            {modalImageGallery.map((img, idx) => (
              <Image
                key={idx}
                className={`relative object-contain bg-transparent  md:object-cover fader__slide`}
                style={{ opacity: opacities[idx] }}
                src={img.imageUrl}
                alt="alt"
                loading="eager"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
              ></Image>
            ))}
          </div>
        )}
        {!videoMode && useMediaQuery(820) && (
          <div ref={sliderRef} className="keen-slider w-[90%] h-[90%]">
            {modalImageGallery.map((img, idx) => (
              <Image
                key={idx}
                className={`relative object-contain bg-transparent keen-slider__slide`}
                style={{ opacity: opacities[idx] }}
                src={img.imageUrl}
                alt="alt"
                loading="eager"
                width={100}
                height={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
              ></Image>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
