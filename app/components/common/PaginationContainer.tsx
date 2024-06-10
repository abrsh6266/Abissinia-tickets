import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setPage } from "@/app/features/pagination/paginationSlice";

const PaginationContainer = () => {
  const dispatch = useDispatch();
  const meta = useSelector((state: RootState) => state.paginationState);
  const { pageCount, page } = meta;
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => (
          <button
            onClick={() => handlePageChange(pageNumber)}
            key={pageNumber}
            className={`btn btn-xs sm:btn-md border-none join-item ${
              pageNumber === page ? "bg-base-300 border-base-300" : ""
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
