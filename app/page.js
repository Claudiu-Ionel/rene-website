"use client";
import { useState, useContext } from "react";

// Components:
import Gallery from "./Components/Gallery";
import ImageModal from "./Components/ImageModal";

// Data:
import { galleryImages } from "./data/data";

// Context:
import { AppContext } from "./layout";

export default function Home() {
  // Images:
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageIdx, setImgIdx] = useState(0);
  const [modalImageGallery, setModalImageGallery] = useState([]);

  // Context:
  const { englishVersion } = useContext(AppContext);
  return (
    <>
      {imageModalOpen && (
        <ImageModal
          imageIdx={imageIdx}
          setImageModalOpen={setImageModalOpen}
          modalImageGallery={modalImageGallery}
        />
      )}
      <section
        className={`bg-hero-image w-full h-[905px] bg-cover bg-no-repeat bg-fixed bg-top md:h-[700px] md:bg-center sm:h-[550px] sm:bg-local`}
      ></section>
      <Gallery
        setModalOpen={setImageModalOpen}
        setImgIdx={setImgIdx}
        galleryImages={galleryImages}
        limit={4}
        setModalImageGallery={setModalImageGallery}
      />
      <div className="w-full bg-white p-5 flex flex-col justify-center items-center font-secondary text-xl lg:text-lg">
        <div className="w-[80%] ipadAir:w-full ipadAir:p-1 font-secondary [&>div]:w-full text-justify fold:text-left">
          <div
            className={
              "[&>p]:mb-2 font-secondary" +
              (!englishVersion ? " block" : " hidden")
            }
          >
            <p>
              Jeg er en erfaren, multifaceted skuespiller og model, som er
              beskæftiget i filmbranchen i mere end 8 år. Min autodidaktiske og
              professionelle tilgang har bragt mig i utallige reklamer,
              historiske dokumentarer, stills, dubbing og har banet vej til
              større internationale produktioner som Borgen 4 og Gentleman Jack.
            </p>
            <p>
              I min alsidige karriere, udover at være på set, komponerer jeg
              musik og er freelance basunist uddannet fra solistklassen fra
              konservatoriet.
            </p>
          </div>
          <div
            className={"[&>p]:mb-2" + (englishVersion ? " block" : " hidden")}
          >
            <p>
              I am an experienced, multifaceted actor and model who has been in
              the film industry for more than 8 years. My self-taught and
              professional approach has brought me into countless commercials,
              historical documentaries, stills, dubbing and has paved the way
              for major international productions such as Borgen 4 and Gentleman
              Jack.
            </p>
            <p>
              In my versatile career, in addition to being on stage, I compose
              music and am a freelance trombonist trained in the soloist class
              from the conservatory.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
