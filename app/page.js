"use client";
import { useState } from "react";
import Experience from "./Components/Experience";
import Gallery from "./Components/Gallery";
import ImageModal from "./Components/ImageModal";

export default function Home() {
  const [imageModalOpen, setImageModalOpen] = useState(false);

  return (
    <>
      {imageModalOpen && (
        <ImageModal
          imageModalOpen={imageModalOpen}
          setImageModalOpen={setImageModalOpen}
        />
      )}
      <section className="bg-hero-image w-full h-[905px] bg-cover bg-no-repeat bg-fixed bg-top"></section>
      <Gallery setModalOpen={setImageModalOpen} />
      <Experience />
    </>
  );
}
