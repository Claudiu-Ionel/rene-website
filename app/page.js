"use client";
import { useState } from "react";
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
      <div className="w-full bg-white p-5 flex justify-center font-secondary">
        <div className="w-1/3">
          <h2>This is a welcome text:</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget auctor augue. Sed justo risus, tristique ut magna a,
            ullamcorper consequat eros. Donec sodales ex vel leo molestie
            consequat. Donec arcu tellus, vulputate porta tortor ac, porta
            semper lacus. Pellentesque sed justo elementum, condimentum felis
            vel, tempus mi. Fusce convallis tincidunt posuere. Integer dui urna,
            tincidunt eu vulputate ac, luctus ac leo. Mauris laoreet ante vitae
            imperdiet dignissim. Sed ultricies vestibulum ante. Aliquam est
            neque, tempor mollis semper at, fringilla quis arcu.
          </p>
        </div>
      </div>
    </>
  );
}
