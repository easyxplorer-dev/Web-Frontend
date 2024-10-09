import Star from "./Icons/Star";

type Props = {
  number: number;
  percentage: number;
};

function ReviewStat({ number, percentage }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <span className="flex gap-2 items-center">
        {number} <Star extraClassName="w-3.5 h-3.5" />
      </span>
      <progress
        className="progress progress-warning flex-1"
        value={percentage}
        max={100}
      ></progress>
      <span>{percentage.toFixed(2)}%</span>
    </div>
  );
}

export default ReviewStat;
