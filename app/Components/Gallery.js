import { galleryImages } from "../data/data";
import Image from "next/image";

export default function Gallery() {
  const limit = 6;
  return (
    <section
      id="gallery-section"
      className="grid grid-rows-2 grid-cols-3 bg-white w-full h-[90vw] justify-center gap-x-3 gap-y-5 py-16 px-14 md:px-10 md:gap-3 md:h-[80vw] sm:grid-rows-3 sm:grid-cols-2 sm:px-5 sm:h-[200vw] sm:gap-y-5"
    >
      {galleryImages.map((item, idx) => {
        return (
          idx < limit && (
            <div className="w-[100%] relative">
              <Image src={item.imageUrl} alt={item.alt} loading="lazy" fill />
            </div>
          )
        );
      })}
    </section>
  );
}
