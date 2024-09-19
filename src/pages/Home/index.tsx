import Carousel from "@components/Carousel";
import Hero from "./Hero";
import Hero2 from "@components/Hero2";
import TopScrollBtn from "@components/TopScrollBtn";
import { Destinations } from "src/data/Destinations";
import Logos from "./Logos";
import { useEffect, useState } from "react";
import ArrowUp from "@components/Icons/ArrowUp";

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
          extraClassName="mb-14 max-w-screen-2xl mx-auto"
          direction="forward"
        />
        <Carousel
          data={Destinations.slice(2)}
          extraClassName="max-w-screen-2xl mx-auto"
          direction="backward"
        />
      </section>

      <Logos />

      <Hero2 />

      <div className="stats w-full border border-info max-w-2xl flex mx-auto">
        <div className="stat place-items-center">
          <div className="stat-title">Destinos</div>
          <div className="stat-value">50+</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Clientes</div>
          <div className="stat-value text-secondary">100+</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

      <TopScrollBtn isVisible={isVisible}>
        <ArrowUp extraClassName="w-7 h-7" />
      </TopScrollBtn>
    </>
  );
}

export default Home;
