import { useNavigate, useParams } from "react-router";
import { Data } from "src/data/Packages";
import { useEffect } from "react";
import ImagesCarousel from "./ImagesCarousel";
import AnimatedLink from "@components/AnimatedLink";
import RecommendedCarousel from "./RecommendedCarousel";
import Sun from "@components/Icons/Sun";
import Moon from "@components/Icons/Moon";
import ListInfo from "./ListInfo";
import TimeBadge from "./TimeBadge";
import MapPin from "@components/Icons/MapPin";
import CaretDown from "@components/Icons/CaretDown";

function PackageDetail() {
  const params = useParams();
  const navigate = useNavigate();

  const currentPackage = params
    ? Data.filter((p) => p.id.toString() === params.id)[0]
    : undefined;
  useEffect(() => {
    if (!currentPackage) navigate("/packages");
  }, [currentPackage, navigate]);

  const recommendedPackages = Data.filter(
    (item) => item.id !== currentPackage?.id
  );

  return (
    <>
      <AnimatedLink to={"/packages"} tag={"button"} extraClassName="btn m-6">
        Volver
      </AnimatedLink>
      <section className="max-w-7xl mx-4 md:mx-auto my-4 mt-16">
        <section className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-0 gap-8">
          <figure className="bg-cover mx-auto bg-noreapeat bg-center relative">
            <img
              loading="lazy"
              id="packageImgPrime"
              className="object-cover"
              style={{ viewTransitionName: `packageImg${currentPackage?.id}` }}
              src={currentPackage?.images[0]}
              alt={`Imagen del paquete ${currentPackage?.name}`}
            />
          </figure>
          <article className="text-white w-[80%]">
            <h1 className="text-4xl md:text-6xl md:pl-4">
              {currentPackage?.name}
            </h1>
            <div className="my-6 md:border-l-4 border-gray-400 py-4 md:px-4 flex flex-col gap-4">
              <div className="flex justify-between gap-4 items-center">
                <div className="badge badge-outline text-lg px-6 py-4  hover:bg-blue-400 hover:border-blue-400 hover:text-black">
                  ${currentPackage?.price}
                </div>
                <div className="flex gap-2">
                  {currentPackage?.stars.map((_, idx) => (
                    <svg
                      key={idx}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="icon icon-tabler icons-tabler-filled icon-tabler-star w-5 h-5 text-MaizeYellow transition hover:scale-125"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
                    </svg>
                  ))}
                </div>
              </div>
              <section className="mb-4 flex gap-2">
                <TimeBadge
                  icon={<Sun extraClassName="w-5 h-5 text-yellow-300" />}
                  time={currentPackage?.days || 0}
                  label="Días"
                />
                <TimeBadge
                  icon={<Moon extraClassName="w-5 h-5 text-[#d8d6cb]" />}
                  time={(currentPackage?.days && currentPackage.days - 1) || 0}
                  label="Noches"
                />
              </section>
              <a
                href={`https://wa.me/593992791323/?text=Hola \nQuisiera más información acerca del paquete ${window.location.href}`}
                target="_blank"
                className="btn btn-warning bg-GoldenOrange text-white px-8 ml-auto transition hover:scale-110"
              >
                Preguntar a ventas
              </a>
            </div>
          </article>
        </section>
        <section className="max-w-xl ms-auto">
          {currentPackage && currentPackage?.images.length > 1 && (
            <ImagesCarousel currentPackage={currentPackage} />
          )}
        </section>
        <hr />
        <section className="p-4">
          <h3 className="text-2xl text-center text-white mb-8">
            Información del paquete
          </h3>
          <section className="grid md:grid-cols-2 gap-8">
            <ListInfo title="Incluye" data={currentPackage?.included} />
            <ListInfo
              title="Politicas de pago"
              data={currentPackage?.payPolicy}
            />
            <ListInfo data={currentPackage?.notIncluded}>
              <strong className="text-yellow-300">NO</strong> + "Incluye"
            </ListInfo>
            <ListInfo
              title="Politicas de cancelación"
              data={currentPackage?.cancelPolicy}
            />
          </section>
        </section>
        <section className="p-4 w-full">
          <h3 className="text-2xl text-center text-white mb-8">
            Información de los hoteles
          </h3>
          <section className="p-4 grid md:grid-cols-2 gap-4">
            {currentPackage?.hotels.map((hotel) => (
              <article
                key={hotel.id}
                className="transition bg-gray-700/50 rounded-lg p-4 hover:scale-105"
              >
                <h4 className="text-2xl text-white font-title2 text-center mb-4">
                  {hotel.name}
                </h4>
                <p>{hotel.description}</p>

                <div className="collapse">
                  <input type="checkbox" />
                  <div className="collapse-title text-base text-white font-medium text-center px-0">
                    <div className="flex gap-1 justify-center items-center">
                      <span>Ver lo que Incluye</span>
                      <CaretDown extraClassName="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="collapse-content">
                    <ListInfo
                      title="Politicas de pago"
                      data={hotel.included}
                      showTitle={false}
                      showHover={false}
                    />
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap justify-evenly mb-4 items-center">
                  <TimeBadge
                    icon={<Moon extraClassName="w-5 h-5 text-[#d8d6cb]" />}
                    time={hotel.nights}
                    label="Noches"
                  />
                  <span className="text-white flex items-center gap-2">
                    <MapPin extraClassName="w-5 h-5 text-red-300" />
                    <span>{hotel.city}</span>
                  </span>
                </div>
              </article>
            ))}
          </section>
        </section>
        <hr />
        {recommendedPackages.length > 0 && (
          <>
            <section>
              <h3 className="text-4xl my-8 text-center text-white">
                Productos que recomendamos
              </h3>
              <RecommendedCarousel
                data={recommendedPackages}
                options={{ loop: true }}
              />
            </section>
          </>
        )}
      </section>
    </>
  );
}

export default PackageDetail;
