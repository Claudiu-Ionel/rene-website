"use client";
import { useState } from "react";
import ImageModal from "../Components/ImageModal";
export default function Showreel() {
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
      <div className="w-full bg-white px-8 py-6 h-fit flex flex-col sm:px-4">
        <div className="w-full bg-white px-8 py-6 h-[128px] md:hidden"></div>
        <div className="title flex flex-col justify-center h-fit w-full py-12 px-6">
          <h1 className="text-3xl mb-4 text-center font-bold">
            Here is my Showreel
          </h1>
          <h3 className="text-sm mt-2 text-center font-semibold">
            Commercials I've been into..
          </h3>
        </div>
        <div className="videos w-full flex justify-start md:flex-col gap-x-5 gap-y-6 px-6 py-12 md:px-0 ">
          <iframe
            className="w-[380px] h-[250px] md:w-full md:h-[400px] sm:h-[115px]"
            src="https://www.youtube.com/embed/s2QOeyjbkLs"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="w-[380px] h-[250px] md:w-full md:h-[400px] sm:h-[115px] sm:w-[100%]"
            src="https://www.youtube.com/embed/s2QOeyjbkLs"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="w-[380px] h-[250px] md:w-full md:h-[400px] sm:h-[115px]"
            src="https://www.youtube.com/embed/s2QOeyjbkLs"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
