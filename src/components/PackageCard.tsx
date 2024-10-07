import { Package } from "src/types/Package";
import AnimatedLink from "./AnimatedLink";

type Props = {
  item: Package;
  extraClassName?: string;
};

function PackageCard({ item, extraClassName = "" }: Props) {
  return (
    <div
      className={`card bg-[#24262F] w-full transition hover:scale-105 border-t-4 border-t border-GoldenYellow max-w-md md:max-w-auto mx-auto md:mx-0 ${extraClassName}`}
    >
      <figure className="max-h-[205px] h-full">
        <img
          src={item.images[0]}
          style={{ viewTransitionName: `packageImg${item.id}` }}
          alt={`Imagen del paquete ${item.name}`}
          className="object-cover h-full"
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <div className="card-actions justify-end">
          <AnimatedLink
            tag={"button"}
            to={`/packages/${item.id}`}
            extraClassName="btn bg-GoldenYellow text-white btn-sm"
          >
            Ver más
          </AnimatedLink>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
