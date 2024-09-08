import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isVisible: boolean;
};

function TopScrollBtn({ children, isVisible }: Props) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`btn btn-circle fixed bottom-4 right-4 transition hover:scale-110 hover:bg-black hover:text-MaizeYellow border-none outline-none ${
        isVisible ? "flex" : "hidden"
      }`}
      id="scrollBtn"
      style={{ zIndex: 10 }}
    >
      {children}
    </button>
  );
}

export default TopScrollBtn;
