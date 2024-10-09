import Carousel from "@components/Carousel";
import Hero2 from "@components/Hero2";
import { Destinations } from "src/data/Destinations";
import Hero from "./Hero";
import Logos from "./Logos";
import ReviewStat from "@components/ReviewStat";
import { Reviews } from "src/data/Reviews";
import ReviewCard from "@components/ReviewCard";
import { Helmet } from "react-helmet";

function Home() {
  const reviewsStats: Record<number, number> = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };
  Reviews.forEach((review) => {
    if (!reviewsStats[review.rating]) {
      reviewsStats[review.rating] = 0;
    }
    reviewsStats[review.rating] += 1;
  });
  return (
    <div>
      <Helmet>
        <title>Home | EasyXplorer - Viajar nunca fue tan fácil</title>
      </Helmet>
      <Hero />

      <section className="" id="destinations">
        <h2 className="text-4xl font-title mb-10 text-GoldenOrange uppercase text-center">
          Conoce nuestros destinos
        </h2>
        <Carousel
          data={Destinations.slice(0, 5)}
          extraClassName="mb-14 max-w-screen-2xl mx-auto"
          direction="forward"
        />
        <Carousel
          data={Destinations.slice(5)}
          extraClassName="max-w-screen-2xl mx-auto"
          direction="backward"
        />
      </section>

      <Logos />

      <Hero2 />

      <section className="max-w-screen-2xl mx-auto my-8 p-4">
        <section className="grid grid-cols-1 md:grid-cols-6">
          <article className="p-4 col-span-2 sticky top-0 h-full">
            <h3 className="text-3xl font-bold text-white mb-4">
              Nuestros clientes dicen
            </h3>
            <div>
              {Object.entries(reviewsStats)
                .sort(([key1], [key2]) => parseInt(key2) - parseInt(key1))
                .map(([key, value]) => (
                  <ReviewStat
                    key={key}
                    number={parseInt(key)}
                    percentage={(value * 100) / Reviews.length}
                  />
                ))}
            </div>
          </article>
          <article className="p-4 col-span-4">
            <div className="grid grid-cols-1 gap-8 mb-4">
              {Reviews.map((review) => (
                <ReviewCard key={review.id} data={review} />
              ))}
            </div>
            <p className="w-full text-center text-gray-300">
              ({Reviews.length}) reseñas en total
            </p>
          </article>
        </section>
      </section>
    </div>
  );
}

export default Home;
