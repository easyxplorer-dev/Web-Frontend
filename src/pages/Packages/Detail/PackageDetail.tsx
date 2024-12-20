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
import Star from "@components/Icons/Star";
import { Helmet } from "react-helmet";

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
    <div>
      <Helmet>
        <title>
          {currentPackage?.name} | EasyXplorer - Viajar nunca fue tan fácil
        </title>
        <meta
          name="description"
          content={`Descubre ${
            currentPackage?.name
          } con nuestros increíbles paquetes de viaje. Incluye ${
            currentPackage?.days
          } días y ${
            currentPackage?.days ? currentPackage.days - 1 : 0
          } noches con vuelos, alojamiento, y tours personalizados. ¡Reserva ahora y vive una experiencia inolvidable en ${
            currentPackage?.name
          }!`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${currentPackage?.name} | EasyXplorer - Viajar nunca fue tan fácil`}
        />
        <meta
          name="og:description"
          content={`Descubre ${
            currentPackage?.name
          } con nuestros increíbles paquetes de viaje. Incluye ${
            currentPackage?.days
          } días y ${
            currentPackage?.days ? currentPackage.days - 1 : 0
          } noches con vuelos, alojamiento, y tours personalizados. ¡Reserva ahora y vive una experiencia inolvidable en ${
            currentPackage?.name
          }!`}
        />
        <meta name="og:image" content={currentPackage?.images[0]} />
        <meta name="og:url" content={window.location.href} />
        <meta property="og:site_name" content="EasyXplorer" />
        <meta property="og:type" content="website" />
        <meta
          property="twitter:title"
          content={`${currentPackage?.name} | EasyXplorer - Viajar nunca fue tan fácil`}
        />
        <meta
          name="twitter:description"
          content={`Descubre ${
            currentPackage?.name
          } con nuestros increíbles paquetes de viaje. Incluye ${
            currentPackage?.days
          } días y ${
            currentPackage?.days ? currentPackage.days - 1 : 0
          } noches con vuelos, alojamiento, y tours personalizados. ¡Reserva ahora y vive una experiencia inolvidable en ${
            currentPackage?.name
          }!`}
        />
        <meta name="twitter:image" content={currentPackage?.images[0]} />
        <meta
          name="keywords"
          content={`paquetes de viaje, viajes a ${currentPackage?.name}, vacaciones en ${currentPackage?.name}, ofertas de viajes, vuelos a ${currentPackage?.name}, alojamiento en ${currentPackage?.name}, tours en ${currentPackage?.name}, escapadas a ${currentPackage?.name}, viajes todo incluido ${currentPackage?.name}, turismo en ${currentPackage?.name}, ${currentPackage?.name}`}
        />
        <meta name="copyright" content="Copyright 2024. EasyXplorer." />
      </Helmet>
      <AnimatedLink to={"/packages"} tag={"button"} extraClassName="btn m-6">
        Volver
      </AnimatedLink>
      <section className="max-w-7xl mx-4 md:mx-auto my-4 mt-16">
        <section className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-0 gap-8 mb-4">
          <figure className="bg-cover mx-auto bg-noreapeat bg-center relative overflow-hidden">
            <img
              loading="lazy"
              id="packageImgPrime"
              className="object-cover rounded-lg"
              style={{ viewTransitionName: `packageImg${currentPackage?.id}` }}
              src={currentPackage?.images[0]}
              alt={`Imagen del paquete ${currentPackage?.name}`}
            />
          </figure>
          <article className="text-white">
            <div className="w-[80%]">
              <h1 className="text-4xl md:text-5xl md:pl-4">
                {currentPackage?.name}
              </h1>
              <div className="my-6 md:border-l-4 border-gray-400 py-4 md:px-4 flex flex-col gap-4">
                <div className="flex justify-between gap-4 items-center">
                  <div className="badge badge-outline text-lg px-6 py-4  hover:bg-blue-400 hover:border-blue-400 hover:text-black">
                    {currentPackage?.price}
                  </div>
                  <div className="flex gap-2">
                    {currentPackage?.stars.map((_, idx) => (
                      <Star key={idx} />
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
                    time={
                      (currentPackage?.days && currentPackage.days - 1) || 0
                    }
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
            </div>
            <section className="max-w-xl ms-auto">
              {currentPackage && currentPackage.images.length > 1 && (
                <ImagesCarousel currentPackage={currentPackage} />
              )}
            </section>
          </article>
        </section>
        <hr />
        <section className="p-4">
          <h3 className="text-2xl text-center text-white mb-8">
            Información del paquete
          </h3>
          <section className="grid md:grid-cols-2 gap-8">
            {currentPackage?.included && (
              <ListInfo title="Incluye" data={currentPackage?.included} />
            )}
            <ListInfo
              title="Politicas de pago"
              data={currentPackage?.payPolicy}
            />
            {currentPackage?.notIncluded && (
              <ListInfo data={currentPackage?.notIncluded}>
                <strong className="text-yellow-300">NO</strong> Incluye
              </ListInfo>
            )}
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
                <p className="mb-4">{hotel.description}</p>

                {hotel.included && (
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
                )}

                <div className="flex gap-2 flex-wrap justify-evenly mb-4 items-center">
                  {hotel.nights && (
                    <TimeBadge
                      icon={<Moon extraClassName="w-5 h-5 text-[#d8d6cb]" />}
                      time={hotel?.nights}
                      label="Noches"
                    />
                  )}
                  <span className="text-white flex items-center gap-2">
                    <MapPin extraClassName="w-5 h-5 text-red-300" />
                    <span>{hotel.city}</span>
                  </span>
                </div>
              </article>
            ))}
          </section>
          <section className="my-4">
            <h4 className="text-2xl text-white font-title2 text-center mb-4">
              Notas importantes
            </h4>
            <ul className="list-disc list-inside p-4 mx-auto">
              {currentPackage?.notes.map((note, idx) => (
                <li key={idx} className="text-white">
                  {note}
                </li>
              ))}
            </ul>
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
    </div>
  );
}

export default PackageDetail;
