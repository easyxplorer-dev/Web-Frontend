import { useNavigate } from "react-router";
import { Package } from "src/types/Package";

type Props = {
  item: Package;
};

function PackageCard({ item }: Props) {
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100 w-full shadow-xl transition hover:scale-105 border-t-4 border-t border-MaizeYellow max-w-md md:max-w-auto mx-auto md:mx-0">
      <figure>
        <img src={item.images[0]} alt={`Imagen del paquete ${item.name}`} />
      </figure>
      <div className="badge badge-primary mt-2 mx-8">{item.category}</div>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description.slice(0, 40).trim()}...</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => navigate(`/packages/${item.id}`)}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
