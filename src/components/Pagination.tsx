import { usePaginationStore } from "src/store/pagination";

type Props = {
  totalData: number;
  dataPerPage: number;
};

function Pagination({ totalData, dataPerPage }: Props) {
  const pages = [];
  const currentPage = usePaginationStore((state) => state.page);
  const setCurrentPage = usePaginationStore((state) => state.setPage);
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) pages.push(i);
  return (
    <div className="flex justify-center gap-4 my-6">
      {pages.map((page, idx) => (
        <button
          key={idx}
          className={`btn btn-sm btn-outline text-white ${
            page == currentPage ? "btn-warning" : ""
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
