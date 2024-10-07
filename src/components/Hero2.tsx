import { useNavigate } from "react-router";

function Hero2() {
  const navigate = useNavigate();
  return (
    <section className="my-6">
      <div
        className="w-full h-[35rem] bg-fixed bg-top bg-no-repeat relative bg-cover"
        style={{
          backgroundImage: "url('/img/index/banner.avif')",
        }}
      >
        <div className="bg-[#00000099] h-full text-white pl-auto flex justify-center">
          <div className="hero-content flex-col lg:flex-row">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold font-title2 mb-4">
                Comienza los divertidos y románticos viajes con tu pareja
              </h1>
              <button
                onClick={() => navigate("packages")}
                className="btn btn-primary"
              >
                Ver paquetes
              </button>
            </div>
            <div
              className="h-[25rem] bg-fixed w-[25rem] bg-top bg-no-repeat object-cover rounded-lg bg-cover"
              style={{
                backgroundImage: "url('/img/index/banner.avif')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
