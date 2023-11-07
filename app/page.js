"use client";
import { useState, useContext } from "react";

// Components:
import Gallery from "./Components/Gallery";
import ImageModal from "./Components/ImageModal";

// Data:
import { homePageImages } from "./data/data";

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
        className={`bg-hero-image w-full h-[905px] bg-cover bg-no-repeat bg-fixed bg-top md:h-[700px] md:bg-center sm:h-[550px] sm:bg-local relative`}
      >
        <div className="3xl:flex xl:hidden lg:hidden w-[400px] max-w-3xl ipadAir:w-full ipadAir:p-1 font-secondary [&>div]:w-full text-justify fold:text-left absolute left-[7%] top-[50%] -translate-y-[50%] 2xl:left-10">
          <div
            className={
              "[&>p]:mb-2 font-secondary" +
              (!englishVersion ? " block" : " hidden")
            }
          >
            <p>
              Velkommen til mit virtuelle galleri, hvor jeg åbner døren til min
              kunstneriske verden. Jeg er begejstret for at byde dig velkommen
              til dette hjørne af kreativitet, hvor skuespil og musik smelter
              sammen. I de følgende sider kan du læse dig til projekter, der har
              formet min karriere og min kunstneriske identitet. På hjemmesiden
              finder du mine billeder og showreels, der indfanger øjeblikke af
              min kunstneriske verden, hvor ord ikke altid formår at formidle
              alt. Jeg glæder mig til at dele denne kreative verden med dig.
              Rigtig god fornøjelse!
            </p>
          </div>
          <div
            className={"[&>p]:mb-2" + (englishVersion ? " block" : " hidden")}
          >
            <p>
              Welcome to my virtual gallery, where I open the door to my
              artistic world. I am thrilled to welcome you to this corner of
              creativity where acting and music merge. In the following pages
              you can read about projects that have shaped my career and my
              artistic identity. On the website you will find my photos and
              showreels that capture moments of my artistic world where words do
              not always manage to convey everything. I look forward to sharing
              this creative world with you. Enjoy!
            </p>
          </div>
        </div>
      </section>
      <Gallery
        setModalOpen={setImageModalOpen}
        setImgIdx={setImgIdx}
        galleryImages={homePageImages}
        limit={4}
        setModalImageGallery={setModalImageGallery}
      />
      <div className="w-full bg-white p-5 flex flex-col justify-center items-center font-secondary text-xl lg:text-lg">
        <div className="3xl:hidden xl:flex lg:flex fold:flex sm:flex md:flex ipadAir:flex w-[80%] max-w-3xl ipadAir:w-full ipadAir:p-1 font-secondary [&>div]:w-full text-justify fold:text-left">
          <div
            className={
              "[&>p]:mb-2 font-secondary" +
              (!englishVersion ? " block" : " hidden")
            }
          >
            <p>
              Velkommen til mit virtuelle galleri, hvor jeg åbner døren til min
              kunstneriske verden. Jeg er begejstret for at byde dig velkommen
              til dette hjørne af kreativitet, hvor skuespil og musik smelter
              sammen. I de følgende sider kan du læse dig til projekter, der har
              formet min karriere og min kunstneriske identitet. På hjemmesiden
              finder du mine billeder og showreels, der indfanger øjeblikke af
              min kunstneriske verden, hvor ord ikke altid formår at formidle
              alt. Jeg glæder mig til at dele denne kreative verden med dig.
              Rigtig god fornøjelse!
            </p>
          </div>
          <div
            className={"[&>p]:mb-2" + (englishVersion ? " block" : " hidden")}
          >
            <p>
              Welcome to my virtual gallery, where I open the door to my
              artistic world. I am thrilled to welcome you to this corner of
              creativity where acting and music merge. In the following pages
              you can read about projects that have shaped my career and my
              artistic identity. On the website you will find my photos and
              showreels that capture moments of my artistic world where words do
              not always manage to convey everything. I look forward to sharing
              this creative world with you. Enjoy!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
