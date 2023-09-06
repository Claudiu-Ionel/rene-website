"use client";
import { useState } from "react";
import Experience from "./Components/Experience";
import Gallery from "./Components/Gallery";
import ImageModal from "./Components/ImageModal";
export default function Home() {
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
      <section className="bg-hero-image w-full h-[905px] bg-cover bg-no-repeat bg-fixed bg-top"></section>
      <Gallery
        setModalOpen={setImageModalOpen}
        setImgIdx={setImgIdx}
        galleryImages={galleryImages}
        limit={6}
        setModalImageGallery={setModalImageGallery}
      />
      <Experience />
    </>
  );
}
