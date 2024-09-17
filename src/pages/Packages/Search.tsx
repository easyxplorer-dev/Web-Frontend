import { FormEvent, RefObject } from "react";

type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  searchRef: RefObject<HTMLInputElement>;
};

function Search({ handleSubmit, searchRef }: Props) {
  return (
    <form
      className="my-4 max-w-7xl mx-4 md:mx-auto"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label className="input input-bordered flex items-center gap-2 bg-white text-black">
        <input
          type="search"
          className="grow"
          placeholder="Search"
          ref={searchRef}
          minLength={3}
        />
        <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </form>
  );
}

export default Search;
