"use client";

import Image from "next/image";
import Experience from "../Components/Experience";
import ImageModal from "../Components/ImageModal";
import { galleryImages } from "../data/data";
import { useState } from "react";
export default function Portofolios({}) {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageIdx, setImgIdx] = useState(0);
  const [modalImageGallery, setModalImageGallery] = useState([]);
  const limit = 5;
  function openModal(imgIdx) {
    setImgIdx(imgIdx);
    setModalOpen(true);
  }

  return (
    <>
      <div className="w-full bg-white px-8 py-6 h-[128px] ipadAir:hidden"></div>
      <Experience></Experience>
      <section
        id="gallery-section"
        className="grid grid-rows-2 grid-cols-3 bg-white w-full h-[95vw] justify-center gap-x-2 gap-y-2 py-16 px-14 md:px-10 md:gap-3 md:h-[80vw] sm:grid-rows-3 sm:grid-cols-2 sm:px-5 sm:h-[200vw] sm:gap-y-5"
      >
        {galleryImages.map((item, idx) => {
          return (
            idx < limit && (
              <div key={idx} className="w-full relative">
                <Image
                  onClick={() => {
                    setImgIdx(idx);
                    setImageModalOpen(true);
                    setModalImageGallery(galleryImages);
                  }}
                  className="object-cover cursor-pointer md:object-cover inline-block h-auto max-w-[100%]
                 "
                  src={item.imageUrl}
                  alt={item.alt}
                  loading="lazy"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={100}
                />
              </div>
            )
          );
        })}
      </section>
    </>
  );
}
