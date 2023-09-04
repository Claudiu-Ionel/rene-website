"use client";
import { useState } from "react";
import Experience from "./Components/Experience";
import Gallery from "./Components/Gallery";
import ImageModal from "./Components/ImageModal";
export const metadata = {
  title: "Rene",
  description: "Test test test",
};
export default function Home() {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageIdx, setImgIdx] = useState(0);
  return (
    <>
      {imageModalOpen && (
        <ImageModal imageIdx={imageIdx} setImageModalOpen={setImageModalOpen} />
      )}
      <section className="bg-hero-image w-full h-[905px] bg-cover bg-no-repeat bg-fixed bg-top"></section>
      <Gallery setModalOpen={setImageModalOpen} setImgIdx={setImgIdx} />
      <Experience />
    </>
  );
}
