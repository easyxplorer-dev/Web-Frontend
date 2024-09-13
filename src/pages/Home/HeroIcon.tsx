import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  label: string;
};

function HeroIcon({ children, label }: Props) {
  return (
    <div className="tooltip tooltip-bottom" data-tip={label}>
      <div className="w-14 h-14 rounded-full text-white border p-2 hover:bg-white hover:scale-150 hover:text-black transition hover:-translate-y-1">
        {children}
      </div>
    </div>
  );
}

export default HeroIcon;
