import PlaneDeparture from "@components/Icons/PlaneDeparture";
import HeroIcon from "./HeroIcon";
import Bed from "@components/Icons/Bed";
import Car from "@components/Icons/Car";
import SpeedBoat from "@components/Icons/SpeedBoat";
import ArrowsUpDown from "@components/Icons/ArrowsUpDown";
import Package from "@components/Icons/Package";
import ShieldCheck from "@components/Icons/ShieldCheck";
import ArrowsRightLeft from "@components/Icons/ArrowsRightLeft";

function Hero() {
  return (
    <div
      className="hero bg-transparent relative"
      style={{ zIndex: 1, height: "calc(100vh - 68px)" }}
    >
      <div className="hero-content text-center flex-col">
        <div className="max-w-scree-xl">
          <p className="text-2xl uppercase font-title text-white flex justify-center items-center mx-auto flex-wrap gap-4">
            <span>Bienvenido a </span>
            <img
              src="/img/logoWebLarge.svg"
              loading="lazy"
              className="object-cover h-32"
              alt="Logo de easyxplorer"
            />
          </p>
          <h1 className="text-4xl md:text-7xl uppercase font-title text-GoldenYellow">
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
          <HeroIcon label="Importación y exportación">
            <ArrowsRightLeft extraClassName="w-6 h-6 md:w-10 md:h-10" />
          </HeroIcon>
        </div>
      </div>
    </div>
  );
}

export default Hero;
