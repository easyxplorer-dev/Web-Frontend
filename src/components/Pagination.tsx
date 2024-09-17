import { usePackagesStore } from "src/store/packages";
import { usePaginationStore } from "src/store/pagination";
import Button from "./Button";

type Props = {
  totalData: number;
  dataPerPage: number;
};

function Pagination({ totalData, dataPerPage }: Props) {
  const currentPage = usePaginationStore((state) => state.page);
  const setCurrentPage = usePaginationStore((state) => state.setPage);
  const totalPages = Math.ceil(totalData / dataPerPage);
  const packages = usePackagesStore((state) => state.packages);
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="flex justify-between gap-4 my-6 flex-wrap mx-4 max-w-7xl md:mx-auto items-center">
      <p className="text-white">
        Mostrando <span className="text-blue-400 font-bold">{totalData}</span>{" "}
        regístros de{" "}
        <span className="text-blue-400 font-bold">{packages.length}</span> en
        total
      </p>
      <div className="flex justify-center gap-4 my-6">
        <Button
          size="sm"
          outline
          color="white"
          disabled={currentPage === 1}
          handleClick={handlePreviousPage}
        >
          Anterior
        </Button>
        <Button
          size="sm"
          outline
          color="white"
          disabled={currentPage === totalPages}
          handleClick={handleNextPage}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
