import { IconsType } from "src/types/Icons";

function ArrowUp({ extraClassName = "", extraProps }: IconsType) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      strokeLinejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-arrow-up ${extraClassName}`}
      {...extraProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5l0 14" />
      <path d="M18 11l-6 -6" />
      <path d="M6 11l6 -6" />
    </svg>
  );
}

export default ArrowUp;