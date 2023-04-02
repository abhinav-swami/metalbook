import { useEffect, useState } from "react";

export const usePagination = (data = []) => {
  const length = data.length;
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [paginatedData, setPaginatedData] = useState(data.slice(0, 4) || []);

  const changePage = (newPageNumber) => {
    console.log("chnage page running");
    setPageNumber(newPageNumber);
    setPaginatedData(
      data.slice((newPageNumber - 1) * 4, (newPageNumber - 1) * 4 + 4)
    );
  };

  // useEffect(() => {
  //   setPageNumber(1);
  //   setPaginatedData(data.slice(0, 4));
  // }, [length]);

  useEffect(() => {
    if (length % 4 === 0) {
      setTotalPages(length / 4);
    } else {
      setTotalPages(parseInt(length / 4 + 1));
    }
  }, [length]);

  return {
    pageNumber,
    totalPages,
    paginatedData,
    changePage,
  };
};
