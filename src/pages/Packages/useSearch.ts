import { FormEvent, RefObject } from "react";
import { usePackagesStore } from "src/store/packages";
import { useSearchStore } from "src/store/searchPackages";

type Props = {
  searchRef: RefObject<HTMLInputElement>;
};

export default function useSearch({ searchRef }: Props) {
  const data = usePackagesStore((state) => state.packages);
  const searchedData = useSearchStore((state) => state.packages);
  const setQuery = useSearchStore((state) => state.setQuery);
  const setPackages = useSearchStore((state) => state.setPackages);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(searchRef.current?.value || "");
    setPackages(data);
  };

  return { data: searchedData, handleSubmit };
}
