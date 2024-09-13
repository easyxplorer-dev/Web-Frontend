import { FiArrowUp } from "react-icons/fi";
import Carousel from "@components/Carousel";
import Hero from "./Hero";
import Hero2 from "@components/Hero2";
import TopScrollBtn from "@components/TopScrollBtn";
import { Destinations } from "../../data/Destinations";
import Logos from "./Logos";
import { useEffect, useState } from "react";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Manejar el evento de scroll
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          data={Destinations.slice(2, undefined)}
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
