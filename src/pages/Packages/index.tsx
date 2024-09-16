import { useRef } from "react";
import Container from "./Container";
import Search from "./Search";
import useSearch from "./useSearch";
import Pagination from "@components/Pagination";
import usePagination from "@hooks/usePagination";
import { PackagesPerPage } from "src/consts";

function Packages() {
  const searchRef = useRef<HTMLInputElement>(null);
  const { data, handleSubmit } = useSearch({ searchRef });
  const paginated = usePagination({ dataPerPage: PackagesPerPage });

  return (
    <section className="mb-4">
      <Search searchRef={searchRef} handleSubmit={handleSubmit} />

      <Container data={paginated} />
      <Pagination totalData={data.length} dataPerPage={PackagesPerPage} />
    </section>
  );
}

export default Packages;
