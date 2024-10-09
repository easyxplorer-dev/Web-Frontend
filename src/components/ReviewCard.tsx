import Star from "./Icons/Star";
import { Review } from "src/types/Review";

type Props = {
  data: Review;
};

function ReviewCard({ data }: Props) {
  const starsLength = Array(data.rating).fill(data.rating);
  return (
    <section className="p-2 rounded-lg transition hover:bg-gray-700 hover:scale-[1.02]">
      <article className="flex gap-4 mb-2 items-center">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src={data.img}
              loading="lazy"
              alt={`Imagen de ${data.name}`}
              className="object-fit"
            />
          </div>
        </div>
        <div className="flex gap-1 flex-col">
          <p className="text-white text-lg">{data.name}.</p>
          <div className="flex gap-1 items-center">
            <p>({starsLength.length})</p>
            <div className="flex gap-1 items-center">
              {starsLength.map((_, idx) => (
                <Star key={idx} extraClassName="w-3.5 h-3.5" />
              ))}
            </div>
          </div>
        </div>
      </article>
      <p className="text-gray-400 italic font-text">{data.review}</p>
    </section>
  );
}

export default ReviewCard;
