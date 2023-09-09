"use client";
import { useState } from "react";
import Experience from "./Components/Experience";
import Gallery from "./Components/Gallery";
import ImageModal from "./Components/ImageModal";
import { galleryImages } from "./data/data";
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
      <section className="bg-hero-image w-full h-[905px] bg-cover bg-no-repeat bg-fixed bg-top md:h-[700px] md:bg-center sm:h-[550px]"></section>
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
