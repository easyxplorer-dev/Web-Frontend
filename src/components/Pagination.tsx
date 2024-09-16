type Props = {
  totalData: number;
  dataPerPage: number;
  setCurrentPage: (pageNumber: number) => void;
  currentPage: number;
};

function Pagination({
  totalData,
  dataPerPage,
  setCurrentPage,
  currentPage,
}: Props) {
  const pages = [];
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
