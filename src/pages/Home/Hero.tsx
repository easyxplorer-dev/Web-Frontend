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
          <p className="text-2xl font-[700] uppercase font-title text-white">
            Bienvenido a EasyXplorer
          </p>
          <h1 className="py-6 text-6xl font-[700] uppercase font-title text-GoldenYellow">
            Viajar nunca fué tan fácil
          </h1>
        </div>
        <div className="bg-transparent text-black w-full rounded-lg p-2 shadow hover:shadow-lg transition flex gap-4 flex-wrap justify-evenly">
          <HeroIcon label="Tickets de avión">
            <PlaneDeparture />
          </HeroIcon>
          <HeroIcon label="Hoteles">
            <Bed />
          </HeroIcon>
          <HeroIcon label="Renta de autos">
            <Car />
          </HeroIcon>
          <HeroIcon label="Cruceros">
            <SpeedBoat />
          </HeroIcon>
          <HeroIcon label="Transfers">
            <ArrowsUpDown />
          </HeroIcon>
          <HeroIcon label="Paquetes vacacionales">
            <Package />
          </HeroIcon>
          <HeroIcon label="Seguro de viajes">
            <ShieldCheck />
          </HeroIcon>
          <HeroIcon label="Importación y exportación">
            <ArrowsRightLeft />
          </HeroIcon>
        </div>
      </div>
    </div>
  );
}

export default Hero;
