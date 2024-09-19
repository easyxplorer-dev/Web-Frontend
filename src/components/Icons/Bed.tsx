import { IconsType } from "src/types/Icons";

function Bed({ extraClassName = "", extraProps }: IconsType) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-bed${extraClassName}`}
      {...extraProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M22 17v-3h-20" />
      <path d="M2 8v9" />
      <path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z" />
    </svg>
  );
}

export default Bed;
