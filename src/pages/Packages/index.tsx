import { useRef } from "react";
import Container from "./Container";
import Search from "./Search";
import useSearch from "./useSearch";
import Pagination from "@components/Pagination";
import usePagination from "@hooks/usePagination";
import { PackagesPerPage } from "src/consts";
import { Helmet } from "react-helmet";

function Packages() {
  const searchRef = useRef<HTMLInputElement>(null);
  const { data, handleSubmit } = useSearch({ searchRef });
  const paginated = usePagination({ dataPerPage: PackagesPerPage });

  return (
    <>
      <Helmet>
        <title>Paquetes | EasyXplorer - Viajar nunca fue tan fácil</title>
      </Helmet>
      <section className="mb-4">
        <Search searchRef={searchRef} handleSubmit={handleSubmit} />
        <Container data={paginated} />
        <Pagination
          paginatedData={paginated}
          totalData={data.length}
          dataPerPage={PackagesPerPage}
        />
      </section>
    </>
  );
}

export default Packages;
