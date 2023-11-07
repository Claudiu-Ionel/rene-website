"use client";
import { portraitImages } from "../data/data";
import Gallery from "../Components/Gallery";
import ImageModal from "../Components/ImageModal";
import { useState } from "react";

export default function GalleryPage() {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageIdx, setImgIdx] = useState(0);
  const [modalImageGallery, setModalImageGallery] = useState([]);
  return (
    <>
      {imageModalOpen && (
        <ImageModal
          imageIdx={imageIdx}
          setImageModalOpen={setImageModalOpen}
          modalImageGallery={modalImageGallery}
        />
      )}
      <div className="bg-white w-full">
        <div className="w-full bg-white px-8 py-6 h-[128px] md:hidden"></div>
        <Gallery
          setModalOpen={setImageModalOpen}
          setImgIdx={setImgIdx}
          galleryImages={portraitImages}
          limit={6}
          setModalImageGallery={setModalImageGallery}
        />
        {/* <Gallery
          setModalOpen={setImageModalOpen}
          setImgIdx={setImgIdx}
          galleryImages={portraitImages}
          limit={6}
          setModalImageGallery={setModalImageGallery}
        />
        <Gallery
          setModalOpen={setImageModalOpen}
          setImgIdx={setImgIdx}
          galleryImages={portraitImages}
          limit={6}
          setModalImageGallery={setModalImageGallery}
        /> */}
      </div>
    </>
  );
}
