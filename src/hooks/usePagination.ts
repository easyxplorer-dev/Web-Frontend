import { useSearchStore } from "src/store/searchPackages";

type Props = {
  page: number;
  dataPerPage: number;
};

export default function usePagination({ page, dataPerPage }: Props) {
  const packages = useSearchStore((state) => state.packages);
  // El problema de la busqueda y paginación está aquí
  const lastPackageIndex = page * dataPerPage;
  const firstPackageIndex = lastPackageIndex - dataPerPage;

  return packages.slice(firstPackageIndex, lastPackageIndex);
}
