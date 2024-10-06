import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  time: number | undefined;
  label: string;
};

function TimeBadge({ icon, time, label }: Props) {
  return (
    <span className="flex gap-1 items-center">
      {icon}
      <span>
        {time} {label}
      </span>
    </span>
  );
}

export default TimeBadge;
