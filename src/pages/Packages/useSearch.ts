import { FormEvent, RefObject } from "react";
import { usePackagesStore } from "src/store/packages";
import { useSearchStore } from "src/store/searchPackages";

type Props = {
  searchRef: RefObject<HTMLInputElement>;
};

export default function useSearch({ searchRef }: Props) {
  const packages = usePackagesStore((state) => state.packages);
  const searchPackages = useSearchStore((state) => state.packages);
  const setQuery = useSearchStore((state) => state.setQuery);
  const setPackages = useSearchStore((state) => state.setPackages);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(searchRef.current?.value || "");
    setPackages(packages);
  };

  return { data: searchPackages, handleSubmit };
}
