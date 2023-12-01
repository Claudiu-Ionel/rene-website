"use client";

import Experience from "../Components/Experience";
import ImageModal from "../Components/ImageModal";
import { portfolgeImages } from "../data/data";
import { useState } from "react";
import Gallery from "../Components/Gallery";
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
      {imageModalOpen && (
        <ImageModal
          imageIdx={imageIdx}
          setImageModalOpen={setImageModalOpen}
          modalImageGallery={modalImageGallery}
        />
      )}
      <div className="w-full bg-white px-8 py-6 h-[128px] ipadAir:hidden"></div>
      <div className="bg-white w-full flex justify-center">
        <div className="w-1/2 max-w-2xl lg:w-[95%]">
          <Experience />
        </div>
      </div>

      <Gallery
        setModalOpen={setImageModalOpen}
        setImgIdx={setImgIdx}
        galleryImages={portfolgeImages}
        limit={6}
        setModalImageGallery={setModalImageGallery}
      />
    </>
  );
}
