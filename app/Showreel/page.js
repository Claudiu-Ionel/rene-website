"use client";
import { useState, useContext } from "react";
import ImageModal from "../Components/ImageModal";
import { videos } from "../data/data";
import { AppContext } from "../layout";
export default function Showreel() {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageIdx, setImgIdx] = useState(0);
  const [modalImageGallery, setModalImageGallery] = useState(videos);
  const { englishVersion } = useContext(AppContext);
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
          <h1 className="text-3xl mb-4 text-center font-bold font-primary">
            {englishVersion ? "Here is my Showreel" : "Her er mit Showreel"}
          </h1>
          <h3 className="text-sm mt-2 text-center font-semibold font-secondary">
            {englishVersion
              ? `Commercials I have been into..`
              : "Reklamer jeg har været til.."}
          </h3>
        </div>
        <div className="videos w-full flex justify-start flex-wrap md:flex-col gap-x-2 gap-y-3 px-6 py-12 md:px-0 ">
          {videos.map((item, idx) => {
            return (
              <div
                key={idx}
                className="w-[32%] max-w-[450px] h-[250px] md:w-full md:h-[400px] sm:h-[300px] fold:h-[150px] relative"
              >
                <iframe
                  key={idx}
                  src={item.videoUrl}
                  title="YouTube video player"
                  controls={0}
                  className="w-full h-[250px] md:w-full md:h-[400px] sm:h-[300px] fold:h-[150px]"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
                ></iframe>
                <div
                  className="w-full h-full absolute top-0 l-0 cursor-pointer"
                  onClick={() => {
                    setImageModalOpen(true);
                    setImgIdx(idx);
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

{
}
