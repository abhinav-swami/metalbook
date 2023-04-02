import React from "react";

export const Pagination = ({ pageNumber, totalPages, changePage }) => {
  return (
    <div className="pagination-container">
      {pageNumber} of {totalPages}
      <div>
        <button
          disabled={pageNumber === 1}
          onClick={() => changePage(pageNumber - 1)}
        >
          <i className="fa fa-angle-double-left" aria-hidden="true"></i>
        </button>
        <button
          disabled={pageNumber === totalPages}
          onClick={() => changePage(pageNumber + 1)}
        >
          <i className="fa fa-angle-double-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
