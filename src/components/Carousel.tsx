import useEmblaCarousel from "embla-carousel-react";
import { Destination } from "../types/Destination";
import DestinationCard from "./DestinationCard";
import AutoScroll from "embla-carousel-auto-scroll";

type Props = {
  data: Destination[];
  direction: "forward" | "backward" | undefined;
  extraClassName?: string;
};

function Carousel({ data, direction, extraClassName }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      direction: direction,
      stopOnInteraction: false,
      stopOnFocusIn: false,
    }),
  ]);

  return (
    <div className={`embla overflow-hidden ${extraClassName}`} ref={emblaRef}>
      <div className="embla__container flex">
        {data.map((item) => (
          <DestinationCard data={item} key={item.id} extraClassName="mr-2" />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
