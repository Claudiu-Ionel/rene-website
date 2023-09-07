"use client";
import { useState } from "react";
import ImageModal from "../Components/ImageModal";
import { videos } from "../data/data";
export default function Showreel() {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageIdx, setImgIdx] = useState(0);
  const [modalImageGallery, setModalImageGallery] = useState(videos);
  return (
    <>
      {imageModalOpen && (
        <ImageModal
          imageIdx={imageIdx}
          setImageModalOpen={setImageModalOpen}
          modalImageGallery={modalImageGallery}
          videoMode={true}
        />
      )}
      <div className="w-full bg-white px-8 py-6 h-fit flex flex-col sm:px-4 grow">
        <div className="w-full bg-white px-8 py-6 h-[128px] md:hidden"></div>
        <div className="title flex flex-col justify-center h-fit w-full py-12 px-6">
          <h1 className="text-3xl mb-4 text-center font-bold">
            Here is my Showreel
          </h1>
          <h3 className="text-sm mt-2 text-center font-semibold">
            Commercials I&#39;ve been into..
          </h3>
        </div>
        <div className="videos w-full flex justify-start md:flex-col gap-x-5 gap-y-6 px-6 py-12 md:px-0 ">
          {videos.map((item, idx) => {
            return (
              <iframe
                onClick={() => {
                  setImgIdx(idx);
                  setImageModalOpen(true);
                }}
                key={idx}
                className="w-[33%] max-w-[450px] h-[250px] md:w-full md:h-[400px] sm:h-[150px]"
                src={item.videoUrl}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              ></iframe>
            );
          })}
        </div>
      </div>
    </>
  );
}
