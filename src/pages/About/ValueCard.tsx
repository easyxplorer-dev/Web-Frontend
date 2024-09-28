export type Value = {
  id: number;
  name: string;
  description: string;
};

type Props = {
  value: Value;
};

function ValueCard({ value }: Props) {
  const bgCard = value.id % 2 === 0 ? "bg-[#F6B302]" : "bg-[#666666]";
  const descriptionColor = value.id % 2 === 0 ? "text-black" : "text-white";
  return (
    <div
      className={`p-4 rounded-lg max-w-xs w-full ${bgCard} transition hover:scale-105`}
      key={value.id}
    >
      <h3 className="text-2xl text-white font-title text-center">
        {value.name}
      </h3>
      <p className={`text-base ${descriptionColor}`}>{value.description}</p>
    </div>
  );
}

export default ValueCard;
