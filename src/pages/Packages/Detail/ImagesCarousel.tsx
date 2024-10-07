import useEmblaCarousel from "embla-carousel-react";
import { MouseEvent, useCallback } from "react";
import { Package } from "src/types/Package";

type Props = {
  currentPackage: Package;
};

function ImagesCarousel({ currentPackage }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleClick = (
    e: MouseEvent<HTMLImageElement, globalThis.MouseEvent>
  ) => {
    const bigImg = document.getElementById("packageImgPrime");
    if (!bigImg) return;
    const target = e.target as HTMLImageElement;
    const targetImgNewSrc =
      bigImg.getAttribute("src") || target.getAttribute("src") || "";
    const bigImgNewSrc =
      target.getAttribute("src") || bigImg.getAttribute("src") || "";
    target.setAttribute("src", targetImgNewSrc);
    bigImg.setAttribute("src", bigImgNewSrc);
  };

  return (
    <div className="embla p-4">
      <div className="embla__viewport overflow-x-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {currentPackage?.images.slice(1).map((image, idx) => (
            <figure
              className="embla__slide object-cover mr-2 max-h-[130px]"
              key={idx}
              style={{ flex: "0 0 35%" }}
            >
              <img
                loading="lazy"
                className="w-52 border-b border-b-4 border-GoldenYellow rounded-lg cursor-pointer object-cover h-full"
                src={image}
                onClick={(e) => handleClick(e)}
                alt={`Imagen número ${idx} del paquete ${currentPackage.name}`}
              />
            </figure>
          ))}
        </div>
      </div>
      <div className="flex gap-4 py-4 justify-center">
        <button className="embla__prev btn btn-xs" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next btn btn-xs" onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ImagesCarousel;
