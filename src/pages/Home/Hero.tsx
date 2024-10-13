import PlaneDeparture from "@components/Icons/PlaneDeparture";
import HeroIcon from "./HeroIcon";
import Bed from "@components/Icons/Bed";
import Car from "@components/Icons/Car";
import SpeedBoat from "@components/Icons/SpeedBoat";
import ArrowsUpDown from "@components/Icons/ArrowsUpDown";
import Package from "@components/Icons/Package";
import ShieldCheck from "@components/Icons/ShieldCheck";

function Hero() {
  return (
    <div
      className="hero bg-transparent relative"
      style={{ zIndex: 1, height: "calc(100vh - 68px)" }}
    >
      <div className="hero-content text-center flex-col">
        <div className="max-w-screen-xl mb-4">
          <p className="text-5xl uppercase rajdhani-medium text-white flex justify-center items-center mx-auto flex-wrap gap-4 mb-6">
            <span>Bienvenido a </span>
            <img
              src="/img/logoWebLarge.svg"
              loading="lazy"
              className="object-cover h-[10rem]"
              alt="Logo de easyxplorer"
            />
          </p>
          <h1 className="text-6xl md:text-[7rem] uppercase font-title-regular text-GoldenYellow">
            Lideres en viajes
          </h1>
        </div>
        <div className="bg-transparent text-black w-full rounded-lg p-2 shadow hover:shadow-lg transition flex gap-4 flex-wrap justify-evenly">
          <HeroIcon label="Tickets de avión">
            <PlaneDeparture extraClassName="w-6 h-6 md:w-10 md:h-10" />
          </HeroIcon>
          <HeroIcon label="Hoteles">
            <Bed extraClassName="w-6 h-6 md:w-10 md:h-10" />
          </HeroIcon>
          <HeroIcon label="Renta de autos">
            <Car extraClassName="w-6 h-6 md:w-10 md:h-10" />
          </HeroIcon>
          <HeroIcon label="Cruceros">
            <SpeedBoat extraClassName="w-6 h-6 md:w-10 md:h-10" />
          </HeroIcon>
          <HeroIcon label="Transfers">
            <ArrowsUpDown extraClassName="w-6 h-6 md:w-10 md:h-10" />
          </HeroIcon>
          <HeroIcon label="Paquetes vacacionales">
            <Package extraClassName="w-6 h-6 md:w-10 md:h-10" />
          </HeroIcon>
          <HeroIcon label="Seguro de viajes">
            <ShieldCheck extraClassName="w-6 h-6 md:w-10 md:h-10" />
          </HeroIcon>
        </div>
      </div>
    </div>
  );
}

export default Hero;
