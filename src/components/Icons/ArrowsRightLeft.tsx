import { IconsType } from "src/types/Icons";

function ArrowsRightLeft({ extraClassName = "", extraProps }: IconsType) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-arrows-right-left ${extraClassName}`}
      {...extraProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 7l-18 0" />
      <path d="M18 10l3 -3l-3 -3" />
      <path d="M6 20l-3 -3l3 -3" />
      <path d="M3 17l18 0" />
    </svg>
  );
}

export default ArrowsRightLeft;
