import { BiTransfer } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import { IoBoatOutline, IoCarOutline } from "react-icons/io5";
import {
  MdImportExport,
  MdOutlineAirplaneTicket,
  MdOutlineHotel,
  MdOutlineSecurity,
} from "react-icons/md";
import HeroIcon from "./HeroIcon";

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
            <MdOutlineAirplaneTicket className="w-full h-full" />
          </HeroIcon>
          <HeroIcon label="Hoteles">
            <MdOutlineHotel className="w-full h-full" />
          </HeroIcon>
          <HeroIcon label="Renta de autos">
            <IoCarOutline className="w-full h-full" />
          </HeroIcon>
          <HeroIcon label="Cruceros">
            <IoBoatOutline className="w-full h-full" />
          </HeroIcon>
          <HeroIcon label="Transfers">
            <BiTransfer className="w-full h-full" />
          </HeroIcon>
          <HeroIcon label="Paquetes vacacionales">
            <FiPackage className="w-full h-full" />
          </HeroIcon>
          <HeroIcon label="Seguro de viajes">
            <MdOutlineSecurity className="w-full h-full" />
          </HeroIcon>
          <HeroIcon label="Importación y exportación">
            <MdImportExport className="w-full h-full" />
          </HeroIcon>
        </div>
      </div>
    </div>
  );
}

export default Hero;
