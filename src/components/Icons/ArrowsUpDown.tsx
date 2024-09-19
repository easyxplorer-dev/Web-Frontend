import { IconsType } from "src/types/Icons";

function ArrowsUpDown({ extraClassName = "", extraProps }: IconsType) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-arrows-up-down ${extraClassName}`}
      {...extraProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 3l0 18" />
      <path d="M10 6l-3 -3l-3 3" />
      <path d="M20 18l-3 3l-3 -3" />
      <path d="M17 21l0 -18" />
    </svg>
  );
}

export default ArrowsUpDown;
