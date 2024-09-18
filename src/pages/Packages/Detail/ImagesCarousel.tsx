import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
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
  return (
    <div className="embla">
      <div className="embla__viewport overflow-x-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {currentPackage?.images.slice(1).map((image, idx) => (
            <figure
              className="embla__slide mr-2 object-cover"
              key={idx}
              style={{ flex: "0 0 35%" }}
            >
              <img
                loading="lazy"
                className="w-52"
                src={image}
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
