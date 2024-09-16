import { FormEvent, RefObject } from "react";
import { usePackagesStore } from "src/store/packages";
import { useSearchStore } from "src/store/searchPackages";

type Props = {
  searchRef: RefObject<HTMLInputElement>;
};

export default function useSearch({ searchRef }: Props) {
  const { packages } = usePackagesStore();
  const {
    setPackages: setPackagesStore,
    setQuery,
    packages: searchPackages,
  } = useSearchStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(searchRef.current?.value || "");
    setPackagesStore(packages);
  };

  return { data: searchPackages, handleSubmit };
}
