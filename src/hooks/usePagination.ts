import { usePaginationStore } from "src/store/pagination";
import { useSearchStore } from "src/store/searchPackages";

type Props = {
  dataPerPage: number;
};

export default function usePagination({ dataPerPage }: Props) {
  const filteredData = useSearchStore((state) => state.packages);
  const page = usePaginationStore((state) => state.page);

  const totalPages = Math.ceil(filteredData.length / dataPerPage);
  const safeCurrentPage = Math.min(page, totalPages);
  const lastItemIndex = safeCurrentPage * dataPerPage;
  const firstItemIndex = lastItemIndex - dataPerPage;

  return filteredData.slice(firstItemIndex, lastItemIndex);
}
