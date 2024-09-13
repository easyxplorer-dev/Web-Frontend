import { FiArrowUp } from "react-icons/fi";
import Carousel from "@components/Carousel";
import Hero from "./Hero";
import Hero2 from "@components/Hero2";
import TopScrollBtn from "@components/TopScrollBtn";
import { Destinations } from "../../data/Destinations";
import Logos from "./Logos";

type Props = {
  isVisible: boolean;
};

function Home({ isVisible }: Props) {
  return (
    <>
      <Hero />

      <section className="mb-14" id="destinations">
        <h2 className="text-4xl font-title2 font-bold mb-10 text-GoldenOrange uppercase text-center">
          Conoce nuestros destinos
        </h2>
        <Carousel
          data={Destinations.slice(0, 6)}
          extraClassName="mb-14"
          direction="forward"
        />
        <Carousel
          data={Destinations.slice(0, 6)}
          extraClassName=""
          direction="backward"
        />
      </section>

      <Logos />

      <Hero2 />

      <TopScrollBtn isVisible={isVisible}>
        <FiArrowUp className="w-7 h-7" />
      </TopScrollBtn>
    </>
  );
}

export default Home;
