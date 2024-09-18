import { useNavigate, useParams } from "react-router";
import { Data } from "src/data/Packages";
import { useEffect } from "react";
import ImagesCarousel from "./ImagesCarousel";
import AnimatedLink from "@components/AnimatedLink";
import RecommendedCarousel from "./RecommendedCarousel";

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
        <section className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-0 gap-4 min-h-[70vh]">
          <figure
            className="mx-auto bg-cover bg-noreapeat bg-center flex relative"
            style={{
              backgroundImage: "url('/packagesBg.svg')",
            }}
          >
            <img
              loading="lazy"
              id="packageImgPrime"
              className="object-cover m-auto"
              style={{ viewTransitionName: `packageImg${currentPackage?.id}` }}
              src={currentPackage?.images[0]}
              alt={`Imagen del paquete ${currentPackage?.name}`}
            />
          </figure>
          <article className="text-white">
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
              <p className="mb-4">{currentPackage?.description}</p>
              <button className="btn btn-warning bg-GoldenOrange text-white px-8 ml-auto transition hover:scale-110">
                Preguntar a ventas
              </button>
            </div>
            {currentPackage && currentPackage?.images.length > 1 && (
              <ImagesCarousel currentPackage={currentPackage} />
            )}
          </article>
        </section>
        <hr />
        <section>
          <h3 className="text-4xl my-8 text-center text-white">
            Productos que recomendamos
          </h3>
          <RecommendedCarousel
            data={recommendedPackages}
            options={{ loop: true }}
          />
        </section>
      </section>
    </>
  );
}

export default PackageDetail;
