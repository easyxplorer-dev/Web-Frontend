import Carousel from "@components/Carousel";
import Hero2 from "@components/Hero2";
import { Destinations } from "src/data/Destinations";
import Hero from "./Hero";
import Logos from "./Logos";

function Home() {
  return (
    <>
      <Hero />

      <section className="" id="destinations">
        <h2 className="text-4xl font-title mb-10 text-GoldenOrange uppercase text-center">
          Conoce nuestros destinos
        </h2>
        <Carousel
          data={Destinations.slice(0, 5)}
          extraClassName="mb-14 max-w-screen-2xl mx-auto"
          direction="forward"
        />
        <Carousel
          data={Destinations.slice(5)}
          extraClassName="max-w-screen-2xl mx-auto"
          direction="backward"
        />
      </section>

      <Logos />

      <Hero2 />
    </>
  );
}

export default Home;
