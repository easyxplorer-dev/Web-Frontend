import { useRef, useState } from "react";
import Container from "./Container";
import Search from "./Search";
import useSearch from "./useSearch";
import Pagination from "@components/Pagination";
import usePagination from "@hooks/usePagination";
import { PackagesPerPage } from "src/consts";

function Packages() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [page, setPage] = useState(1);
  const { data, handleSubmit } = useSearch({ searchRef });
  const paginated = usePagination({ page, dataPerPage: PackagesPerPage });

  return (
    <section className="mb-4">
      <Search searchRef={searchRef} handleSubmit={handleSubmit} />

      <Container data={paginated} />
      <Pagination
        totalData={data.length}
        dataPerPage={PackagesPerPage}
        setCurrentPage={setPage}
        currentPage={page}
      />
    </section>
  );
}

export default Packages;
