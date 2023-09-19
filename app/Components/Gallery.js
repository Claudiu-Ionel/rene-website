import Image from "next/image";
export default function Gallery({
  setModalOpen,
  setImgIdx,
  galleryImages,
  limit,
  setModalImageGallery,
}) {
  function openModal(imgIdx) {
    setImgIdx(imgIdx);
    setModalOpen(true);
  }
  return (
    <section
      id="gallery-section"
      className={`grid grid-rows-2 grid-cols-3 bg-white w-full h-[95vw] justify-center gap-x-2 gap-y-2 py-16 px-14 md:py-6 md:px-10 md:gap-3 md:h-[80vw] sm:grid-rows-${
        galleryImages.lenght / 2
      } sm:grid-cols-2 sm:px-5 sm:h-[200vw] sm:gap-y-5`}
    >
      {galleryImages.map((item, idx) => {
        return (
          idx < limit && (
            <div key={idx} className="w-full relative">
              <Image
                onClick={() => {
                  setImgIdx(idx);
                  setModalOpen(true);
                  setModalImageGallery(galleryImages);
                }}
                className={`object-cover cursor-pointer md:object-cover inline-block h-auto max-w-[100%] opacity-0 transition-opacity duration-[${
                  idx * 300
                }ms]`}
                onLoadingComplete={(e) => {
                  e.classList.add("opacity-100");
                }}
                src={item.imageUrl}
                alt={item.alt}
                loading="lazy"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
              />
            </div>
          )
        );
      })}
    </section>
  );
}
