import { Destination } from "src/types/Destination";

type Props = {
  data: Destination;
  extraClassName?: string;
};

function DestinationCard({ data, extraClassName }: Props) {
  return (
    <div
      style={{ flex: "0 0 100%" }}
      className={`bg-base-100 max-w-md w-full flex-1 shadow-xl rounded-lg relative overflow-hidden h-fit ${extraClassName}`}
    >
      <figure className="w-full relative">
        <img
          src={data.img}
          alt={`Destino ${data.name}`}
          className="object-cover"
          loading="lazy"
        />
        <span className="text-lg font-text text-MaizeYellow absolute bottom-0 left-0 right-0 bg-[#00000080] w-full text-center font-bold p-4 uppercase"></span>
        <span className="text-lg font-text text-MaizeYellow absolute top-0 left-0 right-0 bg-[#00000080] w-full text-center font-bold p-4 uppercase"></span>
      </figure>
    </div>
  );
}

export default DestinationCard;
